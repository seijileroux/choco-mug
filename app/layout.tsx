import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import "./globals.css";

const font = Pacifico({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Choco Mug",
  description: "Choco Mug - Coffee Shop Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
