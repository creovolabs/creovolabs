"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import Reveal, { RevealItem, RevealStagger } from "@/components/ui/Reveal";

const services = [
  {
    num: "01",
    title: "Product Development & Industrial Design",
    description:
      "Form language, product architecture, ergonomics, CMF direction, ideation, sketching, CAD design, DFM, and AI-powered visualization. Built for new products, redesigns, and line extensions.",
    tags: ["Form Language", "Ergonomics", "CMF", "Sketching", "CAD Design", "DFM", "AI Viz"],
    icon: (
      <svg className="h-10 w-10 text-[#ff6600]" viewBox="0 0 44 44" fill="none">
        <path d="M6 38L22 6L38 38" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 28h24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="22" cy="6" r="2.5" fill="currentColor" opacity=".35" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Prototyping",
    description:
      "3D printing, 3D printed molds, low-run pre-production, digital and physical prototypes, and product testing. Focused on validating design and engineering decisions before committing to tooling.",
    tags: ["3D Printing", "Printed Molds", "Pre-Production", "Physical Testing", "Digital Proto"],
    icon: (
      <svg className="h-10 w-10 text-[#ff6600]" viewBox="0 0 44 44" fill="none">
        <rect x="7" y="15" width="30" height="22" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M15 15V11a7 7 0 0114 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="22" cy="26" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Advanced CAD & Surfacing",
    description:
      "Parametric design, NURBS and mesh modeling, SubD organic modeling, Class-A surfacing, rendering, and full DFM review. For teams that need production-ready geometry and premium surface quality.",
    tags: ["Parametric", "NURBS", "SubD Organic", "Class-A", "Rendering", "DFM Review"],
    icon: (
      <svg className="h-10 w-10 text-[#ff6600]" viewBox="0 0 44 44" fill="none">
        <path d="M7 37C7 37 14 25 22 25C30 25 37 37 37 37" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 25C7 25 12.5 14 22 14C31.5 14 37 25 37 25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity=".6" />
        <path d="M11 14C11 14 15 7 22 7C29 7 33 14 33 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity=".3" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-white text-[#111111]">
      <div className="section-container">
        <div className="mb-16 grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel>What We Do</SectionLabel>
            <Reveal variant="heading">
              <h2 className="section-heading">
                Three service areas. <em>One development path.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal variant="text">
            <p className="section-body max-w-md lg:pb-1">
              We built our practice around a simple observation: the best products come from
              teams that can hold industrial design and engineering fluency at the same time.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <RevealItem key={service.title} className="h-full">
              <article className="card flex h-full flex-col p-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#111111]/25">
                    {service.num}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff7e9]">
                    {service.icon}
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-semibold tracking-tight text-[#111111]">
                  {service.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-[#111111]/60">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
