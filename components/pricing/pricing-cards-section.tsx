import { Container } from "@/components/container";
import { Gradient } from "@/components/gradient";
import { LogoCloud } from "@/components/logo-cloud";
import { PricingCard } from "./pricing-card";

const tierSlugs = ["starter", "growth", "enterprise"] as const;

export function PricingCardsSection() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tierSlugs.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} slug={tier} />
          ))}
        </div>
        <LogoCloud className="mt-24" />
      </Container>
    </div>
  );
} 