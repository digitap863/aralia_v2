"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

export interface ProductItem {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  sizes: string;
  colors: { name: string; hex: string }[];
  image: string;
  hoverImage?: string;
  isBestSeller?: boolean;
  href: string;
}

const products: ProductItem[] = [
  {
    id: "prod-1",
    name: "Aralia Jelly Bra",
    subtitle: "Soft feel | Everyday wear",
    price: 799,
    sizes: "Sizes 32B - 40D",
    colors: [
      { name: "Silver Grey", hex: "#dcdfe3" },
      { name: "Soft Nude", hex: "#f5dccb" },
      { name: "Blush Coral", hex: "#f29c94" },
    ],
    image: "/images/HomePage/Products/jelly-bra.webp",
    hoverImage: "/images/HomePage/Products/bra.webp",
    isBestSeller: true,
    href: "/products/aralia-jelly-bra",
  },
  {
    id: "prod-2",
    name: "Padded Everyday Bra",
    subtitle: "Soft feel | Everyday wear",
    price: 699,
    sizes: "Sizes 32B - 40D",
    colors: [
      { name: "Silver Grey", hex: "#dcdfe3" },
      { name: "Soft Nude", hex: "#f5dccb" },
      { name: "Blush Coral", hex: "#f29c94" },
    ],
    image: "/images/HomePage/Products/bra.webp",
    hoverImage: "/images/HomePage/Products/bralettes.webp",
    isBestSeller: true,
    href: "/products/padded",
  },
  {
    id: "prod-3",
    name: "Silk Bralette",
    subtitle: "Soft feel | Wire-free comfort",
    price: 499,
    sizes: "Sizes 32B - 40D",
    colors: [
      { name: "Silver Grey", hex: "#dcdfe3" },
      { name: "Soft Nude", hex: "#f5dccb" },
      { name: "Blush Coral", hex: "#f29c94" },
    ],
    image: "/images/HomePage/Products/bralettes.webp",
    hoverImage: "/images/HomePage/Products/bra.webp",
    isBestSeller: true,
    href: "/products/silk-bralette",
  },
  {
    id: "prod-4",
    name: "Sports Wear",
    subtitle: "Soft feel | Sports wear",
    price: 799,
    sizes: "Sizes 32B - 40D",
    colors: [
      { name: "Silver Grey", hex: "#dcdfe3" },
      { name: "Soft Nude", hex: "#f5dccb" },
      { name: "Blush Coral", hex: "#f29c94" },
    ],
    image: "/images/HomePage/Products/sports-bra.webp",
    hoverImage: "/images/HomePage/Products/sports_v2.webp",
    isBestSeller: true,
    href: "/products/sports-wear",
  },
  {
    id: "prod-5",
    name: "Seamless Fit",
    subtitle: "Soft feel | Everyday wear",
    price: 999,
    sizes: "Sizes 32B - 40D",
    colors: [
      { name: "Silver Grey", hex: "#dcdfe3" },
      { name: "Soft Nude", hex: "#f5dccb" },
      { name: "Blush Coral", hex: "#f29c94" },
    ],
    image: "/images/HomePage/Products/seamless.webp",
    hoverImage: "/images/HomePage/Products/bra.webp",
    isBestSeller: true,
    href: "/products/seamless",
  },
  {
    id: "prod-6",
    name: "Shaper Bra",
    subtitle: "Soft feel | Support & Lift",
    price: 899,
    sizes: "Sizes 32B - 40D",
    colors: [
      { name: "Silver Grey", hex: "#dcdfe3" },
      { name: "Soft Nude", hex: "#f5dccb" },
      { name: "Blush Coral", hex: "#f29c94" },
    ],
    image: "/images/HomePage/Products/shaper-bra.webp",
    hoverImage: "/images/HomePage/Products/bralettes.webp",
    isBestSeller: true,
    href: "/products/shaper-bra",
  },
  {
    id: "prod-7",
    name: "Comfort Brief",
    subtitle: "Soft feel | Daily ease",
    price: 399,
    sizes: "Sizes S - XXL",
    colors: [
      { name: "Silver Grey", hex: "#dcdfe3" },
      { name: "Soft Nude", hex: "#f5dccb" },
      { name: "Blush Coral", hex: "#f29c94" },
    ],
    image: "/images/HomePage/Products/panties.webp",
    hoverImage: "/images/HomePage/Products/bralettes.webp",
    isBestSeller: true,
    href: "/products/comfort-brief",
  },
  {
    id: "prod-8",
    name: "Soft Loungewear",
    subtitle: "Soft feel | Everyday wear",
    price: 1199,
    sizes: "Sizes XS - XL",
    colors: [
      { name: "Silver Grey", hex: "#dcdfe3" },
      { name: "Soft Nude", hex: "#f5dccb" },
      { name: "Blush Coral", hex: "#f29c94" },
    ],
    image: "/images/HomePage/Products/loungewear.webp",
    hoverImage: "/images/HomePage/Products/sleepwear.webp",
    isBestSeller: true,
    href: "/products/soft-loungewear",
  },
  {
    id: "prod-9",
    name: "Dreamy Sleepwear",
    subtitle: "Soft feel | Night comfort",
    price: 1299,
    sizes: "Sizes XS - XL",
    colors: [
      { name: "Silver Grey", hex: "#dcdfe3" },
      { name: "Soft Nude", hex: "#f5dccb" },
      { name: "Blush Coral", hex: "#f29c94" },
    ],
    image: "/images/HomePage/Products/sleepwear.webp",
    hoverImage: "/images/HomePage/Products/loungewear.webp",
    isBestSeller: false,
    href: "/products/dreamy-sleepwear",
  },
];

export default function FeaturedProducts() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeSnapIndex, setActiveSnapIndex] = useState(0);
  const [totalSnaps, setTotalSnaps] = useState(5);
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({
    "prod-2": false,
  });
  const [selectedColors, setSelectedColors] = useState<Record<string, number>>({});
  const [addedCart, setAddedCart] = useState<Record<string, boolean>>({
    "prod": true, // matching reference image second card filled button
  });

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

        {/* Swiper Product Carousel */}
        <div className="relative w-full">
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
                      <Link href={product.href} className="block relative w-full h-full overflow-hidden">
                        {/* Primary Product Image */}
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          draggable={false}
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 260px"
                          className={`object-cover object-center pointer-events-none select-none transition-all duration-700 ease-out group-hover:scale-105 ${
                            product.hoverImage ? "group-hover:opacity-0" : ""
                          }`}
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
        </div>

      </div>
    </section>
  );
}

