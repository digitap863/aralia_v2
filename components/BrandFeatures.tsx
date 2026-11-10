"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export interface BrandFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  alt: string;
}

const features: BrandFeature[] = [
  {
    id: "feature-1",
    title: "EVERYDAY COMFORT",
    description: "Designed for your daily ease",
    icon: "/images/HomePage/SVG/Leaf.svg",
    alt: "Everyday Comfort Feather",
  },
  {
    id: "feature-2",
    title: "SOFT FABRICS",
    description: "Gentle on your skin",
    icon: "/images/HomePage/SVG/fabric.svg",
    alt: "Soft Fabrics Breeze",
  },
  {
    id: "feature-3",
    title: "THOUGHTFUL FIT",
    description: "Support where you need it",
    icon: "/images/HomePage/SVG/grid.svg",
    alt: "Thoughtful Fit Grid",
  },
  {
    id: "feature-4",
    title: "QUALITY CRAFTSMANSHIP",
    description: "Made to last",
    icon: "/images/HomePage/SVG/crown.svg",
    alt: "Quality Craftsmanship Crown",
  },
  {
    id: "feature-5",
    title: "AFFORDABLE ELEGANCE",
    description: "Beauty within reach",
    icon: "/images/HomePage/SVG/crown.svg",
    alt: "Affordable Elegance Crown",
  },
];

export default function BrandFeatures() {
  return (
    <section className="w-full bg-[#f2e3d8] border-y border-[#ebd8cc]/60 select-none overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-7 sm:py-8 lg:py-9">
        
        {/* Desktop View: Exact 5-Column Layout with Vertical Dividers */}
        <div className="hidden lg:grid lg:grid-cols-5 items-center">
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              className={`relative flex flex-col justify-center px-6 xl:px-8 ${
                idx === 0 ? "pl-2 xl:pl-3" : ""
              }`}
            >
              {/* Subtle Vertical Divider between columns */}
              {idx < features.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-1/2 -translate-y-1/2 h-14 w-[1px] bg-[#d9c5ba] pointer-events-none"
                />
              )}

              {/* Exact SVG Icon */}
              <div className="h-8 flex items-center mb-2.5">
                <Image
                  src={feature.icon}
                  alt={feature.alt}
                  width={38}
                  height={30}
                  className="w-auto h-6 xl:h-7 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-sans font-semibold text-[13px] text-[#221c1a] tracking-wider uppercase leading-snug">
                {feature.title}
              </h3>

              {/* Subtitle */}
              <p className="font-sans font-light text-[11px] xl:text-xs text-[#5a4d46] mt-1 leading-snug">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet View: Smooth Swiper Carousel */}
        <div className="block lg:hidden w-full">
          <Swiper
            spaceBetween={18}
            slidesPerView={1.5}
            speed={400}
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 1.4,
                spaceBetween: 14,
              },
              480: {
                slidesPerView: 1.8,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 3.2,
                spaceBetween: 20,
              },
            }}
            className="w-full !overflow-visible"
          >
            {features.map((feature) => (
              <SwiperSlide key={feature.id} className="!h-auto select-none">
                <div className="flex flex-col justify-center px-3 py-1 border-r border-[#d9c5ba]/50 last:border-r-0">
                  {/* Exact SVG Icon */}
                  <div className="h-8 flex items-center mb-2">
                    <Image
                      src={feature.icon}
                      alt={feature.alt}
                      width={34}
                      height={26}
                      className="w-auto h-6 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-sans font-semibold text-xs sm:text-[13px] text-[#221c1a] tracking-wider uppercase leading-snug">
                    {feature.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="font-sans font-light text-[11px] text-[#5a4d46] mt-0.5 leading-snug">
                    {feature.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

