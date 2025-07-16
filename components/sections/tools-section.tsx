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
    icon: ImageIcon,
    image: Sneaker,
  },
  {
    name: "ImageToVideo",
    eyebrow: "ImageToVideoEyebrow",
    title: "ImageToVideoTitle",
    description: "ImageToVideoDescription",
    icon: Film,
    image: Sneaker,
  },
  {
    name: "ProductTransfer",
    eyebrow: "ProductTransferEyebrow",
    title: "ProductTransferTitle",
    description: "ProductTransferDescription",
    icon: Replace,
    image: Sneaker,
  },
  {
    name: "BakckgroundChange",
    eyebrow: "BakckgroundChangeEyebrow",
    title: "BakckgroundChangeTransferTitle",
    description: "BakckgroundChangeDescription",
    icon: Focus,
    image: Sneaker,
  },
  {
    name: "ImageUpscale",
    eyebrow: "ImageUpscaleChangeEyebrow",
    title: "ImageUpscaleTransferTitle",
    description: "ImageUpscaleDescription",
    icon: Grip,
    image: Sneaker,
  },
  {
    name: "ImageResize",
    eyebrow: "ImageResizeChangeEyebrow",
    title: "ImageResizeTransferTitle",
    description: "ImageResizeDescription",
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
                  className={`flex flex-col-reverse  lg:flex-row ${
                    isReversed
                      ? "lg:flex-row-reverse items-center justify-between flex mt-10 lg:mt-32"
                      : ""
                  } items-center justify-between gap-x-10 flex lg:flex-row mt-10 lg:mt-32`}
                >
                  <div className="w-full mt-10 lg:mt-0 h-full flex-col bg-white/5 p-10 rounded-3xl  text-left lg:text-left">
                    <span className="uppercase bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent   font-medium">
                      {t(tool.eyebrow)}
                    </span>
                    <h2 className="text-white text-5xl font-bold mt-2">
                      {t(tool.title)}
                    </h2>
                    <p className="text-gray-200 text-lg mt-4">
                      {t(tool.description)}
                    </p>
                    <Button
                      variant="secondary-icon-outline"
                      className="mt-10"
                      icon={<ArrowUpRight />}
                      href="#"
                    >
                      {t("cta")}
                    </Button>
                  </div>
                  <div className=" w-full  items-center flex flex-col ">
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      className=" object-cover rounded-2xl"
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
