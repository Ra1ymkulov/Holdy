import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const interFont = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Holdy",
  description: "Holdy",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.className}`}>{children}</body>
    </html>
  );
}
