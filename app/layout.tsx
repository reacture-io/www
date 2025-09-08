import type React from "react";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "../styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Reacture | Software Engineering",
  description: "Software Engineering for digital solutions.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en" className={`${geist.variable}`}>
    <Analytics />
    <body className="font-sans antialiased">{children}</body>
  </html>
);

export default RootLayout;
