"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectModal, { type Project } from "./ProjectModal";
import MagneticButton from "./MagneticButton";

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

export default function WorkDropdown() {
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div>
      <div className="flex items-center gap-4">
        <MagneticButton
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3 text-xs font-semibold tracking-[0.15em] uppercase transition-colors hover:bg-[#333] cursor-pointer"
        >
          {open ? "Hide Work" : "View Work"}
          <svg
            className={`w-3 h-3 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </MagneticButton>
        <MagneticButton
          href="mailto:abavelimgervin@gmail.com"
          className="border border-[#ccc] px-6 py-3 text-xs font-semibold tracking-[0.15em] uppercase text-[#1a1a1a] transition-colors hover:bg-[#eee] cursor-pointer"
        >
          Contact
        </MagneticButton>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease }}
            className="overflow-hidden"
          >
            <div className="mt-16">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted mb-6">
                Selected Work
              </p>
              <div className="border-t border-border">
                {projects.map((project) => (
                  <button
                    key={project.name}
                    onClick={() => setActiveProject(project)}
                    className="w-full text-left border-b border-border py-8 cursor-pointer hover:bg-[#efefef] transition-colors px-2 -mx-2 group"
                  >
                    <div className="flex gap-8 md:gap-12 items-start">
                      <span className="text-sm text-muted font-mono min-w-[70px] pt-1">
                        {project.date}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-1 text-[#1a1a1a] group-hover:text-accent transition-colors">
                          {project.name}
                        </h3>
                        <p className="text-sm text-[#555] mb-3 max-w-lg leading-relaxed">
                          {project.description}
                        </p>
                        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase underline underline-offset-4 group-hover:text-accent transition-colors">
                          Open Project
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
