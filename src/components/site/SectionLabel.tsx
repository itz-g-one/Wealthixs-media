type Props = { number: string; label: string };

/**
 * Blueprint-style section index marker.
 * Shows as: 01 / THE PROBLEM
 */
export function SectionLabel({ number, label }: Props) {
  return (
    <div className="mb-6 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
      <span className="rounded-sm border border-border bg-card px-2 py-1">{number}</span>
      <span className="h-px w-8 bg-border" />
      <span>{label}</span>
    </div>
  );
}
