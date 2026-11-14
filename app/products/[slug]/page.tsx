import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getAllProductSlugs,
  getRelatedProducts,
} from "@/data";
import ProductTopSection from "@/components/product/ProductTopSection";
import ProductDetailTabs from "@/components/product/ProductDetailTabs";
import RelatedProductsSwiper from "@/components/product/RelatedProductsSwiper";
import AboutFeatures from "@/components/about/AboutFeatures";
import OurMaterials from "@/components/common/OurMaterials";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Aralia",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} — ${product.subtitle || "Korean Comfort"} | Aralia`,
    description:
      product.description ||
      `Shop ${product.name} at Aralia. Premium Korean comfort innerwear designed for effortless everyday wear.`,
  };
}

function ProductPageSkeleton() {
  return (
    <div className="w-full min-h-screen py-12 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Gallery skeleton */}
          <div className="lg:col-span-7 flex gap-4">
            <div className="hidden sm:flex flex-col gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-20 h-20 rounded-xl bg-[#ede5dd]" />
              ))}
            </div>
            <div className="flex-1 aspect-square rounded-3xl bg-[#ede5dd]" />
          </div>

          {/* Info skeleton */}
          <div className="lg:col-span-5 space-y-4">
            <div className="h-4 w-32 bg-[#ede5dd] rounded-sm" />
            <div className="h-8 w-3/4 bg-[#ede5dd] rounded-sm" />
            <div className="h-4 w-1/2 bg-[#ede5dd] rounded-sm" />
            <div className="h-6 w-28 bg-[#ede5dd] rounded-sm mt-4" />
            <div className="h-10 w-full bg-[#ede5dd] rounded-full mt-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

async function ProductDetailContent({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Related products: matches category OR collection (if any one matches take it, prioritizing both)
  const relatedProducts = getRelatedProducts(product, 8);

  return (
    <main className="w-full min-h-screen overflow-x-hidden overflow-x-clip">
      {/* 1. Main Product Top Section (Image Gallery + Details, Rating, Colors, Sizes, Actions) */}
      <ProductTopSection product={product} />

      {/* 2. Product Details & Material Section (Tabs: Details, Size Chart, Reviews) */}
      <ProductDetailTabs product={product} />

      {/* 3. Related Products Section with Swiper Animation */}
      <RelatedProductsSwiper
        products={relatedProducts}
        title="You May Also Like"
        subtitle={`More essentials from the ${product.collection || "Aralia Collection"}`}
      />

      {/* 4. Brand Trust Badges & Materials */}
      <AboutFeatures />
      <OurMaterials />
    </main>
  );
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  return (
    <Suspense fallback={<ProductPageSkeleton />}>
      <ProductDetailContent params={params} />
    </Suspense>
  );
}

