"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2, Server, Database, Terminal, Wrench, Sparkles,
  Layers, Palette, FileJson, Atom, Wind, Cpu, Webhook, Zap,
  Table, HardDrive, Box, Binary, GitBranch, Github, Laptop, Send, CheckSquare, FileCode,
} from "lucide-react";
import { skillsData } from "@/data/portfolioData";

const iconMap = {
  Code2, Palette, FileJson, Atom, Layers, Wind, Server, Cpu, Webhook, Zap,
  Database, Table, HardDrive, Box, Terminal, FileCode, Binary, GitBranch,
  Github, Laptop, Send, CheckSquare,
};

const categoryTabs = [
  { id: "all",         label: "All Skills",        icon: Sparkles },
  { id: "frontend",   label: "Frontend",           icon: Palette },
  { id: "backend",    label: "Backend",            icon: Server },
  { id: "database",   label: "Database",           icon: Database },
  { id: "programming",label: "Programming",        icon: Terminal },
  { id: "tools",      label: "Tools & Workflow",   icon: Wrench },
];

// Color per category: all use red/crimson accent
const categoryMeta = [
  { key: "frontend",    title: "Frontend Engineering",       icon: Palette,  accent: "text-red-400",    border: "border-red-900/60",   bg: "bg-red-950/40" },
  { key: "backend",     title: "Backend Systems",            icon: Server,   accent: "text-orange-400", border: "border-orange-900/60", bg: "bg-orange-950/30" },
  { key: "database",    title: "Database Architectures",     icon: Database, accent: "text-rose-400",   border: "border-rose-900/60",  bg: "bg-rose-950/30" },
  { key: "programming", title: "Programming Languages",      icon: Terminal, accent: "text-red-300",    border: "border-red-900/40",   bg: "bg-red-950/20" },
  { key: "tools",       title: "Developer Tools",            icon: Wrench,   accent: "text-amber-400",  border: "border-amber-900/40", bg: "bg-amber-950/20" },
];

function getData(key) {
  return skillsData[key] || [];
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all"
    ? categoryMeta
    : categoryMeta.filter((c) => c.key === activeTab);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }} className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-[#3F1111] text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            Technical Proficiency
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F5] tracking-tight">
            Skills & <span className="text-gradient-cyan">Technologies</span>
          </h2>
          <p className="text-[#8A8A8A] text-base sm:text-lg mt-3">
            A comprehensive overview of my tech stack, frameworks, and developer toolset.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-red-800 to-red-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-red-800 to-red-600 text-white shadow-lg shadow-red-900/30 scale-[1.02]"
                    : "glass-card text-[#8A8A8A] hover:text-[#F5F5F5]"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {filtered.map((cat) => {
            const CatIcon = cat.icon;
            const skills = getData(cat.key);
            return (
              <motion.div key={cat.key} initial={{ opacity:0,y:25 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-[#3F1111] pb-3">
                  <div className={`p-2 rounded-lg bg-[#121212] border border-[#3F1111] ${cat.accent}`}>
                    <CatIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#F5F5F5] tracking-wide">{cat.title}</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {skills.map((skill) => {
                    const SkillIcon = iconMap[skill.icon] || Code2;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -5, scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="glass-card p-4 rounded-xl flex flex-col items-center justify-center text-center group cursor-default relative overflow-hidden"
                      >
                        <div className={`absolute inset-0 ${cat.bg} opacity-0 group-hover:opacity-100 transition-opacity`} />
                        <div className={`h-10 w-10 rounded-lg bg-[#0D0D0D] border border-[#3F1111] flex items-center justify-center ${cat.accent} group-hover:border-[#6B1A1A] transition-all mb-3`}>
                          <SkillIcon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-semibold text-[#F5F5F5] group-hover:text-red-300 transition-colors mb-1">{skill.name}</span>
                        <span className="text-[10px] uppercase font-mono font-medium px-2 py-0.5 rounded bg-[#0D0D0D] border border-[#3F1111] text-[#8A8A8A]">
                          {skill.level}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
