"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

function forceScrollToTop(stripHash = false) {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  if (stripHash && window.location.hash) {
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );
  }

  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export default function ScrollToTop() {
  const didInit = useRef(false);

  useLayoutEffect(() => {
    forceScrollToTop(true);
  }, []);

  useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;

    forceScrollToTop(true);

    const raf = requestAnimationFrame(() => forceScrollToTop(false));
    const t1 = window.setTimeout(() => forceScrollToTop(false), 0);
    const t2 = window.setTimeout(() => forceScrollToTop(false), 50);
    const t3 = window.setTimeout(() => forceScrollToTop(false), 150);

    const onLoad = () => forceScrollToTop(false);
    window.addEventListener("load", onLoad);

    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) forceScrollToTop(true);
    };
    window.addEventListener("pageshow", onPageShow);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      window.removeEventListener("load", onLoad);
      window.removeEventListener("pageshow", onPageShow);
    };
  }, []);

  return null;
}
