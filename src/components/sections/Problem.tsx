"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Layers,
  Brain,
  Search,
  TrendingUp,
} from "lucide-react";

const painPoints = [
  {
    icon: Layers,
    title: "Siloed Information",
    description:
      "Valuable insights are trapped in individual departments and scattered systems, leading to duplication and inefficiency. 80% of enterprise data is inaccessible.",
  },
  {
    icon: Brain,
    title: "Lost Context",
    description:
      "Critical business knowledge vanishes when employees leave or projects end, creating a constant drain on productivity and institutional memory.",
  },
  {
    icon: Search,
    title: "Inefficient Search",
    description:
      "Teams waste hours searching for documents and answers, significantly slowing down decision-making and project delivery.",
  },
  {
    icon: TrendingUp,
    title: "Scalability Issues",
    description:
      "As your organization grows, unstructured knowledge becomes a liability, hindering innovation and seamless collaboration.",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="problem"
      ref={ref}
      className="section-padding"
      style={{
        background: "var(--bg-secondary)",
        position: "relative",
      }}
    >
      {/* Top divider */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "var(--border-subtle)",
        }}
      />

      <div className="container-main">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "var(--space-12)" }}
        >
          <span className="section-label">Problem</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: "var(--space-4)",
            }}
          >
            The Hidden Cost of Knowledge Loss
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              maxWidth: "540px",
            }}
          >
            Most professionals spend 30–40% of their time searching for
            information they&apos;ve already encountered.
          </p>
        </motion.div>

        {/* Bento grid of pain points */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-6)",
          }}
        >
          {painPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                className="card-bento"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-4)",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "var(--radius-md)",
                    background: "var(--brand-gold-bg)",
                    border: "1px solid rgba(201,168,76,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={22} style={{ color: "var(--brand-gold)" }} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    margin: 0,
                  }}
                >
                  {point.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
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
