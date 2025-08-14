import { cn } from "@/lib/utils";

export function Badge({ children, variant = "default" as const }: { children: React.ReactNode; variant?: "default" | "success" | "warning" | "danger" }) {
  const base = "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium";
  const styles: Record<string, string> = {
    default: "bg-[#1E88E5]/10 text-[#1E88E5]",
    success: "bg-[#2E7D32]/10 text-[#2E7D32]",
    warning: "bg-[#ED6C02]/10 text-[#ED6C02]",
    danger: "bg-[#D32F2F]/10 text-[#D32F2F]",
  };
  return <span className={cn(base, styles[variant])}>{children}</span>;
}


