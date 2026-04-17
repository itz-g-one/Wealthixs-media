"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Star } from "lucide-react";

const packages = [
  {
    name: "STARTER",
    price: "₹15k",
    period: "one-time",
    description: "Basic wiki setup for personal or small projects.",
    features: [
      "Up to 15 sources ingested",
      "Basic structural schema",
      "wiki/index.md initialized",
      "30-min hand-off call",
    ],
    cta: "Start Simple",
    highlighted: false,
    color: "var(--accent-blue)"
  },
  {
    name: "RESEARCH",
    price: "₹40k",
    period: "one-time",
    description: "Deep structured knowledge base. Unlocks real insights.",
    features: [
      "Up to 60 sources ingested",
      "Deep cross-referenced schema",
      "Concept + Entity pages",
      "Full wiki health check",
      "1-hr prompt training",
    ],
    cta: "Unlock Research",
    highlighted: true,
    color: "var(--accent-yellow)"
  },
  {
    name: "TEAM",
    price: "₹1L",
    period: "one-time",
    description: "Enterprise scale. Everyone on the same page.",
    features: [
      "Company-wide wiki (SOPs, HR)",
      "Team onboarding (5 people)",
      "Obsidian query interface",
      "3 months maintenance included",
    ],
    cta: "Contact Sales",
    highlighted: false,
    color: "var(--accent-pink)"
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="pricing"
      ref={ref}
      className="section-padding bg-graph-paper"
      style={{ borderTop: "var(--border-thick)", borderBottom: "var(--border-thick)" }}
    >
      <div className="container-main">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "var(--space-12)" }}
        >
          <div style={{
             display: "inline-block", padding: "6px 12px", border: "var(--border-thick)", 
             background: "var(--color-white)", borderRadius: "var(--radius-neo)",
             fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.85rem",
             marginBottom: "var(--space-4)", boxShadow: "var(--shadow-solid-hover)"
          }}>
             Pricing
          </div>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", marginBottom: "var(--space-4)" }}>
            Clear, upfront pricing.
          </h2>
        </motion.div>

        {/* Pricing grid */}
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-6)" }}
        >
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
              className="card-neo"
              style={{
                display: "flex", flexDirection: "column",
                background: pkg.highlighted ? pkg.color : "var(--color-white)",
                transform: pkg.highlighted ? "translateY(-10px)" : "none",
                position: "relative",
              }}
            >
              {pkg.highlighted && (
                <div style={{
                    position: "absolute", top: "-15px", right: "20px", background: "var(--color-black)",
                    color: "white", padding: "4px 12px", border: "var(--border-thick)",
                    borderRadius: "var(--radius-neo)", fontFamily: "var(--font-display)",
                    fontWeight: 700, fontSize: "0.75rem", display: "flex", alignItems: "center", gap: "4px",
                    transform: "rotate(5deg)"
                }}>
                  <Star size={12} fill="white" /> POPULAR
                </div>
              )}

              <h3 style={{ fontSize: "1.75rem", marginBottom: "var(--space-4)" }}>
                {pkg.name}
              </h3>

              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "var(--space-4)" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 800 }}>
                  {pkg.price}
                </span>
                <span style={{ fontWeight: 700, color: pkg.highlighted ? "var(--color-black)" : "var(--text-muted)" }}>
                  {pkg.period}
                </span>
              </div>

              <p style={{ 
                fontWeight: 500, paddingBottom: "var(--space-6)", 
                borderBottom: pkg.highlighted ? "3px solid rgba(0,0,0,0.1)" : "3px solid rgba(0,0,0,0.05)",
                color: "var(--color-black)"
              }}>
                {pkg.description}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1, margin: "var(--space-6) 0" }}>
                {pkg.features.map((feature, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <div style={{
                       width: "20px", height: "20px", borderRadius: "50%", background: "var(--color-black)",
                       flexShrink: 0, marginTop: "4px"
                    }} />
                    <span style={{ fontWeight: 600, color: "var(--color-black)" }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={pkg.highlighted ? "btn-neo-white" : "btn-neo"}
                style={{ width: "100%", justifyContent: "center" }}
              >
                {pkg.cta} <ArrowRight size={20} strokeWidth={2.5} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
