"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { Rocket, Users, Zap, Award, Layers, ShieldCheck, Cpu } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { icon: <Users size={22} />, value: 500, suffix: "K+", label: "Users Impacted Across Platforms" },
  { icon: <Rocket size={22} />, value: 15, suffix: "+", label: "Production Apps & Web Portals" },
  { icon: <Award size={22} />, value: 3.96, suffix: " /5.0", label: "CGPA · Babcock University" },
  { icon: <Zap size={22} />, value: 35, suffix: "%", label: "Faster Velocity with AI & Cursor" },
];

const pillars = [
  {
    icon: <Layers size={22} />,
    title: "Full-Stack Web Architecture",
    description: "Building production-ready web apps with Next.js 15, React 19, TypeScript, Node.js, and optimized database queries in PostgreSQL & MongoDB.",
    color: "#06b6d4",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Fintech & API Integrations",
    description: "Architecting high-volume payment pipelines, Telegram bots with passwordless web login, instant virtual accounts, and secure automated billing.",
    color: "#3b82f6",
  },
  {
    icon: <Cpu size={22} />,
    title: "AI-Augmented Solutions",
    description: "Integrating LLMs (Claude AI, OpenAI) into applications for personalized tutoring, intelligent copy generation, and accelerated developer workflows.",
    color: "#8b5cf6",
  },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const isDecimal = target % 1 !== 0;
    const duration = 2000;
    const steps = duration / 16;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(start.toFixed(2)) : Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="stat-value">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-cyan-400 mb-3 inline-block tracking-widest uppercase px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              // professional background
            </span>
            <h2 className="section-heading">
              Engineering with <span className="gradient-text">Purpose &amp; Scale</span>
            </h2>
            <p className="section-subheading mx-auto mt-3">
              Transforming complex real-world requirements into intuitive, high-velocity digital solutions.
            </p>
          </div>
        </AnimatedSection>

        {/* Bio Card */}
        <AnimatedSection delay={0.15}>
          <div className="glass-card p-8 sm:p-10 max-w-4xl mx-auto mb-14 hover:border-cyan-500/30">
            <div className="flex flex-col gap-5 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
              <p>
                I&apos;m a results-driven <span className="text-white font-semibold">Full-Stack Software Engineer</span> and <span className="text-cyan-400 font-semibold">CPN-registered professional</span> based in Lagos, Nigeria. Graduated with a B.Sc. in Computer Software Engineering from <span className="text-white font-semibold">Babcock University</span> with a <span className="gradient-text font-semibold">3.96 CGPA</span> (Dean&apos;s List).
              </p>
              <p>
                My expertise spans building resilient frontend experiences in <span className="text-white font-medium">React, Next.js, and TypeScript</span>, combined with robust backend APIs on <span className="text-white font-medium">Node.js, Express, and PHP</span>. Having developed platforms serving over <span className="text-cyan-400 font-semibold">500,000+ active users</span>, I focus on system reliability, clean code architecture, and AI-accelerated delivery.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={0.1 + i * 0.08}>
              <div className="glass-card p-6 text-center hover:border-cyan-500/40">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                  style={{
                    background: "rgba(6,182,212,0.1)",
                    color: "var(--accent-cyan)",
                  }}
                >
                  {stat.icon}
                </div>
                <div className="mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                  {stat.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Engineering Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={0.15 + i * 0.1}>
              <div className="glass-card p-6 sm:p-7 h-full flex flex-col hover:border-cyan-500/40">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${pillar.color}15`,
                    color: pillar.color,
                  }}
                >
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
