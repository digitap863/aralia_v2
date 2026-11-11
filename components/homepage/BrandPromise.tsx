"use client";

import React from "react";
import Image from "next/image";

export default function BrandPromise() {
  return (
    <section className="relative w-full overflow-hidden bg-[#261f1d] select-none py-10 sm:py-12 md:py-14 lg:py-16">
      {/* Background with warm ambient lighting gradient matching the reference */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#241d1b] via-[#352925] to-[#221a19] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_45%_50%,rgba(120,86,72,0.3),transparent_70%)] pointer-events-none" />

      {/* Flowing Ribbon Image (Center) */}
      <div className="absolute left-[32%] sm:left-[36%] md:left-[39%] lg:left-[41%] top-0 h-[115%] sm:h-[120%] w-[220px] sm:w-[285px] md:w-[340px] lg:w-[410px] pointer-events-none select-none z-10 hidden sm:block">
        <Image
          src="/images/HomePage/OurBrand/ribbon.webp"
          alt="Aralia Satin Ribbon"
          fill
          priority
          sizes="(max-width: 768px) 285px, (max-width: 1024px) 340px, 410px"
          className="object-contain object-top opacity-95 drop-shadow-md"
        />
      </div>

      {/* Bottom-Left Flower (High-Resolution Soft Petals) */}
      <div className="absolute -bottom-4 -left-4 sm:-bottom-3 sm:-left-3 w-28 sm:w-36 md:w-44 lg:w-52 pointer-events-none select-none z-0">
        <Image
          src="/images/HomePage/OurBrand/flower-soft.webp"
          alt="Aralia Blossom"
          width={400}
          height={400}
          className="w-full h-auto object-contain object-bottom-left opacity-90 drop-shadow-lg"
        />
      </div>

      {/* Top-Right Flower (High-Resolution Crisp Cherry Blossom) */}
      <div className="absolute -top-3 -right-3 sm:-top-25 sm:-right-25 w-32 sm:w-44 md:w-52 lg:w-60 pointer-events-none select-none z-0">
        <Image
          src="/images/HomePage/OurBrand/flower-crisp.webp"
          alt="Cherry Blossom"
          width={400}
          height={400}
          className="w-full h-auto object-contain object-top-right opacity-95 drop-shadow-xl"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 md:gap-4 items-center">
          
          {/* Left Column: Brand Promise Headline */}
          <div className="md:col-span-5 lg:col-span-5">
            <span className="block text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-[#d6cdc7] mb-2 sm:mb-2.5">
              OUR BRAND PROMISE
            </span>
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-[28px] lg:text-[34px] xl:text-[38px] text-white font-normal leading-[1.18] tracking-tight">
              Comfort in &nbsp;Every Thread. <br />
              Confidence in Every Women.
            </h2>
          </div>

          {/* Spacer Column for the Ribbon on Desktop */}
          <div className="hidden md:block md:col-span-2 lg:col-span-2" aria-hidden="true" />

          {/* Right Column: Narrative Description */}
          <div className="md:col-span-5 lg:col-span-5 md:pl-2 lg:pl-4">
            <p className="font-sans text-xs sm:text-[13px] md:text-sm lg:text-[15px] text-[#d6cdc7] font-light leading-relaxed max-w-md sm:max-w-lg">
              At Aralia, we believe that comfort is not a luxury; it is an everyday essential. Every woman deserves innerwear that feels right, fits well, and helps her embrace life with confidence.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
