"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, MapPin, Calendar, School } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Education() {
  const { education, secondaryEducation, matriculationEducation } = personalInfo;
  return (
    <section id="education" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-[#3F1111] text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F5] tracking-tight">
            Education & <span className="text-gradient-cyan">Milestones</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-red-800 to-red-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Cards container */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* LPU Card */}
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="glass-card p-5 sm:p-8 md:p-10 rounded-2xl relative overflow-hidden group hover:border-[#6B1A1A] transition-all duration-300">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <GraduationCap className="w-48 h-48 text-red-400" />
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-950/60 border border-[#3F1111] text-red-400 text-xs font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {education.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0D0D0D] border border-[#3F1111] text-[#8A8A8A] text-xs font-mono">
                      <MapPin className="w-3.5 h-3.5 text-red-500" />
                      {education.location}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F5]">{education.degree}</h3>
                  <p className="text-red-500 font-semibold text-lg">{education.institution}</p>
                  <p className="text-[#8A8A8A] text-sm leading-relaxed">{education.description}</p>
                  <div className="pt-3 border-t border-[#3F1111]">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] mb-2 block">Core Focus Areas</span>
                    <div className="flex flex-wrap gap-2">
                      {education.highlights.map((h, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0D0D0D] border border-[#3F1111] text-xs font-medium text-[#8A8A8A]">
                          <BookOpen className="w-3 h-3 text-red-500" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Status badge */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-[#0D0D0D] rounded-xl border border-[#3F1111] text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-red-800 to-red-600 flex items-center justify-center text-white shadow-lg shadow-red-900/30 mb-3">
                    <Award className="w-7 h-7" />
                  </div>
                  <span className="text-[#F5F5F5] font-bold text-base">Current Pursuit</span>
                  <span className="text-xs text-[#8A8A8A] mt-1">Lovely Professional University</span>
                  <div className="mt-4 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-900/60 text-emerald-400 text-xs font-mono">
                    Enrolled & Active
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Senior Secondary Card */}
          {secondaryEducation && (
            <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden group hover:border-[#6B1A1A] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#0D0D0D] border border-[#3F1111] text-[#8A8A8A] text-xs font-mono">
                        <Calendar className="w-3 h-3 text-red-500" />
                        {secondaryEducation.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#0D0D0D] border border-[#3F1111] text-[#8A8A8A] text-xs font-mono">
                        <MapPin className="w-3 h-3 text-red-500" />
                        {secondaryEducation.location}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-[#F5F5F5]">{secondaryEducation.degree}</h4>
                    <p className="text-red-400 text-sm font-semibold">{secondaryEducation.institution}</p>
                    {secondaryEducation.description && (
                      <p className="text-xs text-[#8A8A8A]">{secondaryEducation.description}</p>
                    )}
                  </div>
                  <div className="p-3 bg-[#0D0D0D] border border-[#3F1111] rounded-xl self-start sm:self-center">
                    <School className="w-6 h-6 text-red-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Matriculation Card */}
          {matriculationEducation && (
            <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden group hover:border-[#6B1A1A] transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#0D0D0D] border border-[#3F1111] text-[#8A8A8A] text-xs font-mono">
                        <Calendar className="w-3 h-3 text-red-500" />
                        {matriculationEducation.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#0D0D0D] border border-[#3F1111] text-[#8A8A8A] text-xs font-mono">
                        <MapPin className="w-3 h-3 text-red-500" />
                        {matriculationEducation.location}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-[#F5F5F5]">{matriculationEducation.degree}</h4>
                    <p className="text-red-400 text-sm font-semibold">{matriculationEducation.institution}</p>
                    {matriculationEducation.description && (
                      <p className="text-xs text-[#8A8A8A]">{matriculationEducation.description}</p>
                    )}
                  </div>
                  <div className="p-3 bg-[#0D0D0D] border border-[#3F1111] rounded-xl self-start sm:self-center">
                    <School className="w-6 h-6 text-red-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

      </div>
    </section>
  );
}
