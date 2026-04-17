import { SectionLabel } from "./SectionLabel";

const rows = [
  { before: "Search through 12 apps", after: "Ask one wiki" },
  { before: "Re-do research from scratch", after: "Build on past work" },
  { before: "Knowledge walks out with people", after: "Knowledge stays in the system" },
  { before: "AI starts from zero each chat", after: "AI knows everything you've ever taught it" },
  { before: "Onboarding takes months", after: "New hires query, learn, ship in days" },
];

export function BeforeAfter() {
  return (
    <section className="relative border-b border-border">
      <div className="absolute inset-0 bg-grid-fine opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="mb-14 text-center">
          <SectionLabel number="03" label="Before / After" />
          <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            What changes when your knowledge becomes{" "}
            <em className="italic">infrastructure</em>.
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-ink bg-card shadow-sketch-lg">
          <div className="grid grid-cols-[1fr_auto_1fr] border-b border-border bg-paper">
            <div className="px-6 py-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Before Wealthixs
            </div>
            <div className="border-x border-border" />
            <div className="bg-highlighter px-6 py-4 font-mono text-xs uppercase tracking-widest text-ink">
              After Wealthixs
            </div>
          </div>
          {rows.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-border last:border-b-0"
            >
              <div className="px-6 py-5 text-sm text-muted-foreground line-through decoration-1 sm:text-base">
                {r.before}
              </div>
              <div className="border-x border-border px-3 py-5 font-hand text-2xl text-ink">→</div>
              <div className="px-6 py-5 font-display text-lg sm:text-xl">{r.after}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
