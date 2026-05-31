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
      className="w-full text-left border-t border-border py-10 md:py-14 cursor-pointer group relative overflow-hidden transition-colors hover:bg-elevated/50"
    >
      <div className="relative z-10 grid grid-cols-12 gap-4 md:gap-8 items-center px-4 md:px-6">
        {/* Number */}
        <div className="col-span-2 md:col-span-1">
          <span className="text-sm text-muted/60 tabular-nums">
            {num}
          </span>
        </div>

        {/* Name */}
        <div className="col-span-10 md:col-span-5">
          <h3
            className="font-serif font-bold tracking-tight leading-none transition-colors group-hover:text-accent"
            style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}
          >
            {project.name}
          </h3>
        </div>

        {/* Description */}
        <div className="hidden md:block md:col-span-4">
          <p className="text-sm leading-relaxed text-muted transition-colors group-hover:text-cream/50">
            {project.description}
          </p>
        </div>

        {/* Year + arrow */}
        <div className="col-span-12 md:col-span-2 flex items-center justify-end gap-4 md:gap-6 mt-3 md:mt-0">
          <span className="text-xs uppercase tracking-[0.15em] text-muted">
            {project.date.split(".")[0]}
          </span>
          <motion.span
            animate={{ x: hover ? 4 : 0 }}
            transition={{ duration: 0.3, ease }}
            className="text-xl leading-none text-muted transition-colors group-hover:text-accent"
          >
            →
          </motion.span>
        </div>
      </div>

      {/* Mobile description */}
      <div className="md:hidden relative z-10 px-4 mt-4">
        <p className="text-xs leading-relaxed text-muted">
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
    <section id="work" className="px-6 md:px-16 lg:px-24 py-24 md:py-36">
      {/* Section header */}
      <motion.header
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease }}
        className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24"
      >
        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted flex items-center gap-3">
            <span className="h-px w-10 bg-accent/60" />
            Selected Work
          </p>
        </div>
        <div className="md:col-span-9">
          <h2
            className="font-serif font-bold leading-[0.9] tracking-[-0.02em]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Projects I&apos;ve<br />built<span className="text-accent">.</span>
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

      {/* Placeholder row */}
      <div className="border-b border-border py-10 md:py-14 px-4 md:px-6">
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-center">
          <span className="col-span-2 md:col-span-1 text-sm text-muted/40 tabular-nums">
            {String(projects.length + 1).padStart(2, "0")}
          </span>
          <div className="col-span-10 md:col-span-11 flex items-center justify-between gap-4">
            <h3
              className="font-serif font-bold tracking-tight leading-none text-muted/40"
              style={{ fontSize: "clamp(1.75rem, 4.5vw, 3rem)" }}
            >
              More coming soon
            </h3>
            <span className="text-xs uppercase tracking-[0.15em] text-muted/40">
              2026
            </span>
          </div>
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
