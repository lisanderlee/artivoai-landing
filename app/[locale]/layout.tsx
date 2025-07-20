import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://artivo.ai';
  
  // Locale-specific content
  const seoContent = {
    en: {
      title: "Artivo - AI-Powered Creative Suite for Designers & Agencies",
      description: "Transform your creative workflow with Artivo's AI-powered design tools. Generate images, edit photos, create videos, and streamline your design process with cutting-edge AI technology.",
      keywords: [
        "AI design tools",
        "creative suite",
        "image generation",
        "photo editing",
        "video creation",
        "design automation",
        "AI-powered design",
        "creative workflow",
        "design tools",
        "artificial intelligence",
        "graphic design",
        "digital art",
        "creative agency tools",
        "design software"
      ],
      ogTitle: "Artivo - AI-Powered Creative Suite for Designers & Agencies",
      ogDescription: "Transform your creative workflow with Artivo's AI-powered design tools. Generate images, edit photos, create videos, and streamline your design process.",
      twitterTitle: "Artivo - AI-Powered Creative Suite",
      twitterDescription: "Transform your creative workflow with AI-powered design tools"
    },
    es: {
      title: "Artivo - Suite Creativa con IA para Diseñadores y Agencias",
      description: "Transforma tu flujo de trabajo creativo con las herramientas de diseño con IA de Artivo. Genera imágenes, edita fotos, crea videos y optimiza tu proceso de diseño con tecnología de IA de vanguardia.",
      keywords: [
        "herramientas de diseño con IA",
        "suite creativa",
        "generación de imágenes",
        "edición de fotos",
        "creación de videos",
        "automatización de diseño",
        "diseño con IA",
        "flujo de trabajo creativo",
        "herramientas de diseño",
        "inteligencia artificial",
        "diseño gráfico",
        "arte digital",
        "herramientas para agencias creativas",
        "software de diseño"
      ],
      ogTitle: "Artivo - Suite Creativa con IA para Diseñadores y Agencias",
      ogDescription: "Transforma tu flujo de trabajo creativo con las herramientas de diseño con IA de Artivo. Genera imágenes, edita fotos, crea videos y optimiza tu proceso de diseño.",
      twitterTitle: "Artivo - Suite Creativa con IA",
      twitterDescription: "Transforma tu flujo de trabajo creativo con herramientas de diseño con IA"
    }
  };

  const content = seoContent[locale as keyof typeof seoContent] || seoContent.en;
  
  return {
    title: {
      default: content.title,
      template: locale === 'es' ? "%s | Artivo" : "%s | Artivo"
    },
    description: content.description,
    keywords: content.keywords,
    authors: [{ name: "Artivo Team" }],
    creator: "Artivo",
    publisher: "Artivo",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'en': '/en',
        'es': '/es',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: `${baseUrl}/${locale}`,
      siteName: 'Artivo',
      title: content.ogTitle,
      description: content.ogDescription,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: locale === 'es' ? 'Artivo - Suite Creativa con IA' : 'Artivo - AI-Powered Creative Suite',
        },
        {
          url: '/hero.png',
          width: 800,
          height: 600,
          alt: locale === 'es' ? 'Vista previa de la plataforma Artivo' : 'Artivo Platform Preview',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@artivo_ai',
      creator: '@artivo_ai',
      title: content.twitterTitle,
      description: content.twitterDescription,
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
      yahoo: process.env.YAHOO_VERIFICATION,
    },
    category: 'technology',
    classification: locale === 'es' ? 'Herramientas de Diseño con IA' : 'AI Design Tools',
    other: {
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': 'Artivo',
      'application-name': 'Artivo',
      'msapplication-TileColor': '#0E0F11',
      'msapplication-config': '/browserconfig.xml',
      'theme-color': '#0E0F11',
    },
  };
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

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://artivo.ai';
  
  // Structured data for the organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Artivo",
    "url": `${baseUrl}/${locale}`,
    "logo": `${baseUrl}/Logo.svg`,
    "description": locale === 'es' 
      ? "Suite creativa con IA para diseñadores y agencias"
      : "AI-powered creative suite for designers and agencies",
    "foundingDate": "2024",
    "sameAs": [
      "https://twitter.com/artivo_ai",
      "https://linkedin.com/company/artivo",
      "https://facebook.com/artivoai"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@artivo.ai"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  // Software application structured data
  const softwareStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": locale === 'es' ? "Suite Creativa Artivo" : "Artivo Creative Suite",
    "applicationCategory": "DesignApplication",
    "operatingSystem": "Web Browser",
    "description": locale === 'es' 
      ? "Herramientas de diseño con IA para generación de imágenes, edición de fotos y creación de videos"
      : "AI-powered design tools for image generation, photo editing, and video creation",
    "url": `${baseUrl}/${locale}`,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": locale === 'es' 
        ? "Plan gratuito disponible con funciones premium"
        : "Free tier available with premium features"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    }
  };

  return (
    <html lang={locale}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Hreflang tags for language alternates */}
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
        <link rel="alternate" hrefLang="es" href={`${baseUrl}/es`} />
        <link rel="alternate" hrefLang="x-default" href={baseUrl} />
        
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareStructuredData),
          }}
        />
      </head>
      <body
        className={`${outfit.variable} font-sans antialiased bg-[#0E0F11] scroll-smooth`}
      >
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
