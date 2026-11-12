"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { DM_Sans } from "next/font/google";

/* Body font used in the design */
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

/* Thin vertical rule: dark in the middle, fading out at both ends */
const DIVIDER =
  "w-px h-24 shrink-0 bg-linear-to-b from-transparent via-[#4a3733]/70 to-transparent";

export default function MissionVision() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      const timer = setTimeout(() => setIsVisible(true), 60);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  /* Mask applied to the IMAGE itself so it fades into the card colour */
  
  const ribbonMask =
    "linear-gradient(to left, #000 0%, #000 55%, rgba(0,0,0,0.5) 80%, transparent 100%)";

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#faf8f6] py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8 select-none overflow-hidden"
    >

      <div className="max-w-7xl mx-auto">
        <div
          className={`relative w-full rounded-2xl sm:rounded-3xl bg-[#e8b5af] overflow-hidden shadow-[0_6px_14px_-6px_rgba(0,0,0,0.28)] transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
         {/* LEFT: silk swirl */}
{/* LEFT: silk swirl */}
<div
  aria-hidden="true"
  className={`absolute left-0 top-0 bottom-0 w-32 sm:w-40 lg:w-40 pointer-events-none transition-all duration-1000 ease-out ${
    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
  }`}
>
  {/* 1. swirl image: narrow, near-square box so the whole spiral shows */}
  <Image
    src="/images/AboutPage/mission.webp"
    alt=""
    fill
    sizes="160px"
    className="object-cover object-left opacity-60 sm:opacity-85 lg:opacity-100"
  />
  <div
  aria-hidden="true"
  className="absolute inset-y-0 -right-px w-[60%] pointer-events-none"
  style={{
    background:
      "linear-gradient(to right, rgba(232,181,175,0) 0%, rgba(232,181,175,0.45) 35%, rgba(232,181,175,0.85) 70%, #e8b5af 100%)",
  }}
/>

  {/* 2. PINK GRADIENT OVER THE IMAGE: right side fades to the card colour */}
  <div
    className="absolute inset-y-0 -right-px w-[60%] pointer-events-none"
    style={{
      background:
        "linear-gradient(to right, rgba(232,181,175,0) 0%, rgba(232,181,175,0.45) 35%, rgba(232,181,175,0.85) 70%, #e8b5af 100%)",
    }}
  />

  {/* 3. soft fade at the bottom, as in the design */}
  <div
    className="absolute inset-x-0 bottom-0 h-[28%] pointer-events-none"
    style={{
      background:
        "linear-gradient(to bottom, rgba(232,181,175,0) 0%, rgba(232,181,175,0.35) 100%)",
    }}
  />
</div>

          {/* RIGHT: sheer ribbon (faded by mask) */}
          <div
            aria-hidden="true"
            className={`absolute right-0 top-0 bottom-0 w-52 sm:w-64 lg:w-75 pointer-events-none transition-all duration-1000 delay-150 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
            style={{ WebkitMaskImage: ribbonMask, maskImage: ribbonMask }}
          >
            <Image
              src="/images/AboutPage/vision-wave.webp"
              alt=""
              fill
              sizes="(max-width: 1024px) 256px, 300px"
              className="object-cover object-right opacity-60 sm:opacity-80 lg:opacity-100"
            />
          </div>

          {/* CONTENT: fixed positions measured from the design */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-0 py-8 sm:py-10 lg:py-0 lg:h-36.25 px-6 sm:px-10 lg:pl-25 lg:pr-0">
            {/* MISSION */}
            <div
              className={`flex items-center gap-5 lg:gap-6 transition-all duration-700 delay-150 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="shrink-0 self-start mt-1 md:mt-4 flex items-center justify-center lg:w-12">
                <Image
                  src="/images/AboutPage/mission.svg"
                  alt="Our Mission Icon"
                  width={48}
                  height={48}
                  className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 object-contain"
                />
              </div>

             

              <div className="flex flex-col lg:w-80">
                <h3 className="font-playfair text-2xl sm:text-[26px] lg:text-[36px] leading-[1.1] tracking-tight mb-2">
                  <span className="text-[#19191d] font-normal mr-1.5">Our</span>
                  <span className="text-[#b07a66] font-normal">Mission</span>
                </h3>
                <p
                  className={`${dmSans.className} text-[#2f2523] text-[16px] font-normal leading-[1.45]`}
                >
                  To create high-quality, comfortable and thoughtfully designed
                  innerwear that supports women in every stage of life.
                </p>
              </div>
            </div>

            {/* Centre divider (desktop) */}
            <div
              aria-hidden="true"
              className={`hidden lg:block mx-6.5 ${DIVIDER}`}
            />

            {/* Mobile horizontal divider */}
            <div
              aria-hidden="true"
              className="block lg:hidden w-full h-px bg-linear-to-r from-transparent via-[#4a3733]/50 to-transparent"
            />

            {/* VISION */}
            <div
              className={`flex items-center gap-5 lg:gap-3 transition-all duration-700 delay-300 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="shrink-0 self-start mt-1 md:mt-4 flex items-center justify-center lg:w-30">
                <Image
                  src="/images/AboutPage/vision.svg"
                  alt="Our Vision Icon"
                  width={54}
                  height={39}
                  className="w-8 h-6 sm:w-9 sm:h-7 lg:w-10 lg:h-7 object-contain"
                />
              </div>

              

              <div className="flex flex-col lg:w-80">
                <h3 className="font-playfair text-2xl sm:text-[26px] lg:text-[36px] leading-[1.1] tracking-tight mb-2">
                  <span className="text-[#19191d] font-normal mr-1.5">Our</span>
                  <span className="text-[#b07a66] font-normal">Vision</span>
                </h3>
                <p
                  className={`${dmSans.className} text-[#2f2523] text-[16px] font-normal leading-[1.45]`}
                >
                  To be a trusted innerwear brand for women across India, known
                  for comfort, quality and Korean-inspired innovation.
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}