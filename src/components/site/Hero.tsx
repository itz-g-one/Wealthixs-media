import { Link } from "@tanstack/react-router";
import heroDoodle from "@/assets/hero-doodle.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Graph paper background */}
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-paper to-transparent" aria-hidden />

      {/* Floating sticky notes */}
      <div className="pointer-events-none absolute left-4 top-32 hidden rotate-tilt-1 lg:block">
        <div className="bg-highlighter px-4 py-2 font-hand text-lg shadow-sketch-sm">
          gets smarter weekly
        </div>
      </div>
      <div className="pointer-events-none absolute right-6 top-44 hidden rotate-tilt-2 lg:block">
        <div className="border border-ink bg-card px-4 py-2 font-mono text-xs uppercase tracking-wider shadow-sketch-sm">
          v.1.0 // active
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24 lg:pb-32 lg:pt-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ink" />
              Now booking — Q2 cohort
            </div>

            <h1 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Turn scattered knowledge into a{" "}
              <span className="highlight">searchable AI memory</span>{" "}
              <em className="font-display italic text-muted-foreground">system.</em>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We build custom AI knowledge bases that organize your files,
              notes, chats, and documents into a structured wiki your team can
              query anytime — and it gets smarter every week.
            </p>

            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper shadow-sketch-sm transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-sketch"
              >
                Book a free discovery call
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-foreground hover:underline"
              >
                See how it works ↓
              </a>
            </div>

            <p className="mt-10 font-hand text-xl text-muted-foreground">
              Trusted by researchers, consultants & founders across India.
            </p>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-border bg-card p-4 shadow-sketch-lg sm:p-6">
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full border border-ink" />
                <span className="h-2.5 w-2.5 rounded-full border border-ink" />
                <span className="h-2.5 w-2.5 rounded-full border border-ink" />
                <span className="ml-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  fig.01 — knowledge flow
                </span>
              </div>
              <img
                src={heroDoodle}
                alt="Hand-drawn diagram showing scattered documents flowing through an AI brain into a structured wiki"
                width={1280}
                height={896}
                className="h-auto w-full"
              />
              <div className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>raw → structured</span>
                <span>queryable · forever</span>
              </div>
            </div>
            {/* corner annotation */}
            <div className="pointer-events-none absolute -bottom-6 -right-2 hidden rotate-tilt-2 sm:block">
              <span className="font-hand text-2xl text-ink">↑ this is the magic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
