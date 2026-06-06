interface SummaryCardProps {
  value: number;
  label: string;
}

export function SummaryCard({ value, label }: SummaryCardProps) {
  return (
    <div className="summary-card">
      <h2>{value}</h2>
      <p>{label}</p>
    </div>
  );
}