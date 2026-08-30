"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

function Brand() {
  return (
    <Link
      href="#top"
      aria-label={`${SITE.name} home`}
      className="flex shrink-0 items-center gap-2.5"
    >
      <Image
        src="/hx-energy-logo.png"
        alt="HX Energy Systems"
        width={48}
        height={38}
        className="h-[38px] w-[48px] object-contain"
        priority
      />

      <div className="leading-none">
        <span className="block font-display text-[18px] font-bold tracking-[-0.03em] text-ink">
          HX Energy
        </span>
        <span className="mt-1 block text-[8px] font-semibold uppercase tracking-[0.18em] text-steel-500">
          Systems
        </span>
      </div>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-black/5 bg-white/95 backdrop-blur-md">
        <Container className="flex h-[76px] items-center justify-between">
          <div onClick={() => setOpen(false)}>
            <Brand />
          </div>

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-8 xl:gap-10">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group relative py-2 text-[14px] font-medium text-steel-700 transition-colors hover:text-ink"
                  >
                    {link.label}
                    <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-px w-0 bg-copper-500 transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <Button
              href="#contact"
              className="rounded-md bg-copper-500 px-5 py-3 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-copper-600 hover:shadow-md"
            >
              Request Quote
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-steel-200 text-ink transition-colors hover:bg-steel-50 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </Container>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white lg:hidden"
          >
            <div className="border-b border-black/5">
              <Container className="flex h-[76px] items-center justify-between">
                <div onClick={() => setOpen(false)}>
                  <Brand />
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-steel-200 text-ink transition-colors hover:bg-steel-50"
                >
                  <X className="h-5 w-5" />
                </button>
              </Container>
            </div>

            <Container className="pt-8">
              <nav aria-label="Mobile navigation">
                <ul className="divide-y divide-steel-200">
                  {NAV_LINKS.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between py-4 font-display text-[22px] font-semibold tracking-tight text-ink"
                      >
                        {link.label}
                        <ArrowUpRight className="h-5 w-5 text-steel-400" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <Button
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-8 flex w-full justify-center rounded-md bg-copper-500 px-6 py-4 text-sm font-semibold text-white hover:bg-copper-600"
              >
                Request Quote
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
