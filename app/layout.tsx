import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rheyya's Affirmations ✦",
  description: "Daily affirmations to elevate your mind and spirit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
