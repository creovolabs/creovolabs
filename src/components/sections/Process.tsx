"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import Reveal, { RevealItem, RevealStagger } from "@/components/ui/Reveal";

const steps = [
  {
    num: "01",
    label: "Discovery",
    title: "Brief & Alignment",
    description:
      "We start by understanding your product vision, target market, technical constraints, and manufacturing goals. No templates — a real conversation about what you're building and why it matters.",
  },
  {
    num: "02",
    label: "Industrial Design",
    title: "Form & Direction",
    description:
      "Sketching, form exploration, CMF direction, and AI visualization. We develop the design language and product architecture before committing to CAD — so we build the right thing, not just the first thing.",
  },
  {
    num: "03",
    label: "CAD & Surfacing",
    title: "Precision Geometry",
    description:
      "Parametric modeling, NURBS surfacing, SubD organics, and Class-A finish. Every surface built with manufacturing in mind — DFM is baked in throughout, not bolted on at the end.",
  },
  {
    num: "04",
    label: "Prototyping",
    title: "Build & Validate",
    description:
      "3D printed models, functional prototypes, and low-run pre-production. We validate design and engineering decisions in the physical world before you commit to tooling costs.",
  },
  {
    num: "05",
    label: "Handoff",
    title: "Files Ready to Build",
    description:
      "Full DFM documentation, production-ready CAD files, surface quality reports, and manufacturing support. We stay engaged through supplier handoff and first-article review.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-pad overflow-visible bg-cream text-[#111111]">
      <div className="section-container mb-14">
        <SectionLabel>Our Process</SectionLabel>
        <Reveal variant="heading">
          <h2 className="section-heading max-w-xl">
            From first conversation to <em>build-ready files.</em>
          </h2>
        </Reveal>
      </div>

      <div className="process-scroll-outer">
        <div className="process-scroll-wrap">
          <RevealStagger className="process-scroll-track">
            {steps.map((step) => (
              <RevealItem key={step.num} className="process-card-shell">
                <article className="process-card">
                  <div className="mb-4 text-5xl font-light leading-none tracking-tight text-[#ff6600]/25">
                    {step.num}
                  </div>
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-[#ff6600]">
                    {step.label}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold tracking-tight text-[#111111]">
                    {step.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-[#111111]/60">
                    {step.description}
                  </p>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
