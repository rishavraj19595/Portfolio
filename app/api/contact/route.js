import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import nodemailer from "nodemailer";
import redis from "@/lib/redis";

const MESSAGES_FILE = path.join(process.cwd(), "data", "messages.json");
const DESTINATION_EMAIL = process.env.RECIPIENT_EMAIL || "rishavraj19595@gmail.com";

// Helper: Save message locally on disk (fast async)
async function saveMessageLocally(submission) {
  try {
    let messages = [];
    try {
      const content = await fs.readFile(MESSAGES_FILE, "utf-8");
      messages = JSON.parse(content);
      if (!Array.isArray(messages)) messages = [];
    } catch {
      messages = [];
    }

    messages.unshift(submission);
    await fs.writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2), "utf-8");
    console.log(`[Local Storage] Saved contact submission #${submission.id} to data/messages.json`);
  } catch (err) {
    console.error("[Local Storage Error]:", err.message);
  }
}

// Helper: Dispatch email with timeout safety for serverless runtimes
async function dispatchEmailNotification(submission, originUrl = "https://portfolio-rishav-156.netlify.app") {
  try {
    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    // 1. Try Gmail SMTP if credentials provided
    if (user && pass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: { user, pass },
        });

        await transporter.sendMail({
          from: `"Portfolio Contact Form" <${user}>`,
          to: DESTINATION_EMAIL,
          replyTo: submission.email,
          subject: `🔔 New Portfolio Message from ${submission.name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0f1117; color: #f5f5f5; border-radius: 12px; padding: 24px; border: 1px solid #3f1111;">
              <h2 style="color: #ef4444; border-bottom: 1px solid #3f1111; padding-bottom: 12px; margin-top: 0;">New Contact Form Submission</h2>
              
              <p style="margin: 8px 0;"><strong>Sender Name:</strong> <span style="color: #e2e8f0;">${submission.name}</span></p>
              <p style="margin: 8px 0;"><strong>Sender Email:</strong> <a href="mailto:${submission.email}" style="color: #38bdf8; text-decoration: none;">${submission.email}</a></p>
              <p style="margin: 8px 0;"><strong>Submitted At:</strong> <span style="color: #94a3b8;">${new Date(submission.submittedAt).toLocaleString()}</span></p>
              
              <div style="margin-top: 20px; padding: 16px; background-color: #1a1d26; border-radius: 8px; border-left: 4px solid #ef4444;">
                <h4 style="margin: 0 0 8px 0; color: #f87171; font-size: 14px; text-transform: uppercase;">Message:</h4>
                <p style="margin: 0; color: #f1f5f9; line-height: 1.6; white-space: pre-wrap;">${submission.message}</p>
              </div>

              <p style="margin-top: 24px; font-size: 12px; color: #64748b; text-align: center;">
                Sent from Rishav Raj's Portfolio • Reply directly to this email to respond to ${submission.name}.
              </p>
            </div>
          `,
        });
        console.log(`[Nodemailer] Email sent successfully to ${DESTINATION_EMAIL}`);
        return { success: true, provider: "nodemailer" };
      } catch (nmErr) {
        console.warn("[Nodemailer Warning, falling back to FormSubmit]:", nmErr.message);
      }
    }

    // 2. Fallback / Direct: Forward via FormSubmit.co with live valid origin
    const validOrigin = originUrl.startsWith("http") ? originUrl : "https://portfolio-rishav-156.netlify.app";
    const res = await fetch(`https://formsubmit.co/ajax/${DESTINATION_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Referer: `${validOrigin}/`,
        Origin: validOrigin,
      },
      body: JSON.stringify({
        name: submission.name,
        email: submission.email,
        message: submission.message,
        _subject: `🔔 New Portfolio Message from ${submission.name}`,
        _replyto: submission.email,
        _template: "table",
        _captcha: "false",
      }),
    });

    const data = await res.json();
    console.log("[FormSubmit Forwarder] Status:", res.status, "Response:", data);
    return { success: true, provider: "formsubmit", data };
  } catch (err) {
    console.warn("[Email Dispatch Warning]:", err.message);
    return { success: false, error: err.message };
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const submission = {
      id: Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      submittedAt: new Date().toISOString(),
    };

    // Extract origin for FormSubmit Referer header
    const reqOrigin = request.headers.get("origin") || request.headers.get("referer") || "https://portfolio-rishav-156.netlify.app";

    // 1. Fast local file write (graceful on read-only serverless filesystems)
    saveMessageLocally(submission).catch(() => {});

    // 2. Dispatch email notification - MUST BE AWAITED on serverless so function isn't frozen prematurely
    try {
      await Promise.race([
        dispatchEmailNotification(submission, reqOrigin),
        new Promise((resolve) => setTimeout(resolve, 4500)), // 4.5s safety cap
      ]);
    } catch (e) {
      console.warn("[Email dispatch caught]:", e.message);
    }

    // 3. Optional Redis backup
    if (redis && redis.status === "ready") {
      redis.lpush("portfolio:contact_messages", JSON.stringify(submission)).catch(() => {});
    }

    // 4. Return confirmed response
    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent. I'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to process message." },
      { status: 500 }
    );
  }
}

// GET route to view messages
export async function GET() {
  try {
    const content = await fs.readFile(MESSAGES_FILE, "utf-8");
    const messages = JSON.parse(content);
    return NextResponse.json({ count: messages.length, messages });
  } catch {
    return NextResponse.json({ count: 0, messages: [] });
  }
}
