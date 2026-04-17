"use client";

import { ArrowRight } from "lucide-react";

const footerLinks = {
  Navigation: [
    { label: "Our Approach", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  "Contact Us": [
    { label: "hello@wealthixs.com", href: "mailto:hello@wealthixs.com" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-black)", color: "var(--color-white)", borderTop: "var(--border-thick)", paddingTop: "var(--space-16)", paddingBottom: "var(--space-8)" }}>
      <div className="container-main">
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "var(--space-12)" }}>
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2" style={{ marginBottom: "var(--space-4)" }}>
              <div style={{
                  width: 36, height: 36, background: "var(--accent-yellow)", border: "2px solid white",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "black",
                  fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.1rem",
                }}>W</div>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.35rem" }}>
                Wealthixs
              </span>
            </div>
            <p style={{ fontWeight: 500, color: "rgba(255,255,255,0.7)", maxWidth: "260px" }}>
              AI-Powered Knowledge Bases. Structurally Sound. Editorially Elegant.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 700, marginBottom: "var(--space-4)" }}>
                {title}
              </h4>
              <div className="flex flex-col" style={{ gap: "var(--space-2)" }}>
                {links.map((link) => (
                  <a key={link.label} href={link.href} className="hover:underline hover:decoration-2" style={{
                      color: "rgba(255,255,255,0.8)", textDecoration: "none", fontWeight: 500
                    }}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "2px solid rgba(255,255,255,0.2)", marginTop: "var(--space-16)", paddingTop: "var(--space-6)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <p style={{ fontWeight: 500, color: "rgba(255,255,255,0.5)", margin: 0 }}>© 2026 Wealthixs. All rights reserved.</p>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--accent-yellow)", margin: 0 }}>Your knowledge. Compounded.</p>
        </div>
      </div>
    </footer>
  );
}
