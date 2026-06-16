"use client";

import Logo from "@/components/brand/Logo";
import Reveal, { RevealItem, RevealStagger } from "@/components/ui/Reveal";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#111111] py-14 text-white">
      <div className="section-container flex flex-col items-start justify-between gap-12 lg:flex-row">
        <Reveal variant="heading" className="max-w-xs">
          <div>
            <Logo variant="orange" linkToHome />
            <p className="mt-4 text-sm leading-relaxed text-white/40">
              US-based product design and development. From first sketch to manufacturing
              handoff — under one roof.
            </p>
          </div>
        </Reveal>

        <RevealStagger className="flex flex-wrap gap-12 sm:gap-16">
          {[
            {
              title: "Services",
              links: ["Industrial Design", "Prototyping", "Advanced CAD", "DFM Review"].map(
                (item) => ({ label: item, href: "/services" })
              ),
            },
            {
              title: "Engagements",
              links: ["Sprint", "Project", "Review"].map((item) => ({
                label: item,
                href: "#engagements",
              })),
            },
            {
              title: "Company",
              links: [
                { label: "Clients", href: "#clients" },
                { label: "Process", href: "#process" },
                { label: "Contact", href: "#contact" },
              ],
            },
          ].map((column) => (
            <RevealItem key={column.title}>
              <div>
                <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-white/30">
                  {column.title}
                </div>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm text-white/50 transition hover:text-white"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>

      <Reveal variant="text">
        <div className="section-container mt-10 flex flex-col justify-between gap-3 border-t border-white/8 pt-8 sm:flex-row">
          <span className="font-mono text-[10px] uppercase tracking-wider text-white/25">
            © {new Date().getFullYear()} Creovo Labs LLC
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#ff6600]/50">
            Built for Founders Who Build.
          </span>
        </div>
      </Reveal>
    </footer>
  );
}
