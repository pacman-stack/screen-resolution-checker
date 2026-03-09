import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            MyScreenResolution
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden sm:flex items-center gap-6 text-sm text-[var(--muted-foreground)]">
              <Link href="/resolution/1920x1080" className="transition-colors hover:text-[var(--foreground)]">
                Resolutions
              </Link>
              <Link href="/compare/1080p-vs-4k" className="transition-colors hover:text-[var(--foreground)]">
                Compare
              </Link>
              <Link href="/blog" className="transition-colors hover:text-[var(--foreground)]">
                Blog
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
