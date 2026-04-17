"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Database, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-graph-paper"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        paddingTop: "72px",
        overflow: "hidden",
      }}
    >
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
              transition={{ duration: 0.4 }}
              style={{
                display: "inline-block",
                padding: "6px 12px",
                background: "var(--accent-pink)",
                border: "var(--border-thick)",
                borderRadius: "var(--radius-neo)",
                boxShadow: "var(--shadow-solid-hover)",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "0.85rem",
                marginBottom: "var(--space-6)",
              }}
            >
              AI Knowledge Systems
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontSize: "clamp(3rem, 6vw, 4.5rem)",
                marginBottom: "var(--space-6)",
                maxWidth: "600px",
              }}
            >
              Turn Chaos into 
              <span 
                style={{ 
                  display: "inline-block", 
                  background: "var(--accent-yellow)", 
                  padding: "0 8px", 
                  border: "var(--border-thick)",
                  transform: "rotate(-2deg)",
                  marginLeft: "12px",
                  boxShadow: "var(--shadow-solid-hover)"
                }}
              >
                Clarity
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontSize: "1.125rem",
                maxWidth: "480px",
                marginBottom: "var(--space-10)",
                fontWeight: 500,
              }}
            >
              We build structured, intelligent Notion-like systems that turn your scattered PDFs, docs, and notes into an instantly queryable brain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap"
              style={{ gap: "var(--space-4)" }}
            >
              <a href="#contact" className="btn-neo">
                Get Your AI Brain <ArrowRight size={20} strokeWidth={2.5} />
              </a>
              <a href="#process" className="btn-neo-white">
                How it works
              </a>
            </motion.div>

            {/* Trust signal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                marginTop: "var(--space-12)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: "0.85rem",
              }}
            >
              <div className="flex -space-x-3">
                 <div style={{ width: 32, height: 32, borderRadius: "50%", border: "var(--border-thick)", background: "var(--accent-green)" }}></div>
                 <div style={{ width: 32, height: 32, borderRadius: "50%", border: "var(--border-thick)", background: "var(--accent-blue)" }}></div>
                 <div style={{ width: 32, height: 32, borderRadius: "50%", border: "var(--border-thick)", background: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>+50</div>
              </div>
              <p style={{ margin: 0 }}>Trusted by smart teams in India.</p>
            </motion.div>
          </div>

          {/* Right: Quirky neo-brutalist illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex justify-center items-center"
            style={{ position: "relative" }}
          >
            {/* The main structure floating */}
            <div 
              style={{
                width: "400px",
                height: "400px",
                position: "relative"
              }}
            >
              {/* Document Node 1 */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute", top: "10%", left: "0%", 
                  background: "var(--color-white)", 
                  padding: "16px",
                  border: "var(--border-thick)", 
                  boxShadow: "var(--shadow-solid)",
                  borderRadius: "var(--radius-neo)",
                  transform: "rotate(-5deg)",
                  zIndex: 2
                }}
              >
                  <FileText size={24} />
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", fontWeight: "bold", marginTop: "8px" }}>200_PDFs.zip</div>
              </motion.div>

              {/* Document Node 2 */}
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute", bottom: "10%", left: "10%", 
                  background: "var(--accent-blue)", 
                  padding: "16px",
                  border: "var(--border-thick)", 
                  boxShadow: "var(--shadow-solid)",
                  borderRadius: "var(--radius-neo)",
                  transform: "rotate(10deg)",
                  zIndex: 2
                }}
              >
                  <Database size={24} />
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: "bold", marginTop: "8px" }}>Scattered Data</div>
              </motion.div>

              {/* The "Machine" / Brain */}
              <div 
                style={{
                  position: "absolute", top: "25%", right: "5%",
                  width: "220px", height: "260px",
                  background: "var(--accent-yellow)",
                  border: "var(--border-thick)",
                  boxShadow: "var(--shadow-solid-lg)",
                  borderRadius: "var(--radius-neo)",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px"
                }}
              >
                <div style={{
                  background: "white", padding: "12px", border: "var(--border-thick)", borderRadius: "var(--radius-neo)",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                   <Sparkles size={32} />
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 800, textAlign: "center" }}>
                   AI Structured<br/>Wiki
                </div>
                
                {/* Search representation */}
                <div style={{
                   width: "80%", height: "30px", background: "white", border: "var(--border-thick)", borderRadius: "20px",
                   display: "flex", alignItems: "center", padding: "0 10px"
                }}>
                   <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#050505", animation: "blink 1s infinite" }} />
                </div>
              </div>

               {/* Scribbles / Lines connecting them (SVG) */}
               <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}>
                  <path d="M 120 100 Q 180 50 250 150" fill="none" stroke="#050505" strokeWidth="3" strokeDasharray="6 6" />
                  <path d="M 150 320 Q 200 350 250 250" fill="none" stroke="#050505" strokeWidth="3" strokeDasharray="6 6" />
               </svg>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr !important;
            padding-top: var(--space-8);
            padding-bottom: var(--space-12);
          }
        }
      `}</style>
    </section>
  );
}
