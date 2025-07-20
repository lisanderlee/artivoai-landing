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
import { LucideIcon, WandSparkles } from "lucide-react";
import { StaticImageData } from "next/image";
import { Button } from "../button";
import { FadeIn } from "../fade-in";
import GenerateImage from "@/public/tools/ImageGeneration.png";
import VideoGeneration from "@/public/tools/VideoGeneration.gif";
import BackgroundChange from "@/public/tools/BackgroundChange.png";
import ProductTransfer from "@/public/tools/ProductTransfer.png";
import ImageResize from "@/public/tools/ImageResize.png";
import RetouchLab from "@/public/tools/RetouchLab.png";
import ThumbProductTransferBase from "@/public/tools/ThumbProductTranferBase.png";
import ThumbProductTransferProduct from "@/public/tools/ThumbProductPlacementProduct.png";
import ThumbVideoGeneration from "@/public/tools/ThumbVideoGeneration.png"
import ThumbBackgroundChange from "@/public/tools/ThumbBackgroundChange.png";
import ThumbResizer from "@/public/tools/ThumbResize.png";
import ThumbRetouchLab from "@/public/tools/ThumbRetouchLab.png";
import PanelResize from "@/public/tools/PanelResize.png";
import PanelSlider from "@/public/tools/PanelSlider.png"
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
  thumb1?: StaticImageData;
  thumb2?: StaticImageData;
  panel?: StaticImageData;
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
    thumb2:ThumbVideoGeneration,
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
    thumb1: ThumbProductTransferBase,
    thumb2: ThumbProductTransferProduct,
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
    thumb2: ThumbBackgroundChange,
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
    thumb2: ThumbRetouchLab,
    panel:PanelSlider,
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
    thumb2: ThumbResizer,
    panel: PanelResize,
    id: "ImageResizeID",
  },
];

function Header() {
  const t = useTranslations("Tools");
  return (
    <FadeIn>
      <div id="toolsID" />
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
                        <span className="uppercase bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent  text-sm lg:text-lg  font-medium">
                          {t(tool.eyebrow)}
                        </span>
                        <h2 className="text-white  text-4xl lg:text-5xl max-w-md font-semibold mt-2">
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
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      className="object-cover rounded-3xl h-full w-full"
                    />
                    <div className="bg-[#2F2F2F]/50 shadow-2xl px-5 pb-4 pt-5 rounded-3xl md:p-10 lg:p-10 flex flex-row  items-end justify-baseline w-11/12 backdrop-blur-sm absolute bottom-0">
                      <div className="absolute flex flex-row -top-10 right-12 lg:-top-18 lg:right-17 md:-top-18 md:right-17">
                        {tool.thumb1 && (
                          <div className=" ">
                            <Image
                              src={tool.thumb1}
                              alt={tool.name}
                              className="object-cover rounded-2xl shadow-2xl w-14 lg:w-24 md:w-24"
                            />
                          </div>
                        )}
                        {tool.thumb2 && (
                          <div className="">
                            <Image
                              src={tool.thumb2}
                              alt={tool.name}
                              className="object-cover rounded-2xl shadow-2xl w-14 ml-2 lg:w-24 md:w-24"
                            />
                          </div>
                        )}
                      </div>
                      {tool.panel && (
                        <div className="absolute w-8/12">
                          <Image
                            src={tool.panel}
                            alt={tool.name}
                            className=""
                          />
                        </div>
                      )}
                      <div className="flex  text-white/90 mt-2 md:mt-0 lg:mt-0  md:text-lg md:leading-7 text-[13px] lg:pr-4  md:pr-5 leading-4 lg:text-lg lg:leading-6 w-full">
                        <p> {t(tool.prompt)}</p>
                      </div>
                      <div className="bg-white p-3 lg:p-5 md:p-5 flex rounded-full">
                        <WandSparkles className="w-4 h-4 lg:h-5 lg:w-5 md:h-5 md:w-5" />
                      </div>
                    </div>
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
