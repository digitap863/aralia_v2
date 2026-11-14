"use client";

import React from "react";
import Link from "next/link";
import type { ProductItem } from "@/data";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

interface ProductTopSectionProps {
  product: ProductItem;
}

export default function ProductTopSection({ product }: ProductTopSectionProps) {
  // Build images array for gallery
  const galleryImages: string[] = [];
  if (product.galleryImages && product.galleryImages.length > 0) {
    galleryImages.push(...product.galleryImages);
  } else {
    if (product.image) galleryImages.push(product.image);
    if (product.hoverImage) galleryImages.push(product.hoverImage);
    // Add additional angles / placeholders from available products if needed
    galleryImages.push(product.image);
    if (product.hoverImage) galleryImages.push(product.hoverImage);
  }

  return (
    <section className="w-full  pt-6 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumbs spanning the top section */}
        <nav
          aria-label="Breadcrumbs"
          className="flex items-center flex-wrap gap-2 text-xs sm:text-[13px] text-neutral-400 font-sans mb-6 sm:mb-8"
        >
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <span className="text-neutral-300 font-light">&gt;</span>
          <Link href="/shop" className="hover:text-neutral-900 transition-colors">
            Shop
          </Link>
          {product.category && (
            <>
              <span className="text-neutral-300 font-light">&gt;</span>
              <Link
                href={product.collectionSlug ? `/collections/${product.collectionSlug}` : "/shop"}
                className="hover:text-neutral-900 transition-colors capitalize"
              >
                {product.category}
              </Link>
            </>
          )}
          <span className="text-neutral-300 font-light">&gt;</span>
          <span className="text-neutral-700 font-medium truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </nav>

        {/* 2-Column Grid: Gallery (Left) & Product Details (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
          {/* Left Column: Product Gallery (Thumbnail Strip + Main View) */}
          <div className="lg:col-span-5 xl:col-span-5 w-full">
            <ProductGallery
              images={galleryImages}
              productName={product.name}
            />
          </div>

          {/* Right Column: Product Information & Purchase Actions */}
          <div className="lg:col-span-7 xl:col-span-7 w-full">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>
    </section>
  );
}


