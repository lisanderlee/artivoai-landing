import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Container } from "@/components/container";
import { Footer } from "@/components/sections/footer-section";
import { GradientBackground } from "@/components/gradient";
import { FadeIn } from "@/components/fade-in";
import { UseCaseContent } from "@/components/use-case-content";
import { createUseCaseData } from "@/lib/data/use-case-data";
import { useCaseSEO, generateUseCaseMetadata } from "@/lib/seo/use-case-seo";

// SEO metadata generation for use case pages
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;

  const seoContent =
    useCaseSEO[slug as keyof typeof useCaseSEO]?.[
      locale as keyof typeof useCaseSEO.Creatives
    ] || useCaseSEO.Creatives.en;

  return generateUseCaseMetadata(locale, slug, seoContent);
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const t = await getTranslations("UseCase");

  const useCases = createUseCaseData(t);
  const useCase = useCases[slug as keyof typeof useCases];

  if (!useCase) return notFound();

  return (
    <main className="overflow-hidden bg-white">
      <GradientBackground />

      <Container>
        <Navbar mode="light" />
        <div className="w-full flex justify-center">
          <UseCaseContent useCase={useCase} />
        </div>
      </Container>
      <FadeIn>
        <Footer />
      </FadeIn>
    </main>
  );
}
