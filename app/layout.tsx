"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "../lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <StoreProvider>
          <body className={`${inter.className} overflow-hidden`}>
            {children}
          </body>
        </StoreProvider>
      </ThemeProvider>
    </html>
  );
}
