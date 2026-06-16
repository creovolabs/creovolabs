"use client";

import Reveal from "@/components/ui/Reveal";

type SectionLabelProps = {
  children: React.ReactNode;
  dark?: boolean;
};

export default function SectionLabel({ children, dark = false }: SectionLabelProps) {
  return (
    <Reveal variant="label">
      <div
        className={`mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] before:h-px before:w-5 before:content-[''] ${
          dark ? "text-[#ff6600] before:bg-[#ff6600]" : "text-[#ff6600] before:bg-[#ff6600]"
        }`}
      >
        {children}
      </div>
    </Reveal>
  );
}
