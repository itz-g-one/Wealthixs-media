import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Wealthixs" },
      {
        name: "description",
        content:
          "Transparent pricing for custom AI knowledge bases. Audit, build, and ongoing retainer plans.",
      },
      { property: "og:title", content: "Pricing — Wealthixs" },
      {
        property: "og:description",
        content: "Transparent pricing for custom AI knowledge bases.",
      },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Audit",
    price: "$1,200",
    cadence: "one-time",
    tagline: "Start here if you're not sure.",
    features: [
      "Full knowledge source inventory",
      "Wiki schema & taxonomy design",
      "Tool stack recommendation",
      "30-page architecture document",
      "60-min walkthrough call",
    ],
    cta: "Book audit",
  },
  {
    name: "Build",
    price: "$4,800",
    cadence: "one-time",
    featured: true,
    tagline: "The full second brain. Yours forever.",
    features: [
      "Everything in Audit",
      "Custom wiki + AI query interface",
      "All ingestion pipelines (PDFs, docs, chats, web)",
      "Vector store setup in your cloud",
      "2 weeks of post-launch refinement",
      "Team training session",
    ],
    cta: "Start build",
  },
  {
    name: "Compound",
    price: "$1,500",
    cadence: "/month",
    tagline: "Keep it growing. Forever.",
    features: [
      "Weekly content ingestion & retraining",
      "Monthly schema refinement",
      "New source integrations as needed",
      "Direct Slack access to founders",
      "Cancel anytime — you own everything",
    ],
    cta: "Add retainer",
  },
];

function PricingPage() {
  return (
    <>
      <section className="relative border-b border-border bg-paper">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-16 sm:px-8 sm:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              pricing · v.1
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Honest pricing.<br />
              <span className="highlight">No retainer traps.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              You always own the system we build. Start with an audit. Or jump
              straight to build. Add the retainer when you're ready.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`relative flex flex-col rounded-2xl border-2 p-8 transition-all hover:translate-y-[-4px] ${
                  t.featured
                    ? "border-ink bg-ink text-paper shadow-sketch-lg"
                    : "border-ink bg-card hover:shadow-sketch"
                }`}
              >
                {t.featured && (
                  <div className="absolute -top-3 left-8 rotate-tilt-1 bg-highlighter px-3 py-1 font-hand text-base text-ink shadow-sketch-sm">
                    most clients start here
                  </div>
                )}
                <h2 className="font-display text-3xl">{t.name}</h2>
                <p className={`mt-1 font-hand text-xl ${t.featured ? "text-highlighter" : "text-muted-foreground"}`}>
                  {t.tagline}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-5xl">{t.price}</span>
                  <span className={`text-sm ${t.featured ? "text-paper/60" : "text-muted-foreground"}`}>
                    {t.cadence}
                  </span>
                </div>
                <ul className={`mt-7 flex-1 space-y-3 border-t pt-6 ${t.featured ? "border-paper/20" : "border-border"}`}>
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className={`mt-1.5 h-1 w-3 flex-shrink-0 ${t.featured ? "bg-highlighter" : "bg-ink"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 inline-flex items-center justify-between rounded-full px-5 py-3 text-sm font-medium transition-all ${
                    t.featured
                      ? "bg-highlighter text-ink hover:bg-paper"
                      : "border border-ink text-ink hover:bg-ink hover:text-paper"
                  }`}
                >
                  {t.cta} <span>→</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border-2 border-dashed border-border bg-card p-8 text-center sm:p-12">
            <p className="font-hand text-2xl text-muted-foreground">need something bigger?</p>
            <h3 className="mt-2 font-display text-3xl">Enterprise & custom builds</h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Multi-team deployments, on-prem hosting, SOC 2 environments,
              specialized retrieval pipelines. Let's design it together.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink px-5 py-3 text-sm font-medium hover:bg-ink hover:text-paper"
            >
              Talk to a founder →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
