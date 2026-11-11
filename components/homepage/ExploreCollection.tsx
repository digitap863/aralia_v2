"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export interface CollectionStage {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  ctaText?: string;
}

const defaultCollections: CollectionStage[] = [
  {
    id: "stage-teens",
    category: "Teens",
    title: "Teens",
    subtitle: "Comfort-first essentials for growing bodies.",
    image: "/images/HomePage/Collection/Teens.webp",
    href: "/collections/teens",
    ctaText: "ADD TO CART",
  },
  {
    id: "stage-young-women",
    category: "Young Women",
    title: "Young Women",
    subtitle: "Fresh styles for your everyday life.",
    image: "/images/HomePage/Collection/YoungWomen.webp",
    href: "/collections/young-women",
    ctaText: "ADD TO CART",
  },
  {
    id: "stage-women",
    category: "Women",
    title: "Women",
    subtitle: "Everyday comfort, beautifully elevated.",
    image: "/images/HomePage/Collection/Womens.webp",
    href: "/collections/women",
    ctaText: "ADD TO CART",
  },
];

interface ExploreCollectionProps {
  collections?: CollectionStage[];
  badgeText?: string;
  headline?: string;
  description?: string;
}

/*
  Background: off-white → soft blush → deeper dusty-rose band (middle)
  → soft blush → off-white. Matches the reference look.
*/
const SECTION_BG =
  "linear-gradient(to bottom, #f7f7f5 0%, #f8e6e1 22%, #ecc9c1 40%, #dba9a0 52%, #ebcfc8 66%, #f5ece9 84%, #f7f7f5 100%)";

export default function ExploreCollection({
  collections = defaultCollections,
  badgeText = "EXPLORE OUR COLLECTION",
  headline = "For Every Stage, Every Women",
  description = "Discover everyday essentials designed for every stage of life, from first-fit comfort to timeless everyday elegance.",
}: ExploreCollectionProps) {
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

  return (
    <section
      className="relative w-full  overflow-x-clip select-none py-10 sm:py-12 md:py-14 border-0"
      style={{ background: SECTION_BG }}
    >
      {/* White shade blending the About section into this one */}
<div
  aria-hidden="true"
  className="absolute inset-x-0 -top-28 sm:h-40  pointer-events-none z-20"
  style={{
    background:
      "linear-gradient(to bottom, rgba(247,247,245,0) 0%, rgba(247,247,245,0.55) 30%, #f7f7f5 52%, rgba(247,247,245,0.7) 72%, rgba(247,247,245,0) 100%)",
  }}
/>
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-10 ">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-14">
          {/* Pill Badge */}
          <div className="inline-block mb-3">
            <span className="inline-flex items-center px-3 py-0.75 rounded-full border border-[#AC7058] bg-white/30 text-[9px] sm:text-[10px] font-sans font-normal tracking-[0.06em] uppercase text-[#AC7058]">
              {badgeText}
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-[44px] text-[#0f0d0c] font-normal tracking-tight leading-tight mb-2">
            {headline}
          </h2>

          {/* Description */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#2b2625] font-light max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Desktop View: 3-Column Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 items-stretch">
          {collections.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              aria-label={`${item.category} Collection`}
              className="group block relative w-full aspect-1140/1380 rounded-[20px] overflow-hidden shadow-[0_6px_14px_rgba(110,50,50,0.22)] hover:shadow-[0_14px_30px_rgba(110,50,50,0.28)] transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#AC7058]/50"
            >
              <Image
                src={item.image}
                alt={`${item.category} Collection - Aralia`}
                fill
                sizes="(max-width: 1024px) 33vw, 320px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02] pointer-events-none select-none"
              />
            </Link>
          ))}
        </div>

        {/* Mobile View: Touch Swiper Carousel */}
        <div className="block md:hidden w-full">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.15}
            speed={400}
            grabCursor={true}
            centeredSlides={false}
            breakpoints={{
              0: { slidesPerView: 1.15, spaceBetween: 14 },
              480: { slidesPerView: 1.3, spaceBetween: 16 },
              640: { slidesPerView: 2.1, spaceBetween: 18 },
            }}
            onSlideChange={(swiper) => setMobileActiveIndex(swiper.activeIndex)}
            className="w-full overflow-visible!"
          >
            {collections.map((item) => (
              <SwiperSlide key={item.id} className="h-auto! select-none">
                <Link
                  href={item.href}
                  aria-label={`${item.category} Collection`}
                  className="group block relative w-full aspect-1140/1380 rounded-[20px] overflow-hidden shadow-[0_6px_14px_rgba(110,50,50,0.22)] active:scale-[0.99] transition-all duration-300"
                >
                  <Image
                    src={item.image}
                    alt={`${item.category} Collection - Aralia`}
                    fill
                    sizes="90vw"
                    className="object-cover object-center pointer-events-none select-none"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {collections.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === mobileActiveIndex
                    ? "w-5 bg-[#AC7058]"
                    : "w-1.5 bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}