import type { Metadata } from "next";
import HowWeWorkPage from "@/components/sections/how-we-work/HowWeWorkPage";

export const metadata: Metadata = {
  title: "How We Work — Creovo Labs",
  description:
    "Product development broken into clear, defined phases — each with its own scope, deliverables, and cost. Start where you are. Stop when you're ready.",
};

export default function Page() {
  return <HowWeWorkPage />;
}
