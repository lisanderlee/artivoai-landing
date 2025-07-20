import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import CreativeUse from "@/public/use-case/CreativeUse.png";
import AgencyUse from "@/public/use-case/AgencyUse.png";
import EcommerceUse from "@/public/use-case/EcommerceUse.png";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Footer } from "@/components/sections/footer-section";
import { GradientBackground } from "@/components/gradient";
import { Link } from "@/components/link";
import { Heading, Subheading } from "@/components/text";
import { ChevronLeftIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/fade-in";


export default async function UseCasePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>; // ✅ Change to Promise type
}) {
  const { slug } = await params; // ✅ Await params
  const t = await getTranslations("UseCase");

  const useCases = {
    Creatives: {
      title: t("Creatives.title"),
      headline: t("Creatives.headline"),
      subtitle: t("Creatives.subtitle"),
      challengeTitle: t("Creatives.challengeTitle"),
      challenge: t("Creatives.challenge"),
      solutionTitle: t("Creatives.solutionTitle"),
      solution: [
        t("Creatives.solution.item1"),
        t("Creatives.solution.item2"),
        t("Creatives.solution.item3"),
        t("Creatives.solution.item4"),
      ],
      resultsTitle: t("Creatives.resultsTitle"),
      results: t("Creatives.results"),
      conclusionTitle: t("Creatives.conclusionTitle"),
      conclusion: t("Creatives.conclusion"),
      ImageSrc: CreativeUse,
    },
    Agency: {
      title: t("Agency.title"),
      headline: t("Agency.headline"),
      subtitle: t("Agency.subtitle"),
      challengeTitle: t("Agency.challengeTitle"),
      challenge: t("Agency.challenge"),
      solutionTitle: t("Agency.solutionTitle"),
      solution: [
        t("Agency.solution.item1"),
        t("Agency.solution.item2"),
        t("Agency.solution.item3"),
        t("Agency.solution.item4"),
      ],
      resultsTitle: t("Agency.resultsTitle"),
      results: t("Agency.results"),
      conclusionTitle: t("Agency.conclusionTitle"),
      conclusion: t("Agency.conclusion"),
      ImageSrc: AgencyUse,
    },
    Ecommerce: {
      title: t("Ecommerce.title"),
      headline: t("Ecommerce.headline"),
      subtitle: t("Ecommerce.subtitle"),
      challengeTitle: t("Ecommerce.challengeTitle"),
      challenge: t("Ecommerce.challenge"),
      solutionTitle: t("Ecommerce.solutionTitle"),
      solution: [
        t("Ecommerce.solution.item1"),
        t("Ecommerce.solution.item2"),
        t("Ecommerce.solution.item3"),
        t("Ecommerce.solution.item4"),
        t("Ecommerce.solution.item5"),
      ],
      resultsTitle: t("Ecommerce.resultsTitle"),
      results: t("Ecommerce.results"),
      conclusionTitle: t("Ecommerce.conclusionTitle"),
      conclusion: t("Ecommerce.conclusion"),
      ImageSrc: EcommerceUse,
    },
  };

  const useCase = useCases[slug as keyof typeof useCases];
  if (!useCase) return notFound();

  return (
    <main className="overflow-hidden bg-white">
      <GradientBackground />

      <Container>
        <Navbar mode="light" />
        <div className="w-full flex  justify-center">
          <div className="py-24 flex flex-col max-w-4xl">
            <FadeIn>
              <Heading as="h1" className="mt-2  ">
                {useCase.title}
              </Heading>

              <p className="text-xl text-gray-600 mb-2 mt-5">{useCase.subtitle}</p>
            </FadeIn>
            <FadeIn>
              <Image
                src={useCase.ImageSrc}
                className="max-w-4xl w-full rounded-3xl my-10"
                alt={useCase.title}
              />
            </FadeIn>
            <FadeIn>
              <h2 className="mt-8 text-lg font-semibold">
                {useCase.challengeTitle}
              </h2>
              <p>{useCase.challenge}</p>
              <h2 className="mt-8 text-lg font-semibold">
                {useCase.solutionTitle}
              </h2>
              {Array.isArray(useCase.solution) ? (
                <ul className="list-disc ml-6 space-y-2">
                  {useCase.solution.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{useCase.solution}</p>
              )}
              <h2 className="mt-8 text-lg font-semibold">
                {useCase.resultsTitle}
              </h2>
              <p>{useCase.results}</p>
              <h2 className="mt-8 text-lg font-semibold">
                {useCase.conclusionTitle}
              </h2>
              <p>{useCase.conclusion}</p>
            </FadeIn>
          </div>
        </div>
      </Container>
      <FadeIn>
        <Footer />
      </FadeIn>
    </main>
  );
}
