import type { Metadata } from "next";

interface SEOContent {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

interface SEOContentMap {
  en: SEOContent;
  es: SEOContent;
}

const seoContent: SEOContentMap = {
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

export function generateLayoutMetadata(locale: string, baseUrl: string): Metadata {
  const content = seoContent[locale as keyof typeof seoContent] || seoContent.en;
  
  return {
    title: {
      default: content.title,
      template: "%s | Artivo"
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