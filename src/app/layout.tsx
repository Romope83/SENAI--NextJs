import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SENAI - Next.Js",
  description: "Apresentação Next.Js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
