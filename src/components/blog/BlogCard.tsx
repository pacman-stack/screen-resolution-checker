import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { BlogPost } from "@/types";

export function BlogCard({ post }: { post: Omit<BlogPost, "content"> }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <Card className="h-full transition-colors group-hover:border-[var(--muted-foreground)]/30">
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <h2 className="mt-4 text-lg font-semibold tracking-tight group-hover:text-[var(--accent)] transition-colors">
          {post.title}
        </h2>
        <p className="mt-2 text-sm text-[var(--muted-foreground)] line-clamp-2 leading-relaxed">
          {post.description}
        </p>
        <p className="mt-4 text-xs text-[var(--muted-foreground)]">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </Card>
    </Link>
  );
}
