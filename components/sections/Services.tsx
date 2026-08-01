"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/ui/Container";
import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="What We Deliver"
          title="Five verticals. One accountable partner."
          description="Every service is engineered in-house and backed by the same team from design through to long-term maintenance."
          align="center" // Center the main heading to match the new layout
          className="mb-20"
        />

        {/* Minimal, centered grid matching the reference image */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center text-center"
              >
                {/* Hexagon Icon Wrapper */}
                <div className="relative mb-6 flex h-[100px] w-[100px] items-center justify-center">
                  <svg 
                    viewBox="0 0 100 100" 
                    className="absolute inset-0 h-full w-full text-gray-300 transition-colors duration-300 group-hover:text-[#FF6B00]" 
                    strokeWidth="1.5" 
                    stroke="currentColor" 
                    fill="none"
                  >
                    {/* Pointy-topped hexagon SVG polygon */}
                    <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" />
                  </svg>
                  {/* Thin line icon inside the hexagon */}
                  <Icon className="relative z-10 h-10 w-10 text-gray-700 transition-colors duration-300 group-hover:text-[#FF6B00]" strokeWidth={1} />
                </div>
                
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                
                <p className="max-w-sm text-[15px] leading-relaxed text-gray-500">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Full-width heavy CTA Banner for Bundled Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24 flex flex-col items-start justify-between gap-6 bg-[#1A1A1A] p-10 md:flex-row md:items-center md:px-12 lg:px-16"
        >
          <div className="max-w-2xl">
            <span className="text-sm font-bold uppercase tracking-widest text-[#FF6B00]">
              Full Scope
            </span>
            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Need a bundled, multi-vertical project?
            </h3>
            <p className="mt-3 leading-relaxed text-gray-400">
              Heat pumps, solar and water treatment installed together at a single facility, coordinated by one engineering team.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-[#FF6B00] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#E56000]"
          >
            Discuss your project
          </a>
        </motion.div>
      </Container>
    </section>
  );
}