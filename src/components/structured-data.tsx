import Script from 'next/script';

const StructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://reacture.io#person',
        name: 'Indy van Canegem',
        url: 'https://reacture.io',
        image: 'https://reacture.io/images/indy.jpeg',
        sameAs: [
          'https://github.com/reacture-io',
          'https://www.npmjs.com/~reacture-io',
          'https://faktion.com',
          'https://registry.reacture.io',
        ],
        jobTitle: 'Lead Developer',
        worksFor: {
          '@type': 'Organization',
          name: 'Faktion',
          url: 'https://faktion.com',
        },
        knowsAbout: [
          'TypeScript',
          'React',
          'Next.js',
          'Node.js',
          'NestJS',
          'GraphQL',
          'Python',
          'AI Engineering',
          'Agentic AI',
          'SaaS Development',
          'Full-stack Development',
        ],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'BE',
          addressRegion: 'Belgium',
        },
      },
      {
        '@type': 'Organization',
        '@id': 'https://reacture.io#organization',
        name: 'Reacture',
        url: 'https://reacture.io',
        founder: {
          '@id': 'https://reacture.io#person',
        },
        description:
          'Software & AI Engineering for cutting-edge digital solutions. Blending full-stack expertise with agentic AI development.',
        serviceType: [
          'Software Engineering',
          'AI Engineering',
          'Full-stack Development',
          'SaaS Development',
          'Agentic AI Development',
        ],
        areaServed: 'Worldwide',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'BE',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://reacture.io#website',
        url: 'https://reacture.io',
        name: 'Reacture',
        description:
          'Software & AI Engineering for cutting-edge digital solutions',
        publisher: {
          '@id': 'https://reacture.io#organization',
        },
        inLanguage: 'en-US',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://reacture.io/?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: '@reacture-io/iso-locale',
        url: 'https://www.npmjs.com/package/@reacture-io/iso-locale',
        author: {
          '@id': 'https://reacture.io#person',
        },
        description:
          'A TypeScript library providing ISO standards for handling countries, languages, dialects, and currencies',
        programmingLanguage: 'TypeScript',
        codeRepository: 'https://github.com/reacture-io/iso-locale',
      },
      {
        '@type': 'SoftwareApplication',
        name: '@reacture-io/tsconfig',
        url: 'https://www.npmjs.com/package/@reacture-io/tsconfig',
        author: {
          '@id': 'https://reacture.io#person',
        },
        description: 'TypeScript configuration for Reacture projects',
        programmingLanguage: 'TypeScript',
        codeRepository: 'https://github.com/reacture-io/tsconfig',
      },
      {
        '@type': 'SoftwareApplication',
        name: '@reacture-io/eslint-config',
        url: 'https://www.npmjs.com/package/@reacture-io/eslint-config',
        author: {
          '@id': 'https://reacture.io#person',
        },
        description: 'ESLint configuration for Reacture projects',
        programmingLanguage: 'TypeScript',
        codeRepository: 'https://github.com/reacture-io/eslint-config',
      },
      {
        '@type': 'SoftwareApplication',
        name: '@reacture-io/prettier-config',
        url: 'https://www.npmjs.com/package/@reacture-io/prettier-config',
        author: {
          '@id': 'https://reacture.io#person',
        },
        description: 'Prettier configuration for Reacture projects',
        programmingLanguage: 'TypeScript',
        codeRepository: 'https://github.com/reacture-io/prettier-config',
      },
    ],
  };

  return (
    <Script
      id='structured-data'
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
};

export default StructuredData;
