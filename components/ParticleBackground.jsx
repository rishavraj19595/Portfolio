"use client";

import { motion } from "framer-motion";

export default function ParticleBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12], x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-red-900/25 blur-[130px]"
      />
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.18, 0.1], x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 -right-32 h-[450px] w-[450px] rounded-full bg-red-800/20 blur-[140px]"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-10 left-1/4 h-[400px] w-[400px] rounded-full bg-red-950/30 blur-[130px]"
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
    </div>
  );
}
