import { Container } from "@/components/container";
import { Heading, Lead } from "@/components/text";
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
import GenerateImage from "@/public/tools/ImageGeneration.png";
import VideoGeneration from "@/public/tools/VideoGeneration.gif";
import BackgroundChange from "@/public/tools/BackgroundChange.png";
import ProductTransfer from "@/public/tools/ProductTransfer.png";
import ImageResize from "@/public/tools/ImageResize.png";
import RetouchLab from "@/public/tools/RetouchLab.png";

import Image from "next/image";

type Tool = {
  name: string;
  eyebrow: string;
  title: string;
  description: string;
  detail: string;
  prompt: string;
  id: string;
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
    prompt: "ImageGenerationPrompt",
    icon: ImageIcon,
    image: GenerateImage,
    id: "ImageGenerationID",
  },
  {
    name: "VideoGeneration",
    eyebrow: "VideoGenerationEyebrow",
    title: "VideoGenerationTitle",
    description: "VideoGenerationDescription",
    detail: "VideoGenerationDetail",
    prompt: "VideoGenerationPrompt",
    icon: Film,
    image: VideoGeneration,
    id: "VideoGenerationID",
  },
  {
    name: "ProductTransfer",
    eyebrow: "ProductTransferEyebrow",
    title: "ProductTransferTitle",
    description: "ProductTransferDescription",
    detail: "ProductTransferDetail",
    prompt: "ProductTransferPrompt",
    icon: Replace,
    image: ProductTransfer,
    id: "ProductTransferID",
  },
  {
    name: "BakckgroundChange",
    eyebrow: "BakckgroundChangeEyebrow",
    title: "BakckgroundChangeTransferTitle",
    description: "BakckgroundChangeDescription",
    detail: "BakckgroundChangeDetail",
    prompt: "BakckgroundChangePrompt",
    icon: Focus,
    image: BackgroundChange,
    id: "BakckgroundChangeID",
  },
  {
    name: "RetouchLab",
    eyebrow: "RetouchLabEyebrow",
    title: "RetouchLabTitle",
    description: "RetouchLabDescription",
    detail: "RetouchLabDetail",
    prompt: "RetouchLabPrompt",
    icon: Grip,
    image: RetouchLab,
    id: "RetouchLabID",
  },
  {
    name: "ImageResize",
    eyebrow: "ImageResizeChangeEyebrow",
    title: "ImageResizeTransferTitle",
    description: "ImageResizeDescription",
    detail: "ImageResizeDetail",
    prompt: "ImageResizePrompt",
    icon: Ratio,
    image: ImageResize,
    id: "ImageResizeID",
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
        <div className="mx-auto max-w-7xl px-6 md:px-6 lg:px-0">
          {tools.map((tool, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <FadeIn key={tool.name}>
                <div
                  key={tool.name}
                  id={tool.id}
                  className={`flex flex-col-reverse lg:items-stretch items-center lg:flex-row h-full ${
                    isReversed
                      ? "lg:flex-row-reverse  justify-between flex mt-10 lg:mt-32"
                      : ""
                  } h-full justify-between gap-x-4 md:px-8 lg:px-0 flex lg:flex-row mt-10 lg:mt-32`}
                >
                  <div className="flex  lg:flex-1/2 max-w-2xl w-full">
                    <div className="w-full mt-5  lg:mt-0 h-full flex-1/2 flex flex-col justify-between bg-white/5 p-7 lg:p-10  border-white/10 border rounded-3xl text-left lg:text-left">
                      <div className="h-full ">
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
                          href="https://app.artivo.ai/"
                        >
                          {t("cta")}
                        </Button>
                      </div>
                      <div className="mt-24">
                        <div className=" h-[1px] w-full bg-white/20 mb-5" />
                        <span className="text-white/50 text-sm  font-semibold ">
                          {t(tool.detail)}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className=" h-full items-center flex w-full max-w-2xl lg:flex-1/2 flex-col relative ">
                    <div>
                      <p className="absolute text-white/50  text-[10px]  bottom-3 leading-3 w-[160px] -translate-x-11/12   md:-translate-x-10/12 md:w-[300px] md:leading-5 md:bottom-8 lg:text-[14px] lg:bottom-4 lg:leading-5 lg:-translate-x-10/12 lg:pl-1 lg:w-[220px] lg:tracking-tighter   xl:-translate-x-10/12 xl:pl-3 xl:w-[300px]  xl:bottom-6  xl:text-[16px]  ">
                        {t(tool.prompt)}
                      </p>
                    </div>
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      className="object-cover rounded-3xl h-full w-full"
                 
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
