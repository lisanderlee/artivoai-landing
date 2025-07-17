import Hero from "@/components/sections/hero-sections";
import UseCase from "@/components/sections/use-case-section";
import BentoSection from "@/components/sections/bento-section";
import Tools from "@/components/sections/tools-section";
import Pricing from "@/components/sections/pricing-section";
import Testimonials from "@/components/sections/testimonials-sections";
import { Footer } from "@/components/sections/footer-section";
import { FadeIn } from "@/components/fade-in";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <FadeIn>
        <Hero />
      </FadeIn>
      <UseCase />
      <FadeIn>
        <BentoSection />
      </FadeIn>
      <Tools />
      <Pricing />
      <Testimonials />
      <FadeIn>
        <Footer />
      </FadeIn>
    </div>
  );
}
