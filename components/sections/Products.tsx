"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TABS = [
  {
    id: "heat-pump",
    label: "Heat Pumps",
    title: "Vapour compression cycles for 55–90°C hot water",
    image: "/images/product-heatpump.jpg", // replace with your own
    body: "Our heat pumps extract ambient energy from air, water or ground and upgrade it to deliver hot water at usable temperatures – achieving COP values of 3–5, reducing operating costs by 60–75% compared to electric heating.",
    specs: [
      { label: "Output Temperature", value: "55–90°C" },
      { label: "COP", value: "3–5" },
      { label: "Capacity Range", value: "5 TR – 500 TR" },
    ],
  },
  {
    id: "water",
    label: "Water Treatment",
    title: "RO plants & softener systems for process water",
    image: "/images/product-water.jpg",
    body: "Reverse Osmosis forces feed water through semi-permeable membranes rejecting dissolved solids, heavy metals and bacteria – producing clean water to CPCB / SPCB / BIS 10500 standards, with capacities from 500 to 1,00,000 LPH.",
    specs: [
      { label: "Capacity", value: "500 – 1,00,000+ LPH" },
      { label: "Media", value: "Multi-stage + CIP" },
      { label: "Standards", value: "CPCB / BIS 10500" },
    ],
  },
  {
    id: "solar",
    label: "Solar Investment",
    title: "CAPEX · OPEX · RESCO – choose your model",
    image: "/images/product-solar.jpg",
    body: "Three flexible investment structures let every client benefit from solar – from outright purchase to zero-upfront PPAs, each engineered for maximum financial advantage with 25-year design life.",
    specs: [
      { label: "CAPEX Payback", value: "4–6 years, IRR 18–25%" },
      { label: "OPEX Tariff", value: "20–40% below grid" },
      { label: "RESCO Term", value: "15–25 year PPA" },
    ],
  },
];

export function Products() {
  const [active, setActive] = useState(TABS[0]?.id ?? "heat-pump");
  const activeTab = TABS.find((t) => t.id === active)!;

  return (
    <section id="products" className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Technology"
          title="Engineered for performance, built to specification"
          description="A closer look at the technology behind our core product lines."
          className="mb-16"
        />

        {/* Technical Tabs */}
        <div className="mb-12 flex flex-wrap gap-8 border-b border-gray-200">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative pb-4 text-sm font-bold uppercase tracking-wider transition-colors ${
                active === tab.id ? "text-gray-900" : "text-gray-400 hover:text-gray-900"
              }`}
            >
              {tab.label}
              {active === tab.id && (
                <motion.span
                  layoutId="product-tab-underline"
                  className="absolute -bottom-px left-0 right-0 h-[2px] bg-[#FF6B00]"
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center"
          >
            {/* Structural Image Container - Removed soft rounded corners */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 border border-gray-200">
              <Image
                src={activeTab.image}
                alt={activeTab.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900">{activeTab.title}</h3>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-600">{activeTab.body}</p>

              {/* Spec Grid */}
              <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 border-t border-gray-200 pt-8 sm:grid-cols-2">
                {activeTab.specs.map((spec) => (
                  <div key={spec.label}>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                      {spec.label}
                    </p>
                    <p className="mt-2 font-mono text-[15px] font-bold text-gray-900">
                      {spec.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}