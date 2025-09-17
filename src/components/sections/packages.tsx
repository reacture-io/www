import { forwardRef } from 'react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';

const Packages = forwardRef<HTMLElement, unknown>((_, ref) => {
  const t = useTranslations('sections');
  const packages = [
    'iso-locale',
    'tsconfig',
    'eslint-config',
    'prettier-config',
  ];
  return (
    <section
      id='packages'
      ref={ref}
      className='py-20 sm:py-32 flex flex-col gap-12'>
      <div className='space-y-6 sm:space-y-8'>
        <h2 className='text-3xl sm:text-4xl font-light'>
          {t('packages.title')}
        </h2>
        <p className='text-lg sm:text-xl text-muted-foreground leading-relaxed'>
          {t('packages.description')}
        </p>
      </div>
      <div className='row-start-2 flex flex-col gap-8'>
        {packages.map((_package) => (
          <div
            key={_package}
            className='flex flex-col gap-2'>
            <h3 className='text-lg sm:text-xl font-medium'>
              {t(`packages.${_package}.title`)}
            </h3>
            <p className='text-sm text-muted-foreground'>
              {t(`packages.${_package}.description`)}
            </p>
            <div className='flex flex-row gap-2 items-center mt-2'>
              <Button
                variant='outline'
                onClick={() =>
                  window.open(t(`packages.${_package}.github`), '_blank')
                }>
                GitHub
              </Button>
              <Button
                variant='outline'
                onClick={() =>
                  window.open(t(`packages.${_package}.npm`), '_blank')
                }>
                NPM
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
Packages.displayName = 'Packages';

export default Packages;
