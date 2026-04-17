"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { FileText, Database, Network } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[#0A0A0F] z-0">
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(242,240,236,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(242,240,236,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-[60%]"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              variants={itemVariants}
              className="font-cormorant text-5xl sm:text-6xl lg:text-[5rem] leading-[1.1] text-[#F2F0EC] font-medium mb-6"
            >
              Turn scattered business knowledge into a searchable <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A84C] to-[#E8C96A]">AI memory system.</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl font-dm-sans font-light text-[#9B9690] leading-relaxed mb-10 max-w-2xl"
            >
              We build custom AI knowledge bases that organize your files, notes, chats, and documents into a structured wiki your team can query anytime — and it gets smarter every week.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-5">
              <Link href="#book-call" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] text-[#0A0A0F] font-dm-sans font-medium px-8 py-4 rounded-md text-[15px] tracking-wide hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(201,168,76,0.3)] transition-all duration-300">
                  Book a Free Discovery Call &rarr;
                </button>
              </Link>
              <Link href="#how-it-works" className="w-full sm:w-auto text-center group">
                <button className="w-full sm:w-auto bg-transparent border border-[rgba(242,240,236,0.14)] text-[#F2F0EC] font-dm-sans px-8 py-4 rounded-md text-[15px] group-hover:border-[#C9A84C] group-hover:text-[#C9A84C] transition-all duration-300">
                  See How It Works &darr;
                </button>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[rgba(201,168,76,0.3)]"></div>
              <p className="text-xs font-mono text-[#5C5A56] uppercase tracking-widest">
                Trusted by researchers & founders
              </p>
            </motion.div>
          </motion.div>

          {/* Abstract Blueprint / Line Art Visual */}
          <motion.div 
            className="w-full lg:w-[40%] h-[400px] lg:h-[500px] relative mt-10 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            {/* Minimalist Tech Illustration placeholder mimicking Dorsia fine-liner + architectural draft */}
            <div className="absolute inset-0 border border-[rgba(242,240,236,0.08)] rounded-xl bg-[#111118]/40 backdrop-blur-sm overflow-hidden flex items-center justify-center">
              
              {/* Central glowing node */}
              <div className="absolute z-20 w-32 h-32 rounded-full border border-[#C9A84C]/40 flex items-center justify-center bg-[#0A0A0F] shadow-[0_0_40px_rgba(201,168,76,0.15)] animate-[pulse_4s_ease-in-out_infinite]">
                 <Database className="text-[#C9A84C] w-10 h-10" />
              </div>

              {/* Connecting lines & abstract items */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                {/* Lines from left to center */}
                <path d="M 50 100 Q 150 100 200 250" fill="none" stroke="rgba(242,240,236,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 50 400 Q 150 400 200 250" fill="none" stroke="rgba(242,240,236,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                {/* Lines from center to right */}
                <path d="M 280 250 Q 350 150 450 150" fill="none" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" />
                <path d="M 280 250 Q 350 350 450 350" fill="none" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" />
              </svg>

              {/* Distressed icons (Raw files) */}
              <div className="absolute left-8 top-16 bg-[#16161E] p-3 rounded-lg border border-[rgba(242,240,236,0.1)] text-[#9B9690] animate-[bounce_4s_infinite]">
                <FileText size={20} />
              </div>
              <div className="absolute left-10 bottom-24 bg-[#16161E] p-3 rounded-lg border border-[rgba(242,240,236,0.1)] text-[#9B9690] animate-[bounce_3s_infinite]">
                 <FileText size={20} />
              </div>

              {/* Structured icons (Wiki Network) */}
              <div className="absolute right-12 top-28 bg-[#16161E] p-4 rounded-lg border border-[#C9A84C]/30 text-[#E8C96A]">
                <Network size={24} />
              </div>
              <div className="absolute right-12 bottom-28 bg-[#16161E] p-3 px-5 rounded-lg border border-[#C9A84C]/30 text-[#E8C96A] font-mono text-xs">
                wiki.md
              </div>

              {/* Architectural grids / corners for aesthetics */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[rgba(242,240,236,0.3)]" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-[rgba(242,240,236,0.3)]" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-[rgba(242,240,236,0.3)]" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[rgba(242,240,236,0.3)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
