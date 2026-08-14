"use client";

import AnimatedSection from "./AnimatedSection";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-[var(--accent-blue)] mb-3 block">
              // education & certifications
            </span>
            <h2 className="section-heading">
              Education &amp;{" "}
              <span className="gradient-text">Recognition</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Education Card */}
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-6 sm:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="p-2.5 rounded-lg"
                  style={{
                    background: "rgba(59,130,246,0.1)",
                    color: "var(--accent-blue)",
                  }}
                >
                  <GraduationCap size={22} />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  Education
                </h3>
              </div>

              <div className="space-y-3">
                <h4 className="text-base sm:text-lg font-semibold text-[var(--text-primary)]">
                  B.Sc. Computer Software Engineering
                </h4>
                <p className="text-[var(--accent-blue)] font-medium text-sm">
                  Babcock University, Ilishan-Remo, Nigeria
                </p>
                <p className="text-xs text-[var(--accent-cyan)] font-mono font-medium">
                  Graduated · Class of 2026
                </p>

                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="skill-pill">
                    <Award size={14} className="text-[var(--accent-purple)]" />
                    CGPA: 3.96/5.0
                  </span>
                  <span className="skill-pill">
                    Second Class Upper
                  </span>
                  <span className="skill-pill">
                    Dean&apos;s List
                  </span>
                  <span className="skill-pill">
                    <BookOpen size={14} className="text-[var(--accent-blue)]" />
                    BUCC Member
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Certifications Card */}
          <AnimatedSection delay={0.2}>
            <div className="glass-card p-6 sm:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="p-2.5 rounded-lg"
                  style={{
                    background: "rgba(139,92,246,0.1)",
                    color: "var(--accent-purple)",
                  }}
                >
                  <Award size={22} />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  Certifications & Recognition
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Registered Member — Computer Professionals of Nigeria (CPN)",
                    status: "Active",
                    statusColor: "#10b981",
                  },
                  {
                    title: "Machine Learning for Beginners — SoloLearn",
                    status: "Nov 2025",
                    statusColor: "#3b82f6",
                  },
                  {
                    title: "GitHub Verified Developer — 38+ contributions",
                    status: "Active",
                    statusColor: "#10b981",
                  },
                  {
                    title: "AWS Cloud Practitioner",
                    status: "In Progress",
                    statusColor: "#f59e0b",
                  },
                  {
                    title: "700+ LinkedIn Connections in Tech",
                    status: "Growing",
                    statusColor: "#8b5cf6",
                  },
                ].map((cert) => (
                  <div
                    key={cert.title}
                    className="flex items-start justify-between gap-3 pb-4"
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {cert.title}
                    </p>
                    <span
                      className="text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap shrink-0"
                      style={{
                        background: `${cert.statusColor}15`,
                        color: cert.statusColor,
                      }}
                    >
                      {cert.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
