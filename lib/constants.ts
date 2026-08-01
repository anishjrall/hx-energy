import {
  Flame,
  Sun,
  Droplets,
  Gauge,
  HardHat,
  Building2,
  Factory,
  HeartPulse,
  GraduationCap,
  Landmark,
  Milk,
  Users,
  ShieldCheck,
  Wrench,
  Award,
  ClipboardCheck,
  Compass,
  Package,
  TestTube2,
} from "lucide-react";
import type {
  NavLink,
  ServiceVertical,
  StatItem,
  ProcessStep,
  Industry,
  TeamMember,
  FaqItem,
  GalleryImage,
} from "@/types";

export const SITE = {
  name: "HX Energy Systems",
  legalName: "HX Energy Systems Pvt. Ltd.",
  tagline: "Engineering Trust. Delivering Excellence.",
  phone: "+91 73531 31310",
  email: "info@hxenergy.in",
  address: "4th Main, 4th Cross, E & F Block, R.K. Nagar, Mysuru \u2013 570022, Karnataka, India",
  url: "https://www.hxenergy.in",
};

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Projects", href: "#gallery" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES: ServiceVertical[] = [
  {
    id: "heat-pumps",
    icon: Flame,
    title: "Heat Pump Systems",
    description:
      "Industrial and commercial hot water technology delivering 3\u20135x the thermal output per unit of electricity consumed, via the vapour compression cycle.",
    capacity: "5 TR \u2014 500 TR",
    href: "#services",
  },
  {
    id: "solar-pv",
    icon: Sun,
    title: "Solar PV Solutions",
    description:
      "Full-spectrum solar EPC \u2014 rooftop, ground-mounted, open access and captive plants \u2014 engineered from site assessment through grid integration.",
    capacity: "kW \u2014 MW scale",
    href: "#services",
  },
  {
    id: "water-treatment",
    icon: Droplets,
    title: "Water Treatment",
    description:
      "RO plants, softeners, sewage and effluent treatment systems engineered to CPCB/SPCB and BIS 10500 standards for potable and process water.",
    capacity: "500 LPH \u2014 1,00,000+ LPH",
    href: "#services",
  },
  {
    id: "pumping",
    icon: Gauge,
    title: "Pumping Solutions",
    description:
      "Complete hydraulic-engineered pump systems \u2014 circulation, booster, transfer, solar, dosing and sewage \u2014 with VFD control and SCADA integration.",
    capacity: "1 \u2014 5,000 m\u00b3/hr",
    href: "#services",
  },
  {
    id: "epc",
    icon: Building2,
    title: "EPC Projects",
    description:
      "Turnkey engineering, procurement and construction with single-point accountability, fixed timelines and performance guarantees.",
    capacity: "Concept \u2014 Commissioning",
    href: "#services",
  },
];

export const STATS: StatItem[] = [
  { value: 5, suffix: "", label: "Core Verticals", description: "Heat pumps, solar, water, pumping & EPC under one accountable partner" },
  { value: 70, suffix: "%", label: "Energy Savings", description: "Average reduction vs. conventional electric heating" },
  { value: 25, suffix: "Y", label: "Solar Plant Life", description: "Design life backed by performance warranty" },
  { value: 24, suffix: "/7", label: "Service Response", description: "Breakdown support under structured AMC programmes" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    index: "01",
    title: "Consultation",
    description:
      "Requirement discovery, feasibility discussion and preliminary scoping with our engineering team.",
  },
  {
    index: "02",
    title: "Site Survey",
    description:
      "Load assessment, energy audit and technical site evaluation to ground the design in real conditions.",
  },
  {
    index: "03",
    title: "Engineering Design",
    description:
      "Detailed system sizing, P&IDs, single-line diagrams and 3D layouts \u2014 reviewed against IS and BIS standards.",
  },
  {
    index: "04",
    title: "Proposal",
    description:
      "Transparent BOQ, technical specification and commercial proposal delivered within 48 hours.",
  },
];

