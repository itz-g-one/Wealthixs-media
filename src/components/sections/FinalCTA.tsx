"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="book-call" className="py-32 bg-[#111118] relative overflow-hidden">
      {/* Dynamic Animated background mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-[1000px] max-h-[1000px] bg-[radial-gradient(circle,rgba(201,168,76,0.15)_0%,transparent_60%)] animate-[spin_30s_linear_infinite]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />
      </div>

      <div className="container mx-auto px-6 max-w-[800px] relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-cormorant text-5xl sm:text-6xl md:text-7xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-br from-[#F2F0EC] to-[#9B9690]"
        >
          Stop losing knowledge. <br />
          <span className="text-[#C9A84C]">Start compounding it.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg font-dm-sans text-[#9B9690] mb-12 max-w-2xl mx-auto"
        >
          Book a free 30-minute discovery call. We&apos;ll audit your current knowledge situation and tell you exactly what we&apos;d build for you — no sales pressure.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link href="https://cal.com/wealthixs" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] text-[#0A0A0F] font-dm-sans font-medium px-10 py-5 rounded-md text-[16px] tracking-wide shadow-[0_0_40px_rgba(201,168,76,0.2)] hover:shadow-[0_0_60px_rgba(201,168,76,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 mx-auto group">
              Book Your Free Discovery Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <p className="text-sm font-dm-sans text-[#5C5A56] mt-6">
            Free 30-minute call. No commitment. Response within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
