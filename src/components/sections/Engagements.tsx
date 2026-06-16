"use client";

import SectionLabel from "@/components/ui/SectionLabel";
import Reveal, { RevealItem, RevealStagger } from "@/components/ui/Reveal";

const engagements = [
  {
    type: "Engagement 01",
    name: "Sprint",
    description:
      "A focused, time-boxed engagement designed to move fast and solve a specific challenge — ideation, surfacing, DFM pass, or prototype validation.",
    bestFor: "Targeted problems with clear scope and an urgent timeline.",
  },
  {
    type: "Engagement 02",
    name: "Project",
    description:
      "A full-scope engagement from concept through manufacturing handoff. We own the entire development sequence — design, CAD, surfacing, prototyping, and final files.",
    bestFor:
      "New products, redesigns, or line extensions that need a complete development partner.",
  },
  {
    type: "Engagement 03",
    name: "Review",
    description:
      "A structured audit of existing design files, CAD geometry, or manufacturing readiness. We catch problems before they become expensive tooling mistakes.",
    bestFor:
      "Teams with existing files who need an expert second opinion before committing to production.",
  },
];

export default function Engagements() {
  return (
    <section id="engagements" className="section-pad bg-[#111111] text-white">
      <div className="section-container">
        <div className="mb-16 max-w-2xl">
          <SectionLabel dark>How We Work</SectionLabel>
          <Reveal variant="heading">
            <h2 className="text-[clamp(2rem,3.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tight text-white">
              Three ways to engage.{" "}
              <span className="font-normal text-white/60">No generic proposals.</span>
            </h2>
          </Reveal>
        </div>

        <RevealStagger className="grid gap-6 md:grid-cols-3">
          {engagements.map((item) => (
            <RevealItem key={item.name} className="h-full">
              <article className="card-dark flex h-full flex-col p-8">
                <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-[#ff6600]">
                  {item.type}
                </div>
                <h3 className="mb-4 text-3xl font-light italic tracking-tight text-white">
                  {item.name}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-white/55">
                  {item.description}
                </p>
                <div className="border-t border-white/8 pt-5">
                  <div className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-white/30">
                    Best for
                  </div>
                  <p className="text-sm leading-snug text-white/75">{item.bestFor}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
