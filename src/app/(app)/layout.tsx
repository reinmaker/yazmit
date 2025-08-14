import * as React from "react";
import { Sidebar } from "@/components/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh">
      <aside className="hidden lg:block">
        <Sidebar className="fixed right-0 top-0 h-[100svh] w-[288px] xl:w-[320px]" />
      </aside>
      <main className="lg:pr-[288px] xl:pr-[320px] main-content-scroll">
        <div className="px-4 sm:px-6 lg:px-8 py-6">{children}</div>
      </main>
    </div>
  );
}


