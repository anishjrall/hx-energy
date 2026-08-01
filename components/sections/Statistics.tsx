"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { useCountUp } from "@/hooks/useCountUp";
import { STATS } from "@/lib/constants";

function StatBlock({ value, suffix, label, description }: (typeof STATS)[number]) {
  const { ref, value: current } = useCountUp(value);

  return (
    // Thicker top border for a more structural, blueprint feel
    <div className="border-t-2 border-gray-200 pt-6">
      <p className="font-mono text-5xl font-bold text-gray-900 md:text-6xl">
        <span ref={ref}>{current}</span>
        {suffix}
      </p>
      <p className="mt-4 text-[15px] font-bold uppercase tracking-wide text-[#FF6B00]">
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  );
}

export function Statistics() {
  return (
    <section className="bg-white py-24">
      <Container>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          // Clean, bold Tailwind classes instead of the 'eyebrow' class
          className="text-sm font-bold uppercase tracking-widest text-[#FF6B00]"
        >
          By The Numbers
        </motion.span>
        
        <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          {STATS.map((stat) => (
            <StatBlock key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}