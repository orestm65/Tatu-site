import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Masters from "@/components/sections/Masters";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Booking from "@/components/sections/Booking";
import FAQ from "@/components/sections/FAQ";
import Contacts from "@/components/sections/Contacts";
import CTA from "@/components/sections/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Stats />
      <Services />
      <About />
      <Masters />
      <Process />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Booking />
      <FAQ />
      <Contacts />
      <CTA />
    </Layout>
  );
};

export default Index;
