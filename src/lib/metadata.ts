import type { Metadata } from 'next';

export function generateSectionMetadata(
  section: string,
  title: string,
  description: string
): Metadata {
  const sectionTitle = `${title} | Reacture`;
  const canonicalUrl =
    section === 'intro'
      ? 'https://reacture.io'
      : `https://reacture.io/#${section}`;

  return {
    title: sectionTitle,
    description,
    openGraph: {
      title: sectionTitle,
      description,
      url: canonicalUrl,
      siteName: 'Reacture',
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: sectionTitle,
      description,
      creator: '@indyvancanegem',
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
