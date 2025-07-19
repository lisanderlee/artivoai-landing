import Marquee from "react-fast-marquee";
import { useTranslations } from "next-intl";

export function FooterCta() {
      const t = useTranslations("Footer");
  return (
    <Marquee speed={60}>
        <div className=" text-8xl font-semibold w-full py-1  hide-scrollbar">
   {t("title")}
   </div>
</Marquee>
  );
}
