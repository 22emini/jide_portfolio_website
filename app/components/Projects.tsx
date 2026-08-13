"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, ShoppingCart, BrainCircuit, GraduationCap, Smartphone, Zap, CloudSun, Ticket, Sparkles, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

type Category = "all" | "fintech" | "ai" | "systems";

interface Project {
  title: string;
  category: "fintech" | "ai" | "systems";
  badge?: string;
  icon: React.ReactNode;
  tech: string[];
  description: string;
  gradient: string;
  accentColor: string;
  image?: string;
  live?: string;
  appLink?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "V24U - Instant Fintech & Bill Payment Platform",
    category: "fintech",
    badge: "500K+ Users",
    icon: <Zap size={24} />,
    tech: ["React", "Next.js", "Node.js", "Telegram API", "Virtual Accounts", "Fintech API"],
    description:
      "All-in-one fintech platform serving 500,000+ users for instant utility bill payments, airtime VTU, printable airtime PIN vouchers, TV sub & exam pins. Features automated Telegram Bot transactions, passwordless OTL web login, virtual account wallet funding, and downloadable PDF e-receipts.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    accentColor: "#10b981",
    image: "/images/v24u.png",
    live: "https://v24u.com/",
    appLink: "https://app.v24u.com/",
    github: "https://github.com/22emini/v24u-web",
  },
  {
    title: "AI-Powered E-Learning Platform",
    category: "ai",
    badge: "Claude AI",
    icon: <BrainCircuit size={24} />,
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Claude AI"],
    description:
      "Comprehensive online learning platform with 100+ interactive courses, AI-powered tutoring via Claude API, adaptive learning paths, and certificate generation. Serves 1,000+ monthly active users with 99.9% uptime on Vercel.",
    gradient: "from-blue-500/20 to-purple-500/20",
    accentColor: "#3b82f6",
    image: "/images/quorify.png",
    live: "https://ai-powered-online-learning-platform.vercel.app/",
    github: "https://github.com/22emini",
  },
  {
    title: "Afriquehub E-Commerce Platform",
    category: "fintech",
    badge: "E-Commerce",
    icon: <ShoppingCart size={24} />, 
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
    description: "Full-featured e-commerce website with product catalog, shopping cart, checkout integration via Stripe, user authentication, and admin dashboard. Supports internationalization and SEO optimization.",
    gradient: "from-indigo-500/20 to-pink-500/20",
    accentColor: "#6366f1",
    image: "/images/afriquehub.png",
    live: "https://afriquehub.app/",
    github: "https://github.com/22emini/afraicahup",
  },
  {
    title: "Real-Time Weather Forecast Web App",
    category: "fintech",
    badge: "Vite + API",
    icon: <CloudSun size={24} />,
    tech: ["React", "Vite", "Tailwind CSS", "Weather API"],
    description:
      "Interactive weather forecasting web application featuring real-time location-based weather tracking, temperature trends, atmospheric analytics, and responsive glassmorphism UI.",
    gradient: "from-sky-500/20 to-blue-500/20",
    accentColor: "#38bdf8",
    image: "/images/weather.png",
    live: "https://weather-app-psmk.vercel.app/",
    github: "https://github.com/22emini/Weather_APP",
  },
  {
    title: "AI Content & Copy Generator",
    category: "ai",
    badge: "GenAI SaaS",
    icon: <Sparkles size={24} />,
    tech: ["React", "Next.js", "Claude / OpenAI API", "Tailwind CSS"],
    description:
      "SaaS tool for generating high-converting marketing copy, blog posts, and social media content with customizable tone of voice and instant prompt templates.",
    gradient: "from-purple-500/20 to-pink-500/20",
    accentColor: "#ec4899",
    image: "/images/ai-content.png",
    github: "https://github.com/22emini/ai-content-generator-v1.o",
  },
  {
    title: "Ticket Booking & Management System",
    category: "systems",
    badge: "Full-Stack",
    icon: <Ticket size={24} />,
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    description:
      "Streamlined web platform for event ticket booking and customer support ticketing. Features QR code verification, automated seat allocation, and real-time status tracking.",
    gradient: "from-amber-500/20 to-orange-500/20",
    accentColor: "#f59e0b",
    image: "/images/ticketing.png",
    live: "https://ticketing-app-nu-ten.vercel.app/",
    github: "https://github.com/22emini/ticketing-app",
  },
  {
    title: "Student Attendance Monitoring & Analytics System",
    category: "systems",
    badge: "5+ Institutions",
    icon: <GraduationCap size={24} />,
    tech: ["PHP", "MySQL", "JavaScript", "Data Visualization"],
    description:
      "Student management system adopted by 5+ educational institutions. Real-time grade tracking, attendance monitoring, parent communication portal. 60% faster report generation after MySQL optimization.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    accentColor: "#06b6d4",
    image: "/images/sams.png",
    live: "https://sams-mu.vercel.app/",
    github: "https://github.com/22emini",
  },
  {
    title: "React Native Mobile Applications",
    category: "systems",
    badge: "5K+ Downloads",
    icon: <Smartphone size={24} />,
    tech: ["React Native", "iOS/Android", "Native Modules"],
    description:
      "3+ cross-platform mobile apps published on Google Play and App Store. 4.5+ star ratings, 5,000+ downloads. Features camera, geolocation, push notifications, and offline functionality.",
    gradient: "from-green-500/20 to-emerald-500/20",
    accentColor: "#10b981",
    github: "https://github.com/22emini",
  }
];

