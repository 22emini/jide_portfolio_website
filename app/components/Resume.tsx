"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import {
  Download,
  ExternalLink,
  FileText,
  CheckCircle2,
  Copy,
  Sparkles,
  Check,
  BookOpen,
  Briefcase,
  Layers,
  GraduationCap,
} from "lucide-react";

export default function Resume() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopyLink = async (type: "resume" | "cv", filename: string) => {
    const fileUrl = `${window.location.origin}/${filename}`;
    try {
      await navigator.clipboard.writeText(fileUrl);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2500);
    } catch {
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2500);
    }
  };

  const documents = [
    {
      id: "resume",
      badge: "Industry Standard · 1-Page ATS",
      badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      title: "Professional Resume",
      filename: "Eminioluwa_Akinrinade_Resume.pdf",
      size: "~520 KB",
      format: "PDF (ATS-Optimized)",
      description:
        "Tailored for recruiters and engineering hiring managers. High-density summary of key production builds, tech stack proficiencies, and quantitative impact.",
      highlights: [
        {
          icon: <Briefcase size={16} className="text-cyan-400" />,
          text: "15+ Production Apps & 500K+ Impacted Users",
        },
        {
          icon: <Layers size={16} className="text-blue-400" />,
          text: "Next.js 15, React 19, TypeScript, Node.js & Databases",
        },
        {
          icon: <Sparkles size={16} className="text-purple-400" />,
          text: "Fintech pipelines & AI-augmented developer velocity",
        },
        {
          icon: <GraduationCap size={16} className="text-emerald-400" />,
          text: "B.Sc. Graduate (3.96 CGPA · Dean's List)",
        },
      ],
      primaryButtonText: "Download Resume",
      primaryButtonClass: "from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500",
      borderColor: "hover:border-cyan-500/40",
    },
    {
      id: "cv",
      badge: "Comprehensive · In-Depth",
      badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      title: "Curriculum Vitae (CV)",
      filename: "Eminioluwa_Akinrinade_CV.pdf",
      size: "~500 KB",
      format: "Complete Academic & Technical CV",
      description:
        "In-depth documentation of academic research, full project specifications, professional certifications, leadership, and professional council memberships.",
      highlights: [
        {
          icon: <GraduationCap size={16} className="text-purple-400" />,
          text: "B.Sc. Software Engineering · Babcock University",
        },
        {
          icon: <BookOpen size={16} className="text-cyan-400" />,
          text: "CPN-Registered Professional & BUCC Member",
        },
        {
          icon: <Layers size={16} className="text-blue-400" />,
          text: "End-to-end architectural systems & API designs",
        },
        {
          icon: <Sparkles size={16} className="text-emerald-400" />,
          text: "Complete certifications, awards & technical milestones",
        },
      ],
      primaryButtonText: "Download CV",
      primaryButtonClass: "from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500",
      borderColor: "hover:border-purple-500/40",
    },
  ];

  return (
    <section id="resume" className="relative py-24 px-6 overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[380px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-transparent blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[380px] bg-gradient-to-tl from-purple-600/10 via-blue-600/10 to-transparent blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-cyan-400 mb-3 inline-block tracking-widest uppercase px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              // credentials &amp; downloads
            </span>
            <h2 className="section-heading">
              Download <span className="gradient-text">CV &amp; Resume</span>
            </h2>
            <p className="section-subheading mx-auto mt-3">
              Choose the format that fits your review process — download the ATS-optimized 1-page Resume for quick screening or the full Curriculum Vitae for deep technical evaluation.
            </p>
          </div>
        </AnimatedSection>

        {/* Dual Document Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {documents.map((doc, index) => (
            <AnimatedSection key={doc.id} delay={0.1 + index * 0.12} className="flex">
              <div
                className={`glass-card p-6 sm:p-8 h-full flex flex-col justify-between border-white/[0.08] ${doc.borderColor} transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.35)] relative group`}
              >
                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between gap-3 pb-5 border-b border-white/[0.07] mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 text-xs font-mono text-[var(--text-muted)] truncate max-w-[140px] sm:max-w-[200px]">
                        {doc.filename}
                      </span>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium border ${doc.badgeColor}`}
                    >
                      <CheckCircle2 size={11} />
                      Verified
                    </span>
                  </div>

                  {/* Document Title & Description */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                        doc.id === "resume"
                          ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                          : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      }`}
                    >
                      <FileText size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {doc.title}
                      </h3>
                      <p className="text-xs font-mono text-[var(--text-muted)]">
                        {doc.size} · {doc.format}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                    {doc.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 mb-8">
                    {doc.highlights.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs text-[var(--text-secondary)]"
                      >
                        <div className="shrink-0">{item.icon}</div>
                        <span className="truncate">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                  <a
                    href={`/${doc.filename}`}
                    download={doc.filename}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r ${doc.primaryButtonClass} shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_30px_rgba(6,182,212,0.45)] transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2.5`}
                  >
                    <Download size={17} />
                    {doc.primaryButtonText} (PDF)
                  </a>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={`/${doc.filename}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glow btn-outline justify-center py-2.5 text-xs font-semibold flex items-center gap-2 text-center"
                    >
                      <ExternalLink size={13} />
                      Preview PDF
                    </a>

                    <button
                      onClick={() => handleCopyLink(doc.id as "resume" | "cv", doc.filename)}
                      type="button"
                      className="btn-glow btn-outline justify-center py-2.5 text-xs font-semibold flex items-center gap-2 transition-colors hover:text-cyan-400"
                    >
                      {copiedType === doc.id ? (
                        <>
                          <Check size={13} className="text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copy Link</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom Banner */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 max-w-5xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span className="text-xs sm:text-sm text-[var(--text-secondary)]">
                Both documents are kept continuously up-to-date with active production deployments and contact details.
              </span>
            </div>
            <a
              href="#contact"
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300 whitespace-nowrap transition-colors flex items-center gap-1"
            >
              Need a customized portfolio deck? Let&apos;s talk &rarr;
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
