"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToHash, scrollToTop, syncScrollOnNavigation } from "@/lib/scroll";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => syncScrollOnNavigation(), [pathname]);

  useEffect(() => {
    const onHashChange = () => {
      scrollToHash("smooth");
    };

    const onPageShow = (e: PageTransitionEvent) => {
      if (!e.persisted) return;
      if (window.location.hash) scrollToHash("auto");
      else scrollToTop();
    };

    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("pageshow", onPageShow);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("pageshow", onPageShow);
    };
  }, []);

  return null;
}
