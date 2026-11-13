"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

export default function Hero() {
  const [showGiftNotification, setShowGiftNotification] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    // Trigger smooth fade-in after mount matching AboutHero
    const timer = setTimeout(() => setIsMounted(true), 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full bg-[#f4beaa] overflow-hidden select-none">
      {/* 
        Responsive container:
        - Desktop / Tablet (md+): 100vh minus exact navbar height (128px) so the hero and navbar together fill exactly 100vh of screen.
        - Mobile: Locked to aspect-4/5 matching other pages' mobile hero banners.
      */}
      <div className="relative w-full aspect-4/5 md:aspect-auto md:h-[calc(100vh-128px)] md:min-h-140 flex items-start pt-8 sm:pt-12 md:items-center md:pt-0 overflow-hidden">
        
        {/* Elegant Silk Shimmer Skeleton (Never blank while loading) */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 bg-linear-to-br from-[#f8d4c7] via-[#f4beaa] to-[#f8d4c7] transition-opacity duration-700 pointer-events-none z-0 ${
            isImageLoaded ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
        </div>

        {/* Mobile Portrait Hero Banner (4:5 Ratio matching other pages) */}
        <Image
          src="/images/HomePage/hero-bg-mob.webp"
          // src="/images/HomePage/mob_hero-bg.webp"
          alt="Aralia Korean Comfort Innerwear - Mobile"
          fill
          priority
          sizes="100vw"
          onLoad={() => setIsImageLoaded(true)}
          className={`block md:hidden object-cover object-center pointer-events-none select-none transition-all duration-1000 ease-out z-1 ${
            isImageLoaded
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-102"
          }`}
        />

        {/* Desktop Landscape Hero Banner (100vh full screen) */}
        <Image
          src="/images/HomePage/hero-bg.webp"
          alt="Aralia Korean Comfort Innerwear"
          fill
          priority
          sizes="100vw"
          onLoad={() => setIsImageLoaded(true)}
          className={`hidden md:block object-cover object-[75%_center] pointer-events-none transition-all duration-1000 ease-out z-1 ${
            isImageLoaded
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-102"
          }`}
        />

        {/* Soft white glow behind the text on desktop for maximum elegance */}
        <div
          className="hidden md:block absolute inset-0 pointer-events-none z-1"
          style={{
            background:
              "radial-gradient(ellipse 45% 75% at 22% 42%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.5) 35%, rgba(255,255,255,0.15) 65%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* Soft gradient overlay on mobile for crystal-clear readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4beaa]/85 via-[#f4beaa]/35 to-transparent md:hidden pointer-events-none z-1" />

        {/* Content Container */}
        <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-7xl">
          <div className="max-w-[280px] xs:max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            
            {/* Pill Badge */}
            <div
              className={`inline-block mb-2 sm:mb-3 md:mb-4 transition-all duration-700 ease-out ${
                isMounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
            >
              <span className="inline-flex items-center px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-neutral-400/60 backdrop-blur-xs text-[9px] sm:text-[10px] md:text-[11px] font-sans font-medium tracking-[0.14em] uppercase text-neutral-700">
                KOREAN COMFORT
              </span>
            </div>

            {/* Headline with Playfair Display (Scales gracefully from mobile to desktop) */}
            <h1
              className={`font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-[72px] leading-[1.12] tracking-tight transition-all duration-800 delay-150 ease-out ${
                isMounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="block text-[#19191d] font-normal">
                Made for you,
              </span>
              <span className="block text-[#A56750] font-normal mt-0.5 sm:mt-1">
                Every Day
              </span>
            </h1>

            {/* Subtitle with Sans font */}
            <p
              className={`mt-2 sm:mt-3 md:mt-4 text-[11px] sm:text-xs md:text-sm lg:text-[15px] font-sans text-neutral-700 font-normal leading-relaxed max-w-67.5 sm:max-w-sm md:max-w-md lg:max-w-lg transition-all duration-800 delay-300 ease-out ${
                isMounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Premium innerwear shaped by Korean craftsmanship, refined fabrics and the quiet power of feeling like yourself.
            </p>

            {/* Action Buttons (Hidden on mobile view, shown on desktop md+) */}
            <div
              className={`mt-4 sm:mt-6 md:mt-7 lg:mt-8 hidden md:flex flex-wrap items-center gap-2 sm:gap-3 md:gap-3.5 font-sans transition-all duration-800 delay-450 ease-out ${
                isMounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-3.5 sm:px-5 md:px-6 py-2 sm:py-2.5 bg-[#242830] hover:bg-[#1a1d24] active:bg-black text-white text-[10px] sm:text-xs md:text-[13px] font-medium tracking-wide rounded-xs transition-colors shadow-xs"
              >
                Shop Collection
              </Link>

              <Link
                href="/collections"
                className="inline-flex items-center justify-center px-3.5 sm:px-5 md:px-6 py-2 sm:py-2.5 bg-transparent hover:bg-neutral-900/5 active:bg-neutral-900/10 text-neutral-800 text-[10px] sm:text-xs md:text-[13px] font-medium tracking-wide rounded-xs border border-neutral-400/80 transition-colors"
              >
                Explore Collection
              </Link>
            </div>

          </div>
        </div>

        {/* Floating Surprise Gift Card (Responsive: docks to bottom-right on mobile, floats beside model on md+) */}
        {showGiftNotification && (
          <div
            className={`absolute z-20 bottom-3 right-3 sm:bottom-4 sm:right-6 md:top-[42%] md:bottom-auto md:-translate-y-1/2 md:right-8 lg:right-14 xl:right-20 transition-all duration-1000 delay-500 ease-out ${
              isMounted
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95"
            }`}
          >
            <div className="relative bg-white/75 backdrop-blur-md rounded-lg p-2 sm:p-2.5 md:p-3 border border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex items-center gap-2 sm:gap-2.5 max-w-47.5 sm:max-w-55 md:max-w-62.5 lg:max-w-67.5">
              
              {/* Dismiss button */}
              <button
                type="button"
                onClick={() => setShowGiftNotification(false)}
                className="absolute top-1 right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center text-neutral-400 hover:text-neutral-700 hover:bg-black/5 transition-colors cursor-pointer"
                aria-label="Dismiss surprise gift"
              >
                <X className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              </button>

              {/* Gift Illustration */}
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 shrink-0 flex items-center justify-center rounded-md bg-linear-to-br from-amber-50 to-amber-100/60 border border-amber-200/50 shadow-inner">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Gold Box base */}
                  <rect x="12" y="26" width="40" height="30" rx="3" fill="#F4B02A" />
                  <rect x="10" y="22" width="44" height="8" rx="2" fill="#F8C74D" />
                  <path d="M32 26V56H49C50.6569 56 52 54.6569 52 53V26H32Z" fill="#D99716" fillOpacity="0.4" />
                  {/* Red Ribbon */}
                  <rect x="28" y="22" width="8" height="34" fill="#E53935" />
                  <rect x="12" y="38" width="40" height="6" fill="#E53935" />
                  {/* Bow */}
                  <path d="M26 18C22 13 15 13 16 19C17 22 25 22 30 22C30 18 29 18 26 18Z" fill="#EF5350" />
                  <path d="M38 18C42 13 49 13 48 19C47 22 39 22 34 22C34 18 35 18 38 18Z" fill="#EF5350" />
                  <circle cx="32" cy="22" r="3" fill="#D32F2F" />
                </svg>
              </div>

              {/* Card Text */}
              <div className="pr-2 sm:pr-3">
                <p className="font-playfair italic text-[#c24747] font-medium text-[10px] sm:text-[11px] md:text-xs leading-tight">
                  A Little Surprise For You!
                </p>
                <p className="font-sans text-[8px] sm:text-[9px] md:text-[10px] text-neutral-600 mt-0.5 leading-snug">
                  A Surprise Gift Included With Your Order.
                </p>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
