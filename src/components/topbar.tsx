import * as React from "react";
import { Bell, Search, HelpCircle, User } from "lucide-react";
import Image from "next/image";

export function Topbar() {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-black/5">
      <div className="h-14 flex items-center gap-3 px-3" dir="rtl">
        {/* Brand pinned to far-right (RTL start) */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-base font-semibold">שדות־גיטלמן</span>
          <Image src="/logo.jpg" alt="לוגו" width={36} height={36} className="rounded-sm" />
        </div>
        
        {/* Left controls */}
        <div className="flex items-center gap-3">
          <button aria-label="בחירת חברה" className="px-3 py-1.5 rounded-md bg-white border text-sm">חברה לדוגמה</button>
        </div>
        
        {/* Centered search bar */}
        <div className="flex-1 max-w-[720px] mx-auto">
          <label className="sr-only" htmlFor="global-search">חיפוש</label>
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40" />
            <input id="global-search" placeholder="חיפוש גלובלי…" className="w-full pr-9 pl-3 h-9 rounded-md border bg-white text-sm" dir="rtl" />
          </div>
        </div>
        
        {/* Right controls (RTL end) */}
        <div className="flex items-center gap-3">
          <button aria-label="התראות" className="relative h-9 w-9 inline-grid place-items-center rounded-md hover:bg-black/5">
            <Bell className="h-5 w-5" />
            <span className="sr-only">התראות</span>
          </button>
          <button aria-label="עזרה" className="relative h-9 w-9 inline-grid place-items-center rounded-md hover:bg-black/5">
            <HelpCircle className="h-5 w-5" />
            <span className="sr-only">עזרה</span>
          </button>
          <button aria-label="תפריט משתמש" className="relative h-9 w-9 inline-grid place-items-center rounded-md hover:bg-black/5">
            <User className="h-5 w-5" />
            <span className="sr-only">תפריט משתמש</span>
          </button>
        </div>
      </div>
    </header>
  );
}


