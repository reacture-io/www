import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | Reacture',
  description: 'The page you are looking for could not be found.',
};

const NotFound = () => (
  <div className='min-h-screen bg-background text-foreground flex items-center justify-center'>
    <div className='text-center'>
      <h1 className='text-4xl font-bold mb-4'>404</h1>
      <h2 className='text-2xl mb-4'>Page Not Found</h2>
      <p className='text-muted-foreground mb-8'>
        The page you are looking for could not be found.
      </p>
      <a
        href='/'
        className='bg-foreground text-background px-4 py-2 rounded hover:opacity-90 transition-opacity'>
        Go back home
      </a>
    </div>
  </div>
);

export default NotFound;
