"use client";

import { motion } from "framer-motion";
import { UploadCloud, Layers, Zap } from "lucide-react";

export default function Solution() {
  const steps = [
    {
      number: "01",
      icon: <UploadCloud className="text-[#C9A84C] w-6 h-6" />,
      title: "Feed It",
      desc: "Upload your PDFs, reports, notes, links, meeting transcripts, SOPs. Any format.",
    },
    {
      number: "02",
      icon: <Layers className="text-[#C9A84C] w-6 h-6" />,
      title: "Build It",
      desc: "Our AI reads every source, extracts concepts, creates 10–15 interconnected wiki pages per document, builds backlinks, and compiles everything.",
    },
    {
      number: "03",
      icon: <Zap className="text-[#C9A84C] w-6 h-6" />,
      title: "Query It",
      desc: "Ask any question. Get precise answers citing your actual documents — not generic AI guesses. Updates every month.",
    },
  ];

  return (
    <section id="solution" className="py-24 bg-[#0A0A0F] relative">
      {/* Decorative corner brackets */}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <div className="absolute top-12 left-12 w-6 h-6 border-t border-l border-[rgba(242,240,236,0.15)]" />
        <div className="absolute top-12 right-12 w-6 h-6 border-t border-r border-[rgba(242,240,236,0.15)]" />
      </div>

      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-cormorant text-4xl sm:text-5xl text-[#F2F0EC] mb-4"
          >
            We build your AI Knowledge Brain.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg font-dm-sans text-[#9B9690] leading-relaxed"
          >
            A private, structured wiki of your entire domain — compiled by AI, organized by design, queryable in seconds.
          </motion.p>
        </div>

        {/* 3 Step Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-[1px] bg-[rgba(201,168,76,0.2)] border-t border-dashed pointer-events-none z-0"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-[#16161E] border border-[rgba(201,168,76,0.3)] mb-6 flex flex-col items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-[#C9A84C] group-hover:shadow-[0_0_30px_rgba(201,168,76,0.2)] transition-all duration-300">
                {step.icon}
                <span className="text-xs font-mono font-medium text-[#C9A84C] mt-2 block">{step.number}</span>
              </div>
              <h3 className="text-xl font-dm-sans font-medium text-[#F2F0EC] mb-3">{step.title}</h3>
              <p className="text-sm font-dm-sans text-[#9B9690] leading-relaxed px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Before / After Split Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-[rgba(242,240,236,0.08)] shadow-2xl"
        >
          {/* Before */}
          <div className="bg-[#111118] p-10 md:p-14">
            <h3 className="font-mono text-sm tracking-widest text-[#E05555] uppercase mb-8">Before Wealthixs</h3>
            <ul className="space-y-6">
              {[
                "30 PDFs on your desktop, unread",
                "Ask AI → gets it wrong",
                "Knowledge resets each AI session",
                "New research takes 4 hours to integrate",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full border border-[rgba(242,240,236,0.2)] flex-shrink-0 mt-0.5" />
                  <span className="text-[#9B9690] font-dm-sans text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-[linear-gradient(135deg,#16161E_0%,#1A1A25_100%)] p-10 md:p-14 border-t md:border-t-0 md:border-l border-[rgba(201,168,76,0.3)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.1)_0%,transparent_70%)] pointer-events-none" />
            <h3 className="font-mono text-sm tracking-widest text-[#C9A84C] uppercase mb-8 relative z-10">After Wealthixs</h3>
            <ul className="space-y-6 relative z-10">
              {[
                "Every PDF read, indexed, connected",
                "Ask AI → cites exact pages from your wiki",
                "Context permanently accumulated",
                "Ingest in 15 mins, linked to everything",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-[#C9A84C] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#0A0A0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[#F2F0EC] font-dm-sans text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
