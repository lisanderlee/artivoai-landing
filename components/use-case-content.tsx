import Image from "next/image";
import { FadeIn } from "@/components/fade-in";
import { Heading } from "@/components/text";
import { UseCaseData } from "@/lib/data/use-case-data";

interface UseCaseContentProps {
  useCase: UseCaseData;
}

export function UseCaseContent({ useCase }: UseCaseContentProps) {
  return (
    <div className="py-24 flex flex-col max-w-4xl">
      <FadeIn>
        <Heading as="h1" className="mt-2">
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
  );
} 