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
    title: "Frontend Engineering",
    icon: <Code2 size={20} />,
    color: "#38bdf8",
    skills: ["React.js", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Material-UI", "HTML5/CSS3"],
  },
  {
    title: "Backend & APIs",
    icon: <Server size={20} />,
    color: "#8b5cf6",
    skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "PHP", "Laravel", "Django", "FastAPI"],
  },
  {
    title: "Databases & Storage",
    icon: <Database size={20} />,
    color: "#06b6d4",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Oracle DB", "Redis", "Prisma ORM"],
  },
  {
    title: "Mobile Development",
    icon: <Smartphone size={20} />,
    color: "#10b981",
    skills: ["React Native", "Expo", "iOS/Android", "Native Device APIs", "Mobile UI/UX"],
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud size={20} />,
    color: "#f59e0b",
    skills: ["Vercel", "Docker", "CI/CD Pipelines", "Git / GitHub", "Linux System Admin"],
  },
  {
    title: "AI & Modern Tooling",
    icon: <BrainCircuit size={20} />,
    color: "#ec4899",
    skills: ["Claude 3.7 API", "OpenAI APIs", "Cursor IDE", "GitHub Copilot", "Prompt Engineering"],
  },
  {
    title: "Workflow & Security",
    icon: <Wrench size={20} />,
    color: "#94a3b8",
    skills: ["Agile/Scrum", "Jest Testing", "Jira", "API Security", "PCI-DSS Compliance (basics)"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-cyan-400 mb-3 inline-block tracking-widest uppercase px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              // technical capabilities
            </span>
            <h2 className="section-heading">
              Tech Stack &amp; <span className="gradient-text">Core Competencies</span>
            </h2>
            <p className="section-subheading mx-auto mt-3">
              A robust repertoire of languages, modern frameworks, and AI workflows leveraged to craft resilient software.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <AnimatedSection key={group.title} delay={i * 0.06}>
              <div className="glass-card p-6 h-full flex flex-col justify-between hover:border-cyan-500/30">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="p-2.5 rounded-xl transition-transform duration-300 group-hover:scale-110 shadow-sm"
                      style={{
                        background: `${group.color}15`,
                        color: group.color,
                        border: `1px solid ${group.color}30`,
                      }}
                    >
                      {group.icon}
                    </div>
                    <h3 className="font-bold text-white text-base">
                      {group.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-pill hover:border-cyan-400/40 hover:text-cyan-300"
                      >
                        {skill}
                      </span>
                    ))}
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
