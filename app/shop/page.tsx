import type { Metadata } from "next";
import ShopProductListing from "@/components/shop/ShopProductListing";
import AboutFeatures from "@/components/about/AboutFeatures";
import OurMaterials from "@/components/common/OurMaterials";

export const metadata: Metadata = {
  title: "Shop All Innerwear & Loungewear | Aralia Korean Comfort",
  description:
    "Explore our complete range of feather-light Korean comfort bras, wireless bralettes, panties, and luxury silk loungewear.",
};

export default function ShopPage() {
  return (
    <main className="w-full min-h-screen bg-[#faf8f6] select-none">
      {/* Dedicated Shop Product Listing Section with Collection & Category Filters */}
      <ShopProductListing/>

      {/* Brand Trust Strip & Materials */}
      <AboutFeatures/>
      <OurMaterials/>
    </main>
  );
}
