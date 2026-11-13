"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { dummyProducts, type ProductItem } from "@/data";

export type { ProductItem };

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-[#ede5dd] shadow-xs select-none">
      {/* Square Image Skeleton with Shimmer */}
      <div className="relative w-full aspect-square bg-[#f5ede7] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5ede7] via-[#faeae4] to-[#f5ede7] animate-pulse" />
      </div>

      {/* Details Skeleton */}
      <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1">
        <div>
          {/* Title Line */}
          <div className="h-3.5 sm:h-4 bg-[#ede2da] rounded-xs w-3/4 mb-2 animate-pulse" />
          {/* Subtitle Line */}
          <div className="h-2.5 sm:h-3 bg-[#f5ebe4] rounded-xs w-1/2 mb-3.5 animate-pulse" />
          {/* Price Line */}
          <div className="h-3.5 bg-[#ede2da] rounded-xs w-1/3 mb-2 animate-pulse" />
          {/* Sizes Line */}
          <div className="h-2.5 bg-[#f5ebe4] rounded-xs w-2/5 mb-3 animate-pulse" />

          {/* Color Dots */}
          <div className="flex items-center gap-1.5 mb-4">
            <div className="w-3.5 h-3.5 rounded-full bg-[#ede2da] animate-pulse" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#ede2da] animate-pulse" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#ede2da] animate-pulse" />
          </div>
        </div>

        {/* Button */}
        <div className="w-full h-8 sm:h-9 bg-[#ede2da] rounded-sm animate-pulse" />
      </div>
    </div>
  );
}

interface FeaturedProductsProps {
  products?: ProductItem[];
  initialLoading?: boolean;
}

