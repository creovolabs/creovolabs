"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";

const headlineWords = ["From", "first", "sketch"];

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_OUT, delay: 0.15 + i * 0.08 },
  }),
};

function HeroContent({ animated }: { animated: boolean }) {
  const [email, setEmail] = useState("");

  if (!animated) {
    return (
      <>
        <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          {headlineWords.map((word) => (
            <span key={word} className="mr-[0.25em] inline-block">
              {word}
            </span>
          ))}
          <br />
          <span className="text-accent">to build.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
          We own the entire development path —{" "}
          <strong className="font-semibold text-white">
            industrial design, advanced CAD, Class-A surfacing, DFM, and
            manufacturing handoff
          </strong>{" "}
          — under one roof.
        </p>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <HeroCta email={email} setEmail={setEmail} />
        </div>
      </>
    );
  }

  return (
    <>
      <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
        {headlineWords.map((word, i) => (
          <motion.span
            key={word}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mr-[0.25em] inline-block"
          >
            {word}
          </motion.span>
        ))}
        <br />
        <motion.span
          custom={headlineWords.length}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-block text-accent"
        >
          to build.
        </motion.span>
      </h1>

      <motion.p
        custom={headlineWords.length + 1}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-6 max-w-xl text-lg leading-relaxed text-white/85"
      >
        We own the entire development path —{" "}
        <strong className="font-semibold text-white">
          industrial design, advanced CAD, Class-A surfacing, DFM, and
          manufacturing handoff
        </strong>{" "}
        — under one roof.
      </motion.p>

      <motion.div
        custom={headlineWords.length + 2}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8"
      >
        <HeroCta email={email} setEmail={setEmail} />
      </motion.div>
    </>
  );
}

function HeroCta({
  email,
  setEmail,
}: {
  email: string;
  setEmail: (value: string) => void;
}) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = "#contact";
        }}
        className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-stretch lg:max-w-lg lg:flex-1"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="input-pill min-h-[48px] flex-1"
          required
        />
        <button
          type="submit"
          className="btn-secondary min-h-[48px] shrink-0 whitespace-nowrap px-8"
        >
          Free consultation
        </button>
      </form>

      <div className="flex shrink-0 items-center gap-4 lg:justify-end">
        <a href="#contact" className="btn-primary min-h-[48px] whitespace-nowrap px-8">
          Start a Project &rarr;
        </a>
        <Link href="/services" className="btn-ghost whitespace-nowrap">
          See Services &rarr;
        </Link>
      </div>
    </>
  );
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!prefersReducedMotion) {
      setAnimated(true);
    }
  }, [prefersReducedMotion]);

  return (
    <section className="relative min-h-screen overflow-hidden" id="home">
      <div className="absolute inset-0 z-0 h-screen">
        <div
          aria-hidden
          className="absolute inset-0 bg-[url('/hero-bg.png?v=3840')] bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <Navbar />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-12 pt-32 sm:px-10 lg:px-12">
        <div className="flex flex-1 flex-col justify-center">
          <HeroContent animated={animated} />
        </div>
      </div>
    </section>
  );
}
