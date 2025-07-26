import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { generateLayoutMetadata } from "@/lib/seo/layout-seo";
import { HeadTags } from "@/components/layout/head-tags";
import {TrackingScripts} from "@/lib/scripts/tracking_scripts"
import "./globals.css";
import {
  generateOrganizationStructuredData,
  generateSoftwareStructuredData,
} from "@/lib/seo/structured-data";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://artivo.ai";
  return generateLayoutMetadata(locale, baseUrl);
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://artivo.ai";

  // Generate structured data
  const organizationStructuredData = generateOrganizationStructuredData(
    locale,
    baseUrl
  );
  const softwareStructuredData = generateSoftwareStructuredData(
    locale,
    baseUrl
  );

  return (
    <html lang={locale}>
      <head>
        <HeadTags
          baseUrl={baseUrl}
          locale={locale}
          organizationStructuredData={organizationStructuredData}
          softwareStructuredData={softwareStructuredData}
        />
      </head>
      <body
        className={`${outfit.variable} font-sans antialiased bg-[#0E0F11] scroll-smooth`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-ND48B88W"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <TrackingScripts />
      </body>
    </html>
  );
}
