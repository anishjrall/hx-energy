"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE, SERVICES, NAV_LINKS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white pt-24 text-gray-600">
      <Container>
        <div className="grid grid-cols-1 gap-12 pb-20 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">

          {/* Company Info */}
          <div>
            <Link href="#top" className="inline-flex items-center gap-2.5">
              <Image
                src="/hx-energy-logo.png"
                alt="HX Energy Systems"
                width={48}
                height={38}
                className="h-[38px] w-[48px] object-contain"
              />

              <div className="leading-none">
                <span className="block font-display text-[18px] font-bold tracking-[-0.03em] text-gray-900">
                  HX Energy
                </span>
                <span className="mt-1 block text-[8px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Systems
                </span>
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-gray-600">
              Engineering trust, delivering excellence — heat pumps, solar,
              water treatment, pumping and turnkey EPC for commercial,
              industrial and government clients.
            </p>

          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900">
              Services
            </h3>
            <ul className="mt-6 space-y-4">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href={s.href}
                    className="text-[15px] font-medium transition-colors hover:text-[#FF6B00]"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900">
              Quick Links
            </h3>
            <ul className="mt-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] font-medium transition-colors hover:text-[#FF6B00]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:careers@hxenergy.in"
                  className="text-[15px] font-medium transition-colors hover:text-[#FF6B00]"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-900">
              Contact
            </h3>
            <ul className="mt-6 space-y-4 text-[15px] font-medium text-gray-600">
              <li className="leading-relaxed">
                <a href={SITE.mapUrl} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#FF6B00]">
                  {SITE.address}
                  <span className="block">{SITE.landmark}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-[#FF6B00]"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.alternatePhone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-[#FF6B00]"
                >
                  {SITE.alternatePhone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-[#FF6B00]"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 py-8 text-xs font-medium uppercase tracking-wider text-gray-500 sm:flex-row">
          <p>
            &copy; {year} {SITE.legalName}. All rights reserved.
          </p>
          <p>{SITE.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
