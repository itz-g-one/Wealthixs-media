"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Zap, Target } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" ref={ref} style={{ padding: "var(--space-16) var(--space-6)", background: "var(--color-white)" }}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
        className="container-main"
        style={{
          maxWidth: "900px", background: "var(--accent-yellow)",
          border: "var(--border-thick)", borderRadius: "var(--radius-neo)",
          boxShadow: "var(--shadow-solid-lg)", padding: "var(--space-16) var(--space-8)",
          textAlign: "center", position: "relative", overflow: "hidden"
        }}
      >
        {/* Decorative elements */}
        <div style={{ position: "absolute", top: "20px", left: "20px", width: "40px", height: "40px", borderRadius: "50%", border: "var(--border-thick)", background: "var(--accent-pink)", display: "flex", alignItems: "center", justifyContent: "center", transform: "rotate(-10deg)" }}>
           <Zap size={20} strokeWidth={3} />
        </div>
        <div style={{ position: "absolute", bottom: "20px", right: "20px", width: "40px", height: "40px", border: "var(--border-thick)", background: "var(--accent-blue)", display: "flex", alignItems: "center", justifyContent: "center", transform: "rotate(15deg)" }}>
           <Target size={20} strokeWidth={3} />
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginBottom: "var(--space-4)", lineHeight: 1 }}>
            Stop Searching.<br/>
            Start <span style={{ background: "white", padding: "0 8px", border: "var(--border-thick)", display: "inline-block", transform: "rotate(-2deg)" }}>Knowing.</span>
          </h2>
          <p style={{ fontWeight: 600, fontSize: "1.1rem", maxWidth: "460px", margin: "0 auto var(--space-8)" }}>
            Transform your scattered knowledge into a powerful, AI-driven asset today.
          </p>
          <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="btn-neo-white" style={{ padding: "16px 40px", fontSize: "1.125rem" }}>
            Book Discovery Call <ArrowRight size={20} strokeWidth={3} />
          </a>
          <p style={{ fontWeight: 600, fontSize: "0.85rem", marginTop: "var(--space-6)", opacity: 0.8 }}>
            Free 30-min call. No commitment.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
