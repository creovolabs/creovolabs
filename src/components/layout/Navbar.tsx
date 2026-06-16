"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/brand/Logo";

const links = [
  { label: "Services", href: "/services", key: "services" },
  { label: "How We Work", href: "/how-we-work", key: "how-we-work" },
  { label: "Projects", href: "/#process", key: "process" },
  { label: "About", href: "/#clients", key: "clients" },
];

type NavbarProps = {
  activeLink?: string;
};

export default function Navbar({ activeLink }: NavbarProps) {
  const pathname = usePathname();
  const current =
    activeLink ??
    (pathname === "/how-we-work"
      ? "how-we-work"
      : pathname === "/services"
        ? "services"
        : undefined);

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-6 pt-6 sm:px-10">
      <nav className="nav-pill mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
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

        <Link href="/#contact" className="btn-primary shrink-0 px-5 py-2.5 text-sm">
          Get Started
        </Link>
      </nav>
    </header>
  );
}
