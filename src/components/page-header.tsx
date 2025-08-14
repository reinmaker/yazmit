export function PageHeader({ title, description, actions }: { title: string; description?: string; actions?: React.ReactNode }) {
  return (
    <div className="mb-4" dir="rtl">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-right">{title}</h1>
        {actions ? <div>{actions}</div> : null}
      </div>
      {description ? <p className="text-sm text-black/60 mt-1 text-right">{description}</p> : null}
    </div>
  );
}


