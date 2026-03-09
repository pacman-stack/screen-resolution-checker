import type { ResolutionData } from "@/types";
import { Badge } from "@/components/ui/Badge";

export function ResolutionHero({ data }: { data: ResolutionData }) {
  return (
    <div className="py-16 text-center sm:py-20">
      <Badge variant="accent">{data.category}</Badge>
      <h1 className="mt-6 text-5xl font-bold tracking-tighter sm:text-6xl lg:text-7xl">
        {data.width} &times; {data.height}
      </h1>
      <p className="mt-4 text-xl text-[var(--muted-foreground)]">
        {data.commonName} &middot; {data.aspectRatio} &middot;{" "}
        {data.totalPixels} pixels
      </p>
    </div>
  );
}
