import React, { forwardRef } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';

const Experience = forwardRef<HTMLElement, unknown>((_, ref) => {
  const t = useTranslations('sections');
  return (
    <section
      id='experience'
      ref={ref}
      className='py-20 sm:py-32 flex flex-col gap-12'>
      <div className='space-y-6 sm:space-y-8'>
        <h3 className='text-3xl sm:text-4xl font-light'>
          {t('experience.title')}
        </h3>
        <div className='flex flex-row gap-16 items-center flex-wrap'>
          <p className='text-lg sm:text-xl text-muted-foreground leading-relaxed'>
            {t('experience.description')}
          </p>
          <Image
            src='/images/indy.jpeg'
            alt='Shoutout'
            className='rounded-full'
            width={200}
            height={200}
          />
        </div>
      </div>

      {/* Ownership */}
      <div className='space-y-8 sm:space-y-12 flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-lg sm:text-xl font-medium'>
            {t('experience.ownership.title')}
          </h3>
          <p className='text-lg sm:text-xl text-muted-foreground leading-relaxed'>
            {t('experience.ownership.description')}
          </p>
        </div>
        {/* SaaS */}
        <div className='flex flex-col gap-2'>
          <h3 className='text-lg sm:text-xl font-medium'>
            {t('experience.SaaS.title')}
          </h3>
          <p className='text-muted-foreground'>
            {t.rich('experience.SaaS.description1', {
              span: (chunks) => (
                <span className='text-foreground'>{chunks}</span>
              ),
            })}
          </p>
          <p className='text-muted-foreground'>
            {t.rich('experience.SaaS.description2', {
              span: (chunks) => (
                <span className='text-foreground'>{chunks}</span>
              ),
            })}
          </p>
          <p className='text-muted-foreground'>
            {t.rich('experience.SaaS.nurture', {
              span: (chunks) => (
                <span className='text-foreground'>{chunks}</span>
              ),
            })}
          </p>
        </div>

        {/* Registry */}
        <div className='flex flex-col gap-2'>
          <h3 className='text-lg sm:text-xl font-medium'>
            {t('experience.registry.title')}
          </h3>
          <p className='text-muted-foreground'>
            {t.rich('experience.registry.description', {
              span: (chunks) => (
                <span className='text-foreground'>{chunks}</span>
              ),
            })}
          </p>
          <div className='flex flex-row gap-2 items-center'>
            <span className='text-sm text-muted-foreground'>
              {t('experience.registry.call-to-action')}
            </span>
            <Button
              variant='outline'
              onClick={() =>
                window.open(t('experience.registry.url'), '_blank')
              }>
              {t('experience.registry.url')}
            </Button>
          </div>
        </div>

        {/* Agentic */}
        <div className='flex flex-col gap-2'>
          <h3 className='text-lg sm:text-xl font-medium'>
            {t('experience.agentic.title')}
          </h3>
          <p className='text-muted-foreground'>
            {t.rich('experience.agentic.description1', {
              span: (chunks) => (
                <span className='text-foreground'>{chunks}</span>
              ),
            })}
          </p>
          <div className='flex flex-row gap-2 items-center'>
            <span className='text-sm text-muted-foreground'>
              {t('experience.agentic.call-to-action')}
            </span>
            <Button
              variant='outline'
              onClick={() =>
                window.open(t('experience.agentic.url'), '_blank')
              }>
              {t('experience.agentic.url')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});

Experience.displayName = 'Experience';

export default Experience;
