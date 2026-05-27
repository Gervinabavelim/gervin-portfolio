"use client";

import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import WorkDropdown from "./WorkDropdown";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function HeroSection() {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-center relative py-24"
    >
      <div className="absolute top-10 right-10 hidden md:block">
        <SocialLinks />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-8 w-full"
      >
        <motion.p
          variants={fadeUp}
          className="text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-8"
        >
          Software Developer
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.95] tracking-tight mb-8"
        >
          Gervin
          <br />
          Abavelim
          <span className="text-accent">.</span>
        </motion.h1>

        <motion.div variants={fadeUp} className="w-full max-w-md h-px bg-border mb-8" />

        <motion.p
          variants={fadeUp}
          className="text-xl md:text-2xl text-muted font-light tracking-wide mb-10 font-mono"
        >
          An LLM and a{" "}
          <span>
            dr
            <span className="text-accent">ea</span>
            m.
          </span>
        </motion.p>

        <motion.div variants={fadeUp}>
          <WorkDropdown />
        </motion.div>

        <div className="mt-12 md:hidden">
          <SocialLinks />
        </div>
      </motion.div>
    </section>
  );
}
