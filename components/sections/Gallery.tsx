"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GALLERY_IMAGES } from "@/lib/constants";

export function Gallery() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(GALLERY_IMAGES.map((g) => g.category)))],
    []
  );
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All" ? GALLERY_IMAGES : GALLERY_IMAGES.filter((g) => g.category === filter);

  return (
    <section id="gallery" className="bg-[#F8F9FA] py-24">
      <Container>
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Gallery"
            title="Project gallery"
            description="A selection of completed installations across heat pumps, solar PV, water treatment and industrial engineering."
            className="max-w-2xl"
          />
          
          {/* Professional Single-Line Tabs (Matching the Products section) */}
          <div className="w-full overflow-x-auto border-b border-gray-200 pb-px custom-scrollbar">
            <div className="flex gap-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  // whitespace-nowrap guarantees the text stays on one line
                  className={`relative whitespace-nowrap pb-4 text-sm font-bold uppercase tracking-wider transition-colors ${
                    filter === cat
                      ? "text-gray-900"
                      : "text-gray-400 hover:text-gray-900"
                  }`}
                >
                  {cat}
                  {/* The sharp orange underline indicator */}
                  {filter === cat && (
                    <motion.span
                      layoutId="gallery-tab-underline"
                      className="absolute -bottom-px left-0 right-0 h-[2px] bg-[#FF6B00]"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {visible.map((image, i) => (
            <motion.div
              key={image.src + image.alt}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
              className={`group relative overflow-hidden bg-gray-200 ${
                i % 5 === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark industrial gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Category Badge - Slides up on hover */}
              <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="bg-[#FF6B00] px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-white shadow-sm whitespace-nowrap">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}