"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "What file types do you support?",
      a: "PDFs, Word documents, Markdown files, plain text, web articles (via URL), meeting transcripts, WhatsApp exports, Notion page exports, and more.",
    },
    {
      q: "Is my data private?",
      a: "Yes. Your knowledge base is built locally or in your own private storage. We never retain your documents on our servers after delivery.",
    },
    {
      q: "Does it work for teams?",
      a: "Yes. The Team Knowledge Base package includes multi-user setup with Obsidian. Everyone on your team can query the same wiki.",
    },
    {
      q: "How long does setup take?",
      a: "Starter Brain: 5–7 days. Full Research Brain: 2–3 weeks. Team Knowledge Base: 4–6 weeks.",
    },
    {
      q: "Do I need to be technical?",
      a: "No. We handle all setup. You just need to supply your documents and show up for the onboarding call.",
    },
    {
      q: "Can I add my own sources after delivery?",
      a: "Yes — either via our monthly retainer, or we can train you to run ingests yourself (Done-With-You session).",
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#0A0A0F] relative">
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(242,240,236,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(242,240,236,0.2)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[800px] relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-cormorant text-4xl sm:text-5xl text-[#F2F0EC] mb-12 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <Accordion.Item value={`item-${i}`} key={i} className="bg-[#16161E] border border-[rgba(242,240,236,0.08)] rounded-lg overflow-hidden transition-all data-[state=open]:border-l-4 data-[state=open]:border-[#C9A84C]">
                <Accordion.Header>
                  <Accordion.Trigger className="w-full focus:outline-none flex justify-between items-center px-6 py-5 cursor-pointer text-left group">
                    <span className="font-dm-sans font-medium text-[16px] text-[#F2F0EC] group-hover:text-[#C9A84C] transition-colors">{faq.q}</span>
                    <ChevronDown className="w-5 h-5 text-[#9B9690] transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-[#9B9690] text-[15px] font-dm-sans leading-relaxed px-6 pb-5 pt-0 data-[state=open]:animate-[fadeUp_0.3s_ease-out]">
                  {faq.a}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
