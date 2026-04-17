"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Before Wealthixs, I had 200 research papers I'd never actually synthesized. Now I can ask any question about my domain and get an answer in seconds — with source citations.",
    author: "PhD Researcher",
    org: "Delhi University",
  },
  {
    quote:
      "I spent 3 hours every week re-researching GST notifications I'd already read. That's gone. The wiki just knows.",
    author: "CA Firm Partner",
    org: "Jaipur",
  },
  {
    quote:
      "Our team of 12 was constantly re-doing research that others had already completed. Wealthixs gave us a shared brain that remembers everything.",
    author: "Consulting Director",
    org: "Mumbai",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "var(--space-12)" }}
        >
          <span className="section-label" style={{ justifyContent: "center" }}>
            Testimonials
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "var(--text-primary)",
            }}
          >
            What our clients say
          </h2>
        </motion.div>

        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--space-6)",
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-card)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-8)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-6)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-strong)";
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-card)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Quote
                size={24}
                style={{ color: "var(--brand-gold)", opacity: 0.5 }}
              />
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "var(--text-primary)",
                  lineHeight: 1.6,
                  flex: 1,
                  margin: 0,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    margin: 0,
                  }}
                >
                  — {t.author}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    margin: 0,
                  }}
                >
                  {t.org}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
