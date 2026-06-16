"use client";

import Link from "next/link";
import Reveal, { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { phases } from "@/lib/phases";

export default function Engagements() {
  return (
    <section id="engagements" className="section-pad bg-cream text-[#111111]">
      <div className="section-container">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:mb-16 sm:gap-8 lg:mb-20 lg:flex-row lg:items-end">
          <div>
            <Reveal variant="label">
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-accent sm:mb-5">
                The Phases
              </div>
            </Reveal>
            <Reveal variant="heading">
              <h2 className="text-[2.25rem] font-bold leading-[1.1] tracking-tight text-[#111111] sm:text-5xl sm:leading-[1.05] lg:text-7xl">
                Five phases.
                <br />
                <span className="text-accent">Entirely modular.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal variant="text" className="max-w-md shrink-0">
            <p className="text-[15px] font-light leading-[1.7] text-[#111111]/60 sm:leading-relaxed">
              Each phase has a fixed scope, defined deliverables, and a clear exit point. You know
              exactly what you&apos;re getting and exactly what comes next — before you commit to
              anything.
            </p>
          </Reveal>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[200px_1fr] lg:gap-14">
          <div className="hidden lg:block">
            <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#111111]/30">
              Phases
            </div>
            <div className="flex flex-col">
              {phases.map((phase) => (
                <div
                  key={phase.num}
                  className="flex items-center gap-3 border-b border-[#111111]/[0.08] py-3 first:border-t"
                >
                  <div className="h-2 w-2 shrink-0 rounded-full bg-[#111111]/[0.08]" />
                  <span className="text-xs leading-snug text-[#111111]/60">{phase.tag}</span>
                  <span className="ml-auto font-mono text-[10px] text-[#111111]/20">
                    {phase.num}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <RevealStagger className="flex flex-col gap-2 sm:gap-0.5">
            {phases.map((phase) => (
              <RevealItem key={phase.num}>
                <article className="group relative overflow-hidden bg-white transition-colors hover:bg-[#fffcf8]">
                  <div className="absolute bottom-0 left-0 top-0 w-[3px] origin-top scale-y-0 bg-accent transition-transform duration-300 group-hover:scale-y-100" />

                  <div className="flex items-center justify-between gap-3 px-5 pt-5 lg:hidden">
                    <span className="text-2xl font-light leading-none tracking-tight text-accent/20 transition-colors group-hover:text-accent/55">
                      {phase.num}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr]">
                    <div className="hidden items-start px-5 py-7 lg:flex lg:px-8 lg:py-9">
                      <span className="text-4xl font-light leading-none tracking-tight text-accent/20 transition-colors group-hover:text-accent/55">
                        {phase.num}
                      </span>
                    </div>

                    <div className="px-5 pb-5 pt-1 lg:py-7 lg:pl-4 lg:pr-6 xl:pl-6 xl:pr-10">
                      <span className="inline-block rounded-full border border-accent/20 bg-cream px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent/80">
                        {phase.tag}
                      </span>
                      <h3 className="mt-2.5 text-lg font-semibold leading-snug tracking-tight text-[#111111] sm:mt-3 sm:text-xl">
                        {phase.title}
                      </h3>
                      <p className="mt-2 text-sm font-light leading-[1.6] text-[#111111]/60 sm:mt-1.5 sm:leading-normal">
                        {phase.tagline}
                      </p>
                    </div>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>

        <Reveal className="mt-12 flex justify-center sm:mt-16">
          <Link href="/how-we-work" className="btn-primary">
            See How We Work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
