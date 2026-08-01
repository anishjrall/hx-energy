"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * PLACEHOLDER CONTENT: replace with verified, attributable client
 * testimonials before launch. Structure is production-ready.
 */
const TESTIMONIALS = [
  {
    quote:
      "The single point of accountability made the biggest difference \u2014 one team took our heat pump and solar scope from design through commissioning without a single coordination gap.",
    name: "Facility Director",
    role: "Hospitality Group, Karnataka",
  },
  {
    quote:
      "Their engineering documentation \u2014 P&IDs, load calculations, commissioning reports \u2014 was thorough enough that our own consultants signed off without a single revision cycle.",
    name: "Chief Engineer",
    role: "Manufacturing Facility",
  },
  {
    quote:
      "We evaluated the RESCO model with three vendors. HX Energy was the only one that walked us through the full 25-year lifecycle numbers before asking for a decision.",
    name: "Operations Head",
    role: "Educational Campus",
  },
];

export function Testimonials() {
  return (
    <section className="section-pad bg-paper">
      <Container>
        <SectionHeading
          eyebrow="Client Feedback"
          title="What our partners say"
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col rounded-2xl border border-steel-200 bg-white p-8"
            >
              <Quote className="h-6 w-6 text-copper-400" strokeWidth={1.5} />
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-charcoal-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-steel-100 pt-5">
                <p className="font-display text-sm font-semibold text-ink">{t.name}</p>
                <p className="mt-0.5 text-sm text-steel-500">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
