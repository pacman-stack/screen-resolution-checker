import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";
import type { BlogPost } from "@/types";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export function getAllPosts(): Omit<BlogPost, "content">[] {
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("."));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
    const { data } = matter(raw);

    const date =
      data.date instanceof Date
        ? data.date.toISOString().split("T")[0]
        : String(data.date);

    return {
      slug,
      title: data.title as string,
      description: data.description as string,
      date,
      author: data.author as string,
      tags: (data.tags as string[]) ?? [],
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPost(slug: string): Promise<BlogPost | undefined> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content: markdown } = matter(raw);

  const result = await remark().use(gfm).use(html).process(markdown);

  const date =
    data.date instanceof Date
      ? data.date.toISOString().split("T")[0]
      : String(data.date);

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date,
    author: data.author as string,
    tags: (data.tags as string[]) ?? [],
    content: result.toString(),
  };
}
