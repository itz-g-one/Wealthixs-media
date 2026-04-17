"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle } from "lucide-react";

const testimonials = [
  {
    quote: "Before Wealthixs, I had 200 research papers I'd never actually synthesized. Now I can ask any question about my domain and get an answer in seconds — with source citations.",
    author: "PhD Researcher",
    org: "Delhi University",
    bg: "var(--accent-yellow)"
  },
  {
    quote: "I spent 3 hours every week re-researching GST notifications I'd already read. That's gone. The wiki just knows.",
    author: "CA Firm Partner",
    org: "Jaipur",
    bg: "var(--accent-pink)"
  },
  {
    quote: "Our team of 12 was constantly re-doing research that others had already completed. Wealthixs gave us a shared brain that remembers everything.",
    author: "Consulting Director",
    org: "Mumbai",
    bg: "var(--accent-green)"
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="section-padding" style={{ background: "var(--color-white)", borderTop: "var(--border-thick)" }}>
      <div className="container-main">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>Don&apos;t just take our word for it.</h2>
        </motion.div>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "var(--space-6)" }}>
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: t.bg,
                border: "var(--border-thick)",
                borderRadius: "var(--radius-neo)",
                padding: "var(--space-8)",
                display: "flex", flexDirection: "column", gap: "var(--space-6)",
                boxShadow: "var(--shadow-solid)"
              }}
            >
              <div style={{ width: 40, height: 40, background: "white", borderRadius: "50%", border: "var(--border-thick)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <MessageCircle size={20} color="#050505" strokeWidth={2.5} />
              </div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, margin: 0, flex: 1 }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div style={{ borderTop: "var(--border-thick)", paddingTop: "16px" }}>
                <p style={{ fontWeight: 700, margin: 0, color: "var(--color-black)" }}>{t.author}</p>
                <p style={{ fontWeight: 600, margin: 0, color: "rgba(0,0,0,0.6)" }}>{t.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
