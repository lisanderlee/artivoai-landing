import type { Metadata } from "next";

export interface UseCaseSEOContent {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
}

export interface UseCaseSEOConfig {
  [key: string]: {
    en: UseCaseSEOContent;
    es: UseCaseSEOContent;
  };
}

// Use case specific SEO content
export const useCaseSEO: UseCaseSEOConfig = {
  Creatives: {
    en: {
      title: "How Designers and Creatives Speed Up Their Workflow with AI | Artivo",
      description: "Discover how designers and creatives use Artivo's AI tools to reduce image production time by 60%. Generate style variations, automate image creation, and streamline your creative process.",
      keywords: [
        "AI for designers",
        "creative workflow automation",
        "image generation for designers",
        "AI design tools",
        "creative process optimization",
        "design automation",
        "AI image variations",
        "designer productivity tools"
      ],
      ogTitle: "How Designers and Creatives Speed Up Their Workflow with AI",
      ogDescription: "Discover how designers use Artivo's AI tools to reduce image production time by 60% and streamline their creative process.",
      twitterTitle: "AI-Powered Design Workflow for Creatives",
      twitterDescription: "Reduce image production time by 60% with AI-powered design tools"
    },
    es: {
      title: "Cómo Diseñadores y Creativos Aceleran su Flujo de Trabajo con IA | Artivo",
      description: "Descubre cómo diseñadores y creativos usan las herramientas de IA de Artivo para reducir el tiempo de producción de imágenes en un 60%. Genera variaciones de estilo, automatiza la creación de imágenes y optimiza tu proceso creativo.",
      keywords: [
        "IA para diseñadores",
        "automatización de flujo creativo",
        "generación de imágenes para diseñadores",
        "herramientas de diseño con IA",
        "optimización de proceso creativo",
        "automatización de diseño",
        "variaciones de imágenes con IA",
        "herramientas de productividad para diseñadores"
      ],
      ogTitle: "Cómo Diseñadores y Creativos Aceleran su Flujo de Trabajo con IA",
      ogDescription: "Descubre cómo los diseñadores usan las herramientas de IA de Artivo para reducir el tiempo de producción de imágenes en un 60%.",
      twitterTitle: "Flujo de Trabajo de Diseño con IA para Creativos",
      twitterDescription: "Reduce el tiempo de producción de imágenes en un 60% con herramientas de diseño con IA"
    }
  },
  Agency: {
    en: {
      title: "How Creative Agencies Accelerate Content Production with AI | Artivo",
      description: "Learn how creative agencies use Artivo's AI tools to cut visual production time by 70%. Generate high-quality images, test variations, and deliver campaigns faster without compromising quality.",
      keywords: [
        "AI for agencies",
        "agency content production",
        "visual content automation",
        "agency workflow optimization",
        "AI campaign creation",
        "agency productivity tools",
        "visual content generation",
        "agency AI tools"
      ],
      ogTitle: "How Creative Agencies Accelerate Content Production with AI",
      ogDescription: "Learn how agencies use Artivo's AI tools to cut visual production time by 70% and deliver campaigns faster.",
      twitterTitle: "AI-Powered Content Production for Agencies",
      twitterDescription: "Cut visual production time by 70% with AI-powered agency tools"
    },
    es: {
      title: "Cómo las Agencias Creativas Aceleran la Producción de Contenido con IA | Artivo",
      description: "Aprende cómo las agencias creativas usan las herramientas de IA de Artivo para reducir el tiempo de producción visual en un 70%. Genera imágenes de alta calidad, prueba variaciones y entrega campañas más rápido sin comprometer la calidad.",
      keywords: [
        "IA para agencias",
        "producción de contenido para agencias",
        "automatización de contenido visual",
        "optimización de flujo de trabajo para agencias",
        "creación de campañas con IA",
        "herramientas de productividad para agencias",
        "generación de contenido visual",
        "herramientas de IA para agencias"
      ],
      ogTitle: "Cómo las Agencias Creativas Aceleran la Producción de Contenido con IA",
      ogDescription: "Aprende cómo las agencias usan las herramientas de IA de Artivo para reducir el tiempo de producción visual en un 70%.",
      twitterTitle: "Producción de Contenido con IA para Agencias",
      twitterDescription: "Reduce el tiempo de producción visual en un 70% con herramientas de IA para agencias"
    }
  },
  Ecommerce: {
    en: {
      title: "How E-commerce Stores Boost Sales with AI-Generated Product Images | Artivo",
      description: "Discover how online stores use Artivo's AI tools to boost conversions by 30%. Create professional product images in seconds, optimize for marketplaces, and reduce production costs without sacrificing quality.",
      keywords: [
        "AI product images",
        "e-commerce image generation",
        "product photography AI",
        "e-commerce conversion optimization",
        "AI product mockups",
        "online store optimization",
        "product image automation",
        "e-commerce AI tools"
      ],
      ogTitle: "How E-commerce Stores Boost Sales with AI-Generated Product Images",
      ogDescription: "Discover how online stores use Artivo's AI tools to boost conversions by 30% with professional product images.",
      twitterTitle: "AI-Generated Product Images for E-commerce",
      twitterDescription: "Boost e-commerce conversions by 30% with AI-generated product images"
    },
    es: {
      title: "Cómo las Tiendas Online Aumentan Ventas con Imágenes de Producto Generadas por IA | Artivo",
      description: "Descubre cómo las tiendas online usan las herramientas de IA de Artivo para aumentar las conversiones en un 30%. Crea imágenes de producto profesionales en segundos, optimiza para marketplaces y reduce costos de producción sin sacrificar calidad.",
      keywords: [
        "imágenes de producto con IA",
        "generación de imágenes para e-commerce",
        "fotografía de producto con IA",
        "optimización de conversión e-commerce",
        "mockups de producto con IA",
        "optimización de tiendas online",
        "automatización de imágenes de producto",
        "herramientas de IA para e-commerce"
      ],
      ogTitle: "Cómo las Tiendas Online Aumentan Ventas con Imágenes de Producto Generadas por IA",
      ogDescription: "Descubre cómo las tiendas online usan las herramientas de IA de Artivo para aumentar las conversiones en un 30%.",
      twitterTitle: "Imágenes de Producto Generadas por IA para E-commerce",
      twitterDescription: "Aumenta las conversiones de e-commerce en un 30% con imágenes de producto generadas por IA"
    }
  }
};

