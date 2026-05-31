"use client";

import { motion } from "framer-motion";

type Props = {
  name: string;
  href: string;
  description: string;
};

export default function CurrentlyBuilding({ name, href, description }: Props) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group block border border-border bg-elevated p-6 hover:border-accent/50 transition-colors h-full rounded-sm"
    >
      <div className="flex items-center gap-2 mb-5">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-50 animate-live" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
          Currently Building
        </p>
      </div>

      <div className="flex items-start justify-between gap-3 mb-4">
        <h3 className="text-xl font-serif font-bold tracking-tight leading-none">
          {name}
        </h3>
        <span className="text-cream/40 group-hover:text-accent transition-colors text-lg leading-none">
          ↗
        </span>
      </div>

      <p className="text-xs text-muted leading-relaxed">{description}</p>
    </motion.a>
  );
}
