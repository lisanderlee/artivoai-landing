import { Container } from "@/components/container";
import { Heading, Lead } from "@/components/text";
import { useTranslations } from "next-intl";

export function PricingHeader() {
  const t = useTranslations("Pricing");
  
  return (
    <Container className="mt-16">
      <Heading as="h1">{t("title")}</Heading>
      <Lead className="mt-6 max-w-3xl">{t("SubTitle")}</Lead>
    </Container>
  );
} 