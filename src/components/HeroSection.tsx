"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import CurrentlyBuilding from "./CurrentlyBuilding";
import Marquee from "./Marquee";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const nameContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const nameWord = {
  hidden: { y: "110%", opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.9, ease } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const techStack = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "Tailwind CSS",
  "Framer Motion",
  "Paystack",
  "Vercel",
];

export default function HeroSection() {
  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="top" className="min-h-screen flex flex-col px-6 md:px-16 lg:px-24 pt-8 pb-0">
      {/* Top meta strip */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between text-[11px] tracking-[0.15em] text-muted border-b border-border pb-5 uppercase"
      >
        <span className="font-medium">Gervin Abavelim</span>
        <span>Portfolio &mdash; 2026</span>
      </motion.header>

      {/* Hero grid */}
      <div className="grid md:grid-cols-12 gap-8 md:gap-12 my-16 md:my-24 lg:my-32 items-start">
        {/* Name + role */}
        <div className="md:col-span-8 lg:col-span-9">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease }}
            className="text-[11px] uppercase tracking-[0.2em] text-muted mb-8 md:mb-10 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-accent/60" />
            Software Developer
          </motion.p>

          <motion.h1
            variants={nameContainer}
            initial="hidden"
            animate="show"
            className="font-serif font-bold leading-[0.88] tracking-[-0.02em]"
            style={{ fontSize: "clamp(3.5rem, 12vw, 11rem)" }}
          >
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span variants={nameWord} className="block">
                Gervin
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span variants={nameWord} className="block">
                Abavelim<span className="text-accent">.</span>
              </motion.span>
            </span>
          </motion.h1>
        </div>

        {/* Currently building card */}
        <div className="md:col-span-4 lg:col-span-3">
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
          transition={{ delay: 0.7 }}
          className="md:col-span-7"
        >
          <p className="text-lg md:text-xl text-cream/50 leading-relaxed max-w-md">
            Building modern web applications with clean code and thoughtful design.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.85 }}
          className="md:col-span-5 flex items-center gap-3"
        >
          <MagneticButton
            onClick={() => handleScrollTo("#work")}
            className="flex items-center gap-3 bg-accent text-white px-7 py-4 text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-accent-hover transition-colors cursor-pointer rounded-sm"
          >
            View Work
            <span className="text-sm leading-none">↓</span>
          </MagneticButton>
          <MagneticButton
            onClick={() => handleScrollTo("#contact")}
            className="border border-border text-cream/80 px-7 py-4 text-[11px] font-semibold tracking-[0.15em] uppercase hover:border-accent hover:text-accent transition-colors cursor-pointer rounded-sm"
          >
            Contact
          </MagneticButton>
        </motion.div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.7 }}
        className="mt-auto"
      >
        <Marquee items={techStack} />
      </motion.div>
    </section>
  );
}
