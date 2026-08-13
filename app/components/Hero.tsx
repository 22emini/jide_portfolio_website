"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ArrowDown, Download, Sparkles, Terminal, Code2, Cpu } from "lucide-react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const roles = [
  "Full-Stack Software Engineer",
  "React & Next.js Architect",
  "Fintech & Web App Builder",
  "AI Solutions Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentRole = roles[roleIndex];

  const tick = useCallback(() => {
    if (!isDeleting) {
      if (charIndex < currentRole.length) {
        setCharIndex((c) => c + 1);
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (charIndex > 0) {
        setCharIndex((c) => c - 1);
      } else {
        setIsDeleting(false);
        setRoleIndex((r) => (r + 1) % roles.length);
      }
    }
  }, [charIndex, isDeleting, currentRole.length, roleIndex]);

  useEffect(() => {
    const speed = isDeleting ? 35 : 75;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  const displayText = currentRole.slice(0, charIndex);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: `${4 + i * 2}px`,
            height: `${4 + i * 2}px`,
            top: `${15 + i * 14}%`,
            left: `${10 + i * 15}%`,
            animationDelay: `${i * -2.5}s`,
            animationDuration: `${12 + i * 3}s`,
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-14 items-center">
        {/* Left Column Text */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          {/* Terminal badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-mono mb-6 bg-white/[0.04] border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.15)] backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <span className="text-[var(--text-secondary)]">Available for high-impact roles &amp; builds</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-4"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Eminioluwa</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 min-h-[2.5rem] flex items-center justify-center lg:justify-start"
            style={{ color: "var(--text-secondary)" }}
          >
            <span className="font-mono text-cyan-400 mr-2">&gt;</span>
            <span className="text-white font-mono">{displayText}</span>
            <span className="cursor-blink bg-cyan-400" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed text-[var(--text-secondary)]"
          >
            Engineering resilient, scalable web architectures, high-performance fintech platforms, and AI-augmented applications from Lagos to global production environments.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
          >
            <a href="#projects" className="btn-glow btn-primary">
              <Sparkles size={17} />
              Explore Projects
            </a>
            <a
              href="/Eminioluwa_Akinrinade_Resume.pdf"
              download
              className="btn-glow btn-outline"
            >
              <Download size={17} />
              Download CV
            </a>
          </motion.div>

          {/* Quick Metrics & Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4 border-t border-white/[0.06]"
          >
            <div className="flex items-center gap-3">
              {[
                {
                  icon: <GithubIcon size={19} />,
                  href: "https://github.com/22emini",
                  label: "GitHub",
                },
                {
                  icon: <LinkedinIcon size={19} />,
                  href: "https://linkedin.com/in/eminioluwa-akinrinade",
                  label: "LinkedIn",
                },
                {
                  icon: <Mail size={19} />,
                  href: "mailto:eminioluwaakinrinade716@gmail.com",
                  label: "Email",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-xl transition-all duration-300 hover:scale-110 bg-white/[0.04] border border-white/[0.08] text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="hidden sm:block h-6 w-[1px] bg-white/[0.1]" />

            <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-muted)]">
              <span>🚀 500K+ Users Impacted</span>
              <span>⚡ Next.js 15 &amp; Node</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column Portrait & Floating Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center shrink-0 relative"
        >
          {/* Glowing Aura */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-blue-600/30 to-purple-600/30 blur-3xl rounded-full scale-110 opacity-70 animate-pulse" />

          {/* Portrait Container */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-[3px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_50px_rgba(6,182,212,0.35)]">
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#070a13] border-4 border-[#070a13]">
              <Image
                src="/images/portrait.jpeg"
                alt="Eminioluwa Akinrinade"
                fill
                sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Floating Badge 1: 3D Logo Brand */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-3 -right-2 sm:right-2 p-2 rounded-2xl bg-[#0d1222]/90 border border-cyan-500/40 backdrop-blur-xl shadow-[0_8px_25px_rgba(6,182,212,0.35)] flex items-center gap-2.5 z-20"
          >
            <div className="w-8 h-8 rounded-xl p-1 bg-white/[0.06] flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Eminioluwa"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <div className="pr-2">
              <p className="text-[11px] font-bold text-white leading-tight">Full-Stack</p>
              <p className="text-[9px] font-mono text-cyan-400">Production Ready</p>
            </div>
          </motion.div>

          {/* Floating Badge 2: AI & Next.js */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -left-2 sm:left-2 px-3 py-2 rounded-2xl bg-[#0d1222]/90 border border-purple-500/40 backdrop-blur-xl shadow-[0_8px_25px_rgba(139,92,246,0.35)] flex items-center gap-2.5 z-20"
          >
            <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
              <Cpu size={16} />
            </div>
            <div>
              <p className="text-[11px] font-bold text-white leading-tight">AI &amp; Fintech</p>
              <p className="text-[9px] font-mono text-purple-300">Modern Stacks</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1.5 text-[var(--text-muted)] text-xs font-mono hover:text-cyan-400 transition-colors"
        >
          <span>Explore</span>
          <ArrowDown size={14} className="text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
