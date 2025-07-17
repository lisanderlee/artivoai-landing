import { Container } from "@/components/container";
import { Heading, Lead } from "@/components/text";
import Sneaker from "@/public/content/sneakers.png";
import { useTranslations } from "next-intl";
import {
  Film,
  Focus,
  Grip,
  ImageIcon,
  Ratio,
  Replace,
  ArrowUpRight,
} from "lucide-react";
import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";
import { Button } from "../button";
import { FadeIn } from "../fade-in";
import Image from "next/image";

type Tool = {
  name: string;
  eyebrow: string;
  title: string;
  description: string;
  detail: string;
  icon: LucideIcon;
  image: StaticImageData;
};

// Define the array
const tools: Tool[] = [
  {
    name: "ImageGeneration",
    eyebrow: "ImageGenerationEyebrow",
    title: "ImageGenerationTitle",
    description: "ImageGenerationDescription",
    detail: "ImageGenerationDetail",
    icon: ImageIcon,
    image: Sneaker,
  },
  {
    name: "ImageToVideo",
    eyebrow: "ImageToVideoEyebrow",
    title: "ImageToVideoTitle",
    description: "ImageToVideoDescription",
    detail: "ImageToVideoDetail",
    icon: Film,
    image: Sneaker,
  },
  {
    name: "ProductTransfer",
    eyebrow: "ProductTransferEyebrow",
    title: "ProductTransferTitle",
    description: "ProductTransferDescription",
    detail: "ProductTransferDetail",
    icon: Replace,
    image: Sneaker,
  },
  {
    name: "BakckgroundChange",
    eyebrow: "BakckgroundChangeEyebrow",
    title: "BakckgroundChangeTransferTitle",
    description: "BakckgroundChangeDescription",
    detail: "BakckgroundChangeDetail",
    icon: Focus,
    image: Sneaker,
  },
  {
    name: "ImageUpscale",
    eyebrow: "ImageUpscaleChangeEyebrow",
    title: "ImageUpscaleTransferTitle",
    description: "ImageUpscaleDescription",
    detail: "ImageUpscaleDetail",
    icon: Grip,
    image: Sneaker,
  },
  {
    name: "ImageResize",
    eyebrow: "ImageResizeChangeEyebrow",
    title: "ImageResizeTransferTitle",
    description: "ImageResizeDescription",
    detail: "ImageResizeDetail",
    icon: Ratio,
    image: Sneaker,
  },
];

function Header() {
  const t = useTranslations("Tools");
  return (
    <FadeIn>
      <Container className="mt-16">
        <Heading className="text-white max-w-md" as="h1">
          {t("Eyebrow")}
        </Heading>
        <Lead className="mt-6 max-w-sm">{t("title")}</Lead>
      </Container>
    </FadeIn>
  );
}
export default function Tools() {
  const t = useTranslations("Tools");
  return (
    <>
      <Header />

      <div className="overflow-hidden ">
        <div className="mx-auto max-w-7xl px-3 md:px-6 lg:px-0">
          {tools.map((tool, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <FadeIn key={tool.name}>
                <div
                  key={tool.name}
                  className={`flex flex-col-reverse lg:items-stretch items-center lg:flex-row h-full ${
                    isReversed
                      ? "lg:flex-row-reverse  justify-between flex mt-10 lg:mt-32"
                      : ""
                  } h-full justify-between gap-x-4 flex lg:flex-row mt-10 lg:mt-32`}
                >
                  <div className="flex lg:flex-1/2 max-w-2xl lg:w-full">
                    <div className="w-full mt-10 lg:mt-0 h-full flex-1/2 flex flex-col justify-between bg-white/5 p-10  rounded-3xl text-left lg:text-left">
                      <div className="h-full">
                        <span className="uppercase bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent   font-medium">
                          {t(tool.eyebrow)}
                        </span>
                        <h2 className="text-white text-5xl max-w-md font-semibold mt-2">
                          {t(tool.title)}
                        </h2>
                        <p className="text-gray-200 text-lg max-w-md mt-4">
                          {t(tool.description)}
                        </p>
                        <Button
                          variant="secondary-icon-outline"
                          className="mt-10"
                          icon={<ArrowUpRight className="h-5 w-5" />}
                          href="#"
                        >
                          {t("cta")}
                        </Button>
                      </div>
                      <div className="mt-24">
                        <div className=" h-[1px] w-full bg-white/20 mb-5" />
                        <span className="text-white/50 text-sm   ">
                          {t(tool.detail)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=" h-full items-center flex w-full max-w-2xl lg:flex-1/2 flex-col ">
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      className="object-cover rounded-3xl h-full w-full"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </>
  );
}
