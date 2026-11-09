"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutAralia() {
  return (
    <section className="relative w-8xl overflow-hidden bg-white select-none py-10 sm:py-12 lg:py-0 lg:h-130 xl:h-137.5 lg:max-h-150 flex items-center">
      
      {/* 
        Right-side Silk & Lace Background:
        - Positioned on the right side
        - Softly faded and not fully visible using radial & linear feathering masks
        - Acts as an atmospheric, textured watermark rather than an overpowering solid image
      */}
      <div className="absolute right-0 top-0 h-full w-[55%] sm:w-[50%] lg:w-[48%] xl:w-[46%] pointer-events-none select-none z-0 overflow-hidden">
        <Image
          src="/images/HomePage/About/bg.webp"
          alt="Fine Lace & Silk Fabric Craftsmanship"
          fill
          priority
          sizes="(max-width: 1024px) 50vw, 46vw"
          className="object-cover object-center opacity-40 sm:opacity-55 lg:opacity-65 mask-[linear-gradient(to_left,black_25%,transparent_95%)] [-webkit-mask-image:linear-gradient(to_left,black_25%,transparent_95%)]"
        />
        {/* Additional radial fade to soften all edges */}
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/50 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Model Image with soft warm ambient glow */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start relative">
            {/* Soft Ambient Radial Glow behind the model */}
            <div className="absolute w-74 h-74 sm:w-72 sm:h-72 md:w-90 md:h-90 rounded-full bg-[#f6cfbf]/50 blur-3xl -z-10 pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

            <div className="relative w-full max-w-65 sm:max-w-75 md:max-w-100 lg:max-w-[4500px] aspect-400/540 max-h-115 lg:max-h-122.5">
              <Image
                src="/images/HomePage/About/lady.webp"
                alt="Aralia - Made for Her"
                fill
                priority
                sizes="(max-width: 690px) 260px, (max-width: 1024px) 340px, 370px"
                className="object-contain object-bottom drop-shadow-sm select-none pointer-events-none"
              />
            </div>
          </div>

          {/* Right Column: Narrative Story & Actions */}
          <div className="lg:col-span-8 flex flex-col items-start ">
            
            {/* Pill Badge */}
            <div className="inline-block mb-2.5 sm:mb-3">
              <span className="inline-flex items-center px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-full border border-[#AC7058] bg-white/70 backdrop-blur-xs text-[10px] sm:text-[11px] font-sans font-base tracking-[0.14em] uppercase text-[#AC7058]">
                ABOUT ARALIA
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl leading-[1.12] tracking-tight mb-3.5 sm:mb-4">
              <span className="block text-[#19191d] font-normal">
                Made for Her.
              </span>
              <span className="block text-[#9f6e5a] font-normal mt-0.5 sm:mt-1">
                Designed for Everyday Comfort.
              </span>
            </h2>

            {/* Story Paragraphs */}
            <div className="space-y-3 max-w-xl text-neutral-700 font-sans text-xs sm:text-[13px] md:text-lg font-light leading-relaxed">
              <p>
                Aralia is a women&apos;s innerwear brand created with a focus on comfort, thoughtful design, and everyday confidence. We believe innerwear should feel as good as it looks, with carefully selected materials, practical designs, and attention to detail.
              </p>
              <p>
                Our goal is to make everyday essentials that help women feel comfortable and confident in their own way.
              </p>
            </div>

            {/* Call To Action Button */}
            <div className="mt-5 sm:mt-6">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 border border-[#AC7058] text-[#AC7058] hover:bg-[#AC7058]/5 active:bg-[#AC7058]/10 text-xs  font-semibold tracking-wide rounded-xs transition-colors shadow-2xs"
              >
                Shop Collection
              </Link>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
