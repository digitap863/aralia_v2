"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OurStory() {
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
      { threshold: 0.05 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-20 w-full -mt-6 sm:-mt-12 md:-mt-16 lg:-mt-20 pt-8 sm:pt-10 md:pt-12 pb-8  px-5 sm:px-8 select-none"
      style={{
        background:
          "linear-gradient(to bottom, rgba(250,248,246,0) 0%, rgba(250,248,246,0.75) 14%, #faf8f6 28%, #faf8f6 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
        {/* Pill Badge */}
        <div
          className={`inline-block mb-3 sm:mb-4 transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3"
          }`}
        >
          <span className="inline-flex items-center px-3.5 py-1 rounded-full border border-[#AC7058]/50 bg-white/60 backdrop-blur-xs text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-[#8c5645] shadow-2xs">
            ARALIA
          </span>
        </div>

        {/* Heading */}
        <h2
          className={`font-playfair text-3xl sm:text-4xl md:text-[44px] lg:text-[48px] leading-[1.15] tracking-tight mb-6 sm:mb-8 transition-all duration-800 delay-150 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-[#19191d] font-normal mr-2 sm:mr-2.5">
            Our
          </span>
          <span className="text-[#9f6e5a] font-normal">
            Story
          </span>
        </h2>

        {/* Story Paragraphs */}
        <div
          className={`space-y-5 sm:space-y-6 text-neutral-700 font-sans text-xs sm:text-sm md:text-[24px] font-light leading-relaxed max-w-7xl mx-auto transition-all duration-800 delay-300 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <p>
            Aralia is a women&apos;s innerwear brand inspired by Korean craftsmanship and a deep understanding of everyday comfort. We believe that innerwear is more than just an everyday essential — it is the foundation of how a woman feels throughout her day. That&apos;s why we bring together thoughtful design, modern aesthetics and a comfort-first approach to create innerwear that feels as good as it looks.
          </p>

          <p>
            Inspired by the simplicity and elegance of Korean design, Aralia focuses on creating pieces that blend style, functionality and effortless wearability. Every detail matters, from the feel of the fabric against your skin to the fit, support and finish that make each piece special.
          </p>

          <p>
            We understand that every woman is different, with her own lifestyle, preferences and comfort needs. Our collections are thoughtfully curated to suit different stages of life, body types and everyday moments — making it easier to find innerwear that feels naturally right.
          </p>

          <p>
            From soft everyday essentials to thoughtfully designed styles offering specialized support, Aralia is here to make you feel comfortable, confident and truly yourself.
          </p>
        </div>

        {/* CTA Button */}
        <div
          className={`mt-8 sm:mt-10 md:mt-12 transition-all duration-800 delay-300 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="/collections"
            className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 bg-[#1f242d] hover:bg-black active:bg-neutral-900 text-white text-xs sm:text-[13px] font-medium tracking-wide rounded-sm transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Our Collections</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
