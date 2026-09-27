"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LEADERSHIP } from "@/lib/constants";

export function Leadership() {
  return (
    <section id="team" className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Leadership"
          title="Driven by visionary leadership"
          description="Complementary strengths in project execution and business development, creating a leadership model built for sustained growth."
          className="mb-16"
        />

        {/* Executive Leadership Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
          {LEADERSHIP.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
            >
              <div
                aria-label={`${leader.name} profile`}
                className="flex aspect-[4/5] items-center justify-center overflow-hidden border border-gray-200 bg-steel-100"
              >
                <span className="font-display text-7xl font-bold tracking-tight text-steel-400">
                  {leader.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">{leader.name}</h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                {leader.role}
              </p>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-gray-600">
                {leader.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}