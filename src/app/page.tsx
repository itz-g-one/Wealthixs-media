import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Services from "@/components/sections/Services";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="flex-1 bg-[#0A0A0F]">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <FAQ />
      <FinalCTA />
      
      {/* Simple Footer */}
      <footer className="bg-[#0A0A0F] py-12 border-t border-[rgba(242,240,236,0.05)]">
        <div className="container mx-auto px-6 max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[#F2F0EC] font-cormorant font-semibold text-2xl">
            Wealthixs
          </div>
          <div className="text-[#5C5A56] font-dm-sans text-sm">
            &copy; 2026 Wealthixs. Your knowledge. Compounded.
          </div>
          <div className="flex gap-6 text-[#9B9690] font-dm-sans text-sm">
            <a href="#how-it-works" className="hover:text-[#F2F0EC] transition-colors">How It Works</a>
            <a href="#services" className="hover:text-[#F2F0EC] transition-colors">Services</a>
            <a href="mailto:hello@wealthixs.com" className="hover:text-[#F2F0EC] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
