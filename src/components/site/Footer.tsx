import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="font-display text-3xl tracking-tight">
              Wealthixs
            </Link>
            <p className="mt-3 max-w-sm font-hand text-2xl leading-tight text-muted-foreground">
              Your knowledge. Compounded.
            </p>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground">
              Custom AI knowledge bases for researchers, consultants, and
              founders who refuse to lose another insight.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Site
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#how-it-works" className="hover:underline">How it works</a></li>
              <li><a href="/#services" className="hover:underline">Services</a></li>
              <li><Link to="/pricing" className="hover:underline">Pricing</Link></li>
              <li><a href="/#faq" className="hover:underline">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:underline">Book a call</Link></li>
              <li><a href="mailto:hello@wealthixs.com" className="hover:underline">hello@wealthixs.com</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Located
            </h4>
            <p className="text-sm text-muted-foreground">
              Built remotely.<br />Headquartered in India.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p className="font-mono">© {new Date().getFullYear()} Wealthixs · All knowledge is structured.</p>
          <p className="font-mono">v1.0 — built with care</p>
        </div>
      </div>
    </footer>
  );
}
