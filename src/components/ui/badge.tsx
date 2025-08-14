import { cn } from "@/lib/utils";

export function Badge({ children, variant = "default" as const, className }: { children: React.ReactNode; variant?: "default" | "secondary" | "outline" | "success" | "warning" | "danger" | "destructive"; className?: string }) {
  const base = "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium";
  const styles: Record<string, string> = {
    default: "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300",
    secondary: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
    outline: "bg-transparent border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300",
    success: "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300",
    warning: "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300",
    danger: "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300",
    destructive: "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300",
  };
  return <span className={cn(base, styles[variant], className)}>{children}</span>;
}


