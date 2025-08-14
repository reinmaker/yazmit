import type { Metadata } from "next";
import { Heebo, Rubik } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Topbar } from "@/components/topbar";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin", "hebrew"],
  display: "swap",
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "hebrew"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "שדות־גיטלמן",
  description: "מערכת פרויקטים - ללא לוגיקה",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${heebo.variable} ${rubik.variable} antialiased font-sans`}>
        <Script id="strip-ext-attrs" strategy="beforeInteractive">
          {`(function(){try{var attrs=['data-gr-ext-installed','data-new-gr-c-s-check-loaded'];var els=[document.documentElement,document.body];els.forEach(function(el){if(!el) return; attrs.forEach(function(a){el.removeAttribute(a)})});}catch(e){}})();`}
        </Script>
        <Topbar />
        {children}
      </body>
    </html>
  );
}
