"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { X, Check, Zap, Shield, Wrench, Award } from "lucide-react";

const comparisons = [
  { tool: "ChatGPT / Claude", limitation: "Forgets everything each session", advantage: "Permanent, compounding knowledge" },
  { tool: "Notion / Obsidian", limitation: "You have to write it all", advantage: "AI does all writing and organizing" },
  { tool: "NotebookLM", limitation: "Searches raw docs, no synthesis", advantage: "Compiled structured wiki, not just search" },
  { tool: "AI freelancers", limitation: "One-off chatbots, no memory", advantage: "Specialized knowledge compounding" },
];

const differentiators = [
  { icon: Zap, bg: "var(--accent-yellow)", title: "Specialization", description: "We only build knowledge bases. Not chatbots, not automation tools." },
  { icon: Wrench, bg: "var(--accent-pink)", title: "Maintenance", description: "We don't build and leave. Monthly maintenance means it keeps growing." },
  { icon: Shield, bg: "var(--accent-blue)", title: "No-code delivery", description: "Delivered as clean files. Works in Obsidian, VS Code, or any text editor." },
  { icon: Award, bg: "var(--accent-green)", title: "Proven method", description: "Based on the standard AI Wiki pattern by leading researchers." },
];

export default function WhyWealthixs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="section-padding bg-graph-paper" style={{ borderTop: "var(--border-thick)" }}>
      <div className="container-main">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
          <div style={{
             display: "inline-block", padding: "6px 12px", border: "var(--border-thick)", 
             background: "var(--accent-blue)", borderRadius: "var(--radius-neo)",
             fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.85rem",
             marginBottom: "var(--space-4)", boxShadow: "var(--shadow-solid-hover)", transform: "rotate(1deg)"
          }}>
             Why Wealthixs
          </div>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", marginBottom: "var(--space-4)" }}>Why not just use ChatGPT?</h2>
          <p style={{ fontWeight: 500, maxWidth: "520px", margin: "0 auto" }}>Generic AI tools aren&apos;t built for compounding knowledge. Here&apos;s how we&apos;re different.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} style={{
            background: "var(--color-white)", border: "var(--border-thick)", borderRadius: "var(--radius-neo)",
            padding: "var(--space-6)", boxShadow: "var(--shadow-solid-lg)", marginBottom: "var(--space-16)"
          }}
        >
          {comparisons.map((row, i) => (
            <div key={i} className="grid" style={{
                gridTemplateColumns: "1fr 1fr 1fr", padding: "var(--space-4)",
                borderBottom: i < comparisons.length - 1 ? "var(--border-thick)" : "none",
                gap: "16px"
              }}>
              <span style={{ fontWeight: 700 }}>{row.tool}</span>
              <span style={{ fontWeight: 500, display: "flex", alignItems: "center", gap: "8px" }}>
                <X size={18} color="red" strokeWidth={3} /> {row.limitation}
              </span>
              <span style={{ fontWeight: 700, display: "flex", alignItems: "center", gap: "8px" }}>
                <Check size={18} color="green" strokeWidth={3} /> {row.advantage}
              </span>
            </div>
          ))}
        </motion.div>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "var(--space-6)" }}>
          {differentiators.map((diff, i) => {
            const Icon = diff.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }} style={{ display: "flex", gap: "var(--space-4)" }}>
                <div style={{
                    width: 48, height: 48, borderRadius: "var(--radius-neo)", background: diff.bg,
                    border: "var(--border-thick)", display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, boxShadow: "var(--shadow-solid-hover)"
                  }}
                >
                  <Icon size={22} color="#050505" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 style={{ fontSize: "1.2rem", marginBottom: "4px" }}>{diff.title}</h4>
                  <p style={{ fontWeight: 500, margin: 0 }}>{diff.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