export default function FeaturedProducts({
  products = dummyProducts,
  initialLoading = true,
}: FeaturedProductsProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isLoading, setIsLoading] = useState(initialLoading);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [activeSnapIndex, setActiveSnapIndex] = useState(0);
  const [totalSnaps, setTotalSnaps] = useState(5);
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({
    "prod-2": false,
  });
  const [selectedColors, setSelectedColors] = useState<Record<string, number>>({});
  const [addedCart, setAddedCart] = useState<Record<string, boolean>>({
    "prod": true, // matching reference image second card filled button
  });

  useEffect(() => {
    // Elegant transition simulating initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const updateSnapInfo = (swiper: SwiperType) => {
    setActiveSnapIndex(swiper.snapIndex ?? 0);
    setTotalSnaps(swiper.snapGrid?.length ?? 1);
  };

  const handlePrev = () => {
    if (!swiperRef.current) return;
    if (swiperRef.current.isBeginning) {
      swiperRef.current.slideTo(swiperRef.current.slides.length - 1);
    } else {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (!swiperRef.current) return;
    if (swiperRef.current.isEnd) {
      swiperRef.current.slideTo(0);
    } else {
      swiperRef.current.slideNext();
    }
  };

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const selectColor = (productId: string, colorIdx: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedColors((prev) => ({ ...prev, [productId]: colorIdx }));
  };

  const toggleCart = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAddedCart((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const counterText = `${String(activeSnapIndex + 1).padStart(2, "0")} / ${String(
    totalSnaps
  ).padStart(2, "0")}`;

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 select-none overflow-hidden">
      <div className="max-w-8xl mx-auto px-5 sm:px-8 md:px-20 lg:px-22">
        
        {/* Header: Centered Title */}
        <div className="text-center mb-5 sm:mb-6">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight">
            Featured Products
          </h2>
        </div>

        {/* Centered Slider Controls: < 01 / 05 > */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous products"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#9f6e5a] hover:bg-[#885744] active:bg-[#774735] text-white flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-105 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.2]" />
          </button>

          <span className="font-sans text-xs sm:text-[13px] font-medium tracking-wider text-neutral-500 tabular-nums">
            {counterText}
          </span>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next products"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#9f6e5a] hover:bg-[#885744] active:bg-[#774735] text-white flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-105 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.2]" />
          </button>
        </div>

        {/* Swiper Product Carousel or Skeleton Loader */}
        <div className="relative w-full">
          {isLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-3.5">
              {[1, 2, 3, 4, 5].map((key) => (
                <ProductCardSkeleton key={key} />
              ))}
            </div>
          ) : (
            <Swiper
              spaceBetween={14}
              slidesPerView={2}
              speed={400}
              grabCursor={true}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 11,
                },
                640: {
                  slidesPerView: 2.5,
                  spaceBetween: 12,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 14,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 14,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 14,
                },
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                updateSnapInfo(swiper);
              }}
              onSlideChange={(swiper) => updateSnapInfo(swiper)}
              onBreakpoint={(swiper) => updateSnapInfo(swiper)}
              onResize={(swiper) => updateSnapInfo(swiper)}
              className="w-full overflow-hidden!"
            >
              {products.map((product) => {
                const isWishlisted = !!wishlist[product.id];
                const isAdded = !!addedCart[product.id];
                const activeColorIndex = selectedColors[product.id] ?? 0;

                return (
                  <SwiperSlide key={product.id} className="h-auto! select-none">
                    <div className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-[#ede5dd] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      
                      {/* Top Image Container with Badge and Wishlist Heart */}
                      <div className="relative w-full aspect-square bg-[#fbf6f3] overflow-hidden">
                        {/* Shimmer Skeleton until image loads */}
                        {!loadedImages[product.id] && (
                          <div className="absolute inset-0 bg-gradient-to-r from-[#f5ede7] via-[#faeae4] to-[#f5ede7] animate-pulse z-0" />
                        )}

                        <Link href={product.href} className="block relative w-full h-full overflow-hidden z-1">
                          {/* Primary Product Image */}
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            draggable={false}
                            onLoad={() =>
                              setLoadedImages((prev) => ({
                                ...prev,
                                [product.id]: true,
                              }))
                            }
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 260px"
                            className={`object-cover object-center pointer-events-none select-none transition-all duration-700 ease-out group-hover:scale-105 ${
                              product.hoverImage ? "group-hover:opacity-0" : ""
                            } ${loadedImages[product.id] ? "opacity-100" : "opacity-0"}`}
                          />

                        {/* Model / Alternate Image: Silky Dissolve & Micro-Zoom on Hover */}
                        {product.hoverImage && (
                          <Image
                            src={product.hoverImage}
                            alt={`${product.name} model view`}
                            fill
                            draggable={false}
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 260px"
                            className="object-cover object-center pointer-events-none select-none opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
                          />
                        )}
                      </Link>

                      {/* Best Seller Pill Badge */}
                      {product.isBestSeller && (
                        <div className="absolute top-2.5 left-2.5 z-10">
                          <span className="bg-[#241d1b] text-white text-[9px] sm:text-[10px] font-sans font-medium px-2 py-0.5 rounded-sm tracking-wide">
                            Best seller
                          </span>
                        </div>
                      )}

                      {/* Wishlist Heart Icon Button */}
                      <button
                        type="button"
                        onClick={(e) => toggleWishlist(product.id, e)}
                        aria-label="Add to wishlist"
                        className="absolute top-2.5 right-2.5 z-10 p-1 text-neutral-700 hover:text-[#9f6e5a] transition-colors cursor-pointer"
                      >
                        <Heart
                          className={`w-4 h-4 transition-all ${
                            isWishlisted
                              ? "fill-[#9f6e5a] text-[#9f6e5a]"
                              : "fill-transparent text-neutral-800 hover:scale-110"
                          }`}
                        />
                      </button>
                    </div>

                    {/* Lower Card Details */}
                    <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between bg-white">
                      <div>
                        {/* Title */}
                        <Link href={product.href}>
                          <h3 className="font-playfair text-sm sm:text-base font-semibold text-neutral-900 leading-snug hover:text-[#9f6e5a] transition-colors truncate">
                            {product.name}
                          </h3>
                        </Link>

                        {/* Subtitle / Tagline */}
                        <p className="font-sans text-[11px] sm:text-xs text-neutral-500 font-light mt-0.5 truncate">
                          {product.subtitle}
                        </p>

                        {/* Price */}
                        <p className="font-sans font-semibold text-xs sm:text-sm text-neutral-900 mt-1.5">
                          ₹ {product.price}
                        </p>

                        {/* Available Sizes */}
                        <p className="font-sans text-[10px] sm:text-[11px] text-neutral-500 font-light mt-1">
                          {product.sizes}
                        </p>

                        {/* Color Swatch Dots */}
                        <div className="flex items-center gap-1.5 mt-2.5">
                          {product.colors.map((color, cIdx) => (
                            <button
                              key={color.name}
                              type="button"
                              onClick={(e) => selectColor(product.id, cIdx, e)}
                              aria-label={`Select color ${color.name}`}
                              style={{ backgroundColor: color.hex }}
                              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-black/10 transition-transform cursor-pointer ${
                                activeColorIndex === cIdx
                                  ? "ring-1 ring-offset-1 ring-neutral-800 scale-110"
                                  : "hover:scale-110"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Add to Cart Button */}
                      <div className="mt-3.5 sm:mt-4 pt-1">
                        <button
                          type="button"
                          onClick={(e) => toggleCart(product.id, e)}
                          className={`w-full py-2 rounded-lg text-xs font-sans font-medium tracking-wide transition-all cursor-pointer ${
                            isAdded
                              ? "bg-[#241d1b] text-white hover:bg-[#352b28]"
                              : "border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white"
                          }`}
                        >
                          ADD TO CART
                        </button>
                      </div>

                    </div>

                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>

      </div>
    </section>
  );
}

