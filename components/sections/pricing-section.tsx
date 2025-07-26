import { Container } from "@/components/container";
import { Heading, Lead } from "@/components/text";
import { FadeIn } from "../fade-in";
import { useTranslations } from "next-intl";
import { PricingCardsSection } from "@/components/pricing/pricing-cards-section";

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
        <PricingCardsSection cta={true}/>
      </FadeIn>
    </main>
  );
}
