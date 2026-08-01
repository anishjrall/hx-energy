import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { EngineeringProcess } from "@/components/sections/EngineeringProcess";
import { Industries } from "@/components/sections/Industries";
import { Statistics } from "@/components/sections/Statistics";
import { Gallery } from "@/components/sections/Gallery";
import { Leadership } from "@/components/sections/Leadership";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Products />
        <EngineeringProcess />
        <Industries />
        <Statistics />
        <Gallery />
        <Leadership />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
