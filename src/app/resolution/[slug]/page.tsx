import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ResolutionHero } from "@/components/resolution/ResolutionHero";
import { ResolutionSpecs } from "@/components/resolution/ResolutionSpecs";
import { ResolutionInfo } from "@/components/resolution/ResolutionInfo";
import { ResolutionFAQ } from "@/components/resolution/ResolutionFAQ";
import { RelatedResolutions } from "@/components/resolution/RelatedResolutions";
import { JsonLd } from "@/components/seo/JsonLd";
import { resolutions, getResolution } from "@/lib/resolutions";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export function generateStaticParams() {
  return resolutions.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getResolution(slug);
  if (!data) return {};

  const title = `${data.name} Resolution (${data.commonName}) — Everything You Need to Know`;
  const description = `Learn about ${data.name} (${data.commonName}) resolution: ${data.aspectRatio} aspect ratio, ${data.totalPixels} total pixels. See compatible devices, use cases, and FAQs.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/resolution/${slug}`,
      siteName: SITE_NAME,
    },
    alternates: {
      canonical: `${SITE_URL}/resolution/${slug}`,
    },
  };
}

export default async function ResolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getResolution(slug);
  if (!data) notFound();

  return (
    <>
      <JsonLd
        type="WebPage"
        name={`${data.name} Resolution (${data.commonName})`}
        description={`Complete guide to ${data.name} ${data.commonName} resolution`}
        url={`${SITE_URL}/resolution/${slug}`}
        faqs={data.faqs}
      />
      <Container>
        <ResolutionHero data={data} />
        <div className="grid grid-cols-1 gap-12 pb-20 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <ResolutionInfo data={data} />
            <ResolutionFAQ faqs={data.faqs} />
          </div>
          <div className="space-y-8">
            <ResolutionSpecs data={data} />
            <RelatedResolutions slugs={data.related} />
          </div>
        </div>
      </Container>
    </>
  );
}
