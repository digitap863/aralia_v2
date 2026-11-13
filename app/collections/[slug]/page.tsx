import { Suspense } from "react";
import type { Metadata } from "next";
import {
  getAllCollectionSlugs,
  getCollectionDetails,
  getProductsByCollection,
  getProductsByCategory,
  dummyProducts,
} from "@/data";
import CollectionsHero from "@/components/collection/CollectionHero";
import CollectionProductListing from "@/components/collection/CollectionProductListing";
import AboutFeatures from "@/components/about/AboutFeatures";
import OurMaterials from "@/components/common/OurMaterials";

interface CollectionDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllCollectionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CollectionDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const details = getCollectionDetails(slug);
  return {
    title: `${details.titlePrimary} ${details.titleSecondary} | Aralia Collections`,
    description: details.description,
  };
}

function CollectionPageSkeleton() {
  return (
    <div className="w-full min-h-screen bg-[#faf8f6] animate-pulse">
      {/* Hero skeleton */}
      <div className="w-full h-[240px] sm:h-[320px] md:h-[400px] bg-gradient-to-r from-[#f7ece5] via-[#faeae4] to-[#f7ece5]" />
      
      {/* Main content skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Sidebar skeleton */}
          <div className="hidden lg:block w-64 xl:w-72 shrink-0">
            <div className="h-96 rounded-2xl bg-white/70 border border-[#ede5dd] p-6 space-y-4">
              <div className="h-5 w-24 bg-[#ede5dd] rounded-sm" />
              <div className="h-4 w-full bg-[#f4ece6] rounded-sm" />
              <div className="h-4 w-3/4 bg-[#f4ece6] rounded-sm" />
              <div className="h-4 w-5/6 bg-[#f4ece6] rounded-sm" />
              <div className="h-24 w-full bg-[#f4ece6] rounded-lg mt-6" />
            </div>
          </div>

          {/* Product grid skeleton */}
          <div className="flex-1">
            <div className="h-8 w-64 bg-[#ede5dd] rounded-sm mb-3" />
            <div className="h-4 w-96 bg-[#f4ece6] rounded-sm mb-8" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[#ede5dd] bg-white overflow-hidden p-3"
                >
                  <div className="w-full aspect-square bg-[#fbf6f3] rounded-xl mb-3" />
                  <div className="h-4 w-3/4 bg-[#ede5dd] rounded-sm mb-2" />
                  <div className="h-3 w-1/2 bg-[#f4ece6] rounded-sm mb-3" />
                  <div className="h-4 w-1/4 bg-[#ede5dd] rounded-sm" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

async function CollectionDetailContent({
  params,
}: CollectionDetailPageProps) {
  const { slug } = await params;
  const details = getCollectionDetails(slug);

  // Retrieve products for this collection, fallback to category or all products
  let products = getProductsByCollection(slug);
  if (products.length === 0) {
    products = getProductsByCategory(slug);
  }
  if (products.length === 0) {
    products = dummyProducts;
  }

  return (
    <main className="w-full min-h-screen bg-[#faf8f6] select-none">
      {/* 1. Dynamic Collection Hero */}
      <CollectionsHero
        badge={details.badge}
        titlePrimary={details.titlePrimary}
        titleSecondary={details.titleSecondary}
        description={details.description}
        bannerImage={details.bannerImage}
        mobileBannerImage={details.mobileBannerImage}
      />

      {/* 2. Collection Product Listing Layout */}
      <CollectionProductListing
        collectionName={`${details.titlePrimary} ${details.titleSecondary}`}
        titlePrimary={details.titlePrimary}
        titleSecondary={details.titleSecondary}
        description={details.description || "A range of soft, breathable and easy-to-wear innerwear for everyday comfort."}
        initialProducts={products}
      />

      {/* 3. Brand Trust Strip & Materials */}
      <AboutFeatures />
      <OurMaterials />
    </main>
  );
}

export default function CollectionDetailPage({
  params,
}: CollectionDetailPageProps) {
  return (
    <Suspense fallback={<CollectionPageSkeleton />}>
      <CollectionDetailContent params={params} />
    </Suspense>
  );
}
