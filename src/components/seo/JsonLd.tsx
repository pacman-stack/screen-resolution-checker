import type { FAQ } from "@/types";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

interface JsonLdProps {
  type: "WebApplication" | "WebPage" | "FAQPage" | "BlogPosting";
  name: string;
  description: string;
  url: string;
  faqs?: FAQ[];
  datePublished?: string;
  author?: string;
}

export function JsonLd({ type, name, description, url, faqs, datePublished, author }: JsonLdProps) {
  const schemas: object[] = [];

  if (type === "WebApplication") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name,
      description,
      url,
      applicationCategory: "UtilityApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
    });
  }

  if (type === "WebPage") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name,
      description,
      url,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
      },
    });
  }

  if (type === "BlogPosting") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: name,
      description,
      url,
      datePublished,
      author: {
        "@type": "Person",
        name: author ?? SITE_NAME,
      },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
    });
  }

  if (faqs && faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
