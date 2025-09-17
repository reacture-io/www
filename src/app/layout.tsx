import type React from "react";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

import "../styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Reacture | Software & AI Engineering",
  description: "Software & AI Engineering for digital solutions.",
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
    <body className="font-sans antialiased">
      <NextIntlClientProvider>{children}</NextIntlClientProvider>
    </body>
  </html>
);

export default RootLayout;
