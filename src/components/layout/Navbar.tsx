"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Logo from "@/components/brand/Logo";

const links = [
  { label: "Services", href: "/services", key: "services" },
  { label: "How We Work", href: "/how-we-work", key: "how-we-work" },
  { label: "Projects", href: "/#process", key: "process" },
  { label: "About", href: "/about", key: "about" },
];

type NavbarProps = {
  activeLink?: string;
};

function TaperedMenuIcon() {
  return (
    <svg
      width="24"
      height="16"
      viewBox="0 0 24 16"
      fill="none"
      aria-hidden
      className="text-[#111111]"
    >
      <line x1="4" y1="1" x2="24" y2="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="8" x2="24" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="15" x2="24" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M4 4l12 12M16 4L4 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="text-[#111111]/25">
      <path
        d="M6 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  current?: string;
};

function MobileMenu({ open, onClose, current }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] md:hidden">
      <button
        type="button"
        aria-label="Close menu"
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="relative mx-4 mt-4 overflow-hidden rounded-[24px] bg-white shadow-[0_16px_48px_rgba(0,0,0,0.18)]">
        <div className="flex items-center justify-between px-6 py-4">
          <Logo variant="black" linkToHome className="!h-[22px]" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#111111] transition hover:bg-[#111111]/5"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="mx-6 border-t border-[#111111]/[0.08]" />

        <nav className="px-6 py-2">
          <ul>
            {links.map((link) => (
              <li key={link.key} className="border-b border-[#111111]/[0.08] last:border-b-0">
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between py-4 text-[17px] font-medium transition-colors hover:text-[#111111] ${
                    current === link.key ? "text-[#111111]" : "text-[#111111]/80"
                  }`}
                >
                  {link.label}
                  <ChevronIcon />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-6 pb-6 pt-4">
          <Link
            href="/#contact"
            onClick={onClose}
            className="btn-primary w-full rounded-xl py-3.5 text-[15px] shadow-[0_4px_20px_rgba(255,102,0,0.3)]"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Navbar({ activeLink }: NavbarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const current =
    activeLink ??
    (pathname === "/how-we-work"
      ? "how-we-work"
      : pathname === "/services"
        ? "services"
        : pathname === "/about"
          ? "about"
          : undefined);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, closeMenu]);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6 md:px-10">
        <nav className="nav-pill mx-auto flex max-w-4xl items-center justify-between px-7 py-3 md:px-6">
          <Logo variant="black" linkToHome className="!h-[22px] sm:!h-[25px]" />

          <ul className="hidden items-center gap-8 text-sm font-medium text-[#111111]/70 md:flex">
            {links.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className={`transition-colors hover:text-[#111111] ${
                    current === link.key ? "text-[#111111]" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/#contact"
            className="btn-primary hidden shrink-0 px-5 py-2.5 text-sm md:inline-flex"
          >
            Get Started
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-end md:hidden"
          >
            <TaperedMenuIcon />
          </button>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} current={current} />
    </>
  );
}
