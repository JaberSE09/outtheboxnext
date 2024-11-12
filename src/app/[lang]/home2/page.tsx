import FeatureGrid from '@components/common/featured-grid';
import Container from '@components/ui/container';
import FeatureCarousel from "@components/common/featured-carousel";
import HeroSliderBlock from "@components/hero/hero-slider-block";
import BannerGrid from "@components/common/banner-grid";
import Latestblog from '@components/common/latestblog';
import NewSidebarProductFeed from "@components/product/feeds/new-sidebar-product-feed";
import Testimonial from '@components/common/testimonial';
import BestSellerSidebarProductFeed from '@components/product/feeds/best-seller-sidebar-product-feed';
import BannerAllCarousel from "@components/common/banner-all-carousel";
import BannerGridTwo from '@components/common/banner-grid-two';
import {
    homeTwoHeroCarousel as bannerHeroCarousel,
    homeTwoHeroCarousel2 as bannerHeroCarousel2,
    bannerBrand,
    homeTwoGridHero as bannerGrid2,
} from '@framework/static/banner';
import {Metadata} from 'next';
import CategoryGridListBlock from "@components/common/category-grid-list-block";
import ListingTabsClothFeed from "@components/product/feeds/listingtabs-cloth-feed";
import ListingTabsElectronicFeed from "@components/product/feeds/listingtabs-electronic-feed";
import BannerHeroGrid from "@components/common/banner-hero-grid";
import LatestblogCarousel from "@components/common/latestblog";

export const metadata: Metadata = {
    title: 'Home2',
};


export default async function Page({params: {lang},}:{ params: { lang: string; }}) {
    return (
        <>
            <Container>
                <BannerHeroGrid
                    lang={lang}
                    data={bannerHeroCarousel}
                    className="mb-5 mt-5 lg:mt-10 staticBannerHero"
                    girdClassName={"xs:gap-5 lg:grid-cols-[minmax(780px,_1fr)_1fr_1fr]"}
                />
                <BannerHeroGrid
                    lang={lang}
                    data={bannerHeroCarousel2}
                    className="mb-8 lg:mb-12  staticBannerHero"
                    girdClassName={"xs:gap-5 lg:grid-cols-[1fr_minmax(780px,_1fr)_1fr]"}
                />
                <ListingTabsElectronicFeed lang={lang}/>
                <BannerGrid
                    data={bannerGrid2}
                    grid={3}
                    className="mb-8 lg:mb-12"
                />
                <ListingTabsClothFeed lang={lang}/>
                <LatestblogCarousel lang={lang} className="mb-8 lg:mb-12 navTopSlider"/>
                <BannerAllCarousel
                    lang={lang}
                    data={bannerBrand}
                    className="mb-8 lg:mb-12"
                />
            </Container>
        
        </>
    );
}
