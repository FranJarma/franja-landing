import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Franja | Rompé el patrón",
  description:
    "Ingeniero de software y builder enfocado en sistemas, producto y escalabilidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
