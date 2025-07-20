import Image from "next/image";
import { Container } from "@/components/container";
import Link from "next/link";
import CreativeUse from "@/public/use-case/CreativeUse.png";
import AgencyUse from "@/public/use-case/AgencyUse.png";
import EcommerceUse from "@/public/use-case/EcommerceUse.png";
import { useTranslations } from "next-intl";
import { FadeInStagger, FadeIn } from "../fade-in";
import { Button } from "../button";
import { ArrowUpRight } from "lucide-react";
const featuredCases = [
  {
    title: "Creatives.Thumbnail.Title",
    description: "Creatives.Thumbnail.CreativesDescription",
    link: "Creatives",
    image: CreativeUse,
  },
  {
    title: "Ecommerce.Thumbnail.Title",
    description: "Ecommerce.Thumbnail.EcommerceDescription",
    link: "Ecommerce",
    image: EcommerceUse,
  },
  {
    title: "Agency.Thumbnail.Title",
    description: "Agency.Thumbnail.AgencyDescription",
    link: "Agency",
    image: AgencyUse,
  },
];

export default function UseCase() {
  const t = useTranslations("UseCase");
  return (
    <div className="mt-42 pb-14" >
      <Container>
        <div id="useCaseId" />
        <FadeInStagger>
          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {featuredCases.map((post) => (
              <FadeIn key={post.title}>
                <Link key={post.link} href={`/use-case/${post.link}`}>
                  <div
                    key={post.title}
                    className="relative flex flex-col rounded-3xl group  shadow-md ring-1 shadow-black/5 ring-black/5"
                  >
                    {post.image && (
                      <div className="relative ">
                        <Image
                          alt={post.title}
                          src={post.image}
                          className="aspect-3/2 w-full rounded-2xl object-cover "
                        />
                        <div className="absolute bottom-1 right-2">
                          <div className="bg-black p-2 rounded-full group-hover:bg-white">
                            <ArrowUpRight className="h-5 w-5 stroke-white group-hover:stroke-black" />
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="flex flex-1 flex-col py-3  px-5">
                      <div className=" text-xl font-medium text-white">
                        <span className="absolute inset-0" />
                        {t(post.title)}
                      </div>
                      <div className="mt-1 flex-1 text-md text-white/50">
                        {t(post.description)}
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>
    </div>
  );
}
