import HeroBannerCard from '@components/hero/hero-banner-card';
import Container from '@components/ui/container';
import {Metadata} from 'next';
import HeroSliderBlock from "@components/hero/hero-slider-block";
import {
    homeThreeGridHero as bannerGridHero,
    homeThreeHeroSlider as heroSlider,
} from '@framework/static/banner';
import BannerGrid from "@components/common/banner-grid";
import BestSellerProductFeed from "@components/product/feeds/best-seller-top-product";
import CategoryGridListBlock from "@components/common/category-grid-list-block";
import PopularProductFeed from "@components/product/feeds/popular-product-feed";
import BannerBackground from "@components/common/banner-background";
import LatestblogCarousel from "@components/common/latestblog-four";


export const metadata: Metadata = {
    title: 'Home3',
};

export default async function Page({params: {lang},}:{ params: { lang: string; }}) {
    return (
        <>
            <HeroSliderBlock
                lang={lang}
                heroBanner={heroSlider}
                showHeroContent={false}
                className="mb-5"
                contentClassName="p-7 sm:pb-24 xl:pb-32 sm:pt-16 xl:pt-24 md:min-h-[400px] xl:min-h-[560px] 2xl:min-h-[750px]"
            />
            <BannerGrid
                lang={lang}
                data={bannerGridHero}
                grid={3}
                className="mb-8 lg:mb-12 mx-4"
            />
            <Container>
                <BestSellerProductFeed lang={lang}/>
            </Container>
            <CategoryGridListBlock className="mb-8 lg:mb-12 mx-4"/>
    
            <Container>
                <PopularProductFeed lang={lang}/>
            </Container>
            <BannerBackground lang={lang}/>
            <Container>
                <LatestblogCarousel lang={lang} className="mb-8 lg:mb-12" showShortDesc={true} />
            </Container>
        </>
    );
}
