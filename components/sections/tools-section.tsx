
import { Container } from "@/components/container";
import { Heading, Lead } from "@/components/text";
import Sneaker from "@/public/content/sneakers.png";
import { useTranslations } from "next-intl";
import { Film, Focus, Grip, ImageIcon, Ratio, Replace,ArrowUpRight } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";
import { Button } from "../button";
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
    <Container className="mt-16">
      <Heading className="text-white" as="h1">
        {t("Eyebrow")}
      </Heading>
      <Lead className="mt-6 max-w-xl">{t("title")}</Lead>
    </Container>
  );
}
export default function Tools() {
  const t = useTranslations("Tools");
  return (
    <>
      <Header />

      <div className="overflow-hidden  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl md:px-6 px-7">
          {tools.map((tool, idx) => {
            const Icon = tool.icon;
            const isReversed = idx % 2 !== 0;

            return (
              <div
                key={tool.name}
                className={`flex flex-col-reverse bg-white/5 p-10 rounded-2xl lg:flex-row lg:flex-1/2 ${
                  isReversed ? "lg:flex-row-reverse  lg:flex-1/2  lg:mt-32" : ""
                } items-center justify-between gap-24 mt-10 lg:mt-32`}
              >
                <div className="max-w-xl flex-col  flex-1/2 text-left lg:text-left">
                  <h3 className="text-white text-lg font-semibold mt-4">
                    {t(tool.eyebrow)}
                  </h3>
                  <h2 className="text-white text-5xl font-bold mt-2">
                    {t(tool.title)}
                  </h2>
                  <p className="text-gray-200 text-lg mt-4">
                    {t(tool.description)}
                  </p>
                   <Button variant='secondary-icon-outline' className="mt-10" icon={<ArrowUpRight /> } href="#">{t("cta")}</Button>
                </div>
                <div className=" w-full lg:w-1/2">
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    className=" object-cover rounded-2xl"
                    placeholder="blur"
               
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

//  <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
//             <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4 ">
//               <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg ">
//                 <ServerIcon />
//                 <h2 className="text-base/7 font-semibold text-indigo-600">
//                   Deploy faster
//                 </h2>
//                 <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
//                   A better workflow
//                 </p>
//                 <p className="mt-6 text-lg/8 text-gray-600">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Maiores impedit perferendis suscipit eaque, iste dolor
//                   cupiditate blanditiis ratione.
//                 </p>
//               </div>
//             </div>
//             <div className="sm:px-6 lg:px-0">
//               <div className="relative isolate overflow-hidden bg-indigo-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none">
//                 <div
//                   aria-hidden="true"
//                   className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-white ring-inset"
//                 />
//                 <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
//                   <img
//                     alt="Product screenshot"
//                     src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
//                     width={2432}
//                     height={1442}
//                     className="-mb-12 w-228 max-w-none rounded-tl-xl bg-gray-800 ring ring-white/10"
//                   />
//                 </div>
//                 <div
//                   aria-hidden="true"
//                   className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset sm:rounded-3xl"
//                 />
//               </div>
//             </div>
//           </div>
