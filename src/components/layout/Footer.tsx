import Link from "next/link";
import { Container } from "@/components/ui/Container";

const popularResolutions = [
  { slug: "1920x1080", label: "1920x1080 (Full HD)" },
  { slug: "2560x1440", label: "2560x1440 (QHD)" },
  { slug: "3840x2160", label: "3840x2160 (4K UHD)" },
  { slug: "1366x768", label: "1366x768 (HD)" },
  { slug: "1536x864", label: "1536x864" },
  { slug: "1280x720", label: "1280x720 (HD)" },
];

const otherResolutions = [
  { slug: "1440x900", label: "1440x900" },
  { slug: "1680x1050", label: "1680x1050" },
  { slug: "2560x1080", label: "2560x1080 (UltraWide)" },
  { slug: "3440x1440", label: "3440x1440 (UltraWide)" },
  { slug: "1920x1200", label: "1920x1200 (WUXGA)" },
  { slug: "5120x2880", label: "5120x2880 (5K)" },
];

const appleRetina = [
  { slug: "2880x1800", label: "2880x1800 (Retina)" },
  { slug: "3024x1964", label: "3024x1964 (Liquid Retina)" },
  { slug: "3456x2234", label: "3456x2234 (Liquid Retina XDR)" },
  { slug: "7680x4320", label: "7680x4320 (8K)" },
];

const legacy = [
  { slug: "640x480", label: "640x480 (VGA)" },
  { slug: "800x600", label: "800x600 (SVGA)" },
  { slug: "1024x768", label: "1024x768 (XGA)" },
];

const comparisons = [
  { slug: "1080p-vs-1440p", label: "1080p vs 1440p" },
  { slug: "1080p-vs-4k", label: "1080p vs 4K" },
  { slug: "1440p-vs-4k", label: "1440p vs 4K" },
  { slug: "720p-vs-1080p", label: "720p vs 1080p" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--muted)]">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          <div>
            <h3 className="mb-4 text-sm font-semibold">Popular Resolutions</h3>
            <ul className="space-y-2">
              {popularResolutions.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/resolution/${r.slug}`}
                    className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Other Resolutions</h3>
            <ul className="space-y-2">
              {otherResolutions.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/resolution/${r.slug}`}
                    className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Apple & High-Res</h3>
            <ul className="space-y-2">
              {appleRetina.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/resolution/${r.slug}`}
                    className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Legacy</h3>
            <ul className="space-y-2">
              {legacy.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/resolution/${r.slug}`}
                    className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 mt-8 text-sm font-semibold">Comparisons</h3>
            <ul className="space-y-2">
              {comparisons.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/compare/${c.slug}`}
                    className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                >
                  Screen Resolution Checker
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-[var(--border)] pt-8 text-center text-sm text-[var(--muted-foreground)]">
          <p>&copy; {new Date().getFullYear()} MyScreenResolution. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
