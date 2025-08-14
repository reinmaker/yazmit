import { cn } from "@/lib/utils";

export function Badge({ children, variant = "default" as const, className }: { children: React.ReactNode; variant?: "default" | "secondary" | "outline" | "success" | "warning" | "danger" | "destructive"; className?: string }) {
  const base = "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium";
  const styles: Record<string, string> = {
    default: "bg-[#1E88E5]/10 text-[#1E88E5]",
    secondary: "bg-gray-100 text-gray-800",
    outline: "bg-transparent border border-gray-300 text-gray-700",
    success: "bg-[#2E7D32]/10 text-[#2E7D32]",
    warning: "bg-[#ED6C02]/10 text-[#ED6C02]",
    danger: "bg-[#D32F2F]/10 text-[#D32F2F]",
    destructive: "bg-[#D32F2F]/10 text-[#D32F2F]",
  };
  return <span className={cn(base, styles[variant], className)}>{children}</span>;
}


