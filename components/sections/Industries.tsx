"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { INDUSTRIES } from "@/lib/constants";

export function Industries() {
  return (
    <section id="industries" className="section-pad bg-paper">
      <Container>
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Engineered to sector-specific standards"
          description="From the hygiene demands of healthcare to the uptime requirements of hospitality, every deployment is built for its operating environment."
          className="mb-14"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
            >
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-lg font-semibold text-ink">{industry.name}</h3>
                <p className="mt-1.5 max-h-0 overflow-hidden text-[13px] leading-relaxed text-steel-600 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
