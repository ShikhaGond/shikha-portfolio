import type { Metadata } from "next";

import "./globals.css";

import { ThemeProvider } from "@/src/providers/theme-provider";

export const metadata: Metadata = {
  title: "Shikha Gond | Frontend Developer",

  description:
    "Frontend Developer specializing in React, Next.js, TypeScript and modern UI engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>

        <ThemeProvider>
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}