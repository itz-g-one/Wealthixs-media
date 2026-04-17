import solutionDoodle from "@/assets/doodle-solution.png";
import { SectionLabel } from "./SectionLabel";

const features = [
  { t: "Structured wiki", d: "Notion-style hierarchy. Folders, tags, backlinks. Built for the way your brain already works." },
  { t: "Semantic search", d: "Ask in plain English. Get the exact paragraph, the exact source, the exact context." },
  { t: "Auto-ingestion", d: "Drop a PDF, paste a chat, forward an email. It gets parsed, indexed, and connected." },
  { t: "Compounds weekly", d: "We retrain on your new content every week. The system gets smarter while you sleep." },
];

export function SolutionSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-card">
      <div className="absolute inset-0 bg-dots opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionLabel number="02" label="The Solution" />
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              We build you a{" "}
              <span className="highlight">second brain</span>{" "}
              that thinks with you.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Wealthixs designs and operates a custom AI knowledge base for your
              business. Not a chatbot. Not another folder. A queryable memory
              system, structured like a wiki and powered by retrieval-augmented
              AI — fully owned by you.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {features.map((f, i) => (
                <div
                  key={f.t}
                  className="rounded-xl border border-border bg-paper p-5 transition-all hover:shadow-sketch-sm"
                >
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    F.{String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-2xl">{f.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-start justify-center">
            <img
              src={solutionDoodle}
              alt="Calm person at clean desk with organized wiki tree above"
              width={768}
              height={768}
              loading="lazy"
              className="max-w-md animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
