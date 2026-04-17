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
    description:
      "Drown in GST circulars, SEBI notifications, case law. We build you a queryable compliance brain.",
  },
  {
    icon: GraduationCap,
    title: "Academic Researchers & PhDs",
    description:
      "50+ papers on a topic, no way to connect them. We map the entire research landscape.",
  },
  {
    icon: Rocket,
    title: "Startup Founders",
    description:
      "Market research, competitor analysis, investor reports piling up unread. We turn them into decisions.",
  },
  {
    icon: BarChart3,
    title: "Investment Analysts",
    description:
      "200 company reports/year. We turn them into sector intelligence you can query in seconds.",
  },
  {
    icon: Users,
    title: "Agencies & Consultants",
    description:
      "Client history, project learnings, research scattered across tools. We consolidate it all.",
  },
  {
    icon: Building2,
    title: "HR & Operations Teams",
    description:
      "SOPs, policies, training docs that nobody can find. We make them instantly accessible.",
  },
];

export default function WhoItsFor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
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
          <span
            className="section-label"
            style={{ justifyContent: "center" }}
          >
            Who It&apos;s For
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
            Built for knowledge-intensive professionals.
          </h2>
        </motion.div>

        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "var(--space-6)",
          }}
        >
          {segments.map((seg, i) => {
            const Icon = seg.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="card"
                style={{
                  display: "flex",
                  gap: "var(--space-5)",
                  padding: "var(--space-6)",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "var(--radius-md)",
                    background: "var(--brand-gold-bg)",
                    border: "1px solid rgba(201,168,76,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} style={{ color: "var(--brand-gold)" }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: "var(--space-2)",
                    }}
                  >
                    {seg.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
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
