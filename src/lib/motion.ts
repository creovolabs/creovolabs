import type { Transition, Variants } from "framer-motion";

/** Viewport gate — fires when ~18% of the element is visible */
export const VIEWPORT = {
  once: true,
  amount: 0.15,
} as const;

export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const transition = {
  heading: { duration: 0.65, ease: EASE_OUT } satisfies Transition,
  text: { duration: 0.55, ease: EASE_OUT, delay: 0.12 } satisfies Transition,
  card: { duration: 0.5, ease: EASE_OUT } satisfies Transition,
  label: { duration: 0.45, ease: EASE_OUT } satisfies Transition,
};

export const fadeUpHeading: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition.heading,
  },
};

export const fadeUpText: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition.text,
  },
};

export const fadeUpLabel: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition.label,
  },
};

export const fadeUpCard: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition.card,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.04,
    },
  },
};
