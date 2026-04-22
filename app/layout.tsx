import type { Metadata } from "next";
import { Sora } from "next/font/google";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "FRANJA: Agencia de producto y tecnología",
  description:
    "Agencia de producto y tecnología. Diseñamos y construimos sistemas, productos y experiencias que van mas allá de lo normal.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={sora.variable}>
      <body className="bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