export const LIFECYCLE_SERVICES = [
  {
    icon: Compass,
    title: "Engineering Consultancy & Design",
    description:
      "Site surveys, load assessment, system sizing, energy audits, and detailed engineering with 3D layouts, P&IDs and single-line diagrams.",
  },
  {
    icon: Package,
    title: "Procurement & Supply",
    description:
      "Sourcing from approved vendors with full traceability, material inspection and third-party quality certification for every critical component.",
  },
  {
    icon: HardHat,
    title: "Installation & Civil Works",
    description:
      "Professional installation by trained engineers \u2014 civil foundations, structural mounting, piping, electrical wiring and earthing.",
  },
  {
    icon: TestTube2,
    title: "Testing & Commissioning",
    description:
      "Systematic testing protocols, performance verification and comprehensive commissioning reports with full handover documentation.",
  },
  {
    icon: Wrench,
    title: "O&M & Annual Maintenance",
    description:
      "Scheduled preventive maintenance, 24\u00d77 breakdown support and spare parts management to maximise uptime and system lifespan.",
  },
  {
    icon: ClipboardCheck,
    title: "Turnkey EPC Projects",
    description:
      "Complete engineering, procurement and construction contracts with single-point responsibility and performance guarantees.",
  },
];

export const INDUSTRIES: Industry[] = [
  {
    name: "Hotels & Resorts",
    description:
      "Centralised hot water, solar energy, water treatment and pumping for 5-star, 3-star and boutique properties.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Hospitals & Healthcare",
    description:
      "Reliable 24\u00d77 hot water, pure water systems, STP and energy solutions with zero-compromise uptime.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Universities & Campuses",
    description:
      "Large-capacity hostel hot water, rooftop solar, RO drinking water and STP for campus-scale populations.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Manufacturing & Industrial",
    description:
      "Process hot water, industrial RO, ETP and solar captive systems for textile, pharma and general manufacturing.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Commercial Buildings",
    description:
      "Energy-efficient hot water, rooftop solar, water treatment and pumping for IT parks and mixed-use developments.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Government & Infrastructure",
    description:
      "Turnkey EPC for government departments, smart city projects and large public infrastructure.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Dairy & Food Processing",
    description:
      "Hot water and steam systems, process water treatment and ETP tailored to stringent food-grade standards.",
    image:
      "https://images.unsplash.com/photo-1587411768638-ec71b2d5c962?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "EPC Contractors & Consultants",
    description:
      "Supply, installation and commissioning support for MEP consultants, architects and project management teams.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop", alt: "Heat pump plant room installation", category: "Heat Pumps" },
  { src: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=1000&auto=format&fit=crop", alt: "RO membrane skid", category: "Water Treatment" },
  { src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop", alt: "Rooftop solar PV array over commercial building", category: "Solar PV" },
  { src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop", alt: "Ground mounted solar plant", category: "Solar PV" },
  { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop", alt: "Water softener vessel bank", category: "Water Treatment" },
  { src: "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?q=80&w=1000&auto=format&fit=crop", alt: "Sewage treatment plant clarifier", category: "Water Treatment" },
  { src: "https://images.unsplash.com/photo-1581094651181-35942459ef62?q=80&w=1000&auto=format&fit=crop", alt: "Industrial pump room piping", category: "Pumping" },
  { src: "https://images.unsplash.com/photo-1580983555102-4c211c2b478a?q=80&w=1000&auto=format&fit=crop", alt: "Engineers reviewing site drawings", category: "EPC" },
];

export const LEADERSHIP: TeamMember[] = [
  {
    name: "Laxman Biradar",
    role: "Founder & Managing Director",
    bio: "Leads corporate strategy, project execution, operations and innovation \u2014 driving HX Energy's long-term growth roadmap with a strong engineering foundation.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Srinath MS",
    role: "Co-Founder & Director",
    bio: "Leads business development, strategic partnerships and corporate expansion, building the long-term customer relationships that define HX Energy.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
  },
];

export const MANAGEMENT_TEAM: TeamMember[] = [
  { name: "Vinay B M", role: "General Manager \u2014 Projects", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=600&auto=format&fit=crop" },
  { name: "Anil", role: "General Manager \u2014 Engineering & Technical", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop" },
  { name: "Raghu", role: "General Manager \u2014 Sales & Marketing", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop" },
  { name: "Arun", role: "General Manager \u2014 Service & AMC", image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?q=80&w=600&auto=format&fit=crop" },
  { name: "Adv. Raghu", role: "Manager \u2014 Finance & Accounts", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" },
  { name: "Diksha", role: "Manager \u2014 Quality Assurance & HSE", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop" },
  { name: "Pooja", role: "Manager \u2014 Customer Support", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop" },
];

export const WHY_CHOOSE_US = [
  {
    icon: ShieldCheck,
    title: "Complete Engineering Solutions",
    description: "One company, one point of accountability \u2014 from design to O&M, every phase managed by HX Energy.",
  },
  {
    icon: Users,
    title: "Professional Engineering Team",
    description: "Dedicated domain specialists in thermal, solar, water and mechanical engineering with proven delivery credentials.",
  },
  {
    icon: Award,
    title: "Assembly & Quality Tested",
    description: "In-house assembly with rigorous quality testing against international standards before every dispatch.",
  },
  {
    icon: Gauge,
    title: "Energy Efficient Technologies",
    description: "Solutions engineered for maximum energy savings \u2014 reducing bills, carbon footprint and operating cost.",
  },
  {
    icon: Sun,
    title: "Solar Investment Expertise",
    description: "Deep expertise across CAPEX, OPEX, RESCO and open access models to maximise returns for every client profile.",
  },
  {
    icon: Wrench,
    title: "Reliable Service & AMC",
    description: "Dedicated service teams, rapid response SLAs and structured AMC programmes ensuring maximum uptime.",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "What is the typical timeline for an EPC project, from consultation to commissioning?",
    answer:
      "Timelines vary by scope and capacity, but most projects move through consultation, site survey and engineering design within 2\u20134 weeks, followed by a fixed, contractually committed execution schedule agreed at proposal stage.",
  },
  {
    question: "Do you offer solar financing options with no upfront investment?",
    answer:
      "Yes. Alongside the CAPEX model, we structure OPEX (fixed monthly tariff, zero upfront cost) and RESCO (pay-per-unit under a long-term PPA) models suited to organisations that prefer operating expense treatment over capital outlay.",
  },
  {
    question: "What standards do your water treatment systems comply with?",
    answer:
      "Every system is engineered to applicable CPCB/SPCB effluent discharge norms, BIS 10500 potable water standards, and relevant process water specifications, with third-party testing available on request.",
  },
  {
    question: "Do you provide after-installation maintenance support?",
    answer:
      "Yes. All installations are backed by structured Annual Maintenance Contracts covering scheduled preventive maintenance, 24\u00d77 breakdown response, and spare parts management.",
  },
  {
    question: "Can HX Energy handle multi-site or multi-vertical projects for a single client?",
    answer:
      "Yes \u2014 our integrated model is built for exactly this. A single accountable engineering team can coordinate heat pump, solar, water and pumping scopes across multiple sites under one project structure.",
  },
];

export const SERVICE_OPTIONS = [
  "Heat Pump Systems",
  "Solar PV Solutions",
  "Water Treatment",
  "Pumping Solutions",
  "EPC / Turnkey Project",
  "AMC / Service Support",
  "Other",
];

export const BUDGET_OPTIONS = [
  "Under \u20b910 Lakh",
  "\u20b910 \u2013 50 Lakh",
  "\u20b950 Lakh \u2013 1 Crore",
  "Above \u20b91 Crore",
  "To be discussed",
];

export const INDUSTRY_ICONS: Record<string, typeof Building2> = {
  "Hotels & Resorts": Building2,
  "Hospitals & Healthcare": HeartPulse,
  "Universities & Campuses": GraduationCap,
  "Manufacturing & Industrial": Factory,
  "Commercial Buildings": Landmark,
  "Government & Infrastructure": Landmark,
  "Dairy & Food Processing": Milk,
  "EPC Contractors & Consultants": HardHat,
};
