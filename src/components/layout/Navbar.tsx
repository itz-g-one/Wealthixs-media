"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Approach", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.0)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
        }}
      >
        <div className="container-main">
          <nav
            className="flex items-center justify-between"
            style={{ height: "72px" }}
          >
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 no-underline"
              style={{ textDecoration: "none" }}
            >
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
                  fontSize: "1.35rem",
                  color: "var(--text-primary)",
                  letterSpacing: "-0.01em",
                }}
              >
                Wealthixs Media
              </span>
            </a>

            {/* Desktop Links */}
            <div
              className="hidden md:flex items-center"
              style={{ gap: "var(--space-8)" }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    fontWeight: 400,
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                    position: "relative",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--text-primary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-secondary)")
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden md:inline-flex btn-gold"
              style={{ padding: "10px 24px", fontSize: "0.85rem" }}
            >
              Book a Call
              <ArrowRight size={14} />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--text-primary)",
                padding: 8,
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{
              background: "rgba(255,255,255,0.98)",
              backdropFilter: "blur(20px)",
              paddingTop: "80px",
            }}
          >
            <div className="container-main flex flex-col" style={{ gap: "var(--space-2)" }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                    textDecoration: "none",
                    padding: "var(--space-4) 0",
                    borderBottom: "1px solid var(--border-subtle)",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-gold"
                style={{ marginTop: "var(--space-8)", textAlign: "center" }}
              >
                Book a Call <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
