"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, Send, MessageSquare, CheckCircle2, AlertCircle } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ submitting:false, submitted:false, error:false, message:"" });

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting:false, submitted:false, error:true, message:"Please complete all fields before submitting." });
      return;
    }
    setStatus({ submitting:true, submitted:false, error:false, message:"" });

    try {
      // 1. Direct browser-to-FormSubmit dispatch (bypasses serverless datacenter IP blocks & cold boots)
      const res = await fetch("https://formsubmit.co/ajax/rishavraj19595@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `🔔 New Portfolio Message from ${formData.name}`,
          _replyto: formData.email,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await res.json();

      // 2. Also log to internal API in background
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch(() => {});

      if (res.ok && (data.success === "true" || data.success === true)) {
        setStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: "Thank you! Your message has been sent directly to my inbox.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: data.message || "Thank you! Your message has been sent.",
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      // Fallback to internal API route if direct fetch fails (e.g. adblocker)
      try {
        const backupRes = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const backupData = await backupRes.json();
        if (backupRes.ok && backupData.success) {
          setStatus({ submitting: false, submitted: true, error: false, message: "Thank you! Your message has been sent." });
          setFormData({ name: "", email: "", message: "" });
        } else {
          setStatus({ submitting: false, submitted: false, error: true, message: "Failed to send message. Please email rishavraj19595@gmail.com directly." });
        }
      } catch {
        setStatus({ submitting: false, submitted: false, error: true, message: "Network error. Please email rishavraj19595@gmail.com directly." });
      }
    }
  };

  const contacts = [
    { href: personalInfo.links.email,    label: "Email",    sub: personalInfo.links.emailAddress, Icon: Mail,    accent: "text-red-400",    bg: "bg-red-950/40",    border: "border-red-900/60" },
    { href: personalInfo.links.phoneLink,label: "Phone",    sub: personalInfo.links.phone,        Icon: Phone,   accent: "text-emerald-400",bg: "bg-emerald-950/30",border: "border-emerald-900/40" },
    { href: personalInfo.links.linkedin, label: "LinkedIn", sub: "linkedin.com/in/rishav-raj19595",Icon: Linkedin,accent: "text-orange-400", bg: "bg-orange-950/30", border: "border-orange-900/40" },
    { href: personalInfo.links.github,   label: "GitHub",   sub: "github.com/rishavraj19595",     Icon: Github,  accent: "text-rose-400",   bg: "bg-rose-950/30",   border: "border-rose-900/40" },
  ];

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-[#3F1111] text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F5] tracking-tight">
            Let's Build <span className="text-gradient-cyan">Something Together</span>
          </h2>
          <p className="text-[#8A8A8A] text-base sm:text-lg mt-3">
            Available for full-stack developer roles, internships, and collaborative software engineering projects.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-red-800 to-red-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Contact Cards */}
          <motion.div initial={{ opacity:0,x:-30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="lg:col-span-5 space-y-4">
            <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-6">
              <h3 className="text-xl font-bold text-[#F5F5F5]">Connect Directly</h3>
              <p className="text-sm text-[#8A8A8A] leading-relaxed">
                Feel free to connect directly via email, phone, or LinkedIn. I am always open to exploring exciting engineering opportunities:
              </p>
              <div className="space-y-3">
                {contacts.map(({ href, label, sub, Icon, accent, bg, border }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-[#0D0D0D] border border-[#3F1111] hover:border-[#6B1A1A] text-[#8A8A8A] hover:text-[#F5F5F5] transition-all group`}
                  >
                    <div className={`p-2.5 sm:p-3 rounded-lg ${bg} ${accent} ${border} border group-hover:scale-110 transition-transform shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-xs text-[#8A8A8A] block font-mono">{label}</span>
                      <span className={`text-xs sm:text-sm font-semibold group-hover:${accent} transition-colors break-all`}>{sub}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity:0,x:30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-10 rounded-2xl space-y-6">
              <h3 className="text-xl font-bold text-[#F5F5F5]">Send a Message</h3>

              {status.error && (
                <div className="p-4 rounded-xl bg-red-950/60 border border-red-900/60 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {status.message}
                </div>
              )}
              {status.submitted && (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-900/40 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  {status.message}
                </div>
              )}

              {[
                { id:"name",    label:"Your Name",  type:"text",  ph:"e.g. Alex Morgan" },
                { id:"email",   label:"Your Email", type:"email", ph:"e.g. alex@example.com" },
              ].map(({ id, label, type, ph }) => (
                <div key={id} className="space-y-2">
                  <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] block">{label}</label>
                  <input
                    type={type} id={id} name={id} value={formData[id]}
                    onChange={handleChange} placeholder={ph}
                    className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-[#3F1111] text-[#F5F5F5] placeholder-[#8A8A8A]/50 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-800 text-base sm:text-sm transition-colors"
                  />
                </div>
              ))}

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] block">Message</label>
                <textarea
                  id="message" name="message" rows={5} value={formData.message}
                  onChange={handleChange} placeholder="Tell me about your project, team opportunity, or inquiry..."
                  className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-[#3F1111] text-[#F5F5F5] placeholder-[#8A8A8A]/50 focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-800 text-base sm:text-sm transition-colors resize-none"
                />
              </div>

              <button
                type="submit" disabled={status.submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-red-800 to-red-600 hover:from-red-700 hover:to-red-500 rounded-xl shadow-lg shadow-red-900/30 hover:shadow-red-700/40 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
              >
                {status.submitting ? "Sending..." : <><Send className="w-4 h-4" /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
