"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function AboutHero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Trigger smooth fade-in after mount
    const timer = setTimeout(() => setIsMounted(true), 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden select-none bg-white">
      {/* Background Banner Image Container - 4:5 on mobile (mob_banner.webp), ~2.65:1 on md+ (Banner.webp) */}
      <div className="relative w-full aspect-4/5 md:aspect-[2.65/1] flex items-start pt-10 sm:pt-14 md:items-center md:pt-0">
        {/* Mobile Portrait Banner */}
        <Image
          src="/images/AboutPage/mob_banner.webp"
          alt="About Aralia - Korean Comfort Luxury Innerwear"
          fill
          priority
          sizes="100vw"
          className="block md:hidden object-cover object-center pointer-events-none select-none"
        />

        {/* Desktop Landscape Banner */}
        <Image
          src="/images/AboutPage/Banner.webp"
          alt="About Aralia - Korean Comfort Luxury Innerwear"
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover object-center pointer-events-none select-none"
        />

        {/* Soft subtle atmospheric vignette on mobile for optimal text contrast */}
        {/* <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#f7dfd8]/85 via-[#f7dfd8]/40 to-transparent sm:hidden pointer-events-none z-10"
        /> */}

        {/* Bottom Gradient Fade into Our Story section */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-20 sm:h-28 md:h-36 lg:h-44 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(250,248,246,0) 0%, rgba(250,248,246,0.4) 45%, rgba(250,248,246,0.85) 80%, #faf8f6 100%)",
          }}
        />

        {/* Text Content Overlay */}
        <div className="relative z-20 w-full px-5 sm:px-8 md:px-12 lg:px-30">
          <div className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col items-start md:-translate-y-8 lg:-translate-y-11">
            
            {/* Pill Badge */}
            <div
              className={`inline-block mb-2.5 sm:mb-3 md:mb-4 transition-all duration-700 ease-out ${
                isMounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
            >
              <span className="inline-flex items-center px-3 sm:px-3.5 py-1 rounded-full border border-[#AC7058]/60 backdrop-blur-xs text-[9px] sm:text-[10px] md:text-[11px] font-sans tracking-[0.18em] uppercase text-black shadow-2xs">
                KOREAN COMFORT
              </span>
            </div>

            {/* Main Heading */}
            <h1
              className={`font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[62px] leading-[1.1] tracking-tight mb-2.5 sm:mb-3.5 md:mb-4 transition-all duration-800 delay-150 ease-out ${
                isMounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-[#19191d] font-normal mr-2 sm:mr-3">
                About
              </span>
              <span className="text-[#9f6e5a] font-normal">
                Aralia
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`font-sans text-[#2e2624] text-xs sm:text-sm md:text-base lg:text-[24px] font-normal leading-relaxed max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg transition-all duration-800 delay-300 ease-out ${
                isMounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Comfort, Confidence and <br  />
              Everyday Ease for Every Woman.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
