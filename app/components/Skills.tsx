"use client";

import AnimatedSection from "./AnimatedSection";
import {
  Code2,
  Server,
  Database,
  Smartphone,
  Cloud,
  BrainCircuit,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    icon: <Code2 size={20} />,
    color: "#3b82f6",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Material-UI"],
  },
  {
    title: "Backend",
    icon: <Server size={20} />,
    color: "#8b5cf6",
    skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "PHP", "laravel", "djang", "fastapi"],
  },
  {
    title: "Databases",
    icon: <Database size={20} />,
    color: "#06b6d4",
    skills: ["MySQL", "MongoDB", "Oracle",  "postgresql"],
  },
  {
    title: "Mobile",
    icon: <Smartphone size={20} />,
    color: "#10b981",
    skills: ["React Native", "iOS/Android", "Native APIs"],
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud size={20} />,
    color: "#f59e0b",
    skills: ["Vercel", "Docker (basics)", "CI/CD", "Linux"],
  },
  {
    title: "AI & Productivity",
    icon: <BrainCircuit size={20} />,
    color: "#ec4899",
    skills: ["Claude AI", "Cursor IDE", "GitHub Copilot", "ChatGPT", "Prompt Engineering"],
  },
  {
    title: "Other",
    icon: <Wrench size={20} />,
    color: "#94a3b8",
    skills: ["Git/GitHub", "Jest", "Agile/Scrum", "Jira", "Kali Linux (basics)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-[var(--accent-blue)] mb-3 block">
              // skills & tools
            </span>
            <h2 className="section-heading">
              My <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="section-subheading mx-auto mt-3">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={group.title} delay={i * 0.08}>
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="p-2.5 rounded-lg"
                    style={{
                      background: `${group.color}15`,
                      color: group.color,
                    }}
                  >
                    {group.icon}
                  </div>
                  <h3 className="font-semibold text-[var(--text-primary)]">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
