"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How does Wealthixs Media integrate with Notion?",
    answer:
      "We seamlessly embed our AI-powered knowledge base directly into your Notion workspace, creating a unified and intelligent hub for your team's information, ensuring effortless access and updates.",
  },
  {
    question: "What is the typical implementation timeline?",
    answer:
      "Starter Brain: 5–7 days. Full Research Brain: 2–3 weeks. Team Knowledge Base: 4–6 weeks. We provide regular progress updates throughout the process.",
  },
  {
    question: "Can Wealthixs Media handle specialized industry data?",
    answer:
      "Yes. We build custom schemas for every domain — whether you're in law, finance, academia, healthcare, or consulting. Our AI is trained to understand domain-specific terminology and relationships.",
  },
  {
    question: "What kind of ongoing support is included?",
    answer:
      "All packages include initial support. Our monthly retainer plans include continuous wiki updates, health checks, gap analysis reports, and priority async support via WhatsApp or email.",
  },
  {
    question: "What file types do you support?",
    answer:
      "PDFs, Word documents, Markdown files, plain text, web articles (via URL), meeting transcripts, WhatsApp exports, Notion page exports, and more.",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes. Your knowledge base is built locally or in your own private storage. We never retain your documents on our servers after delivery.",
  },
  {
    question: "Do I need to be technical?",
    answer:
      "No. We handle all setup. You just need to supply your documents and show up for the onboarding call. We also provide training sessions so your team can use the wiki independently.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--bg-primary)" }}
    >
      <div
        className="container-main"
        style={{ maxWidth: "780px" }}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "var(--space-12)" }}
        >
          <span className="section-label">FAQ</span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "var(--text-primary)",
            }}
          >
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col" style={{ gap: 0 }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                style={{
                  borderTop: i === 0 ? "1px solid var(--border-default)" : "none",
                  borderBottom: "1px solid var(--border-default)",
                  borderLeft: isOpen ? "3px solid var(--brand-gold)" : "3px solid transparent",
                  transition: "border-color 0.3s ease",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "var(--space-6) var(--space-6)",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "var(--space-4)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1rem",
                      fontWeight: 500,
                      color: isOpen ? "var(--text-primary)" : "var(--text-primary)",
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      color: "var(--text-muted)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                      padding: "0 var(--space-6) var(--space-6)",
                      margin: 0,
                    }}
                  >
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
