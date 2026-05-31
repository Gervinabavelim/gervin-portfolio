"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export type Project = {
  date: string;
  name: string;
  tags: string[];
  description: string;
  longDescription: string;
  features?: string[];
  github: string;
  liveUrl?: string;
};

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease }}
          onClick={onClose}
          className="fixed inset-0 z-[60] bg-bg/85 backdrop-blur-lg flex items-center justify-center p-4 md:p-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-elevated border border-border max-w-3xl w-full max-h-[88vh] overflow-y-auto rounded-sm"
          >
            {/* Header strip */}
            <div className="sticky top-0 bg-elevated border-b border-border px-6 md:px-10 py-4 flex items-center justify-between z-10">
              <p className="text-[11px] uppercase tracking-[0.15em] text-muted">
                {project.date} &mdash; Project
              </p>
              <button
                onClick={onClose}
                aria-label="Close"
                className="w-8 h-8 flex items-center justify-center text-cream/40 hover:text-accent transition-colors cursor-pointer border border-border hover:border-accent/50 rounded-sm"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 md:p-10">
              <h2
                className="font-serif font-bold tracking-tight leading-[0.9] mb-6"
                style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
              >
                {project.name}
                <span className="text-accent">.</span>
              </h2>

              <div className="flex gap-2 flex-wrap mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-[0.15em] border border-border px-3 py-1.5 text-cream/50 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-cream/70 text-base md:text-lg leading-relaxed mb-10">
                {project.longDescription}
              </p>

              {project.features && project.features.length > 0 && (
                <div className="mb-10">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted mb-6 flex items-center gap-3">
                    <span className="h-px w-8 bg-accent/60" />
                    Key Features
                  </p>
                  <ul className="space-y-3">
                    {project.features.map((feature, i) => (
                      <li
                        key={feature}
                        className="flex gap-4 text-sm md:text-base text-cream/60 leading-relaxed border-t border-border pt-3"
                      >
                        <span className="text-accent/70 tabular-nums text-sm shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 pt-8 border-t border-border">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-accent text-white px-7 py-4 text-[11px] font-semibold tracking-[0.15em] uppercase hover:bg-accent-hover transition-colors rounded-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  View on GitHub
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 border border-border text-cream/80 px-7 py-4 text-[11px] font-semibold tracking-[0.15em] uppercase hover:border-accent hover:text-accent transition-colors rounded-sm"
                  >
                    Live Demo
                    <span className="text-sm leading-none">↗</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
