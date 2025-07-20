import Marquee from "react-fast-marquee";
import { useTranslations } from "next-intl";

export function FooterCta() {
  const t = useTranslations("Footer");
  return (
    <>
      <Marquee speed={20} autoFill>
      <div className="  text-4xl  md:text-7xl lg:text-8xl mx-3 lg:mx-5 font-medium w-full md:py-2 lg:py-2 text-black/90  hide-scrollbar">
          {t("title-line-1")}
        </div>
      
      </Marquee>
      <Marquee speed={20} autoFill direction="right"	>
        <div className=" text-4xl md:text-7xl  lg:text-8xl mx-3 lg:mx-5 font-medium w-full md:py-2 lg:py-2 text-black/80  hide-scrollbar">
          {t("title-line-2")}
        </div>
  
       

      </Marquee>
    </>
  );
}
