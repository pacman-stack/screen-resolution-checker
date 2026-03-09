import type { ComparisonData } from "@/types";
import { Card } from "@/components/ui/Card";

export function ComparisonVisual({ data }: { data: ComparisonData }) {
  const maxWidth = Math.max(data.resA.width, data.resB.width);
  const scaleA = (data.resA.width / maxWidth) * 100;
  const scaleB = (data.resB.width / maxWidth) * 100;
  const aspectA = data.resA.height / data.resA.width;
  const aspectB = data.resB.height / data.resB.width;

  return (
    <Card>
      <h2 className="mb-6 text-lg font-semibold">Visual Size Comparison</h2>
      <div className="flex items-end justify-center gap-8 pb-4">
        <div className="text-center">
          <div
            className="mx-auto border-2 border-blue-500/50 bg-blue-500/10 rounded-lg flex items-center justify-center"
            style={{
              width: `${scaleA * 2}px`,
              height: `${scaleA * 2 * aspectA}px`,
              maxWidth: "100%",
            }}
          >
            <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
              {data.resA.width}&times;{data.resA.height}
            </span>
          </div>
          <p className="mt-2 text-sm font-medium">{data.resA.commonName}</p>
        </div>
        <div className="text-center">
          <div
            className="mx-auto border-2 border-emerald-500/50 bg-emerald-500/10 rounded-lg flex items-center justify-center"
            style={{
              width: `${scaleB * 2}px`,
              height: `${scaleB * 2 * aspectB}px`,
              maxWidth: "100%",
            }}
          >
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
              {data.resB.width}&times;{data.resB.height}
            </span>
          </div>
          <p className="mt-2 text-sm font-medium">{data.resB.commonName}</p>
        </div>
      </div>
    </Card>
  );
}
