"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal, { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { paymentSteps, phases, philosophyPills } from "@/lib/phases";

function PhilosophyIcon({ type }: { type: (typeof philosophyPills)[number]["icon"] }) {
  if (type === "plus") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path
          d="M8 2v12M2 8h12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "check") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path
          d="M2 8l4 4 8-8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 5v3l2 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PaymentIcon({ index }: { index: number }) {
  const icons = [
    <path key="0" d="M9 2v14M2 9h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />,
    <>
      <rect key="r" x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path key="p" d="M6 8h6M6 11h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>,
    <path
      key="2"
      d="M3 9l4 4 8-8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      key="3"
      d="M9 2l2.5 5h5.5l-4.5 3.5 1.5 5.5L9 13l-4.5 3 1.5-5.5L1.5 7H7z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />,
  ];
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      {icons[index]}
    </svg>
  );
}

export default function HowWeWorkPage() {
  const [expandedPhase, setExpandedPhase] = useState(0);
  const [activeTracker, setActiveTracker] = useState(0);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollLockRef = useRef(false);

  const togglePhase = useCallback((index: number) => {
    setExpandedPhase((prev) => (prev === index ? -1 : index));
    setActiveTracker(index);
  }, []);

  const jumpPhase = useCallback((index: number) => {
    scrollLockRef.current = true;
    setExpandedPhase(index);
    setActiveTracker(index);
    window.setTimeout(() => {
      scrollLockRef.current = false;
    }, 400);
  }, []);

  useEffect(() => {
    const cards = phaseRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) return;

    const TRACK_OFFSET = 112;

    const updateActiveTracker = () => {
      if (scrollLockRef.current) return;

      let next = 0;
      for (let i = 0; i < cards.length; i++) {
        const { top } = cards[i].getBoundingClientRect();
        if (top <= TRACK_OFFSET) next = i;
      }
      setActiveTracker(next);
    };

    updateActiveTracker();
    window.addEventListener("scroll", updateActiveTracker, { passive: true });
    window.addEventListener("resize", updateActiveTracker, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveTracker);
      window.removeEventListener("resize", updateActiveTracker);
    };
  }, []);

  return (
    <>
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#111111] pb-20 pt-36 text-white sm:pb-24 sm:pt-40">
          <div
            className="pointer-events-none absolute inset-0 opacity-100"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,102,0,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,102,0,.03) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="pointer-events-none absolute -right-[5%] -top-[20%] h-[600px] w-[600px] bg-[radial-gradient(circle,rgba(255,102,0,.1)_0%,transparent_65%)]" />
          <Navbar activeLink="how-we-work" />

          <div className="section-container relative z-10">
            <SectionLabel dark>How We Work</SectionLabel>
            <Reveal variant="heading">
              <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                You pay for what
                <br />
                you need. <span className="text-accent">Nothing more.</span>
              </h1>
            </Reveal>
            <Reveal variant="text" delay={0.08}>
              <p className="mt-7 max-w-xl text-[17px] font-light leading-relaxed text-white/45">
                Product development broken into clear, defined phases — each with its own scope,
                deliverables, and cost. Start where you are. Stop when you&apos;re ready. Continue
                when it makes sense.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Philosophy */}
        <section className="border-b border-[#111111]/[0.09] bg-white py-16 md:py-20">
          <div className="section-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <p className="text-[22px] font-light leading-[1.6] tracking-tight text-[#111111]">
              Most agencies lock you into a full retainer before you know if you can trust them. We
              think that&apos;s backwards. So we built our practice around{" "}
              <em className="italic text-accent">phases</em> — discrete chunks of work you can buy
              one at a time.
            </p>

            <div className="flex flex-col gap-5">
              {philosophyPills.map((pill) => (
                <div
                  key={pill.title}
                  className="group flex items-center gap-4 rounded-sm border-l-[3px] border-l-transparent bg-cream px-6 py-4 transition-[border-color] duration-300 hover:border-l-accent"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-accent/10 text-accent">
                    <PhilosophyIcon type={pill.icon} />
                  </div>
                  <div className="text-sm leading-[1.55] text-[#111111]/55">
                    <b className="mb-0.5 block text-[15px] font-normal text-[#111111]">
                      {pill.title}
                    </b>
                    {pill.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phases */}
        <section id="phases" className="bg-cream pb-28 pt-24 md:pb-36">
          <div className="section-container">
            <div className="mb-16 flex flex-col items-start justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end">
              <div>
                <Reveal variant="label">
                  <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                    The Phases
                  </div>
                </Reveal>
                <Reveal variant="heading">
                  <h2 className="text-5xl font-bold leading-[1.05] tracking-tight text-[#111111] sm:text-6xl lg:text-7xl">
                    Five phases.
                    <br />
                    <span className="text-accent">Entirely modular.</span>
                  </h2>
                </Reveal>
              </div>
              <Reveal variant="text" className="max-w-md shrink-0">
                <p className="text-[15px] font-light leading-relaxed text-[#111111]/60">
                  Each phase has a fixed scope, defined deliverables, and a clear exit point. You know
                  exactly what you&apos;re getting and exactly what comes next — before you commit to
                  anything.
                </p>
              </Reveal>
            </div>

            <div className="grid items-start gap-12 lg:grid-cols-[200px_1fr] lg:gap-14">
              {/* Sticky tracker */}
              <div className="sticky top-28 hidden lg:block">
                <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#111111]/30">
                  Phases
                </div>
                <div className="flex flex-col">
                  {phases.map((phase, index) => (
                    <button
                      key={phase.num}
                      type="button"
                      onClick={() => jumpPhase(index)}
                      className={`flex items-center gap-3 border-b border-[#111111]/[0.08] py-3 text-left transition-opacity first:border-t hover:opacity-70 ${
                        activeTracker === index ? "opacity-100" : "opacity-80"
                      }`}
                    >
                      <div
                        className={`h-2 w-2 shrink-0 rounded-full transition-all ${
                          activeTracker === index
                            ? "scale-125 bg-accent"
                            : "bg-[#111111]/[0.08]"
                        }`}
                      />
                      <span
                        className={`text-xs leading-snug ${
                          activeTracker === index
                            ? "font-semibold text-[#111111]"
                            : "text-[#111111]/60"
                        }`}
                      >
                        {phase.tag}
                      </span>
                      <span className="ml-auto font-mono text-[10px] text-[#111111]/20">
                        {phase.num}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Phase cards */}
              <div className="flex flex-col gap-0.5">
                {phases.map((phase, index) => {
                  const isExpanded = expandedPhase === index;
                  return (
                    <div
                      key={phase.num}
                      ref={(el) => {
                        phaseRefs.current[index] = el;
                      }}
                      id={`phase-${index}`}
                      className={`group relative grid cursor-pointer scroll-mt-28 grid-cols-[auto_1fr_auto] overflow-hidden bg-white transition-colors hover:bg-[#fffcf8] ${
                        isExpanded ? "bg-white" : ""
                      }`}
                      onClick={() => togglePhase(index)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          togglePhase(index);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isExpanded}
                    >
                      <div
                        className={`absolute bottom-0 left-0 top-0 w-[3px] origin-top bg-accent transition-transform duration-300 ${
                          isExpanded ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                        }`}
                      />

                      <div className="flex items-start px-8 py-9">
                        <span
                          className={`text-4xl font-light leading-none tracking-tight transition-colors ${
                            isExpanded
                              ? "text-accent/55"
                              : "text-accent/20 group-hover:text-accent/55"
                          }`}
                        >
                          {phase.num}
                        </span>
                      </div>

                      <div className="py-9 pl-6 pr-10">
                        <span className="inline-block rounded-full border border-accent/20 bg-cream px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-accent/80">
                          {phase.tag}
                        </span>
                        <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#111111]">
                          {phase.title}
                        </h3>
                        <p className="mt-1.5 text-sm font-light text-[#111111]/60">
                          {phase.tagline}
                        </p>

                        <div
                          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                            isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="mt-5 border-t border-[#111111]/[0.08] pt-6">
                              <p className="mb-6 max-w-xl text-[15px] font-light leading-relaxed text-[#111111]/60">
                                {phase.description}
                              </p>
                              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                                What you get
                              </div>
                              <div className="mb-6 grid gap-2 sm:grid-cols-2">
                                {phase.deliverables.map((item) => (
                                  <div
                                    key={item}
                                    className="flex items-center gap-2.5 text-[13px] text-[#111111]"
                                  >
                                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                                    {item}
                                  </div>
                                ))}
                              </div>
                              {phase.note && (
                                <p className="border-l-2 border-accent/20 bg-accent/[0.04] py-3.5 pl-4 pr-4 text-[13px] italic leading-relaxed text-[#111111]/60">
                                  {phase.note}
                                </p>
                              )}
                              {phase.standalone && (
                                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                                  <svg
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    className="h-3 w-3"
                                    aria-hidden
                                  >
                                    <circle
                                      cx="6"
                                      cy="6"
                                      r="5"
                                      stroke="currentColor"
                                      strokeWidth="1.2"
                                    />
                                    <path
                                      d="M6 4v3M6 8.5v.5"
                                      stroke="currentColor"
                                      strokeWidth="1.2"
                                      strokeLinecap="round"
                                    />
                                  </svg>
                                  Available as a standalone service — no other phases required
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start px-8 py-9">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#111111]/[0.08] transition-all duration-300 ${
                            isExpanded
                              ? "rotate-45 border-accent bg-accent"
                              : "group-hover:border-accent/30"
                          }`}
                        >
                          <svg
                            viewBox="0 0 14 14"
                            fill="none"
                            className={`h-3.5 w-3.5 transition-colors ${
                              isExpanded ? "text-white" : "text-[#111111]/60"
                            }`}
                            aria-hidden
                          >
                            <path
                              d="M7 2v10M2 7h10"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Payment */}
        <section className="bg-[#111111] py-24 md:py-28">
          <div className="section-container">
            <SectionLabel dark>The Payment Structure</SectionLabel>
            <Reveal variant="heading">
              <h2 className="mb-14 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                One phase at a time.
                <br />
                <span className="text-accent">No retainers. No surprises.</span>
              </h2>
            </Reveal>

            <RevealStagger className="grid gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
              {paymentSteps.map((step, index) => (
                <RevealItem key={step.step}>
                  <div className="relative h-full border border-white/[0.05] bg-white/[0.03] p-7 lg:p-9">
                    <div className="mb-3.5 font-mono text-[10px] uppercase tracking-[0.12em] text-accent/50">
                      {step.step}
                    </div>
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <PaymentIcon index={index} />
                    </div>
                    <h3 className="mb-2 text-[15px] font-semibold text-white">{step.title}</h3>
                    <p className="text-[13px] font-light leading-relaxed text-white/40">
                      {step.description}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>

            <Reveal variant="text" className="mt-12">
              <div className="flex gap-5 rounded-2xl border border-accent/15 bg-accent/[0.06] p-7 md:p-9">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  aria-hidden
                >
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
                  <path
                    d="M10 7v4M10 13v.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <p className="text-[15px] font-light leading-relaxed text-white/55">
                  <strong className="font-semibold text-white/85">Typical payment split:</strong>{" "}
                  50% at project kickoff, 50% at delivery and final approval. For larger engagements
                  we can structure milestone-based payments across the phase. We never invoice for
                  work that hasn&apos;t been delivered and approved.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-28 text-center md:py-32">
          <div className="section-container mx-auto max-w-2xl">
            <Reveal variant="label">
              <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                Ready to Start
              </div>
            </Reveal>
            <Reveal variant="heading">
              <h2 className="text-5xl font-bold leading-[1.05] tracking-tight text-[#111111] sm:text-6xl lg:text-7xl">
                Not sure which
                <br />
                <span className="text-accent">phase is yours?</span>
              </h2>
            </Reveal>
            <Reveal variant="text">
              <p className="mx-auto mt-5 max-w-lg text-base font-light leading-relaxed text-[#111111]/60">
                Tell us where you are and what you&apos;ve got. We&apos;ll tell you exactly where to
                start — and what it&apos;ll cost — before you commit to anything.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link href="/#contact" className="btn-primary">
                  Get a Free Consultation
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
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#111111]/60 transition hover:text-[#111111]"
                >
                  See all services
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
