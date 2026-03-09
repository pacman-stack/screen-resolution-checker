export function BlogContent({ html }: { html: string }) {
  return (
    <div
      className="prose prose-neutral dark:prose-invert max-w-none
        prose-headings:font-semibold prose-headings:tracking-tight
        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
        prose-p:leading-relaxed prose-p:text-[var(--muted-foreground)]
        prose-li:text-[var(--muted-foreground)]
        prose-strong:text-[var(--foreground)]
        prose-a:text-[var(--accent)] prose-a:no-underline hover:prose-a:underline
        prose-code:text-sm prose-code:bg-[var(--muted)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-[var(--muted)] prose-pre:border prose-pre:border-[var(--border)]"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
