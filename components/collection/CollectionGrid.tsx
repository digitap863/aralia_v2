"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  dummyCollectionGridItems,
  dummyCollectionGridCategories,
  type CollectionCardItem,
} from "@/data";

export type { CollectionCardItem };

export interface CollectionGridProps {
  items?: CollectionCardItem[];
  categories?: string[];
  basePath?: string;
}

export default function CollectionGrid({
  items = dummyCollectionGridItems,
  categories = dummyCollectionGridCategories,
  basePath = "/collections",
}: CollectionGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>(
    categories[0] || "ALL CATEGORIES"
  );
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
      { threshold: 0.08 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const filteredItems =
    activeCategory === "ALL CATEGORIES"
      ? items
      : items.filter(
          (item) => item.category.toUpperCase() === activeCategory.toUpperCase()
        );

  return (
    <section
      ref={sectionRef}
      className="relative z-20 w-full bg-[#faf8f6] pt-4 sm:pt-6 pb-14 sm:pb-18 md:pb-20 px-4 sm:px-6 lg:px-8 select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Category Filter Tabs Bar */}
        <div
          className={`flex justify-center mb-8 sm:mb-10 md:mb-12 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-full max-w-4xl bg-[#e9e9e9]/90 rounded-full p-1.5 sm:p-2 overflow-x-auto scrollbar-none [&::-webkit-scrollbar]:hidden">
            <div className="flex items-center justify-start sm:justify-between gap-1 sm:gap-2 min-w-max sm:min-w-0">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 sm:px-5 py-2 rounded-full text-[10px] sm:text-[11px] md:text-xs font-sans font-medium tracking-[0.06em] uppercase whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#242830] text-white shadow-xs"
                        : "text-[#242830] hover:text-black hover:bg-white/50"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Collection Cards Grid (3 cols on lg, 2 on sm/md, 1 on mobile) */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {filteredItems.map((item, idx) => (
              <Link
                key={item.id}
                href={`${basePath}/${item.slug}`}
                className={`group relative block w-full aspect-414/297 rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_30px_rgba(140,86,69,0.16)] transition-all duration-500 ease-out hover:-translate-y-1 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionDelay: isVisible ? `${idx * 80}ms` : "0ms",
                }}
              >
                {/* Full Card Background Image */}
                <Image
                  src={item.image}
                  alt={item.alt || `${item.titlePrimary} ${item.titleSecondary}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-left transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
                />

                {/* Subtle Soft Scrim on Right for Guaranteed Text Readability */}
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 right-0 w-[62%] bg-linear-to-l from-white/55 via-white/25 to-transparent pointer-events-none"
                />

                {/* Right-Aligned Card Text & CTA */}
                <div className="relative z-10 h-full w-[55%] sm:w-[54%] ml-auto pr-4 sm:pr-5 md:pr-6 py-4 flex flex-col justify-center items-start text-left">
                  <h3 className="font-playfair text-[22px] sm:text-2xl md:text-[26px] xl:text-[28px] leading-[1.08] tracking-tight mb-2">
                    <span className="block text-[#19191d] font-normal">
                      {item.titlePrimary}
                    </span>
                    <span className="block text-[#AC7058] font-normal">
                      {item.titleSecondary}
                    </span>
                  </h3>

                  <p className="font-sans text-[#2f2523] text-[11px] sm:text-xs xl:text-[13px] font-normal leading-snug mb-3.5 sm:mb-4 max-w-43.75">
                    {item.description}
                  </p>

                  <span className="inline-flex items-center justify-center w-full max-w-41.25 py-2 px-3 rounded-lg border border-[#2e2624]/65 bg-white/30 backdrop-blur-[2px] text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.06em] uppercase text-[#242830] group-hover:bg-[#9f6e5a] group-hover:border-[#9f6e5a] group-hover:text-white transition-all duration-300 shadow-2xs">
                    VIEW COLLECTION
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="font-sans text-sm text-neutral-500 mb-4">
              No collections found in this category yet.
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory("ALL CATEGORIES")}
              className="px-5 py-2 rounded-full bg-[#242830] text-white text-xs font-medium uppercase tracking-wider cursor-pointer"
            >
              Show All Categories
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

