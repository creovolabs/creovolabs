"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Logo from "@/components/brand/Logo";
import Reveal, { RevealItem, RevealStagger } from "@/components/ui/Reveal";
import { contactEmail, contactPhone, contactPhoneHref, footerLinks } from "@/lib/site";

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const className = "text-sm text-white/50 transition hover:text-white";

  if (href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

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
          <RevealItem>
            <div>
              <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-white/30">
                Navigate
              </div>
              <ul className="flex flex-col gap-2.5">
                {footerLinks.map((item) => (
                  <li key={item.label}>
                    <FooterLink href={item.href}>{item.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>

          <RevealItem>
            <div>
              <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-white/30">
                Contact
              </div>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <FooterLink href={`mailto:${contactEmail}`}>{contactEmail}</FooterLink>
                </li>
                {contactPhone && contactPhoneHref ? (
                  <li>
                    <FooterLink href={contactPhoneHref}>{contactPhone}</FooterLink>
                  </li>
                ) : null}
              </ul>
            </div>
          </RevealItem>
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
