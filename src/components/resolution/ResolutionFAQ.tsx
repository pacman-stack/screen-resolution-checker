import type { FAQ } from "@/types";

export function ResolutionFAQ({ faqs }: { faqs: FAQ[] }) {
  return (
    <section>
      <h2 className="text-2xl font-bold tracking-tight">
        Frequently Asked Questions
      </h2>
      <div className="mt-6 space-y-6">
        {faqs.map((faq, i) => (
          <div key={i}>
            <h3 className="text-base font-semibold">{faq.question}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
