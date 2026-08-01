import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceVertical {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  capacity: string;
  href: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export interface Industry {
  name: string;
  description: string;
  image: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export interface ContactFormValues {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  details: string;
  budget: string;
}
