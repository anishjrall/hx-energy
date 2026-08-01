"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SchematicLines } from "@/components/ui/SchematicLines";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-copper-50 via-white to-copper-100 py-24">
      <SchematicLines className="pointer-events-none absolute -left-16 -top-16 h-96 w-96 text-copper-200" />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
        >
          <div className="max-w-xl">
            <span className="font-mono text-[11px] uppercase tracking-widest text-copper-600">
              Start Your Project
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
              Let’s engineer your solution
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-steel-600">
              Share your site requirements and receive a detailed technical and
              commercial proposal within 48 hours.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="#contact">Request a Quote</Button>
            <Button href="#contact" variant="secondary">
              Book a Site Visit
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}