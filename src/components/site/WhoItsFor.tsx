import { SectionLabel } from "./SectionLabel";

const personas = [
  {
    title: "Researchers",
    desc: "Stop losing the paper you read 3 months ago. Build a living literature review.",
    items: ["Auto-ingest PDFs & arxiv links", "Citation-aware search", "Cross-paper synthesis"],
  },
  {
    title: "Consultants",
    desc: "Your past projects become your sharpest competitive edge — instantly recallable.",
    items: ["Client-segregated workspaces", "Templated playbooks", "Proposal-ready snippets"],
  },
  {
    title: "Founders & operators",
    desc: "The company brain. Onboard new hires in days, not months. Scale the way you think.",
    items: ["Team-wide query access", "Slack & email ingestion", "Decision logs that don't rot"],
  },
];

export function WhoItsFor() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="mb-14 max-w-2xl">
          <SectionLabel number="04" label="Who it's for" />
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Built for people whose <span className="highlight">edge is what they know</span>.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {personas.map((p, i) => (
            <div
              key={p.title}
              className="group flex flex-col rounded-2xl border border-border bg-paper p-7 transition-all hover:translate-y-[-3px] hover:shadow-sketch"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  P.0{i + 1}
                </span>
                <span className="font-hand text-xl text-ink/40 transition-colors group-hover:text-ink">
                  ✺
                </span>
              </div>
              <h3 className="font-display text-3xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 h-1 w-3 flex-shrink-0 bg-ink" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
