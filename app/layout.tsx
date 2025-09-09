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
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/dark-favicon.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      rel: "icon",
      type: "image/png",
      url: "/light-favicon.png",
      media: "(prefers-color-scheme: dark)",
    },
  ],
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
