"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Upload, Cpu, MessageSquare, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    label: "FEED IT",
    title: "Connect your data sources.",
    description:
      "Upload your PDFs, reports, notes, links, meeting transcripts, SOPs. Any format. We handle the ingestion.",
  },
  {
    icon: Cpu,
    label: "BUILD IT",
    title: "Our AI constructs your custom base.",
    description:
      "AI reads every source, extracts concepts, creates 10–15 interconnected wiki pages per document, builds backlinks, and flags contradictions.",
  },
  {
    icon: MessageSquare,
    label: "QUERY IT",
    title: "Ask any question, get instant answers.",
    description:
      "Get precise answers citing your actual documents — not generic AI guesses. Then the system keeps updating every month.",
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
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container-main">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "var(--space-16)" }}
        >
          <span
            className="section-label"
            style={{ justifyContent: "center" }}
          >
            Our Approach
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
            Process & Pricing
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            From data input to actionable insights in three simple steps.
          </p>
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
              top: "64px",
              left: "16.5%",
              right: "16.5%",
              height: "1px",
              borderTop: "2px dashed rgba(201,168,76,0.3)",
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                textAlign: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "var(--bg-primary)",
                  border: "2px solid var(--border-card)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto var(--space-6)",
                  transition: "border-color 0.3s",
                }}
              >
                <step.icon
                  size={32}
                  style={{ color: "var(--brand-gold)" }}
                />
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "var(--brand-gold)",
                  marginBottom: "var(--space-3)",
                }}
              >
                {step.label}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  maxWidth: "280px",
                  margin: "0 auto",
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA under process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            textAlign: "center",
            marginTop: "var(--space-16)",
          }}
        >
          <a href="#pricing" className="btn-secondary">
            View Our Packages <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>

      {/* Responsive override */}
      <style jsx>{`
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
