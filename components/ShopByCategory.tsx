"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

export interface CategoryItem {
  id: string;
  name: string;
  image: string;
  href: string;
}

const categories: CategoryItem[] = [
  {
    id: "cat-1",
    name: "Bra",
    image: "/images/HomePage/Categories/bra.webp",
    href: "/collections/bras",
  },
  {
    id: "cat-2",
    name: "Jelly Bra",
    image: "/images/HomePage/Categories/jelly-bra.webp",
    href: "/collections/jelly-bra",
  },
  {
    id: "cat-3",
    name: "Panties",
    image: "/images/HomePage/Categories/panties.webp",
    href: "/collections/panties",
  },
  {
    id: "cat-4",
    name: "Sports Bra",
    image: "/images/HomePage/Categories/sports-bra.webp",
    href: "/collections/sports-bras",
  },
  {
    id: "cat-5",
    name: "Shaper Bra",
    image: "/images/HomePage/Categories/shaper-bra.webp",
    href: "/collections/shaper-bras",
  },
  {
    id: "cat-6",
    name: "Bralettes",
    image: "/images/HomePage/Categories/bralettes.webp",
    href: "/collections/bralettes",
  },
  {
    id: "cat-7",
    name: "Silk Loungewear",
    image: "/images/HomePage/Categories/loungewear.webp",
    href: "/collections/loungewear",
  },
  {
    id: "cat-8",
    name: "Sleepwear",
    image: "/images/HomePage/Categories/sleepwear.webp",
    href: "/collections/sleepwear",
  },
  {
    id: "cat-9",
    name: "Seamless Sets",
    image: "/images/HomePage/Categories/seamless.webp",
    href: "/collections/seamless",
  },
];

export default function ShopByCategory() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeSnapIndex, setActiveSnapIndex] = useState(0);
  const [totalSnaps, setTotalSnaps] = useState(5);

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
    <section className="w-full bg-white py-8 sm:py-12 md:py-15 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Header: Centered Title + Right-aligned Slider Controls */}
        <div className="relative flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-10 md:mb-12">
          
          {/* Centered Heading */}
          <div className="w-full text-center sm:text-left lg:text-center">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight">
              Shop &nbsp;by Category
            </h2>
          </div>

          {/* Slider Controls (Right aligned on tablet/desktop, centered on mobile) */}
          <div className="flex items-center gap-3 sm:gap-4 mt-5 sm:mt-0 sm:absolute sm:right-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous categories"
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
              aria-label="Next categories"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#9f6e5a] hover:bg-[#885744] active:bg-[#774735] text-white flex items-center justify-center transition-all duration-200 shadow-xs hover:scale-105 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.2]" />
            </button>
          </div>

        </div>

        {/* Swiper Carousel Track */}
        <div className="relative w-full">
          <Swiper
            spaceBetween={11}
            slidesPerView={1}
            speed={400}
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 11,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 11,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 11,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 11,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateSnapInfo(swiper);
            }}
            onSlideChange={(swiper) => updateSnapInfo(swiper)}
            onBreakpoint={(swiper) => updateSnapInfo(swiper)}
            onResize={(swiper) => updateSnapInfo(swiper)}
            className="w-full !overflow-hidden"
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.id} className="!h-auto select-none">
                <Link
                  href={cat.href}
                  className="group flex flex-col h-[210px] sm:h-[248px] rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-[#ede5dd] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image Portion on Soft Blush/Peach Background */}
                  <div className="relative w-full h-[145px] sm:h-[184px] bg-[#f6e4dd] overflow-hidden shrink-0">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      draggable={false}
                      sizes="(max-width: 600px) 50vw, (max-width: 900px) 45vw, (max-width: 1180px) 30vw, 264px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105 pointer-events-none select-none"
                    />
                  </div>

                  {/* Text Portion on Clean White Background */}
                  <div className="h-[65px] sm:h-[64px] bg-white flex flex-col justify-center items-center px-1.5 sm:px-2 text-center shrink-0">
                    <h3 className="font-playfair text-xs sm:text-base md:text-[16px] font-normal text-neutral-900 group-hover:text-[#9f6e5a] transition-colors leading-snug">
                      {cat.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-neutral-500 group-hover:text-neutral-900 font-sans font-light flex items-center justify-center gap-1 mt-0.5 transition-colors">
                      <span>Shop now</span>
                      <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 transition-transform group-hover:translate-x-0.5" />
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

