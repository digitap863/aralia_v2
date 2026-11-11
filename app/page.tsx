import Hero from "@/components/homepage/Hero";
import BrandFeatures from "@/components/homepage/BrandFeatures";
import ShopByCategory from "@/components/homepage/ShopByCategory";
import FeaturedProducts from "@/components/homepage/FeaturedProducts";
import Posters from "@/components/homepage/Posters";
import AboutAralia from "@/components/homepage/AboutAralia";
import ExploreCollection from "@/components/homepage/ExploreCollection";
import BrandPromise from "@/components/homepage/BrandPromise";
import WhyAralia from "@/components/homepage/WhyAralia";
import SizeGuide from "@/components/homepage/SizeGuide";
import NatureBanner from "@/components/homepage/NatureBanner";
import RevealOnScroll from "@/components/common/RevealOnScroll";

export default function Home() {
  return (
    <main className="flex-1 bg-white">
      {/* Above-the-fold Hero loads immediately for peak LCP performance */}
      <Hero />

      <RevealOnScroll>
        <ShopByCategory />
     
        <BrandFeatures />
      </RevealOnScroll>

      <RevealOnScroll>
        <FeaturedProducts />
      
        <Posters />
      </RevealOnScroll>

      <RevealOnScroll>
        <AboutAralia />
      
        <ExploreCollection />
     
        <BrandPromise />
      </RevealOnScroll>

      <RevealOnScroll>
        <WhyAralia />
      </RevealOnScroll>

      <RevealOnScroll>
        <SizeGuide />
      </RevealOnScroll>

      <RevealOnScroll>
        <NatureBanner />
      </RevealOnScroll>
    </main>
  );
}
