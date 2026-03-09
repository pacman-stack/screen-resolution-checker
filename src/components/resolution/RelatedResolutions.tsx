import Link from "next/link";
import { resolutions } from "@/lib/resolutions";

export function RelatedResolutions({ slugs }: { slugs: string[] }) {
  const related = slugs
    .map((s) => resolutions.find((r) => r.slug === s))
    .filter(Boolean);

  if (related.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl font-bold tracking-tight">Related Resolutions</h2>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {related.map((r) => (
          <Link
            key={r!.slug}
            href={`/resolution/${r!.slug}`}
            className="flex items-center justify-between rounded-xl border border-[var(--border)] p-4 transition-colors hover:bg-[var(--muted)]"
          >
            <div>
              <p className="font-semibold">
                {r!.width} &times; {r!.height}
              </p>
              <p className="text-sm text-[var(--muted-foreground)]">
                {r!.commonName}
              </p>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[var(--muted-foreground)]"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        ))}
      </div>
    </section>
  );
}
