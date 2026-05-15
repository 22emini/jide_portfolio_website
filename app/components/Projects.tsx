"use client";

import AnimatedSection from "./AnimatedSection";
import { ExternalLink,ShoppingCart, BrainCircuit, DollarSign, GraduationCap, Smartphone, Globe } from "lucide-react";

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const projects = [
  {
    title: "AI-Powered E-Learning Platform",
    icon: <BrainCircuit size={24} />,
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Claude AI"],
    description:
      "Comprehensive online learning platform with 100+ interactive courses, AI-powered tutoring via Claude API, adaptive learning paths, and certificate generation. Serves 1,000+ monthly active users with 99.9% uptime on Vercel.",
    gradient: "from-blue-500/20 to-purple-500/20",
    accentColor: "#3b82f6",
    live: "https://ai-powered-online-learning-platform.vercel.app/",
    github: "https://github.com/22emini",
  },
  {
    title: "Afriquehub E-Commerce Platform",
    icon: <ShoppingCart size={24} />, 
    tech: ["React", "Next.js", "Node.js", "MongoDB", "Stripe"],
    description: "Full-featured e-commerce website with product catalog, shopping cart, checkout integration via Stripe, user authentication, and admin dashboard. Supports internationalization and SEO optimization.",
    gradient: "from-indigo-500/20 to-pink-500/20",
    accentColor: "#6366f1",
    live: "https://afrique-hub.vercel.app/",
    github: "https://github.com/22emini/afraicahup",
  },
  
  {
    title: "Student Attendance  Monitoring & Analytics System",
    icon: <GraduationCap size={24} />,
    tech: ["PHP", "MySQL", "JavaScript", "Data Visualization"],
    description:
      "Student management system adopted by 5+ educational institutions. Real-time grade tracking, attendance monitoring, parent communication portal. 60% faster report generation after MySQL optimization.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    accentColor: "#06b6d4",
    live: "https://sams-mu.vercel.app/",
    github: "https://github.com/22emini",
  },
  {
    title: "React Native Mobile Applications",
    icon: <Smartphone size={24} />,
    tech: ["React Native", "iOS/Android", "Native Modules"],
    description:
      "3+ cross-platform mobile apps published on Google Play and App Store. 4.5+ star ratings, 5,000+ downloads. Features camera, geolocation, push notifications, and offline functionality.",
    gradient: "from-green-500/20 to-emerald-500/20",
    accentColor: "#10b981",
  
    github: "https://github.com/22emini",
  },
  {
    title: "Professional Landing Pages",
    icon: <Globe size={24} />,
    tech: ["React", "Next.js", "Tailwind CSS", "SEO"],
    description:
      "10+ high-converting landing pages for various brands. 95+ Lighthouse scores, SEO-optimized with schema markup, average 35% conversion rate improvement through A/B testing.",
    gradient: "from-amber-500/20 to-orange-500/20",
    accentColor: "#f59e0b",
    live: "https://v24u.com/",
    github: "https://github.com/22emini/v24u-web",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-[var(--accent-blue)] mb-3 block">
              // featured projects
            </span>
            <h2 className="section-heading">
              Things I&apos;ve <span className="gradient-text">Built</span>
            </h2>
            <p className="section-subheading mx-auto mt-3">
              A selection of projects that showcase my skills and passion
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1}>
              <div className="glass-card h-full flex flex-col overflow-hidden group">
                {/* Header gradient */}
                <div
                  className={`h-32 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}
                >
                  <div
                    className="p-4 rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: project.accentColor,
                    }}
                  >
                    {project.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glow btn-primary text-sm py-2 px-4 flex-1 justify-center"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-glow btn-outline text-sm py-2 px-4 flex-1 justify-center"
                    >
                      <GithubIcon size={14} />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
