export function KpiCard({ title, value, subtext }: { title: string; value: string; subtext?: string }) {
  return (
    <div className="rounded-xl border bg-white p-4 text-right" dir="rtl">
      <div className="text-xs text-black/60">{title}</div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
      {subtext ? <div className="mt-1 text-xs text-black/50">{subtext}</div> : null}
    </div>
  );
}


