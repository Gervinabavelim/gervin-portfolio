"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

type CommonProps = {
  children: ReactNode;
  /** How strongly the element follows the cursor. Range ~0.15–0.45 */
  strength?: number;
  className?: string;
  ariaLabel?: string;
};

type ButtonProps = CommonProps & {
  onClick?: () => void;
  type?: "button" | "submit";
  href?: undefined;
};

type AnchorProps = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

type Props = ButtonProps | AnchorProps;

/**
 * Subtle cursor-tracking wrapper. The element gently translates toward the
 * cursor while hovered and springs back on leave.
 *
 * Respects prefers-reduced-motion (becomes a no-op).
 */
export default function MagneticButton(props: Props) {
  const { children, strength = 0.25, className, ariaLabel, onClick } = props;

  const prefersReduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const anchorRef = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    if (prefersReduced) return;
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  if ("href" in props && props.href) {
    return (
      <motion.a
        ref={anchorRef}
        href={props.href}
        target={props.target}
        rel={props.rel}
        onClick={onClick}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className={className}
        style={{ x: springX, y: springY }}
        aria-label={ariaLabel}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef}
      type={("type" in props && props.type) || "button"}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ x: springX, y: springY }}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}
