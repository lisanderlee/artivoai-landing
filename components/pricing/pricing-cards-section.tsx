import { Container } from "@/components/container";
import { Gradient } from "@/components/gradient";
import { PricingCard } from "./pricing-card";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tierSlugs = ["starter", "growth", "enterprise"] as const;

interface PricingCardsSectionProps {
  cta?: boolean;
}

function CallToAction() {
  const t = useTranslations("Pricing");
  return (
    <div>
      <p className="mt-10 max-w-sm text-lg font-medium text-gray-900">{t("cta-text")}</p>
      <div className="mt-2">
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 text-sm/6 font-medium text-pink-600"
        >
          {t("cta")}
          <ArrowRight className="size-5" />
        </Link>
      </div>
    </div>
  );
}

export function PricingCardsSection({ cta = false }: PricingCardsSectionProps) {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tierSlugs.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} slug={tier} />
          ))}
        </div>
        {cta && <CallToAction />}
      </Container>
    </div>
  );
}