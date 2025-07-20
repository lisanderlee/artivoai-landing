export function generateOrganizationStructuredData(locale: string, baseUrl: string) {
  return {
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
}

export function generateSoftwareStructuredData(locale: string, baseUrl: string) {
  return {
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
} 