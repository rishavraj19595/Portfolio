"use client";

import { motion } from "framer-motion";
import { FileText, FileDown, ExternalLink, Award } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity:0, scale:0.96 }}
          whileInView={{ opacity:1, scale:1 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="relative glass-card p-6 sm:p-10 md:p-14 rounded-3xl border border-[#3F1111] text-center overflow-hidden shadow-2xl"
        >
          {/* Ambient red glow inside card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-900/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D0D0D] border border-[#3F1111] text-red-400 text-xs font-semibold uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              Curriculum Vitae
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-5xl font-extrabold text-[#F5F5F5] tracking-tight">
              Looking for my <span className="text-gradient-cyan">Full Credentials?</span>
            </h2>

            <p className="text-[#8A8A8A] text-sm sm:text-base lg:text-lg leading-relaxed">
              Explore my complete academic background, full-stack projects, and 13 verified certifications in software engineering and cloud fundamentals.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4">
              <a
                href={personalInfo.links.specializedResume}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-red-800 to-red-600 rounded-xl shadow-xl shadow-red-900/30 hover:shadow-red-700/40 hover:scale-[1.03] active:scale-[0.98] transition-all"
              >
                <Award className="w-4 h-4" />
                View Specialized CV
              </a>
              <a
                href={personalInfo.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-[#F5F5F5] bg-[#0D0D0D] hover:bg-[#121212] border border-[#3F1111] hover:border-[#6B1A1A] rounded-xl transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg"
              >
                <ExternalLink className="w-4 h-4 text-red-500" />
                View General CV
              </a>
              <a
                href={personalInfo.links.specializedResume}
                download="Rishav_Raj_Specialized_CV.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm font-semibold text-[#D4D4D4] hover:text-white bg-[#0D0D0D] hover:bg-[#121212] border border-[#3F1111] rounded-xl transition-all hover:scale-[1.03] active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4 text-red-500" />
                Download Specialized CV
              </a>
              <a
                href={personalInfo.links.resume}
                download="Rishav_Raj_General_CV.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm font-semibold text-[#8A8A8A] hover:text-[#F5F5F5] bg-[#0D0D0D] hover:bg-[#121212] border border-[#3F1111] rounded-xl transition-all hover:scale-[1.03] active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4 text-[#8A8A8A]" />
                Download General CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
