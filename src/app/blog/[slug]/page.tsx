import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { BlogContent } from "@/components/blog/BlogContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllPosts, getPost } from "@/lib/blog";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${slug}`,
      siteName: SITE_NAME,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        type="BlogPosting"
        name={post.title}
        description={post.description}
        url={`${SITE_URL}/blog/${slug}`}
        datePublished={post.date}
        author={post.author}
      />
      <Container>
        <article className="mx-auto max-w-3xl py-16 sm:py-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Blog
          </Link>

          <header className="mt-8">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-[var(--muted-foreground)]">
              {post.author} &middot;{" "}
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </header>

          <div className="mt-12">
            <BlogContent html={post.content} />
          </div>
        </article>
      </Container>
    </>
  );
}
