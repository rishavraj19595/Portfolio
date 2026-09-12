"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ExternalLink,
  FileText,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Cloud,
  Database,
  Code2,
  Briefcase,
  X,
  Eye,
} from "lucide-react";
import { certificationsData } from "@/data/portfolioData";

const categories = [
  { id: "all", label: "All Credentials (13)", icon: Sparkles },
  { id: "cloud-ai", label: "Cloud & AI", icon: Cloud },
  { id: "database", label: "Databases", icon: Database },
  { id: "dsa", label: "Programming & DSA", icon: Code2 },
  { id: "experience", label: "Hackathons & CSR", icon: Briefcase },
];

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedDoc, setSelectedDoc] = useState(null);

  const filteredCerts =
    activeCategory === "all"
      ? certificationsData
      : certificationsData.filter((c) => c.category === activeCategory);

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/60 border border-[#3F1111] text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            Verified Qualifications
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F5] tracking-tight">
            Certifications & <span className="text-gradient-cyan">Credentials</span>
          </h2>
          <p className="text-[#8A8A8A] text-base sm:text-lg mt-3">
            Professional certifications from Google Cloud, IBM, DeepLearning.AI, Infosys Springboard, iamneo, and Lovely Professional University.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-red-800 to-red-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-red-800 to-red-600 text-white shadow-lg shadow-red-900/30 scale-[1.02]"
                    : "glass-card text-[#8A8A8A] hover:text-[#F5F5F5] hover:border-[#6B1A1A]"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-[#3F1111] hover:border-[#6B1A1A] transition-all duration-300 relative group shadow-xl"
            >
              {/* Subtle card glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-900/10 rounded-full blur-2xl group-hover:bg-red-800/20 transition-all pointer-events-none" />

              <div>
                {/* Top badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/60 border border-[#3F1111] text-red-400 text-xs font-mono font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                    {cert.badge}
                  </span>
                  <span className="text-xs text-[#8A8A8A] font-mono">{cert.date}</span>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F5] group-hover:text-red-400 transition-colors leading-snug mb-2">
                  {cert.title}
                </h3>
                <p className="text-xs font-semibold text-red-400/90 mb-4 tracking-wide uppercase">
                  {cert.issuer}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-[#0D0D0D] border border-[#3F1111] text-[11px] text-[#8A8A8A] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#3F1111] flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedDoc(cert)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-[#0D0D0D] hover:bg-[#151515] border border-[#3F1111] hover:border-[#6B1A1A] text-xs font-semibold text-[#F5F5F5] transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-red-500" />
                  View Certificate
                </button>

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-red-900/60 to-red-800/60 hover:from-red-800 hover:to-red-700 text-xs font-semibold text-white border border-[#6B1A1A] transition-all hover:scale-[1.02]"
                    title="Verify Credential"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Verify
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Lightbox for Certificate View */}
        <AnimatePresence>
          {selectedDoc && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoc(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-[96vw] sm:w-full bg-[#0D0D0D] border border-[#6B1A1A] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-3.5 sm:p-5 border-b border-[#3F1111] bg-[#080808] gap-2">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm sm:text-lg font-bold text-[#F5F5F5] truncate max-w-[200px] xs:max-w-xs sm:max-w-xl">
                      {selectedDoc.title}
                    </h4>
                    <p className="text-xs text-red-400 truncate">{selectedDoc.issuer} • {selectedDoc.date}</p>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <a
                      href={selectedDoc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 sm:px-3 sm:py-2 rounded-lg bg-[#151515] border border-[#3F1111] hover:border-red-600 text-xs text-[#8A8A8A] hover:text-white transition-all inline-flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-4 h-4 text-red-500" />
                      <span className="hidden xs:inline">Open Full</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSelectedDoc(null)}
                      className="p-2 rounded-lg bg-[#151515] border border-[#3F1111] hover:bg-red-950/60 hover:border-red-600 text-[#8A8A8A] hover:text-white transition-all cursor-pointer"
                      aria-label="Close"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-3 sm:p-6 overflow-auto flex-1 flex flex-col items-center justify-center bg-[#050505]">
                  {selectedDoc.type === "image" ? (
                    <img
                      src={selectedDoc.fileUrl}
                      alt={selectedDoc.title}
                      className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg border border-[#3F1111]"
                    />
                  ) : (
                    <div className="w-full h-[65vh] sm:h-[70vh] rounded-lg overflow-hidden border border-[#3F1111] bg-black">
                      <iframe
                        src={selectedDoc.fileUrl}
                        title={selectedDoc.title}
                        className="w-full h-full border-none"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
