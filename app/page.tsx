import Hero from "@/components/Hero";
import BrandFeatures from "@/components/BrandFeatures";
import ShopByCategory from "@/components/ShopByCategory";
import FeaturedProducts from "@/components/FeaturedProducts";
import Posters from "@/components/Posters";
import AboutAralia from "@/components/AboutAralia";
import ExploreCollection from "@/components/ExploreCollection";
import BrandPromise from "@/components/BrandPromise";
import WhyAralia from "@/components/WhyAralia";
import SizeGuide from "@/components/SizeGuide";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ShopByCategory />
      <BrandFeatures />
      <FeaturedProducts />
      <Posters />
      <AboutAralia />
      <ExploreCollection />
      <BrandPromise />
      <WhyAralia />
      <SizeGuide />
    </main>
  );
}
