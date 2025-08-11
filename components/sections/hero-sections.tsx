import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Navbar } from "@/components/navbar";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { HeroBadge } from "@/components/hero-badge";
import { WordRotate } from "@/components/magicui/word-rotate";

export default function Hero() {
  const t = useTranslations("HeroSection");

  return (
    <div className="relative">
      <Container className="relative">
        <Navbar />
        <div className="lg:pb-20 flex flex-col items-center pt-16">
          <div className="flex relative mb-5">
            <div>
              <HeroBadge />
            </div>
          </div>

          <h1 className="font-display text-balance text-5xl/[1.2] font-medium text-center tracking-tight text-white sm:text-8xl/[0.8] md:text-9xl/[1]">
            {t("title")}
          </h1>
          <div className="font-display text-balance text-5xl/[1.2]  font-medium text-center tracking-tight text-[#b060ff] sm:text-8xl/[0.8] md:text-9xl/[1.04]">
            <WordRotate words={[t("word1"), t("word2"), t("word3")]} />
          </div>
          <p className="mt-5 lg:mt-10 max-w-2xl text-xl/7 text-center font-medium text-white/50 sm:text-2xl/8">
            {t("description")}
          </p>

          <div className="mt-6 lg:mt-12 flex items-center lg:flex-row gap-x-6 gap-y-7 flex-col">
            <div className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent text-xl font-normal">
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
              <video
                className="w-304 rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-900/10"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/hero-poster.jpg" // optional fallback image
                aria-label="Artivo app preview video"
              >
                <source src="/home_video.mp4" type="video/mp4" />
                {/* Fallback text */}
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
