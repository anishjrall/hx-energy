"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_CHOOSE_US } from "@/lib/constants";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad bg-white">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Engineering depth. In-house accountability."
          description="In a marketplace crowded with equipment vendors, HX Energy stands apart through engineering depth, in-house manufacturing capability and genuine long-term partnership."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-steel-200 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_US.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group bg-white p-8 transition-colors duration-300 hover:bg-copper-50"
            >
              <item.icon
                className="h-6 w-6 text-copper-500 transition-colors group-hover:text-copper-400"
                strokeWidth={1.5}
              />
              <h3 className="mt-5 font-display text-lg font-semibold text-ink transition-colors group-hover:text-ink">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-steel-600 transition-colors group-hover:text-steel-700">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
