"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import Reveal, { RevealItem, RevealStagger } from "@/components/ui/Reveal";

const clients = [
  {
    title: "Startup Founders",
    description:
      "US-based founders building physical goods across consumer electronics, lifestyle, hardware, and beyond. You have a clear vision and need technical depth to execute it.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L2 7l9 5 9-5-9-5z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 16l9 5 9-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 11l9 5 9-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Early-Stage Product Companies",
    description:
      "Teams moving from MVP to market-ready product who need production-quality design and engineering. You've validated the idea. Now you need files manufacturers can build from.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M15 7V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M11 11v4M9 13h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Product Managers & R&D Teams",
    description:
      "Growing companies that need senior CAD, surfacing, or DFM support without the overhead of a full in-house team. We plug in where you need depth.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M5 19v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Brands Expanding Physical Lines",
    description:
      "Established brands entering physical product or expanding into new categories. We bring the industrial design and manufacturing fluency that brand agencies don't have.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L2 9v12h6v-6h6v6h6V9L11 2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Clients() {
  return (
    <section id="clients" className="section-pad bg-white text-[#111111]">
      <div className="section-container">
        <SectionLabel>Who We Serve</SectionLabel>
        <Reveal variant="heading">
          <h2 className="section-heading mb-14 max-w-xl">
            Built for founders and teams who <em>build things.</em>
          </h2>
        </Reveal>

        <RevealStagger className="grid gap-6 sm:grid-cols-2">
          {clients.map((client) => (
            <RevealItem key={client.title} className="h-full">
              <article className="card flex h-full gap-5 p-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fff7e9] text-[#ff6600]">
                  {client.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-base font-semibold tracking-tight text-[#111111]">
                    {client.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#111111]/60">
                    {client.description}
                  </p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
