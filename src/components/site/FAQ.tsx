import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const faqs = [
  { q: "What kind of files can you ingest?", a: "PDFs, Google Docs, Notion exports, Markdown, plain text, web pages, email threads, Slack channels, ChatGPT/Claude conversation exports, audio transcripts, and structured data (CSVs, sheets). If it has text, we can ingest it." },
  { q: "Where does my data live? Is it private?", a: "Your knowledge base lives in infrastructure you own — your cloud, your accounts. We don't host your data. AI inference runs on your chosen provider (OpenAI, Anthropic, or a self-hosted model). You retain full ownership." },
  { q: "Do I need to be technical?", a: "No. The query interface is plain English. We handle every technical layer — pipelines, embeddings, retraining. Most clients have zero engineering background." },
  { q: "How is this different from Notion AI or ChatGPT?", a: "Notion AI works only inside Notion. ChatGPT has no memory of your files between chats. We build a dedicated knowledge layer that ingests from everywhere, structures everything, and answers across your entire corpus — with citations." },
  { q: "What's the typical ROI?", a: "Most clients save 6–10 hours per week within the first month. By month 3, the system is doing knowledge work that used to require a junior hire." },
  { q: "What if I want to leave?", a: "You already own everything. We hand over schemas, code, vector stores, and credentials at launch. There's nothing to 'leave.' We earn the retainer every month." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-b border-border">
      <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="mb-14 text-center">
          <SectionLabel number="08" label="FAQ" />
          <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            Questions, <em className="italic">answered</em>.
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:bg-secondary/50"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-xl sm:text-2xl">{f.q}</span>
                  <Plus
                    className={`h-5 w-5 flex-shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                {isOpen && (
                  <p className="pb-6 pr-12 text-base leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
