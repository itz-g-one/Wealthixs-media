import problemDoodle from "@/assets/doodle-problem.png";
import { SectionLabel } from "./SectionLabel";

const pains = [
  { pain: "You saved the article. You never re-read it.", reality: "300 tabs, zero recall." },
  { pain: "You researched this 3 months ago. Now you're doing it again.", reality: "Repeated work, wasted hours." },
  { pain: "New team member? Takes months to onboard.", reality: "Knowledge lives in people, not systems." },
  { pain: "Every AI session starts from zero.", reality: "No memory, no context, no compounding." },
  { pain: "Your best insights are buried in PDFs.", reality: "Unindexed knowledge = invisible knowledge." },
];

export function ProblemSection() {
  return (
    <section className="relative border-b border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionLabel number="01" label="The Problem" />
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Your knowledge is{" "}
              <span className="hand-underline">leaking</span>.<br />
              Every day.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Most professionals spend 30–40% of their time searching for
              information they've already encountered. Documents pile up. AI
              chats reset. Knowledge walks out the door when someone leaves.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              The problem isn't that you don't have information. The problem is
              it's not <em>structured, connected, or queryable.</em>
            </p>
            <div className="mt-10 hidden lg:block">
              <img
                src={problemDoodle}
                alt="Person overwhelmed by floating papers"
                width={768}
                height={768}
                loading="lazy"
                className="max-w-xs"
              />
            </div>
          </div>

          <ul className="space-y-3">
            {pains.map((p, i) => (
              <li
                key={i}
                className="group grid gap-2 rounded-xl border border-border bg-card p-5 transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-sketch sm:grid-cols-[auto_1fr_1fr] sm:items-center sm:gap-6"
              >
                <span className="font-mono text-xs uppercase text-muted-foreground sm:w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-xl leading-snug">{p.pain}</p>
                <p className="font-hand text-xl text-muted-foreground sm:text-right">
                  → {p.reality}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
