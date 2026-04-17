import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Wealthixs" },
      {
        name: "description",
        content: "Book a free 30-minute discovery call. We'll map your knowledge sources and show you what's possible.",
      },
      { property: "og:title", content: "Contact — Wealthixs" },
      {
        property: "og:description",
        content: "Book a free 30-minute discovery call with the Wealthixs team.",
      },
    ],
  }),
  component: ContactPage,
});

const leadSchema = z.object({
  name: z.string().trim().min(1, "Your name, please.").max(100, "Keep it under 100 chars."),
  email: z.string().trim().email("That doesn't look like an email.").max(255),
  contact_method: z.string().trim().max(150).optional().or(z.literal("")),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  knowledge_size: z.string().max(50).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more (10 chars min).").max(2000, "Keep it under 2000 chars."),
});

const sizes = ["Just me", "2–10 people", "11–50 people", "50+ people"];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      contact_method: String(fd.get("contact_method") ?? ""),
      company: String(fd.get("company") ?? ""),
      knowledge_size: String(fd.get("knowledge_size") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const parsed = leadSchema.safeParse(raw);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[String(issue.path[0])] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("leads").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      contact_method: parsed.data.contact_method || null,
      company: parsed.data.company || null,
      knowledge_size: parsed.data.knowledge_size || null,
      message: parsed.data.message,
    });
    setSubmitting(false);

    if (error) {
      toast.error("Something went wrong. Try again, or email hello@wealthixs.com directly.");
      return;
    }

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
          subject: `New Lead: ${parsed.data.name}`,
          from_name: "Wealthixs Forms",
          to: "welathixs2007@gmail.com",
          name: parsed.data.name,
          email: parsed.data.email,
          contact_method: parsed.data.contact_method || "N/A",
          company: parsed.data.company || "N/A",
          knowledge_size: parsed.data.knowledge_size || "N/A",
          message: parsed.data.message,
        }),
      });
    } catch (err) {
      console.error("Web3Forms error:", err);
    }

    setDone(true);
    toast.success("Got it! We will contact you surely via your preferred method.");
  }

  return (
    <>
      <Toaster />
      <section className="relative border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-16 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1.2fr]">
          {/* Left: pitch */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              contact · book a call
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
              Let's design your <span className="highlight">second brain</span>.
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              30 minutes. We'll map your knowledge sources, spot the leaks, and
              walk you through what your custom system would look like.
            </p>

            <div className="mt-10 space-y-4 border-t border-border pt-8">
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">01</span>
                <p className="text-sm">You submit the form below.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">02</span>
                <p className="text-sm">We respond within 24 hours with a calendar link.</p>
              </div>
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">03</span>
                <p className="text-sm">We talk. No slides, no pitch. Just your knowledge problem.</p>
              </div>
            </div>

            <p className="mt-12 font-hand text-2xl text-muted-foreground">
              or just email <a href="mailto:hello@wealthixs.com" className="text-ink underline">hello@wealthixs.com</a> ↗
            </p>
          </div>

          {/* Right: form */}
          <div>
            {done ? (
              <div className="rounded-2xl border-2 border-ink bg-card p-10 text-center shadow-sketch-lg">
                <p className="font-hand text-3xl text-ink">message received ✺</p>
                <h2 className="mt-3 font-display text-3xl">Talk soon.</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  We've received your submission. Our team reads every message
                  personally, and we will surely contact you soon via your preferred method.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border-2 border-ink bg-card p-6 shadow-sketch-lg sm:p-8"
                noValidate
              >
                <div className="mb-6 flex items-center gap-3 border-b border-border pb-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-highlighter" />
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    intake form / v.1
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Your name" name="name" placeholder="Ada Lovelace" required error={errors.name} />
                  <Field label="Email" name="email" type="email" placeholder="ada@lab.org" required error={errors.email} />
                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <Field label="Company / project" name="company" placeholder="(optional)" error={errors.company} />
                  <Field label="Where should we contact you?" name="contact_method" placeholder="Email, WhatsApp, Discord..." error={errors.contact_method} />
                </div>

                <div className="mt-5">
                  <div>
                    <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      Team size
                    </label>
                    <select
                      name="knowledge_size"
                      defaultValue=""
                      className="w-full rounded-lg border border-border bg-paper px-4 py-3 text-sm focus:border-ink focus:outline-none"
                    >
                      <option value="">Select…</option>
                      {sizes.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                    What knowledge problem are you solving?
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="I have 3 years of research scattered across Notion, Drive, and 47 Slack channels..."
                    className={`w-full rounded-lg border bg-paper px-4 py-3 text-sm focus:border-ink focus:outline-none ${
                      errors.message ? "border-destructive" : "border-border"
                    }`}
                    maxLength={2000}
                  />
                  {errors.message && (
                    <p className="mt-1.5 font-mono text-[11px] text-destructive">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-medium text-paper transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-sketch disabled:opacity-60 disabled:hover:translate-x-0 disabled:hover:translate-y-0"
                >
                  {submitting ? "Sending…" : "Send & book a call →"}
                </button>

                <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  no spam · we reply personally
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", placeholder, required, error,
}: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean; error?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
        {label} {required && <span className="text-ink">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`w-full rounded-lg border bg-paper px-4 py-3 text-sm focus:border-ink focus:outline-none ${
          error ? "border-destructive" : "border-border"
        }`}
        maxLength={type === "email" ? 255 : 150}
      />
      {error && <p className="mt-1.5 font-mono text-[11px] text-destructive">{error}</p>}
    </div>
  );
}
