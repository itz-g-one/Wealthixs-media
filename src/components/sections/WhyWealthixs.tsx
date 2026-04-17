"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check, Zap, Shield, Wrench, Award } from "lucide-react";

const comparisons = [
  {
    tool: "ChatGPT / Claude.ai",
    limitation: "Forgets everything each session",
    advantage: "Permanent, compounding knowledge",
  },
  {
    tool: "Notion / Obsidian",
    limitation: "Human must write and organize everything",
    advantage: "AI does all writing and organizing",
  },
  {
    tool: "NotebookLM",
    limitation: "Searches raw docs, no synthesis",
    advantage: "Compiled structured wiki, not just search",
  },
  {
    tool: "Generic AI freelancers",
    limitation: "One-off chatbots, no knowledge accumulation",
    advantage: "Specialized knowledge compounding systems",
  },
];

const differentiators = [
  {
    icon: Zap,
    title: "Specialization",
    description: "We only build knowledge bases. Not chatbots, not automation tools, not \"AI everything.\"",
  },
  {
    icon: Wrench,
    title: "Maintenance model",
    description: "We don't build and leave. Monthly maintenance means your wiki keeps growing.",
  },
  {
    icon: Shield,
    title: "No-code delivery",
    description: "Delivered as clean Markdown files. Works in Obsidian, VS Code, or any text editor.",
  },
  {
    icon: Award,
    title: "Proven methodology",
    description: "Based on the LLM Wiki pattern by Andrej Karpathy (5,000+ GitHub stars).",
  },
];

export default function WhyWealthixs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "var(--space-12)" }}
        >
          <span className="section-label" style={{ justifyContent: "center" }}>
            Why Wealthixs
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: "var(--space-4)",
            }}
          >
            Why not just use ChatGPT?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            Generic AI tools aren&apos;t built for compounding knowledge. Here&apos;s
            how we&apos;re different.
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-card)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            marginBottom: "var(--space-16)",
          }}
        >
          {/* Header row */}
          <div
            className="grid"
            style={{
              gridTemplateColumns: "1fr 1fr 1fr",
              borderBottom: "1px solid var(--border-default)",
              padding: "var(--space-4) var(--space-6)",
              background: "var(--bg-elevated)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
              }}
            >
              Tool
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
              }}
            >
              Limitation
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--brand-gold)",
              }}
            >
              Wealthixs Advantage
            </span>
          </div>

          {/* Data rows */}
          {comparisons.map((row, i) => (
            <div
              key={i}
              className="grid"
              style={{
                gridTemplateColumns: "1fr 1fr 1fr",
                padding: "var(--space-5) var(--space-6)",
                borderBottom:
                  i < comparisons.length - 1
                    ? "1px solid var(--border-subtle)"
                    : "none",
                alignItems: "center",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--bg-elevated)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--text-primary)",
                }}
              >
                {row.tool}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <X size={14} style={{ color: "var(--error)" }} />
                {row.limitation}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "var(--text-primary)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Check size={14} style={{ color: "var(--brand-gold)" }} />
                {row.advantage}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Differentiators grid */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "var(--space-6)",
          }}
        >
          {differentiators.map((diff, i) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  display: "flex",
                  gap: "var(--space-4)",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "var(--radius-sm)",
                    background: "var(--brand-gold-bg)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={18} style={{ color: "var(--brand-gold)" }} />
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "var(--space-1)",
                    }}
                  >
                    {diff.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {diff.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
