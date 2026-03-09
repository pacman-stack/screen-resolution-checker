import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ComparisonHero } from "@/components/compare/ComparisonHero";
import { ComparisonTable } from "@/components/compare/ComparisonTable";
import { ComparisonVisual } from "@/components/compare/ComparisonVisual";
import { ComparisonContent } from "@/components/compare/ComparisonContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { comparisons, getComparison } from "@/lib/comparisons";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getComparison(slug);
  if (!data) return {};

  const title = `${data.title} — Resolution Comparison`;

  return {
    title,
    description: data.description,
    openGraph: {
      title,
      description: data.description,
      url: `${SITE_URL}/compare/${slug}`,
      siteName: SITE_NAME,
    },
    alternates: {
      canonical: `${SITE_URL}/compare/${slug}`,
    },
  };
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getComparison(slug);
  if (!data) notFound();

  return (
    <>
      <JsonLd
        type="WebPage"
        name={data.title}
        description={data.description}
        url={`${SITE_URL}/compare/${slug}`}
        faqs={data.faqs}
      />
      <Container>
        <ComparisonHero data={data} />
        <div className="space-y-8 pb-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ComparisonTable data={data} />
            <ComparisonVisual data={data} />
          </div>
          <ComparisonContent data={data} />
        </div>
      </Container>
    </>
  );
}
