import { PlusGrid, PlusGridItem, PlusGridRow } from "@/components/plus-grid";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Gradient } from "@/components/gradient";
import { Link } from "@/components/link";
import Image from "next/image";
import LogoBlack from "@/public/LogoBlack.svg";
import { useTranslations } from "next-intl";
import { FooterCta } from "../footer-cta";
import { ArrowUpRight } from "lucide-react";
import InstagramIcon from "@/public/instagram-icon.svg"

function CallToAction() {
  const t = useTranslations("Footer");
  return (
    <div className="relative pt-20 pb-16 flex flex-col justify-center text-center sm:py-24 overflow-visible">
      <div className=" font-mono text-xl font-semibold tracking-widest text-gray-600 uppercase flex   justify-center  mb-4 lg:mb-5">
        {t("Eyebrow")}
      </div>

      <FooterCta />

      <div className=" mt-7 lg:mt-10"></div>
      <div>
      <Button
        variant="primary-icon"
        icon={<ArrowUpRight className="h-5 w-5" />}
        className="group"
        href="https://app.artivo.ai/"
      >
        {t("cta")}
      </Button>
      </div>
    </div>
  );
}

function SitemapHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-sm/6 font-medium text-gray-950/50">{children}</h3>;
}

function SitemapLinks({ children }: { children: React.ReactNode }) {
  return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>;
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <li>
      <Link
        {...props}
        className="font-medium text-gray-950 data-hover:text-gray-950/75"
      />
    </li>
  );
}

function Sitemap() {
  const t = useTranslations("Footer");
  return (
    <>
      <div>
        <SitemapHeading>{t("Product")}</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/pricing"> {t("Pricing")}</SitemapLink>
          <SitemapLink href="/#toolsID">{t("Tools")}</SitemapLink>
          <SitemapLink href="/#useCaseId">{t("UseCase")}</SitemapLink>
        </SitemapLinks>
      </div>
      {/* <div>
        <SitemapHeading>{t("Company")}</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="#">{t("Carreers")}</SitemapLink>
          <SitemapLink href="/blog">{t("Blog")}</SitemapLink>
          <SitemapLink href="/company">{t("Company")}</SitemapLink>
        </SitemapLinks>
      </div> */}
      <div>
        <SitemapHeading>{t("Support")}</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/frequently-asked-questions">
            {t("Faq")}
          </SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapHeading>{t("Terms")}</SitemapHeading>
        <SitemapLinks>
          <SitemapLink href="/terms-conditions">
            {t("TermsAndCoditions")}
          </SitemapLink>
          <SitemapLink href="/privacy-policy">{t("PrivacyPolicy")}</SitemapLink>
        </SitemapLinks>
      </div>
    </>
  );
}



function SocialIconLinkedIn(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  );
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://www.instagram.com/artivo.ai/"
        target="_blank"
        aria-label="Visit us on LinkedIn"
        className="text-gray-950 data-hover:text-gray-950/75"
      >
        <Image src={InstagramIcon} className="size-6" alt="Artivo Instagram"/>
      </Link>
      <Link
        href="https://www.linkedin.com/company/artivoai/"
        target="_blank"
        aria-label="Visit us on LinkedIn"
        className="text-gray-950 data-hover:text-gray-950/75"
      >
        <SocialIconLinkedIn className="size-4" />
      </Link>
    </>
  );
}

function Copyright() {
  return (
    <div className="text-sm/6 text-gray-950">
      &copy; {new Date().getFullYear()} Artivo LLC.
    </div>
  );
}

export function Footer() {
  return (
    <footer>
      <Gradient className="relative rounded-2xl lg:rounded-4xl mx-2  rounded-b-none ">
        <div className="absolute inset-2 rounded-4xl " />
        <div>
          <CallToAction />
        </div>
        <Container>
          <PlusGrid className="pb-16">
            <PlusGridRow>
              <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
                <div className="col-span-2 flex">
                  <PlusGridItem className="pt-6 lg:pb-6">
                    <a href={"/"} className="flex items-center    ">
                      <Image
                        src={LogoBlack}
                        className="w-22"
                        alt="Logo Artivo"
                      />
                    </a>
                  </PlusGridItem>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-4 lg:grid-cols-subgrid lg:pt-6">
                  <Sitemap />
                </div>
              </div>
            </PlusGridRow>
            <PlusGridRow className="flex justify-between">
              <div>
                <PlusGridItem className="py-3">
                  <Copyright />
                </PlusGridItem>
              </div>
              <div className="flex">
                <PlusGridItem className="flex items-center gap-8 py-3">
                  <SocialLinks />
                </PlusGridItem>
              </div>
            </PlusGridRow>
          </PlusGrid>
        </Container>
      </Gradient>
    </footer>
  );
}
