"use client";

import AnimatedSection from "./AnimatedSection";
import {
  Briefcase,
  Code2,
  Server,
  BrainCircuit,
  Database,
  Users,
} from "lucide-react";

const bullets = [
  {
    icon: <Code2 size={18} />,
    text: "Built 15+ production-ready apps using React.js, Next.js 14, TypeScript — achieving 40% faster load times",
  },
  {
    icon: <Server size={18} />,
    text: "Designed RESTful APIs & microservices on Node.js supporting 50+ concurrent users with 99.5% uptime",
  },
  {
    icon: <BrainCircuit size={18} />,
    text: "Used Claude AI + Cursor IDE to accelerate development velocity by 35%",
  },
  {
    icon: <Database size={18} />,
    text: "Optimized MySQL & MongoDB queries — 45% faster execution times",
  },
  {
    icon: <Users size={18} />,
    text: "Mentored 3 junior developers, improving team productivity by 25%",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-[var(--accent-blue)] mb-3 block">
              // experience
            </span>
            <h2 className="section-heading">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="max-w-3xl mx-auto relative pl-12">
            {/* Timeline line */}
            <div className="timeline-line" />

            {/* Timeline dot */}
            <div className="timeline-dot" />

            {/* Content card */}
            <div className="glass-card p-6 sm:p-8">
              <div className="flex flex-wrap items-start gap-3 mb-4">
                <div
                  className="p-2.5 rounded-lg shrink-0"
                  style={{
                    background: "rgba(59,130,246,0.1)",
                    color: "var(--accent-blue)",
                  }}
                >
                  <Briefcase size={22} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                    Software Engineer Intern
                  </h3>
                  <p className="text-[var(--accent-blue)] font-medium text-sm">
                    BillyRonks Global Ltd, Lagos
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
                    July 2024 – November 2025 · Hybrid
                  </p>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                {bullets.map((item, i) => (
                  <AnimatedSection key={i} delay={0.2 + i * 0.08}>
                    <div className="flex items-start gap-3">
                      <div
                        className="p-1.5 rounded-md mt-0.5 shrink-0"
                        style={{
                          background: "rgba(139,92,246,0.1)",
                          color: "var(--accent-purple)",
                        }}
                      >
                        {item.icon}
                      </div>
                      <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
