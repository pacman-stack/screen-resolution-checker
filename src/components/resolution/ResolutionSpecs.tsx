import type { ResolutionData } from "@/types";
import { Card } from "@/components/ui/Card";

export function ResolutionSpecs({ data }: { data: ResolutionData }) {
  const specs = [
    { label: "Resolution", value: `${data.width} × ${data.height}` },
    { label: "Common Name", value: data.commonName },
    { label: "Aspect Ratio", value: data.aspectRatio },
    { label: "Total Pixels", value: data.totalPixels },
    ...(data.ppi ? [{ label: "Pixel Density", value: data.ppi }] : []),
    { label: "Category", value: data.category },
  ];

  return (
    <Card>
      <h2 className="mb-4 text-lg font-semibold">Technical Specifications</h2>
      <div className="divide-y divide-[var(--border)]">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="flex items-center justify-between py-3 text-sm"
          >
            <span className="text-[var(--muted-foreground)]">{spec.label}</span>
            <span className="font-medium">{spec.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
