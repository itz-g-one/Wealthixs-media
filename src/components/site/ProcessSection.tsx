import { SectionLabel } from "./SectionLabel";

const steps = [
  { week: "Week 0", title: "Discovery call", desc: "30 minutes. We map your sources, your team, your goals. No slides." },
  { week: "Week 1", title: "Knowledge audit", desc: "Every PDF, doc, chat, note. We catalog what you have and what's missing." },
  { week: "Week 2", title: "Architecture", desc: "We design the wiki schema, the taxonomy, the query patterns. You approve." },
  { week: "Week 3–4", title: "Build", desc: "Ingestion pipelines, vector store, query interface. Daily standups." },
  { week: "Week 5", title: "Launch & train", desc: "We onboard your team. Real queries, real workflows, real adoption." },
  { week: "Ongoing", title: "Compound weekly", desc: "We feed, retrain, refine. The system gets sharper every Monday." },
];

export function ProcessSection() {
  return (
    <section id="how-it-works" className="relative border-b border-border bg-card">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="mb-14 max-w-2xl">
          <SectionLabel number="06" label="Process" />
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            From scattered to{" "}
            <span className="highlight">structured</span>{" "}
            in 5 weeks.
          </h2>
        </div>

        <ol className="relative">
          {/* vertical line */}
          <div className="absolute bottom-0 left-[7rem] top-2 hidden w-px bg-ink sm:block" aria-hidden />
          {steps.map((s, i) => (
            <li key={i} className="relative grid gap-2 border-b border-border py-7 sm:grid-cols-[7rem_auto_1fr] sm:items-start sm:gap-6">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground sm:pt-1">
                {s.week}
              </div>
              <div className="hidden sm:block">
                <div className="relative -ml-1.5 mt-1.5 h-3 w-3 rounded-full border-2 border-ink bg-paper" />
              </div>
              <div className="sm:pl-2">
                <h3 className="font-display text-2xl">{s.title}</h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
