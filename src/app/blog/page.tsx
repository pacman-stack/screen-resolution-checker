import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { BlogCard } from "@/components/blog/BlogCard";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog — Screen Resolution Guides & Tips",
  description:
    "Expert guides on screen resolution, display technology, monitor setup, and more. Learn everything about pixels, DPR, and display specifications.",
  openGraph: {
    title: "Blog — Screen Resolution Guides & Tips",
    description:
      "Expert guides on screen resolution, display technology, monitor setup, and more.",
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Container>
      <div className="py-16 sm:py-20">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Blog
        </h1>
        <p className="mt-4 text-lg text-[var(--muted-foreground)]">
          Guides, tips, and insights about screen resolution and display
          technology.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="pb-20 text-[var(--muted-foreground)]">
          No posts yet. Check back soon!
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 pb-20 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </Container>
  );
}
