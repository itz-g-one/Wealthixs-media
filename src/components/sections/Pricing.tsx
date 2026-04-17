"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check, Star } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "₹15,000",
    period: "one-time",
    description: "Basic Knowledge Base, 1 User, Email Support",
    features: [
      "10–15 sources ingested",
      "Custom schema for your domain",
      "Folder structure setup",
      "wiki/index.md initialized",
      "30-min onboarding call",
      "1 month WhatsApp support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Research",
    price: "₹40,000",
    period: "one-time",
    description: "Advanced Knowledge Base, 5 Users, Priority Support, Custom Integrations",
    features: [
      "30–60 sources ingested",
      "Deep schema customization",
      "Entity + concept pages with cross-references",
      "Full wiki health check at delivery",
      "1-hour query training (recorded)",
      "3 months async support",
    ],
    cta: "Get Research",
    highlighted: true,
  },
  {
    name: "Maintenance",
    price: "₹8,000",
    period: "/month",
    description: "Regular Updates, Data Refresh, 2 Users",
    features: [
      "10–20 new sources per month",
      "All wiki pages updated",
      "Monthly health lint report",
      "Summary email with changes",
      "Gap analysis report",
      "Priority async support",
    ],
    cta: "Subscribe",
    highlighted: false,
  },
  {
    name: "Team",
    price: "₹1,00,000",
    period: "one-time",
    description: "Enterprise Knowledge Base, Unlimited Users, Dedicated Account Manager, API Access",
    features: [
      "Company-wide wiki: SOPs, policies, client intel",
      "Team onboarding (up to 5 people)",
      "Obsidian query interface for all members",
      "Monthly maintenance for 3 months included",
      "Dedicated Slack/Teams channel",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="pricing"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container-main">
        {/* Section header */}
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
            Pricing
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
            Transparent Pricing
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              maxWidth: "460px",
              margin: "0 auto",
            }}
          >
            Flexible plans for teams of all sizes. No hidden fees.
          </p>
        </motion.div>

        {/* Pricing grid */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "var(--space-6)",
          }}
        >
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                background: "var(--bg-card)",
                border: pkg.highlighted
                  ? "2px solid var(--brand-gold)"
                  : "1px solid var(--border-card)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-8)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "var(--shadow-lg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {pkg.highlighted && (
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--gradient-gold)",
                    color: "var(--bg-dark)",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    padding: "4px 16px",
                    borderRadius: "var(--radius-full)",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <Star size={10} /> Recommended
                </div>
              )}

              {/* Package name */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "var(--space-2)",
                  textDecoration: "underline",
                  textDecorationColor: "var(--brand-gold)",
                  textUnderlineOffset: "6px",
                }}
              >
                {pkg.name}
              </h3>

              {/* Price */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "4px",
                  marginBottom: "var(--space-4)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2.25rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  {pkg.price}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {pkg.period}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "var(--space-6)",
                  paddingBottom: "var(--space-6)",
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                {pkg.description}
              </p>

              {/* Features */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-3)",
                  flex: 1,
                  marginBottom: "var(--space-8)",
                }}
              >
                {pkg.features.map((feature, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                    }}
                  >
                    <Check
                      size={16}
                      style={{
                        color: "var(--brand-gold)",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.85rem",
                        color: "var(--text-secondary)",
                        lineHeight: 1.5,
                      }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={pkg.highlighted ? "btn-gold" : "btn-secondary"}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  fontSize: "0.875rem",
                  padding: "12px 24px",
                }}
              >
                {pkg.cta}
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            color: "var(--text-secondary)",
            textAlign: "center",
            marginTop: "var(--space-12)",
          }}
        >
          Not sure which package is right?{" "}
          <a
            href="#contact"
            style={{
              color: "var(--brand-gold)",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            Book a free 30-min call
          </a>{" "}
          and we&apos;ll tell you exactly what you need.
        </motion.p>
      </div>
    </section>
  );
}