export function generateUseCaseMetadata(
  locale: string,
  slug: string,
  seoContent: UseCaseSEOContent
): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://artivo.ai';

  return {
    title: seoContent.title,
    description: seoContent.description,
    keywords: seoContent.keywords,
    authors: [{ name: "Artivo Team" }],
    creator: "Artivo",
    publisher: "Artivo",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${locale}/use-case/${slug}`,
      languages: {
        'en': `/en/use-case/${slug}`,
        'es': `/es/use-case/${slug}`,
      },
    },
    openGraph: {
      type: 'article',
      locale: locale,
      url: `${baseUrl}/${locale}/use-case/${slug}`,
      siteName: 'Artivo',
      title: seoContent.ogTitle,
      description: seoContent.ogDescription,
      images: [
        {
          url: slug === 'Creatives' ? '/use-case/CreativeUse.png' : 
                slug === 'Agency' ? '/use-case/AgencyUse.png' : 
                '/use-case/EcommerceUse.png',
          width: 1200,
          height: 630,
          alt: seoContent.ogTitle,
        }
      ],
      publishedTime: '2024-12-19T00:00:00.000Z',
      modifiedTime: '2024-12-19T00:00:00.000Z',
      authors: ['Artivo Team'],
      section: 'Use Cases',
      tags: seoContent.keywords.slice(0, 5),
    },
    twitter: {
      card: 'summary_large_image',
      site: '@artivo_ai',
      creator: '@artivo_ai',
      title: seoContent.twitterTitle,
      description: seoContent.twitterDescription,
      images: [
        slug === 'Creatives' ? '/use-case/CreativeUse.png' : 
        slug === 'Agency' ? '/use-case/AgencyUse.png' : 
        '/use-case/EcommerceUse.png'
      ],
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
    category: 'technology',
    classification: locale === 'es' ? 'Casos de Uso - Herramientas de Diseño con IA' : 'Use Cases - AI Design Tools',
  };
} 