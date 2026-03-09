import type { ComparisonData } from "@/types";
import { Card } from "@/components/ui/Card";

export function ComparisonContent({ data }: { data: ComparisonData }) {
  return (
    <div className="space-y-8">
      <Card>
        <h2 className="mb-4 text-lg font-semibold">Category Winners</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {Object.entries(data.winners).map(([category, winner]) => {
            const labels: Record<string, string> = {
              gaming: "Gaming",
              productivity: "Productivity",
              value: "Value",
              contentCreation: "Content Creation",
            };
            return (
              <div key={category} className="text-center">
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted-foreground)]">
                  {labels[category] ?? category}
                </p>
                <p className="mt-1 text-sm font-semibold">{winner}</p>
              </div>
            );
          })}
        </div>
      </Card>

      <section>
        <h2 className="text-2xl font-bold tracking-tight">
          {data.title}: Complete Comparison
        </h2>
        <div className="mt-4 whitespace-pre-line leading-relaxed text-[var(--muted-foreground)]">
          {data.content}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 space-y-6">
          {data.faqs.map((faq, i) => (
            <div key={i}>
              <h3 className="text-base font-semibold">{faq.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
