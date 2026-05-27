"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProjectModal, { type Project } from "./ProjectModal";

const projects: Project[] = [
  {
    date: "2025.11",
    name: "Orderly",
    tags: ["Next.js", "TypeScript", "Supabase", "Paystack"],
    description:
      "An order management system that lets customers submit orders via a public form, while admins handle the full lifecycle through a centralized dashboard.",
    longDescription:
      "Orderly is a full-stack order management platform built with Next.js, Supabase, and Tailwind. Customers place orders through a public form, while administrators handle quoting, payment, delivery, and refunds from a real-time dashboard. The app integrates Paystack for payments and the WhatsApp Business API for automated customer messaging.",
    features: [
      "Public order submission and customer tracking",
      "Real-time admin dashboard with order lifecycle management",
      "Automated WhatsApp messaging templates for status updates",
      "Customer database with order history and internal notes",
      "Weekly revenue analytics and bulk order operations",
      "Mobile-responsive interface with shadcn/ui components",
    ],
    github: "https://github.com/Gervinabavelim/orderly-main",
    liveUrl: "https://orderly-main.vercel.app/order",
  },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function ProjectRow({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hover, setHover] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.button
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.05, ease }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onOpen}
      className="w-full text-left border-t border-border py-8 md:py-12 cursor-pointer group relative overflow-hidden"
    >
      {/* Red sweep behind row on hover */}
      <motion.div
        initial={{ x: "-101%" }}
        animate={{ x: hover ? "0%" : "-101%" }}
        transition={{ duration: 0.5, ease }}
        className="absolute inset-0 bg-accent z-0"
      />

      <div className="relative z-10 grid grid-cols-12 gap-4 md:gap-8 items-center px-4 md:px-6">
        {/* Number */}
        <div className="col-span-2 md:col-span-1">
          <span
            className={`font-mono text-sm md:text-base tracking-tight transition-colors ${
              hover ? "text-bg" : "text-muted"
            }`}
          >
            {num}
          </span>
        </div>

        {/* Name */}
        <div className="col-span-10 md:col-span-5">
          <h3
            className={`font-black uppercase tracking-tight leading-none transition-colors ${
              hover ? "text-bg" : "text-cream"
            }`}
            style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}
          >
            {project.name}
          </h3>
        </div>

        {/* Description (hidden on mobile) */}
        <div className="hidden md:block md:col-span-4">
          <p
            className={`text-sm leading-relaxed transition-colors ${
              hover ? "text-bg/80" : "text-muted"
            }`}
          >
            {project.description}
          </p>
        </div>

        {/* Year + arrow */}
        <div className="col-span-12 md:col-span-2 flex items-center justify-end gap-3 md:gap-6 mt-3 md:mt-0">
          <span
            className={`font-mono text-xs uppercase tracking-[0.2em] transition-colors ${
              hover ? "text-bg/80" : "text-muted"
            }`}
          >
            {project.date.split(".")[0]}
          </span>
          <motion.span
            animate={{ x: hover ? 6 : 0, rotate: hover ? -45 : 0 }}
            transition={{ duration: 0.3, ease }}
            className={`text-2xl leading-none transition-colors ${
              hover ? "text-bg" : "text-cream"
            }`}
          >
            →
          </motion.span>
        </div>
      </div>

      {/* Mobile description */}
      <div className="md:hidden relative z-10 px-4 mt-3">
        <p
          className={`text-xs leading-relaxed transition-colors ${
            hover ? "text-bg/80" : "text-muted"
          }`}
        >
          {project.description}
        </p>
      </div>
    </motion.button>
  );
}

export default function WorkList() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="px-6 md:px-12 py-24 md:py-32">
      {/* Section header */}
      <motion.header
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease }}
        className="grid md:grid-cols-12 gap-8 mb-12 md:mb-20"
      >
        <div className="md:col-span-3">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            Work / 2024–26
          </p>
        </div>
        <div className="md:col-span-9">
          <h2
            className="font-black uppercase leading-[0.85] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
          >
            Selected
            <br />
            projects<span className="text-accent">.</span>
          </h2>
        </div>
      </motion.header>

      {/* Project rows */}
      <div className="border-b border-border">
        {projects.map((p, i) => (
          <ProjectRow
            key={p.name}
            project={p}
            index={i}
            onOpen={() => setActive(p)}
          />
        ))}
      </div>

      {/* "More on the way" placeholder row */}
      <div className="border-b border-border py-8 md:py-12 px-4 md:px-6">
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-center">
          <span className="col-span-2 md:col-span-1 font-mono text-sm text-muted">
            {String(projects.length + 1).padStart(2, "0")}
          </span>
          <div className="col-span-10 md:col-span-11 flex items-center justify-between gap-4">
            <h3
              className="font-black uppercase tracking-tight leading-none text-muted"
              style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}
            >
              More on the way
            </h3>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Soon
            </span>
          </div>
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
