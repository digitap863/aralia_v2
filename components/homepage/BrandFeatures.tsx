"use client";

import React from "react";
import Image from "next/image";

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
  // Duplicated list for seamless infinite loop marquee
  const marqueeFeatures = [...features, ...features];

  return (
    <section className="w-full bg-[#f2e3d8] border-y border-[#ebd8cc]/60 select-none overflow-hidden">
      
      {/* Desktop View: Full 5-Column Grid with Vertical Dividers */}
      <div className="hidden lg:block max-w-350 mx-auto px-5 sm:px-8 lg:px-12 py-7 sm:py-8 lg:py-9">
        <div className="grid grid-cols-5 items-center">
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
                  className="absolute right-0 top-1/2 -translate-y-1/2 h-14 w-px bg-[#d9c5ba] pointer-events-none"
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
      </div>

      {/* Mobile & Tablet View: Sleek Small-Height Infinite Marquee */}
      <div className="block lg:hidden relative w-full overflow-hidden py-2.5 sm:py-3">
        {/* Soft edge gradient fades */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 sm:w-10 bg-linear-to-r from-[#f2e3d8] to-transparent z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 sm:w-10 bg-linear-to-l from-[#f2e3d8] to-transparent z-10"
        />

        {/* Marquee ticker track */}
        <div
          className="animate-brand-marquee flex items-center"
          style={{ animationDuration: "20s" }}
        >
          {marqueeFeatures.map((feature, index) => (
            <div
              key={`${feature.id}-${index}`}
              className="flex items-center gap-2 shrink-0 px-3.5 sm:px-4"
            >
              {/* Feature Icon */}
              <div className="w-4 h-4 flex items-center justify-center shrink-0">
                <Image
                  src={feature.icon}
                  alt={feature.alt}
                  width={18}
                  height={18}
                  className="w-auto h-3.5 object-contain"
                />
              </div>

              {/* Feature Title Only */}
              <span className="font-sans font-semibold text-[10.5px] sm:text-[11px] text-[#221c1a] tracking-wider uppercase whitespace-nowrap">
                {feature.title}
              </span>

              {/* Divider between marquee items */}
              <div
                aria-hidden="true"
                className="h-3 w-px bg-[#d9c5ba] ml-3 sm:ml-4 shrink-0"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
