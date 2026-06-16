const HASH_RETRY_MS = [0, 50, 150, 350, 600];

export function scrollToTop() {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export function scrollToHash(behavior: ScrollBehavior = "auto") {
  const hash = window.location.hash;
  if (!hash) return false;

  const el = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!el) return false;

  el.scrollIntoView({ behavior, block: "start" });
  return true;
}

/** Wait for Next.js to apply the hash, then scroll to it or top. */
export function syncScrollOnNavigation() {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  let cancelled = false;
  const timers: number[] = [];

  const tryHash = () => {
    if (cancelled) return true;
    return scrollToHash("auto");
  };

  if (tryHash()) {
    HASH_RETRY_MS.slice(1).forEach((delay) => {
      timers.push(window.setTimeout(tryHash, delay));
    });
  } else {
    timers.push(
      window.setTimeout(() => {
        if (cancelled) return;
        if (!tryHash()) scrollToTop();
      }, 0)
    );

    HASH_RETRY_MS.slice(1).forEach((delay) => {
      timers.push(window.setTimeout(tryHash, delay));
    });
  }

  return () => {
    cancelled = true;
    timers.forEach((id) => window.clearTimeout(id));
  };
}
