import SectionHeader from '@components/common/section-header';
import { Product } from '@framework/types';
import Carousel from '@components/ui/carousel/carousel';
import { SwiperSlide } from '@components/ui/carousel/slider';
import Alert from '@components/ui/alert';
import useWindowSize from '@utils/use-window-size';
import ProductCardLoader from '@components/ui/loaders/product-card-loader';
import cn from 'classnames';
import { getDirection } from '@utils/get-direction';
import ProductCardV2 from '@components/product/product-cards/product-card-v2';
import ProductCard from '@components/product/product-cards/product-card';
import React from 'react';
import { ProductsDocument } from 'prismicio-types';

interface ProductsCarouselProps {
  sectionHeading?: string;
  className?: string;
  products?: ProductsDocument[];
  limit?: number;
  uniqueKey?: string;
  carouselBreakpoint?: any;
  variant?: 'default' | 'sticky';
  borderCarousel?: boolean;
  rowCarousel?: number;
}

const breakpoints = {
  '1536': {
    slidesPerView: 6,
  },
  '1280': {
    slidesPerView: 5,
  },
  '1024': {
    slidesPerView: 4,
  },
  '640': {
    slidesPerView: 3,
  },
  '360': {
    slidesPerView: 2,
  },
  '0': {
    slidesPerView: 1,
  },
};

const ProductsCarousel: React.FC<ProductsCarouselProps> = ({
  sectionHeading,
  products,
  className = '',
  limit,
  uniqueKey,
  carouselBreakpoint,
  variant = 'default',
  borderCarousel,
  rowCarousel = 1,
}) => {
  return (
    <div className={cn('relative', className)}>
      {sectionHeading && (
        <div className="mb-3 md:mb-5">
          <SectionHeader
            sectionHeading={sectionHeading}
            className={cn('mb-3', {
              'block-title ': variant === 'default',
            })}
          />
        </div>
      )}
    </div>
  );
};

export default ProductsCarousel;
