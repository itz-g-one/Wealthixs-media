"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Upload, Cpu, MessageSquare, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    color: "var(--accent-pink)",
    label: "Step 1",
    title: "Feed It",
    description: "Upload your PDFs, reports, notes, meeting transcripts, SOPs. Any format. We handle the ingestion.",
  },
  {
    icon: Cpu,
    color: "var(--accent-blue)",
    label: "Step 2",
    title: "We Build It",
    description: "AI reads every source, extracts concepts, creates cross-linked wiki pages, builds backlinks, and flags contradictions.",
  },
  {
    icon: MessageSquare,
    color: "var(--accent-green)",
    label: "Step 3",
    title: "Query It",
    description: "Ask any question, get instant precise answers citing your actual documents — not generic AI guesses.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--color-white)" }}
    >
      <div className="container-main">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "var(--space-16)" }}
        >
          <div style={{
             display: "inline-block", padding: "6px 12px", border: "var(--border-thick)", 
             background: "var(--accent-yellow)", borderRadius: "var(--radius-neo)",
             fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.85rem",
             marginBottom: "var(--space-4)", boxShadow: "var(--shadow-solid-hover)",
             transform: "rotate(2deg)"
          }}>
             How it works
          </div>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>
            Three steps to clarity.
          </h2>
        </motion.div>

        {/* 3-step process */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--space-8)",
            position: "relative",
          }}
        >
          {/* Connecting line (desktop) */}
          <div
            className="hidden md:block"
            style={{
              position: "absolute",
              top: "40px",
              left: "16.5%",
              right: "16.5%",
              height: "4px",
              background: "var(--color-black)",
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              style={{ textAlign: "center", position: "relative", zIndex: 1 }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: 80, height: 80, borderRadius: "50%", background: step.color,
                  border: "var(--border-thick)", display: "flex", alignItems: "center",
                  justifyContent: "center", margin: "0 auto var(--space-6)",
                  boxShadow: "var(--shadow-solid)",
                }}
              >
                <step.icon size={32} color="#050505" strokeWidth={2.5} />
              </div>

              <div style={{
                 display: "inline-block", padding: "4px 12px", background: "var(--color-black)",
                 color: "white", borderRadius: "100px", fontFamily: "var(--font-display)",
                 fontWeight: 700, fontSize: "0.75rem", marginBottom: "var(--space-4)"
              }}>
                {step.label}
              </div>

              <h3 style={{ fontSize: "1.75rem", marginBottom: "var(--space-3)" }}>
                {step.title}
              </h3>
              <p style={{ fontWeight: 500, margin: "0 auto" }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .grid { grid-template-columns: 1fr !important; gap: var(--space-12) !important; }
        }
      `}</style>
    </section>
  );
}
