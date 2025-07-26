import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Gradient } from "@/components/gradient";
import { Navbar } from "@/components/navbar";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { HeroBadge } from "@/components/hero-badge";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("HeroSection");

  return (
    <div className="relative">
      <Container className="relative">
        <Navbar />
        <div className="lg:pb-20  flex flex-col items-center pt-16  ">
          <div className="flex relative mb-5">
            <div>
              <HeroBadge />
            </div>
          </div>
          <h1 className="font-display text-balance text-6xl/[0.9] font-medium text-center tracking-tight text-white  sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            {t("title")}
          </h1>
          <p className="mt-8 max-w-2xl text-xl/7 text-center font-medium text-white/50 sm:text-2xl/8">
            {t("description")}
          </p>
          <div className="mt-12 flex items-center lg:flex-row gap-x-6 gap-y-4 flex-col">
            <div className=" bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent  text-xl font-normal">
            {t("highlight")}
            </div>
            <Button
              variant="primary-icon"
              icon={<ArrowUpRight className="h-5 w-5" />}
              className="group"
              href="https://app.artivo.ai/"
            >
              {t("cta")}
            </Button>
          </div>

          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] sm:bg-linear-145 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                alt="App screenshot"
                src="/hero.png"
                width={2432}
                height={1442}
                className="w-304 rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
          {/* <Image
            src="/hero.png"
            alt="Radiant hero image"
            width={1443}
            height={931}
            className="mt-16"
          /> */}
        </div>
      </Container>
    </div>
  );
}
