"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

const featuredServices = SERVICES.slice(0, 3);

export function About() {
  return (
    <section id="about" className="overflow-hidden bg-white py-24">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          
          {/* Left column – text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-[#FF6B00]">
              ABOUT HX ENERGY
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Engineering systems
              <span className="block">built for industrial performance.</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-600">
              We deliver integrated engineering solutions across heat pumps,
              solar energy, water treatment, and turnkey EPC projects for
              commercial and industrial clients.
            </p>

            {/* Feature blocks - Now using the Hexagon icons */}
            <div className="mt-14 flex flex-col gap-8">
              {featuredServices.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group border-b border-gray-100 pb-8 last:border-0 last:pb-0"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                    
                    {/* Hexagon Icon Wrapper */}
                    <div className="relative flex h-20 w-20 shrink-0 items-center justify-center">
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
                      <service.icon 
                        className="relative z-10 h-8 w-8 text-gray-700 transition-colors duration-300 group-hover:text-[#FF6B00]" 
                        strokeWidth={1} 
                      />
                    </div>

                    <div className="flex-1 pt-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10"
            >
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-[15px] font-bold uppercase tracking-wider text-[#FF6B00] transition-colors hover:text-[#E56000]"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right column – visual focal point */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative flex items-center justify-center lg:pl-10"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 shadow-sm">
              <img 
                src="/images/about-facility.jpg" 
                alt="Industrial facility" 
                className="h-full w-full object-cover"
              />
            </div>

            {/* Stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white px-8 py-7 shadow-xl sm:-bottom-8 sm:-right-8"
            >
              <div className="flex items-center gap-10">
                <div>
                  <div className="text-3xl font-bold text-gray-900 sm:text-4xl">15+</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-wider text-gray-500">
                    Years expertise
                  </div>
                </div>
                <div className="hidden h-12 w-px bg-gray-200 sm:block" />
                <div>
                  <div className="text-3xl font-bold text-gray-900 sm:text-4xl">500+</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-wider text-gray-500">
                    Projects done
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}