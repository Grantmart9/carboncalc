"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { EmissionsProvider } from "@/lib/emissionsContext";
import { Nav } from "@/components/nav";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <EmissionsProvider>
          <Nav />
          <div>{children}</div>
        </EmissionsProvider>
      </body>
    </html>
  );
}
