import type { Metadata } from "next";
import AboutPage from "@/components/sections/about/AboutPage";

export const metadata: Metadata = {
  title: "About — Creovo Labs",
  description:
    "Creovo Labs is a US-based product design and development firm built for founders who are serious about bringing physical products to market.",
};

export default function Page() {
  return <AboutPage />;
}
