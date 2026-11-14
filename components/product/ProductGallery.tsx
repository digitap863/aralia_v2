"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  // Ensure we have at least 4 thumbnails for the strip (replicate/fallback if needed)
  const galleryImages =
    images.length >= 4
      ? images.slice(0, 4)
      : [
          ...images,
          ...images,
          ...images,
          ...images,
        ].slice(0, 4);

  const [activeIndex, setActiveIndex] = useState(0);

  const currentImage = galleryImages[activeIndex] || galleryImages[0];

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 w-full max-w-[480px] lg:max-w-[500px] mx-auto lg:mx-0 select-none items-center sm:items-start">
      {/* Thumbnail Strip: Vertical on sm+ screens, horizontal scroll on mobile */}
      <div className="flex flex-row sm:flex-col gap-2.5 shrink-0 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 w-full sm:w-auto scrollbar-none">
        {galleryImages.map((img, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={`${img}-${idx}`}
              type="button"
              onClick={() => setActiveIndex(idx)}
              onMouseEnter={() => setActiveIndex(idx)}
              aria-label={`View thumbnail ${idx + 1} of ${productName}`}
              className={`relative w-14 h-14 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px] rounded-xl overflow-hidden bg-[#faf5f2] border-2 transition-all cursor-pointer shrink-0 ${
                isActive
                  ? "border-neutral-900 ring-1 ring-neutral-900 shadow-xs scale-102"
                  : "border-[#ede5dd] hover:border-neutral-400 opacity-80 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                sizes="72px"
                className="object-cover object-center pointer-events-none"
              />
            </button>
          );
        })}
      </div>

      {/* Main Image Display */}
      <div className="relative w-full sm:w-auto sm:flex-1 aspect-square max-w-full sm:max-w-[390px] md:max-w-[420px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#faf5f2] border border-[#ede5dd] shadow-[0_4px_16px_rgba(0,0,0,0.03)] group mx-auto sm:mx-0">
        <Image
          key={currentImage}
          src={currentImage}
          alt={`${productName} - Full Preview`}
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 420px, 420px"
          className="object-cover object-center pointer-events-none transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
    </div>
  );
}

