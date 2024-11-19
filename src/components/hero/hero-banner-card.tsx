'use client';

import cn from 'classnames';
import useWindowSize from '@utils/use-window-size';
import { PrismicRichText } from '@prismicio/react';
import { HeroBannerDocumentDataHerobannerItem } from 'prismicio-types';

interface BannerProps {
  banner?: HeroBannerDocumentDataHerobannerItem;
  className?: string;
  heroContentCard?: boolean;
  variant?: 'default' | 'slider' | 'medium' | 'antique';
}

export default function HeroBannerCard({
  banner,
  className = 'py-20 xy:pt-24',
  variant = 'default',
  heroContentCard = true,
}: BannerProps) {
  const { width } = useWindowSize();
  const { image, title = 'Default Title', secondarytitle } = banner || {};

  return (
    <div
      className={cn(
        'bg-no-repeat bg-center flex items-center rounded w-full h-[320px] md:h-[460px] lg:h-[500px] xl:h-[550px]', // Ensure full width and height
        className
      )}
      style={{
        backgroundImage: `url('${image?.url || ''}')`,
        backgroundSize: 'cover', // Ensures the image covers the section
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center', // Center the image
      }}
    >
      <div
        className={cn(
          'sm:absolute inset-0 mx-auto m-[15px] md:mt-[30px] xl:mt-[120px] xl:max-w-[1000px] 2xl:max-w-[1300px]',
          {
            'max-w-[480px] md:max-w-[550px]': ['default', 'slider'].includes(
              variant
            ),
            'max-w-[480px] md:max-w-[650px]': variant === 'medium',
            '2xl:max-w-[1005px]': variant === 'antique',
          }
        )}
      >
        <div className="text-center">
          <h2
            className={cn('text-xl lg:text-4xl font-medium relative z-10', {
              'xl:text-5xl 2xl:text-[48px] text-brand-light leading-snug md:leading-tight xl:leading-[1.3em] mb-3 md:mb-4 xl:mb-3':
                variant !== 'antique',
              'text-brand-light xl:text-5xl 2xl:text-[48px]':
                variant === 'default',
              'text-brand-light xl:text-[40px] 2xl:mb-4 2xl:pb-0.5':
                variant === 'medium',
            })}
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark transparent background
              padding: '8px 16px',
              borderRadius: '4px',
              display: 'inline-block',
            }}
          >
            {title}
          </h2>
          {secondarytitle && (
            <div
              className={cn(
                'text-base md:text-[15px] xl:text-lg leading-7 md:leading-8 xl:leading-[1.92em] relative z-10',
                {
                  'text-brand-light':
                    variant === 'default' || variant === 'slider',
                  '2xl:px-24': variant === 'medium',
                  'xl:text-xl': variant === 'antique',
                }
              )}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Consistent dark, transparent background
                padding: '6px 12px',
                borderRadius: '4px',
                display: 'block',
              }}
            >
              <PrismicRichText field={secondarytitle} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
