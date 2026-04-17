"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
  const packages = [
    {
      title: "Starter Brain",
      price: "₹15k – ₹25k",
      subtitle: "(one-time)",
      ideal: "Best for solo founders & small practitioners.",
      features: [
        "10–15 sources ingested",
        "Custom schema for your domain",
        "Folder structure setup",
        "wiki/index.md initialized",
        "30-min onboarding call",
        "1 month WhatsApp support"
      ],
      recommended: false,
    },
    {
      title: "Research Brain Build",
      price: "₹40k – ₹80k",
      subtitle: "(one-time)",
      ideal: "Best for researchers, consultants, law firms.",
      features: [
        "30–60 sources ingested",
        "Deep schema customization",
        "Entity + concept pages w/ cross-refs",
        "Full wiki health check at delivery",
        "1-hour query training (recorded)",
        "3 months async support"
      ],
      recommended: true,
    },
    {
      title: "Monthly Retainer",
      price: "₹8k – ₹20k",
      subtitle: "/month",
      ideal: "Keep your knowledge base growing.",
      features: [
        "10–20 new sources per month",
        "All wiki pages updated",
        "Monthly health lint report",
        "Contradictions & gaps flagged",
        "Summary email of updates"
      ],
      recommended: false,
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#111118] relative">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-cormorant text-4xl sm:text-5xl text-[#F2F0EC] mb-4"
          >
            Choose your starting point.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative bg-[#16161E] rounded-2xl p-8 flex flex-col border transition-all duration-300 hover:-translate-y-2
                ${pkg.recommended 
                  ? "border-[#C9A84C] shadow-[0_16px_40px_rgba(201,168,76,0.15)]" 
                  : "border-[rgba(242,240,236,0.08)] hover:border-[#C9A84C]/50"
                }
              `}
            >
              {pkg.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C9A84C] text-[#0A0A0F] font-dm-sans font-medium text-xs px-4 py-1 rounded-full tracking-wider uppercase">
                  Recommended
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-dm-sans font-medium text-[#F2F0EC] mb-2">{pkg.title}</h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-cormorant text-4xl font-semibold text-[#C9A84C]">{pkg.price}</span>
                  <span className="text-sm font-dm-sans text-[#9B9690]">{pkg.subtitle}</span>
                </div>
                <p className="text-sm font-dm-sans text-[#9B9690]">{pkg.ideal}</p>
              </div>

              <div className="flex-grow mb-8 line-art-divider relative pt-8 border-t border-[rgba(242,240,236,0.08)]">
                <ul className="space-y-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-dm-sans text-[#F2F0EC]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-3 rounded-md font-dm-sans font-medium transition-all duration-300
                ${pkg.recommended 
                  ? "bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] text-[#0A0A0F] shadow-[0_4px_14px_rgba(201,168,76,0.4)] hover:shadow-[0_6px_20px_rgba(201,168,76,0.6)]" 
                  : "bg-transparent border border-[rgba(242,240,236,0.14)] text-[#F2F0EC] hover:border-[#C9A84C] hover:text-[#C9A84C]"
                }
              `}>
                Select Package
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-[#9B9690] font-dm-sans mb-4">Not sure which package is right?</p>
          <button className="text-[#C9A84C] font-dm-sans font-medium underline underline-offset-4 hover:text-[#E8C96A] transition-colors">
            Book a free 30-min call and we&apos;ll tell you exactly what you need.
          </button>
        </motion.div>
      </div>
    </section>
  );
}
