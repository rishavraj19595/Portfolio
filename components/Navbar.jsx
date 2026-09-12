"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown, Code2 } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const navItems = [
  { name: "Home",           href: "#home" },
  { name: "About",          href: "#about" },
  { name: "Skills",         href: "#skills" },
  { name: "Projects",       href: "#projects" },
  { name: "Certificates",   href: "#certifications" },
  { name: "Experience",     href: "#experience" },
  { name: "Education",      href: "#education" },
  { name: "Contact",        href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]             = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection]   = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map((i) => i.href.substring(1));
      const sp = window.scrollY + 100;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el && sp >= el.offsetTop && sp < el.offsetTop + el.offsetHeight) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(href.substring(1));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav py-3.5 shadow-2xl" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#home" onClick={(e) => scrollToSection(e, "#home")} className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-red-800 to-red-600 flex items-center justify-center text-white shadow-lg shadow-red-900/40 group-hover:scale-105 transition-transform">
              <Code2 className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[#F5F5F5] group-hover:text-red-400 transition-colors">
              Rishav<span className="text-red-500"> Raj</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0D0D0D]/60 p-1.5 rounded-full border border-[#3F1111] backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors rounded-full ${
                    isActive ? "text-white font-semibold" : "text-[#8A8A8A] hover:text-[#F5F5F5]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBg"
                      className="absolute inset-0 bg-[#1a0a0a] border border-[#6B1A1A] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Resume CTA */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={personalInfo.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-red-800 to-red-600 rounded-lg shadow-lg shadow-red-900/30 hover:shadow-red-700/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <FileDown className="w-4 h-4" />
              CV Download
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#8A8A8A] hover:text-white rounded-lg bg-[#121212] border border-[#3F1111] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[60px] bg-black/70 backdrop-blur-sm lg:hidden -z-10"
            />
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden glass-nav border-b border-[#3F1111] overflow-hidden shadow-2xl"
            >
              <div className="px-4 pt-3 pb-6 space-y-1.5 max-h-[calc(100vh-80px)] overflow-y-auto">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-[#1a0a0a] text-red-400 border border-[#6B1A1A]"
                          : "text-[#8A8A8A] hover:bg-[#121212] hover:text-white"
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
                <div className="pt-3 grid grid-cols-2 gap-2">
                  <a
                    href={personalInfo.links.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-red-800 to-red-600 rounded-xl shadow-lg shadow-red-900/30 text-center active:scale-95 transition-transform"
                  >
                    <FileDown className="w-4 h-4 shrink-0" />
                    General CV
                  </a>
                  <a
                    href={personalInfo.links.specializedResume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold text-[#F5F5F5] bg-[#121212] border border-[#3F1111] hover:border-[#6B1A1A] rounded-xl text-center active:scale-95 transition-transform"
                  >
                    <FileDown className="w-4 h-4 shrink-0 text-red-500" />
                    Specialized CV
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
