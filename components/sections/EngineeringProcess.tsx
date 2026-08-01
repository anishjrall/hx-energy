"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS, LIFECYCLE_SERVICES } from "@/lib/constants";
import { SchematicLines } from "@/components/ui/SchematicLines";

export function EngineeringProcess() {
  return (
    <section id="process" className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Engineering Process"
          title="A rigorous, stage-gated methodology"
          description="Every project follows the same disciplined sequence, ensuring quality, safety and on-time delivery from first call to lifetime support."
          className="mb-20"
        />

        {/* Industrial Timeline */}
        <div className="relative mb-24 grid grid-cols-1 gap-y-12 md:grid-cols-4 md:gap-x-8">
          {/* Heavy structural line connecting the steps */}
          <div className="absolute left-8 right-8 top-8 hidden h-[2px] bg-gray-200 md:block" />
          
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative z-10"
            >
              {/* Heavy square node instead of a soft rounded circle */}
              <div className="flex h-16 w-16 items-center justify-center bg-[#FF6B00] font-mono text-xl font-bold text-white shadow-sm">
                {step.index}
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Decorative divider matching the technical theme */}
        <SchematicLines variant="divider" className="mb-20 h-8 w-full text-gray-200" />

        {/* Lifecycle Services using the Hexagon icons to match other sections */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {LIFECYCLE_SERVICES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex gap-5"
            >
              {/* Hexagon Icon Wrapper */}
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center">
                <svg 
                  viewBox="0 0 100 100" 
                  className="absolute inset-0 h-full w-full text-gray-300 transition-colors duration-300 group-hover:text-[#FF6B00]" 
                  strokeWidth="1.5" 
                  stroke="currentColor" 
                  fill="none"
                >
                  <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" />
                </svg>
                {/* Thin line icon inside the hexagon */}
                <item.icon 
                  className="relative z-10 h-6 w-6 text-gray-700 transition-colors duration-300 group-hover:text-[#FF6B00]" 
                  strokeWidth={1} 
                />
              </div>
              
              <div className="pt-2">
                <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                <p className="mt-2 text-[14px] leading-relaxed text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}