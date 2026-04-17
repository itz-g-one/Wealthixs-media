import { Link } from "@tanstack/react-router";
import featuresDoodle from "@/assets/doodle-features.png";
import { SectionLabel } from "./SectionLabel";

const services = [
  {
    name: "Audit & Architecture",
    price: "From $1,200",
    timeline: "1–2 weeks",
    desc: "We map your knowledge sources, design the wiki structure, and hand you a blueprint you could build yourself.",
    deliverables: ["Knowledge audit report", "Schema & taxonomy design", "Tooling recommendation"],
  },
  {
    name: "Build & Launch",
    price: "From $4,800",
    timeline: "3–5 weeks",
    desc: "We build the full system end-to-end. Ingestion pipelines, vector store, query interface — all branded, all yours.",
    deliverables: ["Custom wiki + AI query layer", "All ingestion pipelines", "Team training & docs"],
    featured: true,
  },
  {
    name: "Compounding Retainer",
    price: "From $1,500/mo",
    timeline: "Ongoing",
    desc: "We feed it weekly. Re-train, reorganize, prune. Your second brain quietly gets smarter while you focus on work.",
    deliverables: ["Weekly content ingestion", "Monthly schema refinement", "Priority support & evolution"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative border-b border-border bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="mb-14 grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <SectionLabel number="05" label="Services" />
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Three ways to work with us.
            </h2>
            <p className="mt-5 text-base text-muted-foreground">
              Pick a starting point. Most clients begin with an audit, then
              graduate into build + retainer.
            </p>
          </div>
          <img
            src={featuresDoodle}
            alt="Hand-drawn icons of magnifier, brain, folder, chat"
            width={1024}
            height={1024}
            loading="lazy"
            className="hidden h-32 w-32 md:block"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.name}
              className={`relative flex flex-col rounded-2xl border-2 p-7 transition-all hover:translate-y-[-4px] ${
                s.featured
                  ? "border-ink bg-ink text-paper shadow-sketch-lg"
                  : "border-ink bg-card hover:shadow-sketch"
              }`}
            >
              {s.featured && (
                <div className="absolute -top-3 left-7 rotate-tilt-1 bg-highlighter px-3 py-1 font-hand text-base text-ink shadow-sketch-sm">
                  most popular
                </div>
              )}
              <div className="flex items-center justify-between">
                <span className={`font-mono text-[11px] uppercase tracking-widest ${s.featured ? "text-paper/60" : "text-muted-foreground"}`}>
                  S.0{i + 1}
                </span>
                <span className={`font-mono text-[11px] uppercase tracking-widest ${s.featured ? "text-paper/60" : "text-muted-foreground"}`}>
                  {s.timeline}
                </span>
              </div>
              <h3 className="mt-4 font-display text-3xl">{s.name}</h3>
              <p className={`mt-2 font-hand text-2xl ${s.featured ? "text-highlighter" : "text-ink"}`}>
                {s.price}
              </p>
              <p className={`mt-4 text-sm leading-relaxed ${s.featured ? "text-paper/80" : "text-muted-foreground"}`}>
                {s.desc}
              </p>
              <ul className={`mt-6 space-y-2.5 border-t pt-5 ${s.featured ? "border-paper/20" : "border-border"}`}>
                {s.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm">
                    <span className={`mt-1.5 h-1 w-3 flex-shrink-0 ${s.featured ? "bg-highlighter" : "bg-ink"}`} />
                    {d}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-7 inline-flex items-center justify-between rounded-full px-5 py-3 text-sm font-medium transition-all ${
                  s.featured
                    ? "bg-highlighter text-ink hover:bg-paper"
                    : "border border-ink text-ink hover:bg-ink hover:text-paper"
                }`}
              >
                Start here <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
