"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { Layers, Brain, Search, TrendingUp } from "lucide-react";

const painPoints = [
  {
    icon: Layers,
    color: "var(--accent-pink)",
    title: "Siloed Information",
    description: "Valuable insights are trapped in individual departments. 80% of enterprise data is inaccessible.",
  },
  {
    icon: Brain,
    color: "var(--accent-blue)",
    title: "Lost Context",
    description: "Critical business knowledge vanishes when employees leave, draining institutional memory.",
  },
  {
    icon: Search,
    color: "var(--accent-yellow)",
    title: "Inefficient Search",
    description: "Teams waste hours searching for documents, significantly slowing down decision-making.",
  },
  {
    icon: TrendingUp,
    color: "var(--accent-green)",
    title: "Unscalable Chaos",
    description: "As your organization grows, unstructured knowledge becomes a massive liability.",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="problem"
      ref={ref}
      className="section-padding bg-graph-paper"
      style={{ position: "relative", borderTop: "var(--border-thick)" }}
    >
      <div className="container-main">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "var(--space-12)" }}
        >
          <div style={{
             display: "inline-block", padding: "6px 12px", border: "var(--border-thick)", 
             background: "var(--color-white)", borderRadius: "var(--radius-neo)",
             fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.85rem",
             marginBottom: "var(--space-4)", boxShadow: "var(--shadow-solid-hover)"
          }}>
             The Problem
          </div>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", marginBottom: "var(--space-4)", maxWidth: "800px" }}>
            The Hidden Cost of Knowledge Loss
          </h2>
          <p style={{ fontSize: "1.1rem", fontWeight: 500 }}>
            Professionals spend 30–40% of their time searching for information they&apos;ve already encountered.
          </p>
        </motion.div>

        {/* Neo-brutalist Bento grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "var(--space-6)" }}
        >
          {painPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                className="card-neo"
                style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}
              >
                <div
                  style={{
                    width: 56, height: 56, borderRadius: "50%", background: point.color,
                    border: "var(--border-thick)", display: "flex", alignItems: "center", 
                    justifyContent: "center", boxShadow: "2px 2px 0px 0px #050505"
                  }}
                >
                  <Icon size={28} color="#050505" strokeWidth={2.5} />
                </div>
                <h3 style={{ fontSize: "1.4rem", margin: 0 }}>
                  {point.title}
                </h3>
                <p style={{ margin: 0, fontWeight: 500 }}>
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
