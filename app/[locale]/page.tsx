import Hero from "@/components/sections/hero-sections";
import UseCase from "@/components/sections/use-case-section";
import BentoSection from "@/components/sections/bento-section";
export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <UseCase />
      <BentoSection />
    </div>
  );
}
