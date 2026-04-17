"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { question: "How does Wealthixs Media integrate with Notion?", answer: "We seamlessly embed our AI-powered knowledge base directly into your Notion workspace, creating a unified and intelligent hub." },
  { question: "What is the typical implementation timeline?", answer: "Starter Brain: 5–7 days. Full Research Brain: 2–3 weeks. Team Knowledge Base: 4–6 weeks." },
  { question: "Can you handle specialized industry data?", answer: "Yes. We build custom schemas for every domain — whether you're in law, finance, academia, or consulting." },
  { question: "What kind of ongoing support is included?", answer: "All packages include initial support. Our monthly retainer plans include continuous wiki updates, health checks, and priority async support." },
  { question: "Is my data private?", answer: "Yes. Your knowledge base is built locally or in your own private storage. We never retain your documents." },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" ref={ref} className="section-padding bg-graph-paper" style={{ borderTop: "var(--border-thick)" }}>
      <div className="container-main" style={{ maxWidth: "780px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} style={{ marginBottom: "var(--space-12)" }}>
           <div style={{
             display: "inline-block", padding: "6px 12px", border: "var(--border-thick)", 
             background: "var(--accent-pink)", borderRadius: "var(--radius-neo)",
             fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.85rem",
             marginBottom: "var(--space-4)", boxShadow: "var(--shadow-solid-hover)", transform: "rotate(-1deg)"
          }}>
             FAQ
          </div>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>Frequently Asked Questions</h2>
        </motion.div>

        <div className="flex flex-col" style={{ gap: "16px" }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{
                  background: "var(--color-white)",
                  border: "var(--border-thick)",
                  borderRadius: "var(--radius-neo)",
                  boxShadow: isOpen ? "var(--shadow-solid-lg)" : "var(--shadow-solid)",
                  transition: "all 0.2s ease"
                }}>
                <button onClick={() => setOpenIndex(isOpen ? null : i)} style={{
                    width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "20px 24px", background: "none", border: "none", cursor: "pointer", textAlign: "left",
                  }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700 }}>
                    {faq.question}
                  </span>
                  <span style={{
                     width: 32, height: 32, borderRadius: "50%", background: isOpen ? "var(--accent-yellow)" : "var(--bg-secondary)", 
                     border: "var(--border-thick)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 
                  }}>
                    {isOpen ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
                  </span>
                </button>
                <div style={{ height: isOpen ? "auto" : 0, overflow: "hidden" }}>
                  <p style={{ fontWeight: 500, padding: "0 24px 24px", margin: 0, color: "var(--text-secondary)" }}>
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
