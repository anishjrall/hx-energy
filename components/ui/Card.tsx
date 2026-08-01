"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Card({ children, className = "", delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`drawing-frame rounded-2xl border border-steel-200 bg-white p-8 text-ink shadow-[0_1px_2px_rgba(10,12,15,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-16px_rgba(10,12,15,0.12)] ${className}`}
    >
      {children}
    </motion.div>
  );
}
