"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function OurMaterials() {
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
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#eccfcb] overflow-hidden select-none"
    >
      {/* Draped Silk Background Layer */}
      <div className="relative w-full min-h-70 sm:min-h-80 md:min-h-0 md:aspect-3600/930 flex items-center py-10 sm:py-12 md:py-0">
        <Image
          src="/images/AboutPage/materials_bg.webp"
          alt="Soft Korean silk fabric texture"
          fill
          sizes="100vw"
          className="object-cover object-right md:object-center pointer-events-none select-none"
        />

        {/* Soft Left Gradient Blend so left copy always reads crisply over #eccfcb */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-[68%] sm:w-[55%] md:w-[45%] pointer-events-none z-1"
          style={{
            background:
              "linear-gradient(to right, #eccfcb 0%, rgba(236,207,203,0.92) 45%, rgba(236,207,203,0) 100%)",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-10">
            {/* Left Column: Text Content */}
            <div className="max-w-xl lg:max-w-2xl flex flex-col items-start">
              {/* Pill Badge */}
              <div
                className={`inline-block mb-3 sm:mb-4 transition-all duration-700 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
              >
                <span className="inline-flex items-center px-3.5 py-1 rounded-full border border-[#AC7058]/50  backdrop-blur-xs text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.16em] uppercase text-[#8c5645] shadow-2xs">
                  OUR MATERIALS
                </span>
              </div>

              {/* Main Heading */}
              <h2
                className={`font-playfair text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] xl:text-[52px] leading-[1.1] tracking-tight mb-3 sm:mb-4 transition-all duration-800 delay-150 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <span className="block text-[#19191d] font-normal">
                  Premium Fabrics.
                </span>
                <span className="block text-[#9f6e5a] font-normal mt-0.5">
                  Designed for you.
                </span>
              </h2>

              {/* Description */}
              <p
                className={`font-sans text-[#2e2624] text-xs sm:text-sm md:text-[15px] lg:text-[17px] font-normal leading-relaxed max-w-lg lg:max-w-xl transition-all duration-800 delay-300 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                We use carefully selected, skin-friendly fabrics known for their
                softness, stretch and long-lasting comfort — inspired by Korean
                textile innovation.
              </p>
            </div>

            {/* Right Column: Circular Swirl Silk Medallion */}
            <div
              className={`self-center md:self-auto shrink-0 transition-all duration-1000 delay-200 ease-out ${
                isVisible
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 translate-y-4"
              }`}
            >
              <div className="group relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-[0_12px_32px_rgba(110,60,50,0.18)] ring-1 ring-white/40">
                <Image
                  src="/images/AboutPage/materials.webp"
                  alt="Swirled ultra-soft silk fabric"
                  fill
                  sizes="(max-width: 768px) 176px, 224px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

