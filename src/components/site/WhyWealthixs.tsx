import { SectionLabel } from "./SectionLabel";

const reasons = [
  { t: "We build, not bolt-on", d: "No off-the-shelf chatbot wrappers. Every system is architected for your knowledge shape." },
  { t: "You own everything", d: "Code, schema, vector store, prompts. We hand over the keys. No vendor lock-in. Ever." },
  { t: "Compounding > flashy", d: "We measure success in months, not demos. The system you launch is the worst it'll ever be." },
  { t: "Direct founder access", d: "No account managers. You work with the people building the thing. Slack, weekly, always." },
];

export function WhyWealthixs() {
  return (
    <section className="border-b border-border bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionLabel number="07" label="Why us" />
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              We're not an AI agency.<br />
              <em className="italic">We're knowledge engineers.</em>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              The market is full of teams selling "AI transformation." We sell
              one thing: a system that remembers everything you know and helps
              you act on it.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-ink bg-ink shadow-sketch sm:grid-cols-2">
            {reasons.map((r, i) => (
              <div key={i} className="bg-paper p-7">
                <div className="mb-3 flex items-baseline gap-3">
                  <span className="font-display text-4xl text-ink/30">0{i + 1}</span>
                  <h3 className="font-display text-2xl">{r.t}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
