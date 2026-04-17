import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { LogoCloud } from "@/components/site/LogoCloud";
import { ProblemSection } from "@/components/site/ProblemSection";
import { SolutionSection } from "@/components/site/SolutionSection";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { WhoItsFor } from "@/components/site/WhoItsFor";
import { ServicesSection } from "@/components/site/ServicesSection";
import { ProcessSection } from "@/components/site/ProcessSection";
import { WhyWealthixs } from "@/components/site/WhyWealthixs";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wealthixs — Turn knowledge into a searchable AI memory" },
      {
        name: "description",
        content:
          "Custom AI knowledge bases for researchers, consultants, and founders. We organize your files, notes, and chats into a structured wiki that gets smarter every week.",
      },
      { property: "og:title", content: "Wealthixs — Your knowledge. Compounded." },
      {
        property: "og:description",
        content:
          "We build custom AI knowledge bases that turn scattered files into a queryable second brain.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <ProblemSection />
      <SolutionSection />
      <BeforeAfter />
      <WhoItsFor />
      <ServicesSection />
      <ProcessSection />
      <WhyWealthixs />
      <FAQ />
      <FinalCTA />
    </>
  );
}
