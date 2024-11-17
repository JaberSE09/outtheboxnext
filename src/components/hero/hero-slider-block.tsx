'use client';

import HeroBannerCard from '@components/hero/hero-banner-card';
import Carousel from '@components/ui/carousel/carousel';
import { SwiperSlide } from '@components/ui/carousel/slider';
import { PrismicNextImageProps } from '@prismicio/next';
import {
  HeroBannerDocument,
  HeroBannerDocumentDataHerobannerItem,
} from '../../../prismicio-types';

interface Props {
  heroBanner?: HeroBannerDocument;
  className?: string;
  contentClassName?: string;
  showHeroContent?: boolean;
}

const HeroSliderBlock: React.FC<Props> = ({
  heroBanner,
  className = 'mb-7',
  contentClassName = 'px-5 py-10 xl:py-24',
  showHeroContent = true,
}) => {
  if (!heroBanner || !heroBanner.data.herobanner.length) return null;
  return (
    <div className={`${className}`}>
      <Carousel
        pagination={{
          clickable: true,
        }}
        lang="en"
        navigation={true}
        autoplay={false}
        prevActivateId={`prevActivateId`}
        nextActivateId={`nextActivateId`}
      >
        {heroBanner?.data.herobanner.map(
          (banner: HeroBannerDocumentDataHerobannerItem, index) => (
            <SwiperSlide key={`banner--key${index}`}>
              <HeroBannerCard
                banner={banner}
                variant="slider"
                className={contentClassName}
                heroContentCard={showHeroContent}
              />
            </SwiperSlide>
          )
        )}
      </Carousel>
    </div>
  );
};

export default HeroSliderBlock;
