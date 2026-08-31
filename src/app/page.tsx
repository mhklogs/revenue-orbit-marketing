import Hero from "@/sections/Hero";
import LifecycleBar from "@/sections/LifecycleBar";
import ValueStatement from "@/sections/ValueStatement";
import GrowthFramework from "@/sections/GrowthFramework";
import WhatWeDo from "@/sections/WhatWeDo";
import Metrics from "@/sections/Metrics";
import Testimonials from "@/sections/Testimonials";
import Faq from "@/sections/Faq";
import ContactForm from "@/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <LifecycleBar />
      <ValueStatement />
      <WhatWeDo />
      <GrowthFramework />
      <Metrics />
      <Testimonials />
      <Faq />
      <ContactForm />
    </>
  );
}