const filterTabs: { label: string; key: Category }[] = [
  { label: "All Projects", key: "all" },
  { label: "Fintech & Web Apps", key: "fintech" },
  { label: "AI & SaaS", key: "ai" },
  { label: "Systems & Mobile", key: "systems" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Category>("all");

  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="text-xs font-mono text-cyan-400 mb-3 inline-block tracking-widest uppercase px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              // portfolio showcase
            </span>
            <h2 className="section-heading">
              Featured <span className="gradient-text">Creations</span>
            </h2>
            <p className="section-subheading mx-auto mt-3">
              A curated collection of production applications, enterprise fintech platforms, and AI systems I&apos;ve engineered.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.35)] scale-105"
                    : "bg-white/[0.03] text-[var(--text-secondary)] border border-white/[0.06] hover:text-white hover:border-white/[0.15]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="h-full"
              >
                <div className="glass-card h-full flex flex-col overflow-hidden group hover:border-cyan-500/40">
                  {/* Header Image or Gradient */}
                  <div className="h-48 relative overflow-hidden bg-slate-900/50 flex items-center justify-center">
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#070a13] via-[#070a13]/40 to-transparent opacity-90" />
                        
                        {/* Corner Icon & Badge */}
                        <div className="absolute top-3 right-3 flex items-center gap-2">
                          {project.badge && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-white font-medium">
                              {project.badge}
                            </span>
                          )}
                          <div
                            className="p-2 rounded-xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110 shadow-lg"
                            style={{
                              background: "rgba(7, 10, 19, 0.85)",
                              border: "1px solid rgba(255,255,255,0.15)",
                              color: project.accentColor,
                            }}
                          >
                            {project.icon}
                          </div>
                        </div>
                      </>
                    ) : (
                      <div
                        className={`w-full h-full bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}
                      >
                        <div
                          className="p-4 rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xl"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: project.accentColor,
                          }}
                        >
                          {project.icon}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-cyan-300/90 border border-cyan-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-glow btn-primary text-xs py-2 px-3 flex-1 justify-center min-w-[95px]"
                        >
                          <ExternalLink size={13} />
                          {project.appLink ? "Website" : "Live Demo"}
                        </a>
                      )}
                      {project.appLink && (
                        <a
                          href={project.appLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-glow btn-primary text-xs py-2 px-3 flex-1 justify-center min-w-[95px]"
                        >
                          <ExternalLink size={13} />
                          Web App
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-glow btn-outline text-xs py-2 px-3 flex-1 justify-center min-w-[95px]"
                        >
                          <GithubIcon size={13} />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
