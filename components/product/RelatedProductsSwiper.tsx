"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ProductItem } from "@/data";
import ProductCard from "@/components/collection/ProductCard";

interface RelatedProductsSwiperProps {
  products: ProductItem[];
  title?: string;
  subtitle?: string;
}

export default function RelatedProductsSwiper({
  products,
  title = "You May Also Like",
  subtitle = "More essentials from the Aralia Collection",
}: RelatedProductsSwiperProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  if (!products || products.length === 0) {
    return null;
  }

  const updateSnapInfo = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handlePrev = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (!swiperRef.current) return;
    swiperRef.current.slideNext();
  };

  const shouldLoop = products.length > 3;

  return (
    <section className="w-full py-12 sm:py-16 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: Title, Subtitle & Arrow Controls */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 mb-8 sm:mb-10 text-center sm:text-left">
          <div>
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-normal text-neutral-900 tracking-tight">
              {title}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-neutral-500 font-light mt-1">
              {subtitle}
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              disabled={!shouldLoop && isBeginning}
              aria-label="Previous products"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-300 flex items-center justify-center transition-all cursor-pointer ${
                !shouldLoop && isBeginning
                  ? "opacity-35 cursor-not-allowed text-neutral-400 border-neutral-200"
                  : "hover:bg-neutral-900 hover:text-white hover:border-neutral-900 text-neutral-800 shadow-2xs active:scale-95"
              }`}
            >
              <ChevronLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={!shouldLoop && isEnd}
              aria-label="Next products"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-300 flex items-center justify-center transition-all cursor-pointer ${
                !shouldLoop && isEnd
                  ? "opacity-35 cursor-not-allowed text-neutral-400 border-neutral-200"
                  : "hover:bg-neutral-900 hover:text-white hover:border-neutral-900 text-neutral-800 shadow-2xs active:scale-95"
              }`}
            >
              <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </button>
          </div>
        </div>

        {/* Swiper Carousel with Autoplay */}
        <div className="relative w-full overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={shouldLoop}
            spaceBetween={14}
            slidesPerView={2}
            speed={550}
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 14,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              updateSnapInfo(swiper);
            }}
            onSlideChange={(swiper) => updateSnapInfo(swiper)}
            onBreakpoint={(swiper) => updateSnapInfo(swiper)}
            onResize={(swiper) => updateSnapInfo(swiper)}
            className="w-full overflow-hidden"
          >
            {products.map((relProduct, idx) => (
              <SwiperSlide key={`${relProduct.id}-${idx}`} className="!h-auto select-none">
                <ProductCard product={relProduct} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
