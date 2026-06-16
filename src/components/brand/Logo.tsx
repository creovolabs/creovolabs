"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LogoProps = {
  variant?: "black" | "orange";
  className?: string;
  linkToHome?: boolean;
};

const logos = {
  black: "/creovo-logo-black.svg",
  orange: "/creovo-logo-orange.svg",
} as const;

export default function Logo({
  variant = "black",
  className = "",
  linkToHome = false,
}: LogoProps) {
  const pathname = usePathname();

  const image = (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logos[variant]}
      alt="Creovo Labs"
      width={236}
      height={38}
      className={`h-7 w-auto sm:h-8 ${className}`}
    />
  );

  if (!linkToHome) return image;

  return (
    <Link
      href="/"
      aria-label="Creovo Labs home"
      className="inline-block"
      onClick={(e) => {
        if (pathname !== "/") return;
        e.preventDefault();
        if (window.location.hash) {
          window.history.replaceState(null, "", "/");
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      {image}
    </Link>
  );
}
