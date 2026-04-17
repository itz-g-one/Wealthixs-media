"use client";

import { ArrowRight } from "lucide-react";

const footerLinks = {
  Navigation: [
    { label: "Services", href: "#services" },
    { label: "Our Approach", href: "#process" },
    { label: "Case Studies", href: "#testimonials" },
    { label: "About Us", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ],
  "Contact & Connect": [
    { label: "hello@wealthixs.com", href: "mailto:hello@wealthixs.com" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "WhatsApp", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-dark)",
        color: "var(--text-inverse)",
        padding: "var(--space-16) 0 var(--space-8)",
      }}
    >
      <div className="container-main">
        <div
          className="grid gap-12"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2" style={{ marginBottom: "var(--space-4)" }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: "var(--gradient-gold)",
                  borderRadius: "var(--radius-sm)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#fff",
                }}
              >
                W
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "1.25rem",
                  color: "var(--text-inverse)",
                }}
              >
                Wealthixs Media
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.6,
                maxWidth: "280px",
              }}
            >
              AI-Powered Knowledge Bases.
              <br />
              Structurally Sound. Editorially Elegant.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "0.8125rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: "var(--space-6)",
                }}
              >
                {title}
              </h4>
              <div className="flex flex-col" style={{ gap: "var(--space-3)" }}>
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--brand-gold)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
                    }
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Newsletter / CTA column */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "0.8125rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "var(--space-6)",
              }}
            >
              Get Started
            </h4>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.6,
                marginBottom: "var(--space-4)",
              }}
            >
              Ready to compound your knowledge? Let&apos;s talk.
            </p>
            <a
              href="#contact"
              className="btn-gold"
              style={{ fontSize: "0.85rem", padding: "10px 20px" }}
            >
              Book a Call <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            marginTop: "var(--space-16)",
            paddingTop: "var(--space-6)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "var(--space-4)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.8125rem",
              color: "rgba(255,255,255,0.3)",
              margin: 0,
            }}
          >
            © 2026 Wealthixs. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.9rem",
              fontStyle: "italic",
              color: "var(--brand-gold)",
              margin: 0,
            }}
          >
            &ldquo;Your knowledge. Compounded.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
