import type { Metadata } from "next";
import ServicesPage from "@/components/sections/services/ServicesPage";

export const metadata: Metadata = {
  title: "Services — Creovo Labs",
  description:
    "Industrial design, prototyping, and advanced CAD — three core service areas structured to cover the full development path, or exactly the slice you need.",
};

export default function Page() {
  return <ServicesPage />;
}
