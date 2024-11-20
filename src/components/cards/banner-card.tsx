'use client';

import Link from '@components/ui/link';
import Image from 'next/image';
import useWindowSize from '@utils/use-window-size';
import cn from 'classnames';
import { CategoriesDocument } from 'prismicio-types';
import { PrismicNextImage } from '@prismicio/next';

interface BannerProps {
  lang: string;
  banner: CategoriesDocument;
  variant?: 'rounded' | 'default';
  effectActive?: boolean;
  className?: string;
  classNameInner?: string;
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
  const { data, id } = banner || {}; // Safely destructure banner
  const selectedImage = data.image;

  return (
    <div className="mx-auto w-full">
      <Link
        href={`/${lang}/categories/${id}`}
        className={cn(
          'h-full w-full group flex justify-center relative overflow-hidden',
          classNameInner
        )}
      >
        <div className="relative inline-block w-full overflow-hidden">
          <PrismicNextImage
            field={selectedImage}
            width={768} // Default width
            height={432} // Default height
            sizes="(max-width: 768px) 100vw, 50vw" // Responsive sizing
            className={'absolute top-0 left-0 w-full h-full object-cover'}
          />
        </div>
      </Link>
    </div>
  );
};

export default BannerCard;
