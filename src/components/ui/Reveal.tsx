"use client";

import {
  Children,
  cloneElement,
  createContext,
  forwardRef,
  isValidElement,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { ReactElement, ReactNode } from "react";
import { VIEWPORT, EASE_OUT } from "@/lib/motion";

type RevealTrigger = "view" | "mount";

const RevealTriggerContext = createContext<RevealTrigger>("view");

export function RevealMountProvider({ children }: { children: ReactNode }) {
  return (
    <RevealTriggerContext.Provider value="mount">{children}</RevealTriggerContext.Provider>
  );
}

type RevealVariant = "heading" | "text" | "label" | "default";

const Y_OFFSET: Record<RevealVariant, number> = {
  heading: 22,
  text: 16,
  label: 12,
  default: 16,
};

const DURATION: Record<RevealVariant, number> = {
  heading: 0.65,
  text: 0.55,
  label: 0.45,
  default: 0.55,
};

const BASE_DELAY: Record<RevealVariant, number> = {
  heading: 0,
  text: 0.12,
  label: 0,
  default: 0,
};

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
};

function useRevealVisible(trigger: RevealTrigger) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: VIEWPORT.amount });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return {
    ref,
    visible: trigger === "mount" ? mounted : isInView,
  };
}

export default function Reveal({
  children,
  delay = 0,
  className,
  variant = "default",
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const trigger = useContext(RevealTriggerContext);
  const { ref, visible } = useRevealVisible(trigger);

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  const y = Y_OFFSET[variant];
  const transition = {
    duration: DURATION[variant],
    ease: EASE_OUT,
    delay: BASE_DELAY[variant] + delay,
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
};

/** Parent for card grids — staggers children left-to-right in DOM order */
export const RevealStagger = forwardRef<HTMLDivElement, RevealStaggerProps>(
  function RevealStagger({ children, className }, ref) {
    return (
      <div ref={ref} className={className}>
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) return child;
          return cloneElement(child as ReactElement<RevealItemProps>, {
            delay: index * 0.1,
          });
        })}
      </div>
    );
  }
);

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Child of RevealStagger — fades and slides up with stagger timing */
export function RevealItem({ children, className, delay = 0 }: RevealItemProps) {
  const prefersReducedMotion = useReducedMotion();
  const trigger = useContext(RevealTriggerContext);
  const { ref, visible } = useRevealVisible(trigger);

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  const transition = {
    duration: 0.5,
    ease: EASE_OUT,
    delay: 0.04 + delay,
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
