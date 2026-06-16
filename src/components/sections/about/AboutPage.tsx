"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal, { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import {
  approachItems,
  differentiators,
  heroStats,
  heroTags,
  limits,
  locationDetails,
  missionPoints,
  problemCards,
  serveCards,
  values,
} from "@/lib/about";

function MissionIcon({ type }: { type: (typeof missionPoints)[number]["icon"] }) {
  const props = { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", "aria-hidden": true };
  if (type === "cube") {
    return (
      <svg {...props}>
        <path d="M10 2L3 6v8l7 4 7-4V6L10 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M3 6l7 4M10 18V10M17 6l-7 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "check") {
    return (
      <svg {...props}>
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <rect x="3" y="8" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 8V6a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function ValueIcon({ type }: { type: (typeof values)[number]["icon"] }) {
  const props = { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", "aria-hidden": true };
  switch (type) {
    case "star":
      return (
        <svg {...props}>
          <path d="M10 2l2.5 5.5H18l-4.5 3.5 1.5 5.5L10 13.5 5 16.5l1.5-5.5L2 7.5h5.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      );
    case "target":
      return (
        <svg {...props}>
          <path d="M2 10h16M10 2v16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case "grid":
      return (
        <svg {...props}>
          <rect x="2" y="5" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
          <path d="M7 10h6M10 7v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "plus":
      return (
        <svg {...props}>
          <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "chart":
      return (
        <svg {...props}>
          <path d="M4 16l4-8 4 5 2-3 3 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "check":
      return (
        <svg {...props}>
          <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" stroke="currentColor" strokeWidth="1.4" />
          <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

function ServeIcon({ type }: { type: (typeof serveCards)[number]["icon"] }) {
  const props = { width: 22, height: 22, viewBox: "0 0 22 22", fill: "none", "aria-hidden": true };
  switch (type) {
    case "layers":
      return (
        <svg {...props}>
          <path d="M11 2L2 7l9 5 9-5-9-5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M2 16l9 5 9-5M2 11l9 5 9-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...props}>
          <rect x="2" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.4" />
          <path d="M15 7V5a4 4 0 00-8 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "user":
      return (
        <svg {...props}>
          <circle cx="11" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M5 19v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "home":
      return (
        <svg {...props}>
          <path d="M11 2L2 9v12h6v-6h6v6h6V9L11 2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

function LocationIcon({ type }: { type: (typeof locationDetails)[number]["icon"] }) {
  const props = { width: 18, height: 18, viewBox: "0 0 18 18", fill: "none", "aria-hidden": true };
  switch (type) {
    case "pin":
      return (
        <svg {...props}>
          <circle cx="9" cy="7.5" r="3" stroke="currentColor" strokeWidth="1.4" />
          <path d="M9 2C5.69 2 3 4.69 3 8c0 4.5 6 10 6 10s6-5.5 6-10c0-3.31-2.69-6-6-6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      );
    case "laptop":
      return (
        <svg {...props}>
          <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
          <path d="M2 7h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="5" cy="11" r="1" fill="currentColor" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4" />
          <path d="M9 4v5l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "check":
      return (
        <svg {...props}>
          <path d="M3 9l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export default function AboutPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#111111] pb-16 pt-28 text-white sm:pb-24 sm:pt-40">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,102,0,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,102,0,.03) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="pointer-events-none absolute -bottom-[20%] -left-[5%] h-[600px] w-[600px] bg-[radial-gradient(circle,rgba(255,102,0,.1)_0%,transparent_65%)]" />
          <div className="pointer-events-none absolute -right-[5%] -top-[10%] h-[400px] w-[400px] bg-[radial-gradient(circle,rgba(255,102,0,.05)_0%,transparent_65%)]" />
          <Navbar activeLink="about" />

          <div className="section-container relative z-10 grid items-end gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionLabel dark>About</SectionLabel>
              <Reveal variant="heading">
                <h1 className="max-w-xl text-[2.25rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  We exist to close the gap between{" "}
                  <span className="text-accent">idea and object.</span>
                </h1>
              </Reveal>
              <Reveal variant="text" delay={0.08}>
                <p className="mt-5 max-w-md text-base font-light leading-[1.8] text-white/45 sm:mt-7 sm:text-[17px]">
                  Creovo Labs is a US-based product design and development firm built for founders who
                  are serious about bringing physical products to market.{" "}
                  <strong className="font-semibold text-white/80">
                    We own the entire development path — under one roof.
                  </strong>
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-2">
                  {heroTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm border border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-white/25"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1} className="flex flex-col gap-0.5">
              {heroStats.map((stat) => (
                <div
                  key={stat.title}
                  className="flex items-center gap-6 border border-white/[0.05] bg-white/[0.03] px-7 py-7 transition-colors hover:border-accent/15 hover:bg-accent/[0.05]"
                >
                  <div className="min-w-[80px] text-4xl font-light leading-none tracking-tight text-accent">
                    {stat.num}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{stat.title}</div>
                    <div className="mt-0.5 text-xs leading-snug text-white/35">{stat.desc}</div>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Mission */}
        <section className="section-pad bg-white">
          <div className="section-container">
            <SectionLabel>Our Mission</SectionLabel>
            <div className="mt-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal variant="heading">
                <p className="text-xl font-light leading-[1.45] tracking-tight text-[#111111] sm:text-2xl lg:text-[32px]">
                  To turn ambitious product ideas into manufacturable realities — with the{" "}
                  <em className="italic text-accent">design quality, CAD precision, and production awareness</em>{" "}
                  that founders need to move fast and build right.
                </p>
              </Reveal>
              <div className="flex flex-col gap-8">
                {missionPoints.map((point, i) => (
                  <Reveal key={point.title} delay={i * 0.08}>
                    <div className="flex gap-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-accent/[0.07] text-accent">
                        <MissionIcon type={point.icon} />
                      </div>
                      <div>
                        <div className="text-[15px] font-bold">{point.title}</div>
                        <p className="mt-1 text-sm font-light leading-[1.7] text-[#111111]/60">
                          {point.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="section-pad bg-cream">
          <div className="section-container">
            <SectionLabel>Why We Exist</SectionLabel>
            <div className="mt-10 grid items-start gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
              <div>
                <Reveal variant="heading">
                  <p className="border-l-[3px] border-accent pl-6 text-xl font-light italic leading-[1.5] tracking-tight text-[#111111] sm:text-2xl lg:text-[28px]">
                    &ldquo;Founders building physical products face a fragmented development
                    landscape.&rdquo;
                  </p>
                </Reveal>
                <Reveal variant="text" delay={0.08}>
                  <p className="mt-8 text-[15px] font-light leading-[1.8] text-[#111111]/60">
                    Designers hand off concept decks that engineers can&apos;t build from. CAD vendors
                    produce geometry that fails DFM. Prototypes reveal problems that should have been
                    caught in the model. The result is wasted time, wasted money, and products that
                    either never reach market or reach it with compromises that hurt the brand.
                  </p>
                </Reveal>
                <Reveal variant="text" delay={0.16}>
                  <p className="mt-5 text-[15px] font-light leading-[1.8] text-[#111111]/60">
                    We built Creovo Labs to eliminate that gap entirely — by being the team that holds
                    design and engineering fluency at the same time, and never lets go of the product
                    until it&apos;s genuinely ready to build.
                  </p>
                </Reveal>
              </div>
              <div className="flex flex-col gap-0.5">
                {problemCards.map((card, i) => (
                  <Reveal key={card.num} delay={i * 0.08}>
                    <div className="flex gap-5 border-l-[3px] border-transparent bg-white px-7 py-7 transition-colors hover:border-accent hover:bg-[#fffcf8]">
                      <div className="mt-0.5 min-w-[28px] font-mono text-[11px] tracking-[0.1em] text-accent/40">
                        {card.num}
                      </div>
                      <div>
                        <div className="text-[15px] font-bold">{card.title}</div>
                        <p className="mt-1 text-[13px] font-light leading-[1.65] text-[#111111]/60">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-pad bg-[#111111] text-white">
          <div className="section-container">
            <SectionLabel dark>What We Stand For</SectionLabel>
            <Reveal variant="heading">
              <h2 className="section-heading mt-2 text-white">
                The principles that
                <br />
                <span className="italic text-accent">drive every decision.</span>
              </h2>
            </Reveal>
            <RevealStagger className="mt-14 grid items-stretch gap-0.5 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((val) => (
                <RevealItem key={val.num} className="h-full">
                  <div className="group relative flex h-full flex-col overflow-hidden border border-white/[0.04] bg-white/[0.025] p-8 transition-colors hover:border-accent/15 hover:bg-accent/[0.04]">
                    <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-400 ease-out group-hover:scale-x-100" />
                    <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.12em] text-accent/40">
                      {val.num}
                    </div>
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-accent/[0.08] text-accent">
                      <ValueIcon type={val.icon} />
                    </div>
                    <div className="text-lg font-bold tracking-tight">{val.title}</div>
                    <p className="mt-3 flex-1 text-sm font-light leading-[1.75] text-white/40">{val.desc}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>

        {/* Differentiators */}
        <section className="section-pad bg-cream">
          <div className="section-container">
            <SectionLabel>Our Differentiators</SectionLabel>
            <Reveal variant="heading">
              <h2 className="section-heading">
                What makes Creovo Labs
                <br />
                <em className="font-normal italic text-accent">different.</em>
              </h2>
            </Reveal>
            <div className="mt-14">
              {differentiators.map((item, i) => (
                <Reveal key={item.num} delay={i * 0.05}>
                  <div className="grid items-start gap-6 border-t border-[#111111]/[0.07] py-10 sm:grid-cols-[60px_280px_1fr] sm:gap-10 lg:grid-cols-[80px_280px_1fr]">
                    <div className="text-5xl font-light leading-none tracking-tight text-accent/15">
                      {item.num}
                    </div>
                    <div>
                      <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                        {item.label}
                      </div>
                      <div className="text-xl font-bold tracking-tight">{item.title}</div>
                    </div>
                    <p className="text-[15px] font-light leading-[1.8] text-[#111111]/60 sm:col-span-1">
                      {item.desc}{" "}
                      <strong className="font-semibold text-[#111111]">{item.highlight}</strong>
                    </p>
                  </div>
                </Reveal>
              ))}
              <div className="border-t border-[#111111]/[0.07]" />
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="section-pad bg-white">
          <div className="section-container">
            <SectionLabel>Who We Work With</SectionLabel>
            <Reveal variant="heading">
              <h2 className="section-heading">
                Built for founders
                <br />
                and teams who <em className="font-normal italic text-accent">build things.</em>
              </h2>
            </Reveal>
            <RevealStagger className="mt-14 grid gap-0.5 sm:grid-cols-2">
              {serveCards.map((card) => (
                <RevealItem key={card.title}>
                  <div className="flex h-full flex-col bg-cream p-8 transition-colors hover:bg-[#fef9f0] sm:p-10">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-sm bg-accent/[0.08] text-accent">
                      <ServeIcon type={card.icon} />
                    </div>
                    <div className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.1em] text-accent/60">
                      {card.label}
                    </div>
                    <div className="text-lg font-bold tracking-tight">{card.title}</div>
                    <p className="mt-3 text-sm font-light leading-[1.75] text-[#111111]/60">
                      {card.desc}
                    </p>
                    <div className="mt-5 flex flex-col gap-2">
                      {card.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="flex items-start gap-2.5 text-[13px] text-[#111111]/60"
                        >
                          <span className="mt-0.5 shrink-0 text-xs text-accent">—</span>
                          {bullet}
                        </div>
                      ))}
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>

        {/* Approach */}
        <section className="section-pad bg-cream">
          <div className="section-container">
            <SectionLabel>How We Think</SectionLabel>
            <Reveal variant="heading">
              <h2 className="section-heading">
                Our approach
                <br />
                to <em className="font-normal italic text-accent">every project.</em>
              </h2>
            </Reveal>
            <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
              <div className="flex flex-col gap-6">
                <Reveal variant="text">
                  <p className="text-base font-light leading-[1.85] text-[#111111]/60">
                    We don&apos;t have a process we follow because it&apos;s our process — we have
                    principles we apply because they consistently produce better outcomes.
                  </p>
                </Reveal>
                <Reveal variant="text" delay={0.08}>
                  <p className="text-base font-light leading-[1.85] text-[#111111]/60">
                    <strong className="font-semibold text-[#111111]">
                      We start every project with questions, not deliverables.
                    </strong>{" "}
                    What is this product actually trying to do? Who is it for? What does success look
                    like at 12 months? What&apos;s the manufacturing budget and what tooling constraints
                    does that impose?
                  </p>
                </Reveal>
                <Reveal variant="text" delay={0.16}>
                  <p className="text-base font-light leading-[1.85] text-[#111111]/60">
                    The answers to those questions shape everything — the design direction, the material
                    choices, the CAD strategy, the prototype approach. A product for a $15 retail price
                    point gets designed differently than one for a $400 price point. We account for that
                    from day one, not as an afterthought.
                  </p>
                </Reveal>
                <Reveal variant="text" delay={0.24}>
                  <p className="text-base font-light leading-[1.85] text-[#111111]/60">
                    <strong className="font-semibold text-[#111111]">
                      We also believe in telling clients the truth,
                    </strong>{" "}
                    even when it&apos;s uncomfortable. If a design direction won&apos;t be manufacturable
                    at the target cost, we say so. If a timeline is unrealistic, we say so. Trusted
                    partners tell you what you need to hear — not what you want to hear.
                  </p>
                </Reveal>
              </div>
              <div className="flex flex-col gap-0.5">
                {approachItems.map((item, i) => (
                  <Reveal key={item.num} delay={i * 0.08}>
                    <div className="flex gap-4 border-l-[3px] border-transparent bg-white px-6 py-6 transition-colors hover:border-accent">
                      <div className="mt-0.5 min-w-[24px] font-mono text-[11px] tracking-[0.1em] text-accent/45">
                        {item.num}
                      </div>
                      <div>
                        <div className="text-sm font-bold">{item.title}</div>
                        <p className="mt-1 text-[13px] font-light leading-[1.6] text-[#111111]/60">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Limits */}
        <section className="bg-[#111111] py-20 text-white sm:py-24">
          <div className="section-container grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionLabel dark>Honest Positioning</SectionLabel>
              <Reveal variant="heading">
                <h2 className="section-heading text-white">
                  What we <span className="italic text-accent">don&apos;t</span> do.
                </h2>
              </Reveal>
              <Reveal variant="text" delay={0.08}>
                <p className="mt-5 text-[15px] font-light leading-[1.75] text-white/40">
                  We&apos;d rather tell you upfront than take the work and disappoint you. Knowing our
                  limits is part of how we keep our commitments.
                </p>
              </Reveal>
            </div>
            <div className="flex flex-col gap-4">
              {limits.map((limit, i) => (
                <Reveal key={limit.title} delay={i * 0.08}>
                  <div className="flex items-start gap-4 border border-white/[0.04] bg-white/[0.03] px-5 py-4">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[10px] text-white/30">
                      ✕
                    </div>
                    <div className="text-sm leading-[1.6] text-white/50">
                      <strong className="mb-0.5 block font-semibold text-white/80">
                        {limit.title}
                      </strong>
                      {limit.desc}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="border-t border-[#111111]/[0.07] bg-white py-20 sm:py-24">
          <div className="section-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionLabel>Where We Are</SectionLabel>
              <Reveal variant="heading">
                <h2 className="section-heading">
                  US-Based. Built for
                  <br />
                  <span className="text-accent">remote collaboration.</span>
                </h2>
              </Reveal>
              <Reveal variant="text" delay={0.08}>
                <p className="mt-5 text-[15px] font-light leading-[1.8] text-[#111111]/60">
                  Creovo Labs is a US-based firm that works with founders and companies across the
                  country and internationally. Our team operates remotely — which means we&apos;re not
                  limited by geography and you&apos;re not limited to whoever happens to be local.
                </p>
              </Reveal>
            </div>
            <div className="flex flex-col gap-4">
              {locationDetails.map((detail, i) => (
                <Reveal key={detail.label} delay={i * 0.08}>
                  <div className="flex items-center gap-4 rounded-sm bg-cream px-5 py-5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-accent/[0.08] text-accent">
                      <LocationIcon type={detail.icon} />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#111111]/30">
                        {detail.label}
                      </div>
                      <div className="text-sm font-semibold">{detail.value}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-[#111111] py-28 text-center text-white sm:py-36">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(255,102,0,.1)_0%,transparent_65%)]" />
          <div className="section-container relative z-10 mx-auto max-w-2xl">
            <Reveal variant="label">
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-accent/60 sm:mb-5">
                Work With Us
              </div>
            </Reveal>
            <Reveal variant="heading">
              <h2 className="text-[2.25rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let&apos;s build something
                <br />
                <span className="text-accent">worth building.</span>
              </h2>
            </Reveal>
            <Reveal variant="text">
              <p className="mx-auto mt-5 max-w-md text-base font-light leading-[1.75] text-white/40">
                If you&apos;re serious about bringing a physical product to market and you need a team
                with the design craft and engineering depth to make it happen — we want to hear from
                you.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
                <Link href="/#contact" className="btn-primary w-full sm:w-auto">
                  Start a Conversation
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
                  className="inline-flex items-center gap-2 border-b border-white/15 pb-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-white/40 transition hover:text-white"
                >
                  Explore our services
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
