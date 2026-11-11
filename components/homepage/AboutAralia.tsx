"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutAralia() {
  return (
    <section className="relative w-full overflow-hidden bg-white select-none py-10 sm:py-12 lg:py-0 lg:h-130 xl:h-137.5 lg:max-h-150 flex items-center">
      {/* TOP blend: fades from the previous section's colour into this one.
          Inside the section (top-0) so overflow-hidden doesn't clip it.
          z-[1] keeps it above the bg image but below the content. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-20 sm:h-24 md:h-32 pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0.85) 25%, rgba(255,255,255,0.45) 55%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* BOTTOM blend */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-16 sm:h-20 md:h-24 pointer-events-none z-1"
        style={{
          background:
            "linear-gradient(to bottom, rgba(247,247,245,0) 0%, rgba(247,247,245,0.5) 50%, #f7f7f5 100%)",
        }}
      />

      {/* Right-side silk & lace background */}
      <div className="absolute right-0 top-0 h-full w-[55%] sm:w-[50%] lg:w-[48%] xl:w-[46%] pointer-events-none select-none z-0 overflow-hidden">
        <Image
          src="/images/HomePage/About/bg.webp"
          alt="Fine Lace & Silk Fabric Craftsmanship"
          fill
          priority
          sizes="(max-width: 1024px) 50vw, 46vw"
          className="object-cover object-center opacity-40 sm:opacity-55 lg:opacity-65 mask-[linear-gradient(to_left,black_25%,transparent_95%)] [-webkit-mask-image:linear-gradient(to_left,black_25%,transparent_95%)]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white via-white/50 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Model Image */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start relative">
            {/* `isolate` creates its own stacking context so the glow
                (-z-10) stays behind the lady but ABOVE the section bg */}
            <div className="relative isolate w-full max-w-65 sm:max-w-75 md:max-w-100 lg:max-w-[4500px] aspect-400/540 max-h-115 lg:max-h-122.5">
              {/* Glow centred directly behind the lady */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[115%] -z-10 pointer-events-none blur-2xl"
                style={{
                  background:
                    "radial-gradient(closest-side, rgba(246,207,191,0.95) 0%, rgba(246,207,191,0.6) 45%, rgba(246,207,191,0) 100%)",
                }}
              />

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
          <div className="lg:col-span-8 flex flex-col items-start">
            <div className="inline-block mb-2.5 sm:mb-3">
              <span className="inline-flex items-center px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-full border border-[#AC7058] bg-white/70 backdrop-blur-xs text-[10px] sm:text-[11px] font-sans font-base tracking-[0.14em] uppercase text-[#AC7058]">
                ABOUT ARALIA
              </span>
            </div>

            <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl leading-[1.12] tracking-tight mb-3.5 sm:mb-4">
              <span className="block text-[#19191d] font-normal">
                Made for Her.
              </span>
              <span className="block text-[#9f6e5a] font-normal mt-0.5 sm:mt-1">
                Designed for Everyday Comfort.
              </span>
            </h2>

            <div className="space-y-3 max-w-xl text-neutral-700 font-sans text-xs sm:text-[13px] md:text-lg font-light leading-relaxed">
              <p>
                Aralia is a women&apos;s innerwear brand created with a focus on comfort, thoughtful design, and everyday confidence. We believe innerwear should feel as good as it looks, with carefully selected materials, practical designs, and attention to detail.
              </p>
              <p>
                Our goal is to make everyday essentials that help women feel comfortable and confident in their own way.
              </p>
            </div>

            <div className="relative z-30 mt-5 sm:mt-6">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 bg-[#1f242d] hover:bg-black active:bg-neutral-900 text-white text-[10px] sm:text-xs md:text-[13px] font-medium tracking-wide rounded-xs transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
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