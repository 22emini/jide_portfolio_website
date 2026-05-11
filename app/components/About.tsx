"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { Rocket, Users, Zap, Smartphone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { icon: <Rocket size={24} />, value: 15, suffix: "+", label: "Production Apps Deployed" },
  { icon: <Users size={24} />, value: 1000, suffix: "+", label: "Monthly Active Users Served" },
  { icon: <Zap size={24} />, value: 35, suffix: "%", label: "Faster Delivery via AI Tools" },
  { icon: <Smartphone size={24} />, value: 5000, suffix: "+", label: "Mobile Downloads" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
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
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-[var(--accent-blue)] mb-3 block">
              // about me
            </span>
            <h2 className="section-heading">
              Get to Know <span className="gradient-text">Me</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="glass-card p-8 sm:p-10 max-w-3xl mx-auto mb-16">
            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Results-driven{" "}
              <span className="text-[var(--text-primary)] font-semibold">
                Full-Stack Engineer
              </span>{" "}
              with 1.5+ years of experience building production-grade web and
              mobile applications. Currently completing my B.Sc. in Computer
              Software Engineering at{" "}
              <span className="text-[var(--text-primary)] font-semibold">
                Babcock University
              </span>{" "}
              with a{" "}
              <span className="gradient-text font-semibold">3.96 CGPA</span>{" "}
              (Second Class Upper), graduating July 2026.
              CPN-registered professional passionate about{" "}
              <span className="text-[var(--text-primary)] font-semibold">
                AI-powered solutions
              </span>{" "}
              and scalable architectures that solve real-world problems.
            </p>
          </div>
        </AnimatedSection>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={0.1 + i * 0.1}>
              <div className="glass-card p-6 text-center">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                  style={{
                    background: "rgba(59,130,246,0.1)",
                    color: "var(--accent-blue)",
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
      </div>
    </section>
  );
}
