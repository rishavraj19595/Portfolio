"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Monitor, CheckCircle2, Layers } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="glass-card rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:border-[#6B1A1A] shadow-xl"
    >
      {/* Image */}
      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#0D0D0D]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
        {/* Red tint overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Number badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 rounded-full bg-[#050505]/90 border border-[#3F1111] text-red-400 font-mono text-xs font-bold tracking-wider backdrop-blur-md shadow-lg">
            {project.id}
          </span>
        </div>
        {/* Category pill */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 rounded-full bg-[#0D0D0D]/90 border border-[#3F1111] text-[#8A8A8A] font-sans text-xs font-medium backdrop-blur-md">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] group-hover:text-red-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-[#8A8A8A] leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Features */}
          {project.features && (
            <div className="space-y-2 pt-2 border-t border-[#3F1111]">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8A8A8A] flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-red-500" />
                Key Features
              </span>
              <ul className="grid grid-cols-1 gap-2 text-xs text-[#8A8A8A]">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                    <span className="leading-snug break-words">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-2.5 py-1 rounded-md bg-[#0D0D0D] border border-[#3F1111] text-[#8A8A8A] text-xs font-mono group-hover:border-[#6B1A1A] transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col xs:flex-row sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-4 border-t border-[#3F1111]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0D0D0D] hover:bg-[#121212] border border-[#3F1111] hover:border-[#6B1A1A] text-xs font-semibold text-[#F5F5F5] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Github className="w-4 h-4 text-[#8A8A8A]" />
            GitHub
          </a>

          {project.isDesktopApp ? (
            <div className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-950/40 border border-[#6B1A1A] text-red-400 text-xs font-semibold cursor-default">
              <Monitor className="w-4 h-4" />
              {project.desktopLabel || "Desktop App"}
            </div>
          ) : project.live && project.live !== project.github ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-800 to-red-600 hover:from-red-700 hover:to-red-500 text-xs font-semibold text-white shadow-lg shadow-red-900/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          ) : (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-900/60 to-red-800/60 hover:from-red-800 hover:to-red-700 text-xs font-semibold text-white border border-[#6B1A1A] shadow-lg shadow-red-900/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <ExternalLink className="w-4 h-4" />
              Explore Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
