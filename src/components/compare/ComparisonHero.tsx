import type { ComparisonData } from "@/types";
import { Badge } from "@/components/ui/Badge";

export function ComparisonHero({ data }: { data: ComparisonData }) {
  return (
    <div className="py-16 text-center sm:py-20">
      <Badge variant="accent">Comparison</Badge>
      <h1 className="mt-6 text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
        {data.title}
      </h1>
      <p className="mt-4 text-lg text-[var(--muted-foreground)]">
        {data.resA.commonName} ({data.resA.width}&times;{data.resA.height}) vs{" "}
        {data.resB.commonName} ({data.resB.width}&times;{data.resB.height})
      </p>
    </div>
  );
}
