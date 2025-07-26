"use client";

import { Container } from "@/components/container";
import { Footer } from "@/components/sections/footer-section";
import { GradientBackground } from "@/components/gradient";
import { Navbar } from "@/components/navbar";

import PricingFrequentlyAskedQuestions from "@/components/PricingFaqs";


export default function Faq() {
  return (
    <main className="overflow-hidden bg-white">
      <GradientBackground />
      <Container>
        <Navbar mode="light" />
      </Container>
   <div className="mt-24" />
      <PricingFrequentlyAskedQuestions />
      <Footer />
    </main>
  );
}
