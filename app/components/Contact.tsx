"use client";

import { useState, FormEvent } from "react";
import AnimatedSection from "./AnimatedSection";
import {
  Send,
  Mail,
  MapPin,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

function LinkedinIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormState("idle"), 4000);
      } else {
        setFormState("error");
        setTimeout(() => setFormState("idle"), 4000);
      }
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-sm font-mono text-[var(--accent-blue)] mb-3 block">
              // get in touch
            </span>
            <h2 className="section-heading">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="section-subheading mx-auto mt-3">
              Open to full-time roles, freelance projects, and collaborations.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <a
                    href="mailto:eminioluwaakinrinade716@gmail.com"
                    className="flex items-center gap-4 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
                  >
                    <div
                      className="p-3 rounded-lg transition-all group-hover:scale-105"
                      style={{
                        background: "rgba(59,130,246,0.1)",
                        color: "var(--accent-blue)",
                      }}
                    >
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-muted)] mb-0.5">Email</p>
                      <p className="text-sm font-medium break-all">
                        eminioluwaakinrinade716@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/eminioluwa-akinrinade-a544a22b8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
                  >
                    <div
                      className="p-3 rounded-lg transition-all group-hover:scale-105"
                      style={{
                        background: "rgba(139,92,246,0.1)",
                        color: "var(--accent-purple)",
                      }}
                    >
                      <LinkedinIcon size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-muted)] mb-0.5">LinkedIn</p>
                      <p className="text-sm font-medium">
                      https://linkedin.com/in/eminioluwa-akinrinade-a544a22b8/
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-[var(--text-secondary)]">
                    <div
                      className="p-3 rounded-lg"
                      style={{
                        background: "rgba(6,182,212,0.1)",
                        color: "var(--accent-cyan)",
                      }}
                    >
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-muted)] mb-0.5">Location</p>
                      <p className="text-sm font-medium">
                        Ikeja, Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  <span className="text-[var(--accent-blue)] font-mono">&gt;</span> I typically respond within 24 hours. Let&apos;s build something amazing together!
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">
                Send a Message
              </h3>
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    className="form-input"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    className="form-input"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    className="form-input resize-none"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="btn-glow btn-primary w-full justify-center disabled:opacity-60"
                >
                  {formState === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : formState === "success" ? (
                    <>
                      <CheckCircle2 size={18} />
                      Message Sent!
                    </>
                  ) : formState === "error" ? (
                    <>
                      <AlertCircle size={18} />
                      Failed — Try Again
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
