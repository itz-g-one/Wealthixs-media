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
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "var(--color-white)" : "transparent",
          borderBottom: scrolled ? "var(--border-thick)" : "var(--border-thick)",
          borderColor: scrolled ? "var(--color-black)" : "transparent",
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
                  background: "var(--accent-yellow)",
                  border: "var(--border-thick)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: "var(--color-black)",
                  boxShadow: "2px 2px 0px 0px #050505",
                }}
              >
                W
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.35rem",
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                }}
              >
                Wealthixs
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
                    fontFamily: "var(--font-display)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    textDecoration: "none",
                    position: "relative",
                  }}
                  className="hover:underline hover:decoration-2"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden md:inline-flex btn-neo"
              style={{ padding: "8px 24px", fontSize: "0.85rem" }}
            >
              Book Call
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
              style={{
                background: "var(--color-white)",
                border: "var(--border-thick)",
                cursor: "pointer",
                color: "var(--text-primary)",
                padding: 6,
                boxShadow: "2px 2px 0px #000"
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden flex items-center justify-center"
            style={{
              background: "var(--color-white)",
              padding: "var(--space-6)"
            }}
          >
            <div 
               className="w-full h-full flex flex-col justify-center items-center bg-graph-paper" 
               style={{ border: "var(--border-thick)", borderRadius: "var(--radius-neo)" }}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    textDecoration: "none",
                    padding: "var(--space-4)",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-neo"
                style={{ marginTop: "var(--space-8)" }}
              >
                Book a Call <ArrowRight size={20} strokeWidth={2.5} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
