import { forwardRef } from 'react';

import Badge from '@/components/ui/badge';

const Intro = forwardRef<HTMLElement, unknown>((_, ref) => (
  <header
    id='intro'
    ref={ref}
    className='min-h-screen flex items-center'>
    <div className='grid lg:grid-cols-5 gap-12 sm:gap-16 w-full'>
      <div className='lg:col-span-3 space-y-6 sm:space-y-8'>
        <div className='space-y-3 sm:space-y-2'>
          <div className='text-sm text-muted-foreground font-mono tracking-wider'>
            PORTFOLIO / {new Date().getFullYear()}
          </div>
          <h1 className='text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight'>
            REACTURE
          </h1>
        </div>

        <div className='space-y-6 max-w-md'>
          <p className='text-lg sm:text-xl text-muted-foreground leading-relaxed'>
            Software engineering for{' '}
            <span className='text-foreground'>digital solutions</span>.
            <br />
            <span className='text-foreground'> backend</span>,
            <span className='text-foreground'> frontend</span>, and
            <span className='text-foreground'> full-stack development</span>.
          </p>

          <div className='flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground'>
            <div>Based in Belgium</div>
          </div>
        </div>
      </div>

      <div className='lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0'>
        <div className='space-y-4'>
          <div className='text-sm text-muted-foreground font-mono'>
            CURRENTLY
          </div>
          <div className='space-y-2'>
            <div className='text-foreground'>Lead Developer</div>
            <div className='text-muted-foreground'>@ Faktion</div>
            <div className='text-xs text-muted-foreground'>2024 — Present</div>
          </div>
        </div>

        <div className='space-y-4'>
          <div className='text-sm text-muted-foreground font-mono'>FOCUS</div>
          <div className='flex flex-wrap gap-2'>
            {[
              'TypeScript',
              'NestJS',
              'Node.js',
              'GraphQL',
              'React',
              'NextJS',
            ].map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  </header>
));

Intro.displayName = 'Intro';

export default Intro;
