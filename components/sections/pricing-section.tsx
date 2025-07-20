import { Container } from "@/components/container";
import { Gradient, GradientBackground } from "@/components/gradient";
import { Heading, Lead } from "@/components/text";
import { FadeInStagger, FadeIn } from "../fade-in";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { PricingCard } from "@/components/pricing/pricing-card";

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
        <Lead className="mt-6 max-w-3xl">
          {t("SubTitle")}
        </Lead>
      </Container>
    </FadeIn>
  );
}

function PricingCards() {
  return (
    <div className="relative py-20">
      <Gradient className="absolute rounded-2xl lg:rounded-4xl inset-x-2 top-48 bottom-0 ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <FadeInStagger >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {tierSlugs.map((tier, tierIndex) => (
              <FadeIn key={tierIndex}>
                <PricingCard slug={tier} />
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
        <CallToAction />
      </Container>
    </div>
  );
}

export default function Pricing() {
  return (
    <main className="overflow-hidden ">
      <Header />
      <PricingCards />
    </main>
  );
}
