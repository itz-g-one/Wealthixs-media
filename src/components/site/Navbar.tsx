import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/#how-it-works", label: "How it works", hash: true },
  { to: "/#services", label: "Services", hash: true },
  { to: "/pricing", label: "Pricing" },
  { to: "/#faq", label: "FAQ", hash: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "border-b border-border bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-tight">Wealthixs</span>
          <span className="font-hand text-xl text-muted-foreground -mt-1">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) =>
            l.hash ? (
              <a
                key={l.to}
                href={l.to}
                className="text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-foreground/70 transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground font-medium" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-sketch-sm"
          >
            Book a call
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        <button
          aria-label="Menu"
          className="md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-paper md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {navLinks.map((l) =>
              l.hash ? (
                <a
                  key={l.to}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-secondary"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-secondary"
                >
                  {l.label}
                </Link>
              ),
            )}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper"
            >
              Book a call →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
