import { Inbox } from "lucide-react";

export function EmptyState({ title = "אין נתונים", description = "לא נמצאו פריטים להצגה." }: { title?: string; description?: string }) {
  return (
    <div className="rounded-xl border bg-white p-10 text-center" dir="rtl">
      <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/5">
        <Inbox className="h-5 w-5" aria-hidden />
      </div>
      <div className="text-lg font-semibold">{title}</div>
      {description ? <div className="text-sm text-black/60 mt-1">{description}</div> : null}
    </div>
  );
}


