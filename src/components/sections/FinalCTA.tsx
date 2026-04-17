"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "var(--space-16) var(--space-6)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="container-main"
        style={{
          maxWidth: "900px",
          background: "var(--bg-dark)",
          borderRadius: "var(--radius-xl)",
          padding: "var(--space-20) var(--space-12)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: "-50%",
            left: "-20%",
            width: "140%",
            height: "200%",
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles
              size={32}
              style={{
                color: "var(--brand-gold)",
                margin: "0 auto var(--space-6)",
              }}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              color: "var(--text-inverse)",
              lineHeight: 1.15,
              marginBottom: "var(--space-4)",
            }}
          >
            Unlock Your Team&apos;s Collective
            <br />
            Intelligence.{" "}
            <span style={{ color: "var(--brand-gold)" }}>Start Today.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "500px",
              margin: "0 auto var(--space-10)",
              lineHeight: 1.7,
            }}
          >
            Transform your scattered knowledge into a powerful, AI-driven asset
            with Wealthixs Media.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold btn-gold-pulse"
              style={{
                fontSize: "1rem",
                padding: "18px 40px",
              }}
            >
              Book Your Free Discovery Call
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8125rem",
              color: "rgba(255,255,255,0.35)",
              marginTop: "var(--space-6)",
            }}
          >
            Free 30-minute call · No commitment · Response within 24 hours
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
