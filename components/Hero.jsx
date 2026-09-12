"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, FileDown, MapPin, Code2, Award } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">

      {/* ── Portrait fills right side ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 h-full w-full sm:w-[60%] lg:w-[55%]">
          <Image
            src="/rishav-original.png"
            alt="Rishav Raj – Full-Stack Developer & Aspiring Software Engineer"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 55vw"
          />
          {/* Fade left into bg */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-transparent" />
          {/* Fade bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          {/* Subtle red rim on right edge */}
          <div className="absolute inset-0 bg-gradient-to-l from-red-950/30 to-transparent" />
        </div>
        {/* Hard dark left panel on desktop, soft full overlay on mobile so text is always crisp */}
        <div className="absolute inset-0 bg-[#050505]/75 sm:bg-transparent sm:inset-y-0 sm:left-0 sm:w-1/2 sm:bg-[#050505]" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-24">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.div variants={container} initial="hidden" animate="visible" className="space-y-6">

            {/* Location */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#8A8A8A] font-mono flex-wrap">
                <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
                Lovely Professional University, Punjab • Muzaffarpur, Bihar
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={item} className="space-y-2">
              <p className="text-[#8A8A8A] text-base sm:text-lg font-medium tracking-wide">Hey there 👋 I'm</p>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F5F5F5] leading-[1.08] break-words">
                Rishav{" "}
                <span className="text-gradient-cyan">Raj</span>
              </h1>
            </motion.div>

            {/* Role badge */}
            <motion.div variants={item}>
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0D0D0D]/90 border border-[#3F1111] backdrop-blur-sm max-w-full">
                <Code2 className="w-4 h-4 text-red-500 shrink-0" />
                <span className="text-[#F5F5F5] font-semibold text-xs sm:text-sm md:text-base tracking-wide">
                  {personalInfo.title}
                </span>
                <span className="h-4 w-px bg-[#3F1111] hidden sm:inline" />
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  {personalInfo.availability}
                </span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p variants={item} className="text-[#8A8A8A] text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg font-normal">
              Computer Science student passionate about building robust backend architectures with Java Spring Boot & Node.js, reactive web apps, and mastering core Data Structures & Algorithms.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="w-full sm:w-auto justify-center group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-red-700 hover:bg-red-600 rounded-xl shadow-lg shadow-red-900/40 hover:shadow-red-700/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Featured Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#certifications"
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#F5F5F5] border border-[#3F1111] hover:border-[#6B1A1A] hover:bg-[#0D0D0D] rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] backdrop-blur-sm"
              >
                <Award className="w-4 h-4 text-red-500" />
                13+ Certificates
              </a>
              <a
                href={personalInfo.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-red-400 border border-red-950 bg-red-950/20 hover:bg-red-950/40 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4 text-red-500" />
                CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={item} className="flex items-center gap-3 pt-2">
              {[
                { href: personalInfo.links.github,   label: "GitHub",   Icon: Github },
                { href: personalInfo.links.linkedin, label: "LinkedIn", Icon: Linkedin },
                { href: personalInfo.links.email,    label: "Email",    Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex items-center gap-2 text-[#8A8A8A] hover:text-[#F5F5F5] transition-colors"
                >
                  <span className="p-2 rounded-lg bg-[#121212] border border-[#3F1111] group-hover:border-[#6B1A1A] transition-colors">
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="hidden sm:inline text-xs font-mono">{label}</span>
                </a>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* ── Floating code snippet ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="absolute bottom-10 right-6 lg:right-16 z-20 hidden md:block"
      >
        <div className="glass-card rounded-xl shadow-2xl overflow-hidden w-64">
          <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0D0D0D]/90 border-b border-[#3F1111]">
            <span className="w-2.5 h-2.5 rounded-full bg-red-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#8A8A8A]/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#8A8A8A]/30" />
            <span className="ml-2 text-[10px] text-[#8A8A8A] font-mono">rishav_profile.js</span>
          </div>
          <div className="p-4 font-mono text-[11px] leading-relaxed text-[#8A8A8A] bg-[#0D0D0D]/80">
            <div><span className="text-red-500">const</span> <span className="text-[#F5F5F5]">me</span> = &#123;</div>
            <div className="pl-3"><span className="text-red-400">name</span>: <span className="text-emerald-400">"Rishav Raj"</span>,</div>
            <div className="pl-3"><span className="text-red-400">role</span>: <span className="text-emerald-400">"Full Stack Developer"</span>,</div>
            <div className="pl-3"><span className="text-red-400">certs</span>: <span className="text-amber-400">13</span>,</div>
            <div className="pl-3"><span className="text-red-400">sleep</span>: <span className="text-cyan-400">"Optional"</span></div>
            <div>&#125;;</div>
          </div>
        </div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
