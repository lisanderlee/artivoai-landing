import CreativeUse from "@/public/use-case/CreativeUse.png";
import AgencyUse from "@/public/use-case/AgencyUse.png";
import EcommerceUse from "@/public/use-case/EcommerceUse.png";
import { StaticImageData } from "next/image";

export interface UseCaseData {
  title: string;
  headline: string;
  subtitle: string;
  challengeTitle: string;
  challenge: string;
  solutionTitle: string;
  solution: string[];
  resultsTitle: string;
  results: string;
  conclusionTitle: string;
  conclusion: string;
  ImageSrc: StaticImageData;
}

export interface UseCaseConfig {
  [key: string]: UseCaseData;
}

export function createUseCaseData(t: (key: string) => string): UseCaseConfig {
  return {
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
} 