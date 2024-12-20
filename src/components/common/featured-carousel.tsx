'use client';

import LicenseIcon from '@components/icons/featured/license-icon';
import FeedbackIcon from '@components/icons/featured/feedback-icon';

import FeaturedCard from '@components/cards/featured-card';
import Carousel from '@components/ui/carousel/carousel';
import DeliveryIcon from '@components/icons/featured/delivery-icon';
import CardIcon from '@components/icons/featured/card-icon';
import SupportIcon from '@components/icons/featured/support-icon';
import { SwiperSlide } from '@components/ui/carousel/slider';
import { ROUTES } from '@utils/routes';
import { Product } from '@framework/types';
import { ProductsDocument } from 'prismicio-types';

const data = [
  {
    id: 1,
    icon: <DeliveryIcon color="#ff9300" />,
    title: 'feature-title-one',
    description: 'feature-title-one-description',
    href: ROUTES.SEARCH,
  },
  {
    id: 2,
    icon: <CardIcon color="#ff9300" />,
    title: 'feature-title-two',
    description: 'feature-title-two-description',
    href: ROUTES.SEARCH,
  },
  {
    id: 3,
    icon: <FeedbackIcon color="#ff9300" />,
    title: 'feature-title-three',
    description: 'feature-title-three-description',
    href: ROUTES.SEARCH,
  },
  {
    id: 4,
    icon: <SupportIcon color="#ff9300" />,
    title: 'feature-title-four',
    description: 'feature-title-four-description',
    href: ROUTES.SEARCH,
  },
  {
    id: 5,
    icon: <LicenseIcon color="#ff9300" />,
    title: 'feature-title-five',
    description: 'feature-title-five-description',
    href: ROUTES.SEARCH,
  },
];

interface Props {
  lang: string;
  className?: string;
  products?: ProductsDocument[];
}

const breakpoints = {
  '1400': {
    slidesPerView: 5,
  },
  '1024': {
    slidesPerView: 4,
  },
  '768': {
    slidesPerView: 2,
  },
  '640 ': {
    slidesPerView: 2,
  },
  '0': {
    slidesPerView: 1,
  },
};

const FeatureCarousel: React.FC<Props> = ({
  lang,
  className = 'mb-8 md:mb-10',
  products,
}) => {
  return (
    <div className={`heightFull ${className}`}>
      <h1 className="text-center">Featured Products</h1>>
      <Carousel
        autoplay={false}
        breakpoints={breakpoints}
        prevActivateId="featured-carousel-button-prev"
        nextActivateId="featured-carousel-button-next"
        lang={lang}
        prevButtonClassName="start-3  3xl:top-auto 3xl:-translate-y-2 4xl:-translate-y-10"
        nextButtonClassName={`end-3  3xl:top-auto transform 2xl:translate-x-0 3xl:-translate-y-2 `}
        className={`py-5 `}
      >
        {products?.map((item) => (
          <SwiperSlide key={`featured-key-${item.id}`}>
            <FeaturedCard item={item.data} lang={lang} layout={'home4'} />
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
};

export default FeatureCarousel;
