"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, GraduationCap, Code, CheckCircle2, Award } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

function StatCounter({ target, suffix, label, text }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && target) {
      let start = 0;
      const increment = Math.ceil(target / (1500 / 30));
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) { setCount(target); clearInterval(timer); }
        else setCount(start);
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="glass-card p-6 rounded-2xl text-center relative overflow-hidden group hover:border-[#6B1A1A] transition-all duration-300">
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-red-900/15 rounded-full blur-xl group-hover:bg-red-800/25 transition-all" />
      <div className="text-3xl sm:text-4xl font-extrabold mb-1 font-mono">
        {target !== undefined
          ? <span className="text-gradient-cyan">{count}{suffix}</span>
          : <span className="text-gradient-cyan">{text}</span>}
      </div>
      <p className="text-xs sm:text-sm text-[#8A8A8A] font-medium">{label}</p>
    </div>
  );
}

const techHighlights = [
  "Java",
  "Spring Boot",
  "React.js",
  "Next.js",
  "Node.js",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "Data Structures & Algorithms",
  "C++",
  "Tailwind CSS",
  "PostgreSQL"
];

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }} className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-[#3F1111] text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            Discover My Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F5] tracking-tight">
            About <span className="text-gradient-cyan">Me</span>
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-red-800 to-red-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Bio */}
          <motion.div initial={{ opacity:0,x:-30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="lg:col-span-7">
            <div className="glass-card p-8 rounded-2xl relative">
              <p className="text-base sm:text-lg text-[#8A8A8A] leading-relaxed mb-6 font-normal">
                "{personalInfo.bio}"
              </p>
              <div className="border-t border-[#3F1111] pt-6">
                <h3 className="text-sm font-semibold text-[#F5F5F5] uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Code className="w-4 h-4 text-red-500" />
                  Primary Technical Stack
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {techHighlights.map((tech) => (
                    <span key={tech} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0D0D0D] border border-[#3F1111] text-[#8A8A8A] text-xs font-medium hover:border-[#6B1A1A] hover:text-[#F5F5F5] transition-all cursor-default">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education card */}
          <motion.div initial={{ opacity:0,x:30 }} whileInView={{ opacity:1,x:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="lg:col-span-5">
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-[#6B1A1A] transition-all">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <GraduationCap className="w-32 h-32 text-red-400" />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-[#3F1111] text-red-400 text-xs font-medium mb-4">
                <GraduationCap className="w-4 h-4" />
                Academic Background
              </div>
              <h3 className="text-xl font-bold text-[#F5F5F5] mb-2">{personalInfo.education.degree}</h3>
              <p className="text-red-500 font-medium text-sm mb-4">{personalInfo.education.institution}</p>
              <p className="text-[#8A8A8A] text-sm leading-relaxed mb-6">{personalInfo.education.description}</p>
              <div className="flex items-center justify-between text-xs text-[#8A8A8A] border-t border-[#3F1111] pt-4 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Award className="w-3.5 h-3.5" /> Enrolled & Active
                </span>
                <span>{personalInfo.education.duration}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats counters */}
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16">
          {personalInfo.stats.map((stat, idx) => (
            <StatCounter key={idx} target={stat.value} suffix={stat.suffix} label={stat.label} text={stat.text} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
