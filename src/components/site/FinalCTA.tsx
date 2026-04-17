import { Link } from "@tanstack/react-router";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-5 py-28 text-center sm:px-8 lg:py-36">
        <p className="font-hand text-3xl text-highlighter">Ready when you are.</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Stop losing what you already know.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-paper/70">
          Book a 30-minute discovery call. We'll map your knowledge sources,
          spot the leaks, and show you exactly what your second brain could do.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-highlighter px-7 py-4 text-base font-medium text-ink transition-all hover:translate-x-[-2px] hover:translate-y-[-2px]"
            style={{ boxShadow: "4px 4px 0 0 rgba(255,255,255,0.9)" }}
          >
            Book a free discovery call
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            to="/pricing"
            className="text-sm text-paper/70 underline-offset-4 hover:text-paper hover:underline"
          >
            See pricing first ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
