"use client";

import { Card } from "@/components/ui/Card";
import { CopyButton } from "@/components/ui/CopyButton";

interface MetricCardProps {
  label: string;
  value: string;
  sublabel?: string;
  children?: React.ReactNode;
}

export function MetricCard({ label, value, sublabel, children }: MetricCardProps) {
  return (
    <Card>
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-[var(--muted-foreground)]">
          {label}
        </p>
        <CopyButton text={value} />
      </div>
      <div className="mt-3">
        {children ?? (
          <p className="text-3xl font-bold tracking-tight">{value}</p>
        )}
      </div>
      {sublabel && (
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">
          {sublabel}
        </p>
      )}
    </Card>
  );
}
