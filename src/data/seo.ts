import { site } from "./site";
import { faqItems } from "./faq";
import { services } from "./services";

export const seo = {
  title:
    "Alphacsoft — Jasa Pembuatan Aplikasi & Website Terpercaya | Software House Lombok Timur",
  description:
    "Alphacsoft — jasa pembuatan aplikasi terpercaya, pembuatan website profesional, dan custom software di Lombok Timur, NTB sejak 2016. Portofolio: Hisabia, Fathara.id, Sitala (MURI). Konsultasi gratis!",
  keywords: [
    "alphacsoft",
    "alphacsoft software house",
    "alphacsoft lombok",
    "jasa pembuatan aplikasi terpercaya",
    "jasa pembuatan aplikasi",
    "pembuatan aplikasi",
    "pembuatan website",
    "jasa pembuatan website",
    "jasa pembuatan website terpercaya",
    "software house lombok",
    "software house lombok timur",
    "software house NTB",
    "jasa pembuatan aplikasi lombok",
    "jasa pembuatan aplikasi lombok timur",
    "pembuatan website lombok",
    "pembuatan website lombok timur",
    "developer lombok timur",
    "jasa IT lombok",
    "custom software indonesia",
    "jasa pembuatan aplikasi android",
    "jasa pembuatan aplikasi mobile",
    "game development lombok",
    "Alphac Studios",
    "hisabia",
    "fathara.id",
    "konsultasi IT lombok",
    "jasa pembuatan sistem",
    "pembuatan aplikasi perusahaan",
  ],
  canonical: site.website,
  locale: "id_ID",
  ogImage: `${site.website}/images/logo.png`,
  ogImageAlt: "Alphacsoft — Jasa Pembuatan Aplikasi & Website Terpercaya",
  twitterHandle: "@alphacsoft",
  author: site.ceo,
  geo: {
    region: "ID-NB",
    placename: "Lombok Timur, Nusa Tenggara Barat",
    position: "-8.6500;116.5333",
  },
} as const;

export const organizationSchema = {
  "@type": "Organization",
  name: site.name,
  alternateName: [
    "Alphacsoft Software House",
    "PT Alphacsoft Digital Indonesia",
    "Alphacsoft Lombok",
  ],
  legalName: "PT. Alphacsoft Digital Indonesia",
  url: site.website,
  logo: seo.ogImage,
  description: site.description,
  foundingDate: String(site.founded),
  founder: {
    "@type": "Person",
    name: site.ceo,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Cipto Mangunkusumo, Majidi",
    addressLocality: "Lombok Timur",
    addressRegion: "Nusa Tenggara Barat",
    postalCode: "83619",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: site.email,
    availableLanguage: ["Indonesian", "English"],
    areaServed: "ID",
  },
  sameAs: [site.social.github, site.website],
  knowsAbout: [
    "Pembuatan Aplikasi",
    "Pembuatan Website",
    "Custom Software Development",
    "Mobile App Development",
    "Game Development",
    "UI/UX Design",
    "IT Consulting",
  ],
};

export const localBusinessSchema = {
  "@type": "ProfessionalService",
  name: `${site.name} — Jasa Pembuatan Aplikasi & Website`,
  image: seo.ogImage,
  url: site.website,
  description: seo.description,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Cipto Mangunkusumo, Majidi",
    addressLocality: "Lombok Timur",
    addressRegion: "Nusa Tenggara Barat",
    postalCode: "83619",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -8.65,
    longitude: 116.5333,
  },
  areaServed: [
    { "@type": "Country", name: "Indonesia" },
    { "@type": "AdministrativeArea", name: "Nusa Tenggara Barat" },
    { "@type": "City", name: "Lombok Timur" },
    { "@type": "City", name: "Mataram" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Alphacsoft",
    itemListElement: services.map((service, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: { "@type": "Organization", name: site.name },
        areaServed: "ID",
      },
    })),
  },
};

export const websiteSchema = {
  "@type": "WebSite",
  name: site.name,
  alternateName: "Alphacsoft Software House",
  url: site.website,
  description: seo.description,
  inLanguage: "id",
  publisher: {
    "@type": "Organization",
    name: site.name,
    logo: {
      "@type": "ImageObject",
      url: seo.ogImage,
    },
  },
};

export const faqSchema = {
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Alphacsoft — Jasa Pembuatan Aplikasi & Website Terpercaya",
      item: site.website,
    },
  ],
};

export const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    organizationSchema,
    localBusinessSchema,
    websiteSchema,
    faqSchema,
    breadcrumbSchema,
  ],
};
