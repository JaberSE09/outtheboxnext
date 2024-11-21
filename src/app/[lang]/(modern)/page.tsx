import Container from '@components/ui/container';
import { Metadata } from 'next';
import FeatureCarousel from '@components/common/featured-carousel';
import BannerGrid from '@components/common/banner-grid';
import HeroSliderBlock from '@components/hero/hero-slider-block';
import BannerAllCarousel from '@components/common/banner-all-carousel';
import BestSellerProductFeed from '@components/product/feeds/best-seller-product-feed';

import {
  bannerBrand,
  homeOnesGridHero as bannerGrid,
  homeHeroSlider as heroSlider,
} from '@framework/static/banner';
import ListingTabsElectronicFeed from '@components/product/feeds/listingtabs-electronic-feed';
import Latestblog from '@components/common/latestblog';
import { createClient } from 'src/prismicio';
import SuppercategoryPopular from '@components/product/feeds/suppercategory-popular';

export const metadata: Metadata = {
  title: 'Razor | Electronics Store Store React Template',
  description:
    'Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.',
};

export default async function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const client = createClient();
  const banner = await client.getSingle('hero_banner');
  const products = await client.getAllByType('products');
  const categories = await client.getAllByType('categories');
  return (
    <>
      <HeroSliderBlock
        heroBanner={banner || { data: { herobanner: [] } }}
        showHeroContent={true}
        className={`mb-8`}
        contentClassName="p-7 sm:pb-24 xl:pb-32 sm:pt-16 xl:pt-24 md:min-h-[270px] xl:min-h-[360px] 2xl:min-h-[550px]"
      />
      <Container>
        {/* <SuppercategoryPopular
          categories={categories}
          lang={lang}
          className="mb-8 lg:mb-12"
          showBanner={true}
        /> */}
        {/* <FeatureCarousel products={products} lang={lang} />
        <BannerGrid
          lang={lang}
          data={categories}
          grid={3}
          className="mb-8 lg:mb-12"
          girdClassName="xl:gap-5 xl:grid-cols-[1fr_minmax(770px,_1fr)_1fr] "
        /> */}
        {/* <BestSellerProductFeed lang={lang} /> */}
      </Container>
      {/* <div className={'bg-zinc-100 py-8 sm:py-14 mb-8 lg:mb-12'}>
        <Container>
          <CategoryGridBlock className="mb-0 lg:mb-0" lang={lang} />
        </Container>
      </div>
      <Container>
        <ListingTabsElectronicFeed lang={lang} />
        <Latestblog lang={lang} className="mb-8 lg:mb-12 navTopSlider" />
        <BannerAllCarousel
          lang={lang}
          data={bannerBrand}
          className="mb-8 lg:mb-12"
        />
      </Container> */}
    </>
  );
}
