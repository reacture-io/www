import { forwardRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import Logo from '@/components/logos/reacture';
import Badge from '@/components/ui/badge';

const Intro = forwardRef<HTMLElement, unknown>((_, ref) => {
  const t = useTranslations('sections');
  return (
    <header
      id='intro'
      ref={ref}
      className='min-h-screen flex items-center'>
      <div className='grid lg:grid-cols-5 gap-12 sm:gap-16 w-full'>
        <div className='lg:col-span-3 space-y-6 sm:space-y-8'>
          <div className='space-y-3 sm:space-y-2'>
            <div className='text-sm text-muted-foreground font-mono tracking-wider'>
              {t('intro.portfolio', { year: new Date().getFullYear() })}
            </div>
            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight flex flex-row items-center gap-2'>
              <Logo />
            </h1>
          </div>

          <div className='space-y-6 max-w-md'>
            <p className='text-lg sm:text-xl text-muted-foreground leading-relaxed mb-0'>
              {t.rich('intro.description1', {
                span: (chunks) => (
                  <span className='text-foreground'>{chunks}</span>
                ),
              })}
            </p>
            <p className='text-lg sm:text-xl text-muted-foreground leading-relaxed'>
              {t.rich('intro.description2', {
                span: (chunks) => (
                  <span className='text-foreground'>{chunks}</span>
                ),
              })}
            </p>

            <div className='flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground'>
              <div>{t('intro.origin')}</div>
            </div>

            <Image
              src='/images/shoutout-1.png'
              alt='Achievement recognition for exceptional work in software development and AI engineering'
              width={500}
              height={500}
              className='rounded-lg'
              priority
            />
          </div>
        </div>

        <div className='lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0'>
          <div className='space-y-4'>
            <span className='text-sm text-muted-foreground font-mono'>
              {t('intro.currently')}
            </span>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-1'>
                <span className='text-foreground'>
                  {t('intro.current.role')}
                </span>
                <span className='text-muted-foreground'>
                  {t('intro.current.company')}
                </span>
              </div>

              <span className='text-xs text-muted-foreground'>
                {t('intro.current.duration')}
              </span>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <span className='text-sm text-muted-foreground font-mono'>
              {t('intro.focus')}
            </span>
            <div className='flex flex-wrap gap-1'>
              {[
                'TypeScript',
                'NestJS',
                'Node.js',
                'GraphQL',
                'React',
                'NextJS',
                'AI',
                'Python',
                'Agents',
              ].map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

Intro.displayName = 'Intro';

export default Intro;
