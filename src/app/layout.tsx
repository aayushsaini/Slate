import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
// import db from "@/lib/supabase/db";
import { NextThemeProvider } from "@/lib/providers/next-theme-provider";
import { twMerge } from "tailwind-merge";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slate.io",
  description: "Your modern collaboration tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // console.log(db);
  return (
    <html lang="en">
      <body className={twMerge("bg-background", inter.className)}>
        <NextThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </NextThemeProvider>
      </body>
    </html>
  );
}
