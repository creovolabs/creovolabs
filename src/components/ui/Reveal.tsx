"use client";

import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useState,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactElement, ReactNode } from "react";
import { VIEWPORT, EASE_OUT } from "@/lib/motion";

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

function useCanAnimate() {
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return { canAnimate: mounted && !prefersReducedMotion };
}

export default function Reveal({
  children,
  delay = 0,
  className,
  variant = "default",
}: RevealProps) {
  const { canAnimate } = useCanAnimate();

  if (!canAnimate) {
    return <div className={className}>{children}</div>;
  }

  const y = Y_OFFSET[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{
        duration: DURATION[variant],
        ease: EASE_OUT,
        delay: BASE_DELAY[variant] + delay,
      }}
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
  const { canAnimate } = useCanAnimate();

  if (!canAnimate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{
        duration: 0.5,
        ease: EASE_OUT,
        delay: 0.04 + delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
