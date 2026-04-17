"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Scale,
  GraduationCap,
  Rocket,
  BarChart3,
  Users,
  Building2,
} from "lucide-react";

const segments = [
  {
    icon: Scale,
    title: "CA / Tax / Legal Firms",
    description: "Drown in GST circulars, SEBI notifications, case law. We build you a queryable compliance brain.",
    bg: "var(--accent-pink)"
  },
  {
    icon: GraduationCap,
    title: "Academic Researchers",
    description: "50+ papers on a topic, no way to connect them. We map the entire research landscape.",
    bg: "var(--accent-blue)"
  },
  {
    icon: Rocket,
    title: "Startup Founders",
    description: "Market research, competitor analysis, investor reports. We turn them into decisions.",
    bg: "var(--accent-yellow)"
  },
  {
    icon: BarChart3,
    title: "Investment Analysts",
    description: "200 company reports/year. We turn them into sector intelligence you can query.",
    bg: "var(--accent-green)"
  },
  {
    icon: Users,
    title: "Agencies & Consultants",
    description: "Client history, project learnings, research scattered. We consolidate it all.",
    bg: "var(--accent-pink)"
  },
  {
    icon: Building2,
    title: "HR & Operations",
    description: "SOPs, policies, training docs nobody can find. We make them instantly accessible.",
    bg: "var(--accent-blue)"
  },
];

export default function WhoItsFor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-graph-paper"
      style={{ borderTop: "var(--border-thick)" }}
    >
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "var(--space-12)" }}
        >
          <div style={{
             display: "inline-block", padding: "6px 12px", border: "var(--border-thick)", 
             background: "var(--color-white)", borderRadius: "var(--radius-neo)",
             fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.85rem",
             marginBottom: "var(--space-4)", boxShadow: "var(--shadow-solid-hover)",
             transform: "rotate(-2deg)"
          }}>
             Who It&apos;s For
          </div>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>
            Built for serious professionals.
          </h2>
        </motion.div>

        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "var(--space-6)" }}
        >
          {segments.map((seg, i) => {
            const Icon = seg.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                className="card-neo"
                style={{
                  display: "flex", gap: "var(--space-5)",
                  background: "var(--color-white)"
                }}
              >
                <div style={{
                    width: 52, height: 52, borderRadius: "50%", background: seg.bg,
                    border: "var(--border-thick)", display: "flex", alignItems: "center", 
                    justifyContent: "center", flexShrink: 0, boxShadow: "2px 2px 0px 0px #050505"
                  }}
                >
                  <Icon size={24} color="#050505" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "var(--space-2)" }}>
                    {seg.title}
                  </h3>
                  <p style={{ fontWeight: 500, margin: 0 }}>
                    {seg.description}
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
