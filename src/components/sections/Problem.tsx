"use client";

import { motion } from "framer-motion";
import { FolderGit2, SearchX, Clock, DatabaseZap, FileWarning } from "lucide-react";

export default function Problem() {
  const painPoints = [
    {
      icon: <FolderGit2 className="text-[#E05555] w-6 h-6" />,
      title: "300 tabs, zero recall",
      desc: "You saved the article. You never re-read it. Information piling up without structure.",
      className: "md:col-span-2 md:row-span-2",
    },
    {
      icon: <Clock className="text-[#F0A04B] w-6 h-6" />,
      title: "Repeated work",
      desc: "You researched this 3 months ago. Now you're doing it again.",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      icon: <FileWarning className="text-[#F0A04B] w-6 h-6" />,
      title: "Unindexed = invisible",
      desc: "Your best insights are buried inside raw PDFs and unorganized folders.",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      icon: <DatabaseZap className="text-[#E05555] w-6 h-6" />,
      title: "AI memory reset",
      desc: "Every AI session starts from zero. No context, no compounding knowledge base.",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      icon: <SearchX className="text-[#F0A04B] w-6 h-6" />,
      title: "Knowledge silos",
      desc: "New team member? It takes months to onboard because knowledge lives in people, not systems.",
      className: "md:col-span-2 md:row-span-1",
    },
  ];

  return (
    <section id="problem" className="py-24 bg-[#111118] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-10 left-10 text-[15rem] leading-none font-cormorant font-bold text-[rgba(242,240,236,0.02)] pointer-events-none select-none z-0">
        01
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-[1200px]">
        <div className="max-w-2xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-cormorant text-4xl sm:text-5xl text-[#F2F0EC] mb-6"
          >
            Your knowledge is leaking. <br/>
            <span className="text-[#9B9690] italic font-light">Every day.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg font-dm-sans text-[#9B9690] leading-relaxed"
          >
            Most professionals spend 30–40% of their time searching for information they&apos;ve already encountered. Documents pile up. AI chats reset. Knowledge walks out the door when someone leaves. <br/><br/>
            <strong className="text-[#F2F0EC] font-normal">The problem isn&apos;t that you don&apos;t have information. The problem is it&apos;s not structured, connected, or queryable.</strong>
          </motion.p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-5 auto-rows-[200px]">
          {painPoints.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-[#16161E] rounded-2xl p-8 border border-[rgba(242,240,236,0.08)] hover:border-[#F0A04B]/30 hover:bg-[#1A1A25] transition-all duration-300 flex flex-col justify-between group ${item.className}`}
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#1C1C26] flex items-center justify-center border border-[rgba(242,240,236,0.05)] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-dm-sans font-medium text-[#F2F0EC] mb-2">{item.title}</h3>
              </div>
              <p className="text-sm font-dm-sans text-[#9B9690]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
