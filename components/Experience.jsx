"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { experienceData } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-[#3F1111] text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Practical Experience
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F5] tracking-tight">
            Work & <span className="text-gradient-cyan">Experience</span>
          </h2>
          <p className="text-[#8A8A8A] text-base sm:text-lg mt-3">
            My hands-on experience in full stack software development and application engineering.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-red-800 to-red-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical glowing line */}
          <div className="absolute left-3.5 sm:left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-800 via-red-600 to-red-900 -translate-x-1/2 opacity-50" />

          {experienceData.map((exp, idx) => (
            <motion.div key={idx} initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="relative mb-12 last:mb-0">

              {/* Timeline node */}
              <div className="absolute left-3.5 sm:left-4 md:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                <span className="relative flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-60" />
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-red-700 border-4 border-[#050505]" />
                </span>
              </div>

              {/* Card */}
              <div className="ml-9 sm:ml-12 md:ml-0 md:w-1/2 md:pr-12 md:even:ml-auto md:even:pl-12 md:even:pr-0">
                <div className="glass-card p-5 sm:p-8 rounded-2xl relative group hover:border-[#6B1A1A] transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0D0D0D] border border-[#3F1111] text-red-400 text-xs font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="text-xs font-medium text-[#8A8A8A]">{exp.company}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] mb-2">{exp.role}</h3>
                  <p className="text-sm text-[#8A8A8A] mb-5 leading-relaxed font-normal">{exp.description}</p>

                  <div className="space-y-2 mb-6">
                    {exp.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#8A8A8A]">
                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-[#3F1111] pt-4">
                    <span className="text-[11px] uppercase tracking-wider text-[#8A8A8A] font-semibold block mb-2">Key Competencies</span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skillsApplied.map((skill) => (
                        <span key={skill} className="px-2.5 py-1 rounded bg-[#0D0D0D] border border-[#3F1111] text-[#8A8A8A] text-xs font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
