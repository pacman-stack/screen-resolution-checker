import type { ComparisonData } from "@/types";
import { Card } from "@/components/ui/Card";

export function ComparisonTable({ data }: { data: ComparisonData }) {
  const pixelsA = data.resA.width * data.resA.height;
  const pixelsB = data.resB.width * data.resB.height;

  const rows = [
    {
      label: "Resolution",
      a: `${data.resA.width} × ${data.resA.height}`,
      b: `${data.resB.width} × ${data.resB.height}`,
    },
    {
      label: "Common Name",
      a: data.resA.commonName,
      b: data.resB.commonName,
    },
    {
      label: "Total Pixels",
      a: pixelsA.toLocaleString(),
      b: pixelsB.toLocaleString(),
    },
    {
      label: "Pixel Difference",
      a: "",
      b: `${((pixelsB / pixelsA - 1) * 100).toFixed(0)}% more pixels`,
    },
  ];

  return (
    <Card>
      <h2 className="mb-4 text-lg font-semibold">Side-by-Side Comparison</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--border)]">
              <th className="py-3 text-left font-medium text-[var(--muted-foreground)]">
                Spec
              </th>
              <th className="py-3 text-right font-medium">
                {data.resA.commonName}
              </th>
              <th className="py-3 text-right font-medium">
                {data.resB.commonName}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {rows.map((row) => (
              <tr key={row.label}>
                <td className="py-3 text-[var(--muted-foreground)]">
                  {row.label}
                </td>
                <td className="py-3 text-right font-medium">{row.a}</td>
                <td className="py-3 text-right font-medium">{row.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
