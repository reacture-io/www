import type React from 'react';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';

import StructuredData from '@/components/structured-data';

import '../styles/globals.css';

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://reacture.io'),
  title: {
    default: 'Reacture | Software & AI Engineering',
    template: '%s | Reacture',
  },
  description:
    'Software & AI Engineering for cutting-edge digital solutions. Blending full-stack expertise with agentic AI development. TypeScript, React, Next.js, Node.js, Python, and AI agents.',
  keywords: [
    'Software Engineering',
    'AI Engineering',
    'Full-stack Development',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'NestJS',
    'GraphQL',
    'Python',
    'AI Agents',
    'Agentic AI',
    'SaaS Development',
    'Belgium Developer',
    'Faktion',
    'Metamaze',
    'Reacture',
    'Indy van Canegem',
  ],
  authors: [{ name: 'Indy van Canegem', url: 'https://reacture.io' }],
  creator: 'Indy van Canegem',
  publisher: 'Reacture',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://reacture.io',
    title: 'Reacture | Software & AI Engineering',
    description:
      'Software & AI Engineering for cutting-edge digital solutions. Blending full-stack expertise with agentic AI development.',
    siteName: 'Reacture',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Reacture - Software & AI Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reacture | Software & AI Engineering',
    description:
      'Software & AI Engineering for cutting-edge digital solutions. Blending full-stack expertise with agentic AI development.',
    images: ['/opengraph-image'],
    creator: '@indyvancanegem',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://reacture.io',
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/dark-favicon.png',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/light-favicon.png',
      media: '(prefers-color-scheme: dark)',
    },
  ],
  manifest: '/manifest.json',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html
    lang='en'
    className={`${geist.variable}`}>
    <head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'
      />
      <Analytics />
    </head>
    <body className='font-sans antialiased'>
      <StructuredData />
      <NextIntlClientProvider>{children}</NextIntlClientProvider>
    </body>
  </html>
);

export default RootLayout;
