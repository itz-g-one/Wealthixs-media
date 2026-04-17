"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A0F]/95 backdrop-blur-md shadow-md border-b border-[rgba(242,240,236,0.08)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-[1200px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold font-cormorant text-[#F2F0EC]">
          Wealthixs
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#how-it-works" className="text-sm font-dm-sans text-[#9B9690] hover:text-[#F2F0EC] transition-colors relative group">
            How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C9A84C] transition-all group-hover:w-full"></span>
          </Link>
          <Link href="#services" className="text-sm font-dm-sans text-[#9B9690] hover:text-[#F2F0EC] transition-colors relative group">
            Services
          </Link>
          <Link href="#pricing" className="text-sm font-dm-sans text-[#9B9690] hover:text-[#F2F0EC] transition-colors relative group">
            Pricing
          </Link>
          <Link href="#faq" className="text-sm font-dm-sans text-[#9B9690] hover:text-[#F2F0EC] transition-colors relative group">
            FAQ
          </Link>
          
          <Link
            href="#book-call"
            className="btn-primary hover:-translate-y-1 transition-transform shadow-[0_8px_32px_rgba(201,168,76,0.15)] flex items-center gap-2"
          >
            <span className="bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] text-[#0A0A0F] font-medium font-dm-sans py-2 px-5 rounded-md text-sm tracking-wide">
              Book a Call &rarr;
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#F2F0EC]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#111118] border-b border-[rgba(242,240,236,0.08)] py-4 px-6 flex flex-col gap-4 shadow-xl">
          <Link href="#how-it-works" className="text-[#F2F0EC] text-lg font-dm-sans" onClick={() => setMobileMenuOpen(false)}>
            How It Works
          </Link>
          <Link href="#services" className="text-[#F2F0EC] text-lg font-dm-sans" onClick={() => setMobileMenuOpen(false)}>
            Services
          </Link>
          <Link href="#pricing" className="text-[#F2F0EC] text-lg font-dm-sans" onClick={() => setMobileMenuOpen(false)}>
            Pricing
          </Link>
          <Link href="#faq" className="text-[#F2F0EC] text-lg font-dm-sans" onClick={() => setMobileMenuOpen(false)}>
            FAQ
          </Link>
          <Link
            href="#book-call"
            className="w-full text-center bg-gradient-to-r from-[#C9A84C] to-[#E8C96A] text-[#0A0A0F] font-medium font-dm-sans py-3 rounded-md text-base mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a Call &rarr;
          </Link>
        </div>
      )}
    </nav>
  );
}
