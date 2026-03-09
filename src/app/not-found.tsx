import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold tracking-tighter">404</h1>
        <p className="mt-4 text-lg text-[var(--muted-foreground)]">
          Page not found
        </p>
        <Link
          href="/"
          className="mt-8 rounded-lg bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-90"
        >
          Check Your Resolution
        </Link>
      </div>
    </Container>
  );
}
