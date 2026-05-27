"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import CurrentlyBuilding from "./CurrentlyBuilding";
import Marquee from "./Marquee";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const nameContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.15 },
  },
};

const nameWord = {
  hidden: { y: "115%" },
  show: { y: 0, transition: { duration: 1.0, ease } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const techStack = [
  "NEXT.JS",
  "TYPESCRIPT",
  "REACT",
  "NODE.JS",
  "SUPABASE",
  "POSTGRES",
  "TAILWIND",
  "FRAMER MOTION",
  "PAYSTACK",
  "VERCEL",
];

export default function HeroSection() {
  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="top" className="min-h-screen flex flex-col px-6 md:px-12 pt-8 pb-0">
      {/* Top meta strip */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.3em] text-muted border-b border-border pb-4"
      >
        <span>
          Gervin Abavelim <span className="text-accent">/</span> Portfolio 2026
        </span>
        <span className="hidden sm:inline">ABV—001</span>
        <span>Manila, PH</span>
      </motion.header>

      {/* Hero grid */}
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 my-16 md:my-24 items-start">
        {/* Name + role (left, spans 9 cols) */}
        <div className="md:col-span-9">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease }}
            className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted mb-6 md:mb-8 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-accent" />
            Software Developer
          </motion.p>

          <motion.h1
            variants={nameContainer}
            initial="hidden"
            animate="show"
            className="font-black uppercase leading-[0.82] tracking-[-0.04em]"
            style={{ fontSize: "clamp(4rem, 14vw, 13rem)" }}
          >
            <span className="block overflow-hidden pb-[0.05em]">
              <motion.span variants={nameWord} className="block">
                Gervin
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.05em]">
              <motion.span variants={nameWord} className="block">
                Abavelim<span className="text-accent">.</span>
              </motion.span>
            </span>
          </motion.h1>
        </div>

        {/* Currently building card (right, spans 3 cols) */}
        <div className="md:col-span-3">
          <CurrentlyBuilding
            name="Orderly"
            description="Order management for service businesses — Next.js, Supabase, Paystack."
            href="https://orderly-main.vercel.app/order"
          />
        </div>
      </div>

      {/* Tagline + CTAs row */}
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24 items-end">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.8 }}
          className="md:col-span-7"
        >
          <p className="text-lg md:text-2xl font-mono text-cream/70 leading-relaxed">
            <span className="text-accent">{">"}</span> An LLM and a{" "}
            <span className="text-cream">
              dr<span className="text-accent">ea</span>m
            </span>
            .
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.95 }}
          className="md:col-span-5 flex items-center gap-3"
        >
          <MagneticButton
            onClick={() => handleScrollTo("#work")}
            className="flex items-center gap-3 bg-cream text-bg px-6 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-accent hover:text-cream transition-colors cursor-pointer"
          >
            View Work
            <span className="text-base leading-none">↓</span>
          </MagneticButton>
          <MagneticButton
            onClick={() => handleScrollTo("#contact")}
            className="border border-border text-cream px-6 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:border-accent hover:text-accent transition-colors cursor-pointer"
          >
            Contact
          </MagneticButton>
        </motion.div>
      </div>

      {/* Marquee at bottom of viewport */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="mt-auto"
      >
        <Marquee items={techStack} />
      </motion.div>
    </section>
  );
}
