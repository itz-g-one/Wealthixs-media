"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
        paddingTop: "72px",
      }}
    >
      {/* Subtle grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      {/* Gold glow accent */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="grid items-center"
          style={{
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-16)",
            minHeight: "calc(100vh - 72px)",
          }}
        >
          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="section-label" style={{ marginBottom: "var(--space-6)" }}>
                AI Knowledge Systems
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)",
                fontWeight: 600,
                lineHeight: 1.1,
                color: "var(--text-primary)",
                marginBottom: "var(--space-6)",
                maxWidth: "560px",
              }}
            >
              Transforming Chaos
              <br />
              into Clarity with{" "}
              <span style={{ color: "var(--brand-gold)" }}>
                AI Knowledge Bases
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.125rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                maxWidth: "480px",
                marginBottom: "var(--space-10)",
              }}
            >
              We build structured, intelligent systems that turn your scattered
              information into actionable, accessible knowledge.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap"
              style={{ gap: "var(--space-4)" }}
            >
              <a href="#contact" className="btn-primary btn-gold-pulse">
                Book a Free Discovery Call <ArrowRight size={16} />
              </a>
              <a href="#process" className="btn-secondary">
                Explore Our Solutions <ArrowDown size={16} />
              </a>
            </motion.div>

            {/* Trust signal */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8125rem",
                color: "var(--text-muted)",
                marginTop: "var(--space-10)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--success)",
                  display: "inline-block",
                }}
              />
              Trusted by researchers, consultants, and founders across India
            </motion.p>
          </div>

          {/* Right: Hero illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block"
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "520px",
                margin: "0 auto",
              }}
            >
              {/* Knowledge graph SVG illustration */}
              <svg
                viewBox="0 0 500 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%", height: "auto" }}
              >
                {/* Background circle */}
                <circle cx="250" cy="250" r="200" stroke="rgba(0,0,0,0.04)" strokeWidth="1" fill="none" />
                <circle cx="250" cy="250" r="150" stroke="rgba(0,0,0,0.04)" strokeWidth="1" fill="none" />
                <circle cx="250" cy="250" r="100" stroke="rgba(0,0,0,0.04)" strokeWidth="1" fill="none" />

                {/* Central AI node */}
                <circle cx="250" cy="250" r="45" fill="rgba(201,168,76,0.08)" stroke="#C9A84C" strokeWidth="2" />
                <text x="250" y="246" textAnchor="middle" fontFamily="var(--font-body)" fontSize="12" fontWeight="600" fill="#C9A84C">AI</text>
                <text x="250" y="262" textAnchor="middle" fontFamily="var(--font-body)" fontSize="8" fill="#999">KNOWLEDGE</text>

                {/* Left side: scattered files */}
                <g style={{ animation: "float 3s ease-in-out infinite" }}>
                  <rect x="60" y="140" width="50" height="65" rx="4" fill="white" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
                  <line x1="68" y1="155" x2="102" y2="155" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
                  <line x1="68" y1="165" x2="95" y2="165" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                  <line x1="68" y1="175" x2="100" y2="175" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                  <text x="85" y="195" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="6" fill="#999">report.pdf</text>
                </g>

                <g style={{ animation: "float 3.5s ease-in-out infinite 0.5s" }}>
                  <rect x="40" y="260" width="50" height="65" rx="4" fill="white" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
                  <line x1="48" y1="275" x2="82" y2="275" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
                  <line x1="48" y1="285" x2="75" y2="285" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                  <line x1="48" y1="295" x2="80" y2="295" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                  <text x="65" y="315" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="6" fill="#999">notes.md</text>
                </g>

                <g style={{ animation: "float 4s ease-in-out infinite 1s" }}>
                  <rect x="80" y="370" width="50" height="65" rx="4" fill="white" stroke="rgba(0,0,0,0.12)" strokeWidth="1" />
                  <line x1="88" y1="385" x2="122" y2="385" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
                  <line x1="88" y1="395" x2="115" y2="395" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                  <text x="105" y="425" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="6" fill="#999">data.csv</text>
                </g>

                {/* Connection lines from files to center */}
                <line x1="110" y1="170" x2="210" y2="240" stroke="#C9A84C" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                <line x1="90" y1="290" x2="210" y2="260" stroke="#C9A84C" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
                <line x1="130" y1="390" x2="220" y2="280" stroke="#C9A84C" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />

                {/* Right side: structured wiki nodes */}
                <g>
                  <rect x="370" y="130" width="90" height="50" rx="8" fill="white" stroke="#C9A84C" strokeWidth="1.5" />
                  <text x="415" y="152" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="7" fill="#C9A84C">wiki/index.md</text>
                  <text x="415" y="168" textAnchor="middle" fontFamily="var(--font-body)" fontSize="7" fill="#999">Main Hub</text>
                </g>

                <g>
                  <rect x="380" y="220" width="90" height="50" rx="8" fill="white" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
                  <text x="425" y="242" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="7" fill="#555">concepts/</text>
                  <text x="425" y="258" textAnchor="middle" fontFamily="var(--font-body)" fontSize="7" fill="#999">12 pages</text>
                </g>

                <g>
                  <rect x="370" y="310" width="90" height="50" rx="8" fill="white" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
                  <text x="415" y="332" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="7" fill="#555">entities/</text>
                  <text x="415" y="348" textAnchor="middle" fontFamily="var(--font-body)" fontSize="7" fill="#999">8 pages</text>
                </g>

                <g>
                  <rect x="385" y="395" width="90" height="50" rx="8" fill="white" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
                  <text x="430" y="417" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="7" fill="#555">insights/</text>
                  <text x="430" y="433" textAnchor="middle" fontFamily="var(--font-body)" fontSize="7" fill="#999">5 pages</text>
                </g>

                {/* Connection lines from center to wiki */}
                <line x1="290" y1="240" x2="370" y2="155" stroke="#C9A84C" strokeWidth="1.5" opacity="0.5" />
                <line x1="295" y1="250" x2="380" y2="245" stroke="#C9A84C" strokeWidth="1.5" opacity="0.5" />
                <line x1="290" y1="260" x2="370" y2="335" stroke="#C9A84C" strokeWidth="1.5" opacity="0.5" />
                <line x1="290" y1="270" x2="385" y2="420" stroke="#C9A84C" strokeWidth="1.5" opacity="0.4" />

                {/* Wiki cross-links */}
                <line x1="415" y1="180" x2="425" y2="220" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="425" y1="270" x2="415" y2="310" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="415" y1="360" x2="430" y2="395" stroke="rgba(0,0,0,0.08)" strokeWidth="1" strokeDasharray="3 3" />

                {/* Small decorative nodes */}
                <circle cx="210" cy="240" r="4" fill="#C9A84C" opacity="0.3" />
                <circle cx="290" cy="260" r="4" fill="#C9A84C" opacity="0.3" />
              </svg>

              {/* Labels */}
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "5%",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Raw Sources
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "5%",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  color: "var(--brand-gold)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Structured Wiki
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Responsive override for mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
            padding-top: var(--space-12);
            padding-bottom: var(--space-12);
          }
        }
      `}</style>
    </section>
  );
}
