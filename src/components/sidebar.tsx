"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutGrid, Building2, Factory, FileText, CheckCircle2, Calendar, HandCoins, ShieldCheck, Users, ScrollText, ListChecks, Percent, Layers, BarChart3, Folder, ShieldAlert, Plug2, Settings, ChevronRight, Menu } from "lucide-react";

type NavItem = { href: string; label: string; icon: React.ReactNode };
type NavGroup = { id: string; title: string; items: NavItem[] };

const groups: NavGroup[] = [
  {
    id: "dashboard",
    title: "דשבורד",
    items: [
      { href: "/dashboard", label: "דשבורד", icon: <LayoutGrid className="h-4 w-4" /> },
      { href: "/projects", label: "פרויקטים", icon: <Building2 className="h-4 w-4" /> },
    ],
  },
  {
    id: "vendors",
    title: "ספקים/הוצאות",
    items: [
      { href: "/vendors", label: "ספקים", icon: <Factory className="h-4 w-4" /> },
      { href: "/contracts", label: "חוזים", icon: <FileText className="h-4 w-4" /> },
      { href: "/milestones", label: "אבני דרך", icon: <CheckCircle2 className="h-4 w-4" /> },
      { href: "/payment-requests", label: "בקשות תשלום", icon: <HandCoins className="h-4 w-4" /> },
      { href: "/approvals", label: "אישורים", icon: <ShieldCheck className="h-4 w-4" /> },
    ],
  },
  {
    id: "buyers",
    title: "מכירות/רוכשים",
    items: [
      { href: "/buyers", label: "רוכשים", icon: <Users className="h-4 w-4" /> },
      { href: "/sales-contracts", label: "חוזי מכר", icon: <ScrollText className="h-4 w-4" /> },
      { href: "/schedules", label: "לוחות זמנים", icon: <Calendar className="h-4 w-4" /> },
      { href: "/indexation", label: "אינדקסציה", icon: <ListChecks className="h-4 w-4" /> },
      { href: "/arrears", label: "פיגורים", icon: <Percent className="h-4 w-4" /> },
    ],
  },
  {
    id: "marketing",
    title: "שיווק/מלאי",
    items: [
      { href: "/inventory", label: "מלאי", icon: <Layers className="h-4 w-4" /> },
      { href: "/leads", label: "לידים", icon: <BarChart3 className="h-4 w-4" /> },
      { href: "/reservations", label: "שמרות", icon: <Folder className="h-4 w-4" /> },
      { href: "/discounts", label: "הנחות", icon: <Percent className="h-4 w-4" /> },
    ],
  },
  {
    id: "cashflow",
    title: "תזרים",
    items: [
      { href: "/cashflow", label: "תזרים", icon: <HandCoins className="h-4 w-4" /> },
      { href: "/reports", label: "דוחות", icon: <BarChart3 className="h-4 w-4" /> },
    ],
  },
  {
    id: "compliance",
    title: "מסמכים ותאימות",
    items: [
      { href: "/documents", label: "מסמכים", icon: <FileText className="h-4 w-4" /> },
      { href: "/compliance", label: "תאימות", icon: <ShieldAlert className="h-4 w-4" /> },
      { href: "/guarantees", label: "ערבויות", icon: <ShieldCheck className="h-4 w-4" /> },
    ],
  },
  {
    id: "settings",
    title: "אינטגרציות/הגדרות",
    items: [
      { href: "/integrations", label: "אינטגרציות", icon: <Plug2 className="h-4 w-4" /> },
      { href: "/settings", label: "הגדרות", icon: <Settings className="h-4 w-4" /> },
    ],
  },
];

export function Sidebar({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(true);
  const [openGroups, setOpenGroups] = React.useState<Set<string>>(
    () => new Set(groups.map((g) => g.id))
  );
  const pathname = usePathname() || "";

  function toggleGroup(id: string) {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }
  return (
                    <aside className={cn("h-full overflow-y-auto border-l border-card-border bg-background/80 backdrop-blur transition-all duration-200 sidebar-scroll", open ? "w-72" : "w-14", className)}
                       aria-label="ניווט צדדי" dir="rtl">
                  <div className="h-14 flex items-center justify-between px-2 border-b border-card-border">
        <button className="h-8 w-8 inline-grid place-items-center rounded-md hover:bg-black/5" onClick={() => setOpen((s) => !s)} aria-label="כווץ">
          <ChevronRight className={cn("h-4 w-4 transition-transform", open ? "rotate-180" : "rotate-0")} />
        </button>
        <div className={cn("heading text-base font-semibold text-right", !open && "sr-only")}>שדות־גיטלמן</div>
        <button className="lg:hidden h-9 w-9 inline-grid place-items-center rounded-md hover:bg-black/5" aria-label="תפריט">
          <Menu className="h-5 w-5" />
        </button>
      </div>
      <nav className={cn("p-2 space-y-6", !open && "px-1")}
           role="navigation" aria-label="ראשי">
        {groups.map((g) => (
          <div key={g.id}>
                                    <button
                          type="button"
                          onClick={() => toggleGroup(g.id)}
                          className={cn("w-full px-2 text-xs text-muted-foreground flex items-center justify-start gap-2 hover:text-foreground text-right", !open && "sr-only")}
                          aria-expanded={openGroups.has(g.id)}
                          aria-controls={`group-${g.id}`}
                        >
              {g.title}
              <ChevronRight className={cn("h-3.5 w-3.5 transition-transform", openGroups.has(g.id) ? "rotate-90" : "rotate-180")} />
            </button>
            <div id={`group-${g.id}`} className={cn("mt-1 space-y-1", openGroups.has(g.id) ? "block" : "hidden")}
            >
              {g.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-black/5 border-r-2 border-transparent text-right",
                          isActive && "bg-black/5 font-semibold border-[#1E88E5]",
                          !open && "justify-center px-2"
                        )}
                        aria-current={isActive ? "page" : undefined}
                  >
                    <span className={cn("truncate", !open && "sr-only")}>{item.label}</span>
                    {item.icon}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}


