import Image from "next/image";
import { Container } from "@/components/container";
import Link from "next/link";
import CreativeUse from "@/public/content/CreativeUse.png";
import AgencyUse from "@/public/content/AgencyUse.png";
import EcommerceUse from "@/public/content/EcommerceUse.png";
import { useTranslations } from "next-intl";
import { FadeInStagger, FadeIn } from "../fade-in";

const featuredCases = [
  {
    title: "Creatives",
    description: "CreativesDescription",
    link: "marketing",
    image: CreativeUse,
  },
  {
    title: "Ecommerce",
    description: "EcommerceDescription",
    link: "ecommerce",
    image: EcommerceUse,
  },
  {
    title: "Marketing",
    description: "MarketingDescription",
    link: "agency",
    image: AgencyUse,
  },
];

export default function UseCase() {
  const t = useTranslations("UseCase");
  return (
    <div className="mt-56 pb-14">
      <Container >
        <FadeInStagger>
          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {featuredCases.map((post) => (
              <FadeIn key={post.title}>
                <Link
                  key={post.link}
                  href={`/use-case/${post.link}`}
                 
                >
                  <div
                    key={post.title}
                    className="relative flex flex-col rounded-3xl  hover:bg-white/5 shadow-md ring-1 shadow-black/5 ring-black/5"
                  >
                    {post.image && (
                        
                      <Image
                        alt={post.title}
                        src={post.image}
                        className="aspect-3/2 w-full rounded-2xl object-cover "
                      />
                    )}
                    <div className="flex flex-1 flex-col py-3 px-5">
                      <div className="mt-2 text-2xl font-medium text-white">
                        <span className="absolute inset-0" />
                        {t(post.title)}
                      </div>
                      <div className="mt-2 flex-1 text-lg/7 text-white">
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
