"use client";

import Image from "next/image";
import { Mail, Phone, ArrowUp } from "lucide-react";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative py-14 px-6 bg-[#05070e] border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/[0.05]">
          {/* Logo & Info */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl overflow-hidden p-1.5 bg-white/[0.05] border border-cyan-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.25)]">
              <Image
                src="/images/logo.png"
                alt="Eminioluwa Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-base font-bold text-white tracking-tight">
                Eminioluwa Akinrinade
              </p>
              <p className="text-xs font-mono text-[var(--text-muted)]">
                Full-Stack Software Engineer · Lagos, Nigeria
              </p>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium text-[var(--text-secondary)]">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            {[
              { icon: <GithubIcon size={18} />, href: "https://github.com/22emini", label: "GitHub" },
              { icon: <LinkedinIcon size={18} />, href: "https://linkedin.com/in/eminioluwa-akinrinade", label: "LinkedIn" },
              { icon: <Mail size={18} />, href: "mailto:eminioluwaakinrinade716@gmail.com", label: "Email" },
              { icon: <Phone size={18} />, href: "tel:+2348111581159", label: "Phone: +234 811 158 1159" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2.5 rounded-xl text-[var(--text-muted)] hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all bg-white/[0.02] border border-white/[0.05]"
              >
                {s.icon}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-xl text-[var(--text-muted)] hover:text-white hover:bg-cyan-500/20 hover:border-cyan-500/40 border border-white/[0.05] transition-all"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>© {currentYear} Eminioluwa Akinrinade. All rights reserved.</p>
          <p className="font-mono text-[11px] text-cyan-400/80">
            Crafted with Next.js 15, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
