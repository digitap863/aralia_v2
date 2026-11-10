"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

export interface PosterItem {
  id: string;
  image: string;
  alt: string;
  href: string;
}

// Single unified list of poster items (ready for dynamic CMS / database integration)
const posters: PosterItem[] = [
  {
    id: "poster-1",
    image: "/images/HomePage/Posters/p1.webp",
    alt: "Aralia - One feeling. Endless expressions.",
    href: "/collections/expressive",
  },
  {
    id: "poster-2",
    image: "/images/HomePage/Posters/p2.webp",
    alt: "Aralia Combo Offer - Buy 2 Get 1 FREE",
    href: "/offers/combo",
  },
  {
    id: "poster-3",
    image: "/images/HomePage/Posters/p1.webp",
    alt: "Aralia Silk Touch Collection",
    href: "/collections/silk-touch",
  },
  {
    id: "poster-4",
    image: "/images/HomePage/Posters/p2.webp",
    alt: "Special Summer Value Pack",
    href: "/offers/summer-pack",
  },
  {
    id: "poster-5",
    image: "/images/HomePage/Posters/p1.webp",
    alt: "Comfort in Every Movement",
    href: "/collections/movement",
  },
];

export default function Posters() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeSnapIndex, setActiveSnapIndex] = useState(0);
  const [totalSnaps, setTotalSnaps] = useState(4);

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

  const counterText = `${String(activeSnapIndex + 1).padStart(2, "0")} / ${String(
    totalSnaps
  ).padStart(2, "0")}`;

  return (
    <section className="w-full bg-white py-6 sm:py-8 md:py-10 select-none overflow-hidden">
      <div className="max-w-8xl mx-auto px-5 sm:px-8 md:px-20 lg:px-22">
        
        {/* Navigation Slider Controls */}
        <div className="flex items-center justify-center gap-4 sm:gap-5 mb-8 sm:mb-10">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#9f6e5a] hover:bg-[#885744] active:bg-[#774735] text-white flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-105 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />
          </button>

          <span className="font-sans text-xs sm:text-[13px] font-medium tracking-wider text-neutral-500 tabular-nums">
            {counterText}
          </span>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#9f6e5a] hover:bg-[#885744] active:bg-[#774735] text-white flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-105 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />
          </button>
        </div>

        {/* Swiper Carousel Track */}
        <div className="relative w-full">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            speed={450}
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
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
            {posters.map((poster) => (
              <SwiperSlide key={poster.id} className="h-auto! select-none">
                <Link
                  href={poster.href}
                  className="group block relative w-full aspect-738/341 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#eee5dd] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Image
                    src={poster.image}
                    alt={poster.alt}
                    fill
                    priority
                    draggable={false}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] pointer-events-none select-none"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
