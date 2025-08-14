export function Section({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <section className="space-y-2">
      <h2 className="text-sm font-semibold text-black/70">{title}</h2>
      {children}
    </section>
  );
}


