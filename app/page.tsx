import Hero from "@/components/Hero";
import Posters from "@/components/Posters";
import ShopByCategory from "@/components/ShopByCategory";
import AboutAralia from "@/components/AboutAralia";
import BrandPromise from "@/components/BrandPromise";
import WhyAralia from "@/components/WhyAralia";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ShopByCategory />
      <Posters />
      <AboutAralia />
      <BrandPromise />
      <WhyAralia />
    </main>
  );
}
