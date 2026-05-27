"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 80], [0, 1]);

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 40));
  }, [scrollY]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      style={{ opacity }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#f9f9f9]/90 backdrop-blur-sm border-b border-[#e0e0e0]" : ""
      }`}
    >
      <div className="max-w-4xl mx-auto px-8 py-4 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1a1a1a] hover:text-accent transition-colors"
        >
          GA
        </a>
        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-xs font-semibold tracking-[0.15em] uppercase text-[#555] hover:text-[#1a1a1a] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
