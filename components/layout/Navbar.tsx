"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-[#E8E8E8]">
      <Container className="flex h-[88px] items-center justify-between">
        
        {/* Logo */}
        <Link 
          href="#top" 
          className="flex items-center gap-4" 
          aria-label={`${SITE.name} home`}
        >
          <Image
            src="/logo.png"
            alt="HX Energy Logo"
            width={42}
            height={42}
            className="object-contain"
          />
          <span className="leading-tight">
            <span className="block font-display text-xl font-semibold tracking-tight text-ink">
              HX Energy
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative text-[15px] font-medium text-steel-700 transition-all hover:text-copper-600 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-copper-500 after:transition-all hover:after:w-full"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button 
            href="#contact" 
            className="rounded-md bg-copper-500 px-7 py-3 text-white shadow-sm transition-colors hover:bg-copper-600"
          >
            Request Quote
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="text-ink lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>

      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white lg:hidden"
          >
            <Container className="flex h-[88px] items-center justify-between border-b border-[#E8E8E8]">
              <Link href="#top" className="flex items-center gap-4" onClick={() => setOpen(false)}>
                <Image
                  src="/logo.png"
                  alt="HX Energy Logo"
                  width={42}
                  height={42}
                  className="object-contain"
                />
                <span className="font-display text-xl font-semibold tracking-tight text-ink">
                  HX Energy
                </span>
              </Link>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-ink">
                <X className="h-6 w-6" />
              </button>
            </Container>
            
            <Container className="mt-8">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-steel-200 py-4 font-display text-2xl font-medium text-ink"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </Container>
            
            <Container className="mt-8">
              <Button 
                href="#contact" 
                onClick={() => setOpen(false)} 
                className="w-full justify-center rounded-md bg-copper-500 px-7 py-3 text-white shadow-sm transition-colors hover:bg-copper-600"
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