import type { ResolutionData } from "@/types";

export function ResolutionInfo({ data }: { data: ResolutionData }) {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold tracking-tight">
          About {data.commonName} Resolution
        </h2>
        <div className="mt-4 whitespace-pre-line leading-relaxed text-[var(--muted-foreground)]">
          {data.description}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold tracking-tight">
          Devices with {data.name} Resolution
        </h2>
        <ul className="mt-3 space-y-2">
          {data.devices.map((device) => (
            <li
              key={device}
              className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              {device}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-bold tracking-tight">Common Use Cases</h2>
        <ul className="mt-3 space-y-2">
          {data.useCases.map((useCase) => (
            <li
              key={useCase}
              className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              {useCase}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
