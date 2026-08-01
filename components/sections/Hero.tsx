"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[85vh] items-center justify-center overflow-hidden py-32 lg:min-h-screen">
      
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            // Swapped to a shipping port/industrial cranes image
            backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2400&auto=format&fit=crop')"
          }}
        />
        {/* Dark overlay to make white text readable, matching the reference image */}
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      {/* Centered Content */}
      <Container className="relative z-10 flex flex-col items-center px-4 text-center">
        
        <motion.div
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 sm:text-sm"
        >
          DON'T LOOK FURTHER, HERE IS THE KEY
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          custom={0.1}
          variants={fadeUp}
          className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5rem] lg:leading-[1.1]"
        >
          We're Industrial solution
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          custom={0.2}
          variants={fadeUp}
          className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg"
        >
          {SITE.legalName} designs and delivers heat pump, solar and water
          treatment systems for industrial, institutional and government
          clients with a single accountable engineering team.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          custom={0.3}
          variants={fadeUp}
          className="mt-10"
        >
          <a 
            href="#contact"
            className="inline-block bg-[#FFC107] px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-colors hover:bg-[#FFD54F]"
          >
            Get Started
          </a>
        </motion.div>

      </Container>
    </section>
  );
}