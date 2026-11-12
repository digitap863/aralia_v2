"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface FeatureItem {
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    title: "ULTRA-SOFT FABRICS",
    description: "Gentle on your skin, all day long.",
  },
  {
    title: "THOUGHTFUL SUPPORT",
    description: "The right fit and comfort for every body.",
  },
  {
    title: "BREATHABLE & LIGHT",
    description: "Keeps you cool and comfortable.",
  },
  {
    title: "DURABLE QUALITY",
    description: "Made to last, wash after wash.",
  },
  {
    title: "KOREAN-INSPIRED DESIGNS",
    description: "Modern styles with a minimal, elegant touch.",
  },
];

export default function AboutFeatures() {
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
      className="w-full bg-[#faf8f6] py-10 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-8 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-8 lg:gap-6 xl:gap-8">
          {features.map((item, idx) => (
            <div
              key={item.title}
              className={`group flex flex-col items-center text-center transition-all duration-700 ease-out ${
                idx === features.length - 1 ? "col-span-2 sm:col-span-1" : ""
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: isVisible ? `${idx * 100}ms` : "0ms",
              }}
            >
              {/* Feather / Leaf SVG Icon */}
              <div className="mb-3 sm:mb-3.5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <Image
                  src="/images/HomePage/SVG/Leaf.svg"
                  alt=""
                  width={28}
                  height={26}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
                />
              </div>

              {/* Uppercase Feature Title */}
              <h3 className="font-sans font-medium text-[11px] sm:text-sm text-[#19191d] tracking-[0.06em] uppercase leading-snug mb-1.5">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-sans font-light text-[11px] sm:text-sm text-[#5a504c] leading-relaxed max-w-[195px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

