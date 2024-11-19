'use client';

import Link from '@components/ui/link';
import Image from 'next/image';
import useWindowSize from '@utils/use-window-size';
import cn from 'classnames';

interface BannerProps {
  lang: string;
  banner: any;
  variant?: 'rounded' | 'default';
  effectActive?: boolean;
  className?: string;
  classNameInner?: string;
}

function getImage(deviceWidth: number, imgObj: any) {
  if (!imgObj) return { url: '', width: 0, height: 0 }; // Fallback for missing image
  return deviceWidth < 768 ? imgObj.mobile : imgObj.desktop;
}

const BannerCard: React.FC<BannerProps> = ({
  lang,
  banner,
  className,
  variant = 'default',
  effectActive = true,
  classNameInner,
}) => {
  const { width } = useWindowSize();
  const { slug, title, image } = banner || {}; // Safely destructure banner
  const selectedImage = getImage(width || 0, image); // Fallback for undefined width

  return (
    <div className={cn('mx-auto w-full', className)}>
      <Link
        href={`/${lang}${slug}`}
        className={cn(
          'h-full w-full group flex justify-center relative overflow-hidden',
          classNameInner
        )}
      >
        <div className="relative inline-block w-full overflow-hidden">
          {selectedImage?.url ? (
            <Image
              src={selectedImage.url}
              alt={title || 'Banner Image'} // Fallback for missing title
              width={selectedImage.width || 768} // Default width
              height={selectedImage.height || 432} // Default height
              sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizing
              className={cn(
                'absolute top-0 left-0 w-full h-full object-cover',
                {
                  'rounded-md': variant === 'rounded',
                }
              )}
              priority // Ensures the banner image loads quickly
            />
          ) : (
            <div className="w-full h-[200px] bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Image not available</span>
            </div>
          )}
        </div>
        {effectActive && (
          <div className="absolute top-0 block w-1/2 h-full transform -skew-x-12 ltr:-left-full rtl:-right-full z-5 bg-gradient-to-r from-transparent to-white opacity-30 group-hover:animate-shine" />
        )}
      </Link>
    </div>
  );
};

export default BannerCard;
