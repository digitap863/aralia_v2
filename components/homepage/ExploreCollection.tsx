"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import {
  dummyExploreCollections,
  type ExploreCollectionStage,
} from "@/data";

export type CollectionStage = ExploreCollectionStage;

export function CollectionCardSkeleton() {
  return (
    <div className="relative w-full aspect-1140/1380 rounded-[20px] overflow-hidden border border-[#ecc9c1]/60 bg-[#faeee8] shadow-[0_6px_14px_rgba(110,50,50,0.1)] select-none">
      <div className="absolute inset-0 bg-linear-to-r from-[#faeee8] via-[#f7ded5] to-[#faeee8] animate-pulse" />
      {/* Skeleton Top Details */}
      <div className="absolute top-8 inset-x-6 flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-white/40 mb-3 animate-pulse" />
        <div className="w-24 h-5 bg-white/50 rounded-xs mb-2 animate-pulse" />
        <div className="w-36 h-3 bg-white/40 rounded-xs animate-pulse" />
      </div>
      {/* Bottom Skeleton Button */}
      <div className="absolute bottom-6 inset-x-6 h-9 bg-white/50 rounded-xs animate-pulse" />
    </div>
  );
}

interface ExploreCollectionProps {
  collections?: CollectionStage[];
  badgeText?: string;
  headline?: string;
  description?: string;
  initialLoading?: boolean;
}

/*
  Background: off-white → soft blush → deeper dusty-rose band (middle)
  → soft blush → off-white. Matches the reference look.
*/
const SECTION_BG =
  "linear-gradient(to bottom, #f7f7f5 0%, #f8e6e1 22%, #ecc9c1 40%, #dba9a0 52%, #ebcfc8 66%, #f5ece9 84%, #f7f7f5 100%)";

export default function ExploreCollection({
  collections = dummyExploreCollections,
  badgeText = "EXPLORE OUR COLLECTION",
  headline = "For Every Stage, Every Women",
  description = "Discover everyday essentials designed for every stage of life, from first-fit comfort to timeless everyday elegance.",
  initialLoading = false,
}: ExploreCollectionProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isLoading, setIsLoading] = useState(initialLoading);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (initialLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [initialLoading]);

  // Auto-scrolling carousel effect on a 3-second timeout
  useEffect(() => {
    if (isLoading || isPaused) return;

    const interval = setInterval(() => {
      if (swiperRef.current) {
        if (swiperRef.current.isEnd) {
          swiperRef.current.slideTo(0);
        } else {
          swiperRef.current.slideNext();
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isLoading, isPaused, collections.length]);

  return (
    <section
      className="relative w-full  overflow-x-clip select-none py-10 sm:py-12 md:py-14 border-0"
      style={{ background: SECTION_BG }}
    >
      {/* Soft top blend inside ExploreCollection */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-16 sm:h-20 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to bottom, #f7f7f5 0%, rgba(247,247,245,0) 100%)",
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

        {/* Desktop View: 3-Column Grid or Skeleton */}
        {isLoading ? (
          <div className="hidden md:grid md:grid-cols-3 gap-4 items-stretch">
            {[1, 2, 3].map((key) => (
              <CollectionCardSkeleton key={key} />
            ))}
          </div>
        ) : (
          <div className="hidden md:grid md:grid-cols-3 gap-4 items-stretch">
            {collections.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                aria-label={`${item.category} Collection`}
                className="group block relative w-full aspect-1140/1380 rounded-[20px] overflow-hidden border border-[#ecc9c1]/60 bg-[#faeee8] shadow-[0_6px_14px_rgba(110,50,50,0.18)] hover:shadow-[0_14px_30px_rgba(110,50,50,0.25)] transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#AC7058]/50"
              >
                <Image
                  src={item.image}
                  alt={`${item.category} Collection - Aralia`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 33vw, 380px"
                  className="object-cover object-center transition-all duration-500 group-hover:scale-[1.02] pointer-events-none select-none z-1"
                />

                {/* Soft warm silk tone harmonization overlay to eliminate washed-out white zones */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#f6ded8]/60 via-transparent to-[#f8e5e0]/35 pointer-events-none z-2"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        )}

        {/* Mobile View: Touch Swiper Carousel or Skeleton */}
        {isLoading ? (
          <div className="flex md:hidden gap-3.5 overflow-hidden">
            <div className="w-[85%] shrink-0">
              <CollectionCardSkeleton />
            </div>
            <div className="w-[85%] shrink-0">
              <CollectionCardSkeleton />
            </div>
          </div>
        ) : (
          <div
            className="block md:hidden w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={16}
              slidesPerView={1.15}
              speed={600}
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
                    className="group block relative w-full aspect-1140/1380 rounded-[20px] overflow-hidden border border-[#ecc9c1]/60 bg-[#faeee8] shadow-[0_6px_14px_rgba(110,50,50,0.18)] active:scale-[0.99] transition-all duration-300"
                  >
                    <Image
                      src={item.image}
                      alt={`${item.category} Collection - Aralia`}
                      fill
                      priority
                      sizes="90vw"
                      className="object-cover object-center pointer-events-none select-none z-1"
                    />

                    {/* Soft warm silk tone harmonization overlay to eliminate washed-out white zones */}
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#f6ded8]/60 via-transparent to-[#f8e5e0]/35 pointer-events-none z-2"
                      aria-hidden="true"
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination Indicator Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-6">
              {collections.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => swiperRef.current?.slideTo(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                    idx === mobileActiveIndex
                      ? "w-6 bg-[#AC7058]"
                      : "w-1.5 bg-white/70 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}