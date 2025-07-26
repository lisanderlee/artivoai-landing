import { Container } from "@/components/container";
import { Gradient } from "@/components/gradient";
import { Heading, Lead } from "@/components/text";
import { FadeInStagger, FadeIn } from "../fade-in";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { PricingCard } from "@/components/pricing/pricing-card";
import { PricingCardsSection } from "@/components/pricing/pricing-cards-section";

const tierSlugs = ["starter", "growth", "enterprise"] as const;

function CallToAction() {
  const t = useTranslations("Pricing");
  return (
    <div>
      <p className=" mt-10 max-w-sm text-sm/6 text-gray-600">{t("cta-text")}</p>
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

function Header() {
  const t = useTranslations("Pricing");

  return (
    <FadeIn>
      <Container className="mt-16">
        <Heading className="text-white" as="h1">
          {t("title")}
        </Heading>
        <Lead className="mt-6 max-w-3xl">{t("SubTitle")}</Lead>
      </Container>
    </FadeIn>
  );
}

export default function Pricing() {
  return (
    <main className="overflow-hidden ">
      <Header />
      <FadeIn>
        <PricingCardsSection />
      </FadeIn>
    </main>
  );
}
