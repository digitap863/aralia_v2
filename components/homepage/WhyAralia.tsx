"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

interface FeatureCard {
  title: string | React.ReactNode;
  description: string;
  image: string;
  alt: string;
}

const features: FeatureCard[] = [
  {
    title: "The Touch",
    description: "Soft against the skin.",
    image: "/images/HomePage/WhyAralia/touch.webp",
    alt: "Luxurious soft touch fabric",
  },
  {
    title: (
      <>
        Extended <br className="hidden sm:inline" /> sizes
      </>
    ),
    description: "Selected extended sizes for more women.",
    image: "/images/HomePage/WhyAralia/sizes.webp",
    alt: "Extended sizes rack of innerwear",
  },
  {
    title: "The Fit",
    description: "Designed around her movement.",
    image: "/images/HomePage/WhyAralia/fit.webp",
    alt: "Precision contour seamless fit",
  },
  {
    title: "The Finish",
    description: "Finished with precision.",
    image: "/images/HomePage/WhyAralia/finish.webp",
    alt: "Refined precision lace finish",
  },
  {
    title: "The Feeling",
    description: "Made to disappear beneath everything.",
    image: "/images/HomePage/WhyAralia/feeling.webp",
    alt: "Weightless second-skin feeling",
  },
];

export default function WhyAralia() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scrolling carousel effect on mobile
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (swiperRef.current) {
        if (swiperRef.current.isEnd) {
          swiperRef.current.slideTo(0);
        } else {
          swiperRef.current.slideNext();
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="w-full bg-white py-10 sm:py-15 md:py-20 select-none overflow-hidden">
      <div className="max-w-8xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          
          {/* First Div: Heading centered on Y-axis with the card images */}
          <div className="shrink-0 px-6 sm:px-10 md:px-12 lg:px-20 xl:px-24 pb-8 md:pb-0 md:h-37.25 lg:h-38.75 flex flex-col justify-center">
            <h2 className="font-playfair text-4xl sm:text-5xl md:text-5xl text-center md:text-left leading-[1.04] tracking-tight whitespace-nowrap">
              <span className="block text-[#19191d] font-normal">
                Why
              </span>
              <span className="block text-[#AC7058] font-normal mt-0.5">
                ARALIA?
              </span>
            </h2>
          </div>

          {/* Second Div: Features Carousel on Mobile, Grid on Desktop */}
          <div className="flex-1 w-full px-2 sm:px-6 md:px-6 lg:px-12">
            
            {/* Mobile View: Swiper Carousel */}
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
                spaceBetween={14}
                slidesPerView={2.2}
                speed={500}
                grabCursor={true}
                breakpoints={{
                  0: {
                    slidesPerView: 2.2,
                    spaceBetween: 14,
                  },
                  480: {
                    slidesPerView: 2.8,
                    spaceBetween: 16,
                  },
                  640: {
                    slidesPerView: 3.5,
                    spaceBetween: 18,
                  },
                }}
                onSlideChange={(swiper) => setMobileActiveIndex(swiper.activeIndex)}
                className="w-full !overflow-visible px-2"
              >
                {features.map((feature, idx) => (
                  <SwiperSlide key={idx} className="!h-auto select-none">
                    <div className="group flex flex-col items-center text-center w-full">
                      {/* Rounded Image Container */}
                      <div className="relative w-full aspect-128/159 rounded-xl overflow-hidden bg-[#f4eee8] shadow-[0_2px_6px_rgba(0,0,0,0.03)] border border-[#AC7058] transition-all duration-300">
                        <Image
                          src={feature.image}
                          alt={feature.alt}
                          fill
                          sizes="130px"
                          className="object-cover object-center"
                        />
                      </div>

                      {/* Card Title */}
                      <h3 className="font-playfair text-sm text-[#19191d] font-normal mt-2.5 leading-snug">
                        {feature.title}
                      </h3>

                      {/* Card Description */}
                      <p className="font-sans text-[10px] text-[#000000] font-light mt-1 leading-normal max-w-[125px]">
                        {feature.description}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Mobile Indicator Dots */}
              <div className="flex items-center justify-center gap-1.5 mt-6">
                {features.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    aria-label={`Go to slide ${idx + 1}`}
                    onClick={() => swiperRef.current?.slideTo(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === mobileActiveIndex
                        ? "w-5 bg-[#AC7058]"
                        : "w-1.5 bg-neutral-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop & Tablet View: 5-column Grid */}
            <div className="hidden md:grid md:grid-cols-5 md:gap-5 lg:gap-6 justify-items-center">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col items-center text-center w-full max-w-31.25 sm:max-w-32.5"
                >
                  {/* Rounded Image Container (Compact Size) */}
                  <div className="relative w-full aspect-128/159 max-w-25 sm:max-w-27.5 md:max-w-30 lg:max-w-31.25 rounded-lg sm:rounded-xl overflow-hidden bg-[#f4eee8] shadow-[0_2px_6px_rgba(0,0,0,0.03)] border border-[#AC7058] transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      fill
                      sizes="130px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Title */}
                  <h3 className="font-playfair text-sm sm:text-[15px] md:text-base text-[#19191d] font-normal mt-2.5 sm:mt-3 leading-snug">
                    {feature.title}
                  </h3>

                  {/* Card Description */}
                  <p className="font-sans text-[10px] sm:text-[11px] text-[#000000] font-light mt-1 leading-normal max-w-28.75 sm:max-w-31.25">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
