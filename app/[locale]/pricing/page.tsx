"use client";

import { Container } from "@/components/container";
import { Footer } from "@/components/sections/footer-section";
import { GradientBackground } from "@/components/gradient";
import { Navbar } from "@/components/navbar";
import Testimonial from "@/components/testimonial-callout";
import PricingFrequentlyAskedQuestions from "@/components/PricingFaqs";
import { PricingHeader } from "@/components/pricing/pricing-header";
import { PricingCardsSection } from "@/components/pricing/pricing-cards-section";
import { PricingTable } from "@/components/pricing/pricing-table";

export default function Pricing() {
  return (
    <main className="overflow-hidden bg-white">
      <GradientBackground />
      <Container>
        <Navbar mode="light" />
      </Container>
      <PricingHeader />
      <PricingCardsSection />
      <PricingTable />
      <Testimonial />
      <PricingFrequentlyAskedQuestions />
      <Footer />
    </main>
  );
}
