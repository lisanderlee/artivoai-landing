import Hero from "@/components/sections/hero-sections";
import UseCase from "@/components/sections/use-case-section";
import BentoSection from "@/components/sections/bento-section";
import Tools from "@/components/sections/tools-section";
import Pricing from "@/components/sections/pricing-section";
import Testimonials from "@/components/sections/testimonials-sections";
import { Footer } from "@/components/sections/footer-section";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <UseCase />
      <BentoSection />
      <Tools />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}
