"use client";

import { Github, Linkedin, Mail, Phone, Code2, ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative z-10 border-t border-[#3F1111] bg-[#050505]/90 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#3F1111]">
          {/* Brand */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-red-800 to-red-600 flex items-center justify-center text-white shadow-md shadow-red-900/30">
                <Code2 className="h-4 w-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#F5F5F5]">
                Rishav<span className="text-red-500"> Raj</span>
              </span>
            </div>
            <p className="text-sm text-[#8A8A8A] font-medium">
              {personalInfo.title}
            </p>
          </div>

          {/* Social icons + scroll top */}
          <div className="flex items-center gap-3">
            {[
              { href: personalInfo.links.github,   label: "GitHub",   Icon: Github },
              { href: personalInfo.links.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: personalInfo.links.email,    label: "Email",    Icon: Mail },
              { href: personalInfo.links.phoneLink,label: "Phone",    Icon: Phone },
            ].map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="p-2.5 rounded-lg bg-[#121212] border border-[#3F1111] text-[#8A8A8A] hover:text-red-400 hover:border-[#6B1A1A] hover:bg-[#0D0D0D] transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
            <button onClick={scrollToTop} aria-label="Scroll to top"
              className="p-2.5 rounded-lg bg-[#121212] border border-[#3F1111] text-[#8A8A8A] hover:text-[#F5F5F5] hover:border-[#6B1A1A] transition-all ml-2 cursor-pointer"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A8A8A] gap-4 text-center sm:text-left">
          <p>© 2026 Rishav Raj. All rights reserved.</p>
          <p className="font-mono">Engineered with Next.js, React, Framer Motion & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
