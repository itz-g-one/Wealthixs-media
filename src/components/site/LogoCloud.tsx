/**
 * Trust strip — placeholder logos rendered as monospace wordmarks
 * (so we don't fake real customer logos).
 */
const items = [
  "Independent Researchers",
  "Boutique Consultants",
  "Solo Founders",
  "Investment Analysts",
  "Academic Labs",
];

export function LogoCloud() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          Built for knowledge workers like
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {items.map((it) => (
            <span
              key={it}
              className="font-display text-lg text-foreground/60 sm:text-xl"
            >
              {it}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
