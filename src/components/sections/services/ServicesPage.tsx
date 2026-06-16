"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal, { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import {
  addons,
  cadBestFor,
  cadCapabilities,
  cadTags,
  classAGrades,
  designFlowSteps,
  faqs,
  productDevBestFor,
  productDevCapabilities,
  productDevTags,
  protoTags,
  protoTypes,
  serviceMatrix,
  serviceTabs,
} from "@/lib/services";

function MatrixCell({ value }: { value: "primary" | "partial" | "none" }) {
  if (value === "primary") return <span className="text-accent">●</span>;
  if (value === "partial") return <span className="text-accent/35">◐</span>;
  return <span className="text-white/12">—</span>;
}

function ProtoIcon({ type }: { type: (typeof protoTypes)[number]["icon"] }) {
  const props = { width: 20, height: 20, viewBox: "0 0 20 20", fill: "none", "aria-hidden": true };
  switch (type) {
    case "cube":
      return (
        <svg {...props}>
          <path d="M10 2L3 6v8l7 4 7-4V6L10 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M3 6l7 4M10 18V10M17 6l-7 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
          <path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "mold":
      return (
        <svg {...props}>
          <rect x="3" y="6" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M7 6V4.5a3 3 0 016 0V6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
    case "chart":
      return (
        <svg {...props}>
          <path d="M4 16l4-8 4 6 2-3 3 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "target":
      return (
        <svg {...props}>
          <path d="M3 10h14M10 3v14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case "check":
      return (
        <svg {...props}>
          <path d="M5 10l3 3 7-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
  }
}

function AddonIcon({ type }: { type: (typeof addons)[number]["icon"] }) {
  const props = { width: 18, height: 18, viewBox: "0 0 18 18", fill: "none", "aria-hidden": true };
  switch (type) {
    case "grid":
      return (
        <svg {...props}>
          <rect x="2" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" />
          <rect x="10" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" />
          <rect x="2" y="10" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" />
          <rect x="10" y="10" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    case "star":
      return (
        <svg {...props}>
          <path d="M9 2l2 5h5l-4 3 1.5 5L9 12.5 4.5 15 6 10 2 7h5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      );
    case "home":
      return (
        <svg {...props}>
          <path d="M3 15V9l6-7 6 7v6H11v-4H7v4H3z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4" />
          <path d="M9 5v4l3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );
  }
}

function BestForList({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl border border-[#111111]/[0.06] bg-white p-7">
      <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.12em] text-[#111111]/30">
        Best For
      </div>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-[13px] text-[#111111]/80">
            <span className="text-[10px] text-accent">●</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("s01");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const tabNavRef = useRef<HTMLDivElement>(null);
  const skipNavScrollRef = useRef(true);

  const toggleFaq = useCallback((index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  }, []);

  useEffect(() => {
    if (skipNavScrollRef.current) {
      skipNavScrollRef.current = false;
      return;
    }

    const nav = tabNavRef.current;
    const activeButton = nav?.querySelector<HTMLElement>(`[data-tab-id="${activeTab}"]`);
    if (!nav || !activeButton) return;

    const targetLeft =
      activeButton.offsetLeft - nav.clientWidth / 2 + activeButton.offsetWidth / 2;
    nav.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
  }, [activeTab]);

  return (
    <>
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#111111] pb-20 pt-36 text-white sm:pb-24 sm:pt-40">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,102,0,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,102,0,.03) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="pointer-events-none absolute -bottom-[20%] -left-[5%] h-[550px] w-[550px] bg-[radial-gradient(circle,rgba(255,102,0,.09)_0%,transparent_65%)]" />
          <div className="pointer-events-none absolute -right-[5%] -top-[20%] h-[450px] w-[450px] bg-[radial-gradient(circle,rgba(255,102,0,.06)_0%,transparent_65%)]" />
          <Navbar activeLink="services" />

          <div className="section-container relative z-10">
            <SectionLabel dark>Services</SectionLabel>
            <Reveal variant="heading">
              <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Everything it takes to
                <br />
                build a <span className="text-accent">physical product.</span>
              </h1>
            </Reveal>
            <div className="mt-10 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end lg:gap-16">
              <Reveal variant="text">
                <p className="max-w-lg text-[17px] font-light leading-relaxed text-white/45">
                  Three core service areas — industrial design, prototyping, and advanced CAD —
                  structured to cover the full development path, or exactly the slice you need.
                </p>
              </Reveal>
              <Reveal delay={0.1} className="flex shrink-0 gap-10 sm:gap-12">
                {[
                  { num: "3", label: "Service Areas" },
                  { num: "1", label: "Team, One Roof" },
                  { num: "0", label: "Hand-offs" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-4xl font-light leading-none tracking-tight text-accent">
                      {stat.num}
                    </div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-white/25">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* Service tabs */}
        <div className="sticky top-0 z-40 border-b border-[#111111]/[0.07] bg-white">
          <div className="section-container !px-0 sm:!px-0 lg:!px-0">
            <div
              ref={tabNavRef}
              className="flex overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory lg:overflow-visible"
              role="tablist"
              aria-label="Services"
            >
              {serviceTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={activeTab === tab.id}
                  aria-controls={tab.id}
                  data-tab-id={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative flex shrink-0 snap-start items-center gap-3 border-r border-[#111111]/[0.07] px-5 py-5 text-left transition-colors last:border-r-0 sm:px-7 lg:flex-1 ${
                    activeTab === tab.id
                      ? "bg-accent/[0.03] text-[#111111]"
                      : "text-[#111111]/55 hover:bg-accent/[0.03] hover:text-[#111111]"
                  }`}
                >
                  <span className="font-mono text-[10px] tracking-[0.1em] text-accent/50">
                    {tab.num}
                  </span>
                  <span className="whitespace-nowrap text-xs font-semibold tracking-tight sm:text-[13px]">
                    {tab.name}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-accent transition-transform duration-300 ${
                      activeTab === tab.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Service 01 */}
        {activeTab === "s01" && (
        <section
          id="s01"
          role="tabpanel"
          aria-labelledby="tab-s01"
          className="scroll-mt-16 section-pad bg-cream"
        >
          <div className="section-container">
            <SectionLabel>Service 01</SectionLabel>
            <div className="mt-12 grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
              <div>
                <Reveal variant="heading">
                  <h2 className="section-heading">
                    Product Development
                    <br />
                    &amp; <em>Industrial Design</em>
                  </h2>
                </Reveal>
                <Reveal variant="text">
                  <p className="section-body mt-6">
                    Form language, product architecture, ergonomics, CMF direction, ideation,
                    sketching, CAD design, DFM, and AI-powered visualization.{" "}
                    <strong className="font-semibold text-[#111111]">
                      Built for new products, redesigns, and product line extensions.
                    </strong>{" "}
                    We develop the design language, architecture, and engineering intent before a
                    single production file is opened.
                  </p>
                </Reveal>
                <Reveal delay={0.08} className="mt-6 flex flex-wrap gap-2">
                  {productDevTags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </Reveal>
                <div className="mt-10">
                  {productDevCapabilities.map((cap, i) => (
                    <Reveal key={cap.name} delay={i * 0.04}>
                      <div className="group flex items-center gap-4 border-t border-[#111111]/[0.07] py-4 transition-colors last:border-b hover:bg-white/50">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/25 transition-all group-hover:scale-125 group-hover:bg-accent" />
                        <span className="text-[15px] font-medium transition-colors group-hover:text-accent">
                          {cap.name}
                        </span>
                        <span className="ml-auto hidden max-w-[240px] text-right text-[13px] leading-snug text-[#111111]/55 sm:block">
                          {cap.desc}
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <Reveal>
                  <div className="rounded-2xl border border-[#111111]/[0.06] bg-white p-8 md:p-10">
                    <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.12em] text-[#111111]/30">
                      Typical Design Flow
                    </div>
                    <div className="flex flex-col">
                      {designFlowSteps.map((step, i) => (
                        <div key={step.num} className="relative flex items-start gap-4 py-4">
                          {i < designFlowSteps.length - 1 && (
                            <span className="absolute left-4 top-10 bottom-0 w-px bg-gradient-to-b from-accent/30 to-transparent" />
                          )}
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-[10px] font-medium text-accent">
                            {step.num}
                          </div>
                          <div>
                            <div className="text-[13px] font-semibold text-[#111111]">
                              {step.title}
                            </div>
                            <div className="mt-0.5 text-xs leading-snug text-[#111111]/55">
                              {step.desc}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <BestForList items={productDevBestFor} />
                </Reveal>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* Service 02 */}
        {activeTab === "s02" && (
        <section
          id="s02"
          role="tabpanel"
          aria-labelledby="tab-s02"
          className="scroll-mt-16 section-pad bg-white"
        >
          <div className="section-container">
            <SectionLabel>Service 02</SectionLabel>
            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <Reveal variant="heading">
                  <h2 className="section-heading">Prototyping</h2>
                </Reveal>
                <Reveal delay={0.06} className="mt-5 flex flex-wrap gap-2">
                  {protoTags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </Reveal>
              </div>
              <Reveal variant="text">
                <p className="section-body">
                  3D printing, 3D printed molds, low-run pre-production, digital and physical
                  prototypes, and product testing.{" "}
                  <strong className="font-semibold text-[#111111]">
                    Focused on validating design and engineering decisions before committing to
                    tooling.
                  </strong>{" "}
                  The goal isn&apos;t a pretty model — it&apos;s a real answer to a real engineering
                  question.
                </p>
              </Reveal>
            </div>

            <RevealStagger className="mt-14 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-3">
              {protoTypes.map((pt) => (
                <RevealItem key={pt.title}>
                  <div className="group relative h-full overflow-hidden bg-cream p-7 transition-colors hover:bg-[#fef9f1] md:p-8">
                    <span className="absolute left-0 right-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <ProtoIcon type={pt.icon} />
                    </div>
                    <h3 className="mb-2 text-[15px] font-semibold tracking-tight text-[#111111]">
                      {pt.title}
                    </h3>
                    <p className="mb-4 text-[13px] font-light leading-relaxed text-[#111111]/60">
                      {pt.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {pt.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-accent/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>

            <Reveal className="mt-0.5">
              <div className="grid items-center gap-10 rounded-2xl bg-[#111111] p-8 md:grid-cols-2 md:gap-12 md:p-12">
                <div>
                  <div className="mb-3.5 font-mono text-[10px] uppercase tracking-[0.12em] text-accent/60">
                    Why It Matters
                  </div>
                  <h3 className="text-2xl font-bold leading-tight tracking-tight text-white md:text-[28px]">
                    Tooling mistakes are <span className="text-accent">expensive.</span> Prototyping
                    mistakes are not.
                  </h3>
                </div>
                <p className="text-[15px] font-light leading-relaxed text-white/45">
                  Injection mold tooling runs{" "}
                  <strong className="font-semibold text-white/80">$10,000–$100,000+</strong> per tool.
                  A prototype that costs $500 and reveals a critical design flaw is one of the best
                  investments in hardware development. We build prototypes specifically to find
                  problems — before they become tooling problems.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
        )}

        {/* Service 03 */}
        {activeTab === "s03" && (
        <section
          id="s03"
          role="tabpanel"
          aria-labelledby="tab-s03"
          className="scroll-mt-16 section-pad bg-cream"
        >
          <div className="section-container">
            <SectionLabel>Service 03</SectionLabel>
            <div className="mt-12 grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
              <div className="flex flex-col gap-6">
                <Reveal>
                  <div className="rounded-2xl border border-[#111111]/[0.06] bg-white p-8 md:p-10">
                    <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#111111]/30">
                      Surface Quality Reference
                    </div>
                    <h3 className="mb-3 text-lg font-semibold tracking-tight text-[#111111]">
                      What does &ldquo;Class-A&rdquo; actually mean?
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-[#111111]/60">
                      Surface quality in CAD is graded by curvature continuity — how smoothly
                      surfaces flow into each other. Class determines whether your product looks
                      polished or plasticky.
                    </p>
                    <div className="mt-5 flex flex-col gap-2.5">
                      {classAGrades.map((g) => (
                        <div
                          key={g.grade}
                          className={`flex items-center gap-3 rounded-sm px-4 py-3 ${
                            g.variant === "a"
                              ? "border-l-[3px] border-l-accent bg-accent/[0.07]"
                              : "border-l-[3px] border-l-[#111111]/15 bg-[#111111]/[0.03]"
                          }`}
                        >
                          <span
                            className={`w-14 shrink-0 font-mono text-[10px] uppercase tracking-[0.1em] ${
                              g.variant === "a" ? "text-accent" : "text-[#111111]/50"
                            }`}
                          >
                            {g.grade}
                          </span>
                          <span className="text-xs leading-snug text-[#111111]/60">{g.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <BestForList items={cadBestFor} />
                </Reveal>
              </div>

              <div>
                <Reveal variant="heading">
                  <h2 className="section-heading">
                    Advanced CAD
                    <br />
                    &amp; <em>Surfacing</em>
                  </h2>
                </Reveal>
                <Reveal variant="text">
                  <p className="section-body mt-6">
                    Parametric design, NURBS and mesh modeling, SubD organic modeling, Class-A
                    surfacing, rendering, and full DFM review.{" "}
                    <strong className="font-semibold text-[#111111]">
                      For teams that need production-ready geometry and premium surface quality.
                    </strong>
                  </p>
                </Reveal>
                <Reveal delay={0.06} className="mt-6 flex flex-wrap gap-2">
                  {cadTags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </Reveal>
                <RevealStagger className="mt-8 grid gap-0.5 sm:grid-cols-2">
                  {cadCapabilities.map((cap) => (
                    <RevealItem key={cap.title}>
                      <div className="h-full bg-white p-6 transition-colors hover:bg-[#fffcf8] md:p-7">
                        <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.1em] text-accent">
                          {cap.label}
                        </div>
                        <h3 className="mb-1.5 text-[15px] font-semibold text-[#111111]">
                          {cap.title}
                        </h3>
                        <p className="text-xs font-light leading-relaxed text-[#111111]/60">
                          {cap.desc}
                        </p>
                      </div>
                    </RevealItem>
                  ))}
                </RevealStagger>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* Matrix */}
        <section className="bg-[#111111] py-24 md:py-28">
          <div className="section-container">
            <div className="mb-14 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <SectionLabel dark>Quick Reference</SectionLabel>
                <Reveal variant="heading">
                  <h2 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
                    Which service
                    <br />
                    <span className="text-accent">do you need?</span>
                  </h2>
                </Reveal>
              </div>
              <Reveal variant="text" className="max-w-sm shrink-0">
                <p className="text-[15px] font-light leading-relaxed text-white/40">
                  Not sure which service fits your situation? This matrix maps common client types to
                  the service areas that are most relevant.
                </p>
              </Reveal>
            </div>

            <Reveal>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse">
                  <thead>
                    <tr>
                      {["Who You Are", "Product Dev & ID", "Prototyping", "Advanced CAD"].map(
                        (h, i) => (
                          <th
                            key={h}
                            className={`border-b border-white/[0.06] px-5 py-4 font-mono text-[10px] uppercase tracking-[0.1em] text-white/25 ${
                              i > 0 ? "text-center" : "text-left"
                            }`}
                          >
                            {h}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {serviceMatrix.map((row) => (
                      <tr key={row.client} className="transition-colors hover:bg-white/[0.02]">
                        <td className="border-b border-white/[0.04] px-5 py-4">
                          <div className="text-sm font-semibold text-white">{row.client}</div>
                          <div className="mt-0.5 text-xs text-white/35">{row.sub}</div>
                        </td>
                        <td className="border-b border-white/[0.04] px-5 py-4 text-center text-base">
                          <MatrixCell value={row.productDev} />
                        </td>
                        <td className="border-b border-white/[0.04] px-5 py-4 text-center text-base">
                          <MatrixCell value={row.prototyping} />
                        </td>
                        <td className="border-b border-white/[0.04] px-5 py-4 text-center text-base">
                          <MatrixCell value={row.cad} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-5 font-mono text-[10px] tracking-[0.08em] text-white/20">
                ● Primary &nbsp;&nbsp; ◐ Likely included &nbsp;&nbsp; — Not required
              </p>
            </Reveal>
          </div>
        </section>

        {/* Add-ons */}
        <section className="section-pad bg-white">
          <div className="section-container">
            <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <SectionLabel>Additional Capabilities</SectionLabel>
                <Reveal variant="heading">
                  <h2 className="section-heading">
                    Available as part
                    <br />
                    <em>of any engagement.</em>
                  </h2>
                </Reveal>
              </div>
              <Reveal variant="text">
                <p className="section-body">
                  These aren&apos;t separate products — they&apos;re capabilities we bring into
                  engagements as needed. No extra agency needed.
                </p>
              </Reveal>
            </div>

            <RevealStagger className="mt-12 grid gap-0.5 sm:grid-cols-2 lg:grid-cols-4">
              {addons.map((addon) => (
                <RevealItem key={addon.title}>
                  <div className="h-full bg-cream p-7 transition-colors hover:bg-[#fef9f0] md:p-8">
                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <AddonIcon type={addon.icon} />
                    </div>
                    <h3 className="mb-1.5 text-sm font-semibold text-[#111111]">{addon.title}</h3>
                    <p className="text-[13px] font-light leading-relaxed text-[#111111]/60">
                      {addon.desc}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section-pad bg-cream">
          <div className="section-container grid items-start gap-16 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <SectionLabel>FAQ</SectionLabel>
              <Reveal variant="heading">
                <h2 className="section-heading">
                  Common
                  <br />
                  <em>questions.</em>
                </h2>
              </Reveal>
              <Reveal variant="text">
                <p className="section-body mt-5">
                  Still not sure which service is right for you? Read through, or reach out directly
                  — we&apos;ll tell you exactly what makes sense without a sales pitch.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <Link
                  href="/#contact"
                  className="mt-6 inline-flex items-center gap-2 border-b border-accent/25 pb-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-accent transition hover:border-accent"
                >
                  Ask us directly
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path
                      d="M2 6h8M6 2l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </Reveal>
            </div>

            <div>
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.q}
                    className="border-t border-[#111111]/[0.07] last:border-b"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between gap-5 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[15px] font-semibold leading-snug text-[#111111]">
                        {faq.q}
                      </span>
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 border-accent bg-accent text-white"
                            : "border-[#111111]/[0.08] text-[#111111]/60"
                        }`}
                      >
                        <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3" aria-hidden>
                          <path
                            d="M6 2v8M2 6h8"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-5 text-sm font-light leading-relaxed text-[#111111]/60">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-[#111111] py-28 text-center md:py-36">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(255,102,0,.1)_0%,transparent_65%)]" />
          <div className="section-container relative z-10 mx-auto max-w-2xl">
            <Reveal variant="label">
              <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent/65">
                Get Started
              </div>
            </Reveal>
            <Reveal variant="heading">
              <h2 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
                Ready to build
                <br />
                something <span className="text-accent">real?</span>
              </h2>
            </Reveal>
            <Reveal variant="text">
              <p className="mx-auto mt-5 max-w-md text-base font-light leading-relaxed text-white/40">
                Tell us what you&apos;re building and where you are in the process. We&apos;ll map out
                the right service and scope — no generic proposals.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link href="/#contact" className="btn-primary">
                  Start a Project
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
                  href="/how-we-work"
                  className="inline-flex items-center gap-2 border-b border-white/15 pb-0.5 font-mono text-[11px] uppercase tracking-wider text-white/40 transition hover:text-white"
                >
                  See how we work
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
