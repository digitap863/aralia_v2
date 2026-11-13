"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight, Check } from "lucide-react";
import type { ProductItem } from "@/data";

export interface ProductCardProps {
  product: ProductItem;
  isWishlisted?: boolean;
  onToggleWishlist?: (id: string, e: React.MouseEvent) => void;
  isAddedToCart?: boolean;
  onToggleCart?: (id: string, e: React.MouseEvent) => void;
  activeColorIndex?: number;
  onColorSelect?: (id: string, colorIdx: number, e: React.MouseEvent) => void;
}

export default function ProductCard({
  product,
  isWishlisted = false,
  onToggleWishlist,
  isAddedToCart = false,
  onToggleCart,
  activeColorIndex = 0,
  onColorSelect,
}: ProductCardProps) {
  const [internalColorIdx, setInternalColorIdx] = useState(activeColorIndex);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const currentColorIdx =
    onColorSelect !== undefined ? activeColorIndex : internalColorIdx;

  const handleColorClick = (idx: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onColorSelect) {
      onColorSelect(product.id, idx, e);
    } else {
      setInternalColorIdx(idx);
    }
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    if (onToggleWishlist) {
      onToggleWishlist(product.id, e);
    }
  };

  const handleCartClick = (e: React.MouseEvent) => {
    if (onToggleCart) {
      onToggleCart(product.id, e);
    }
  };

  return (
    <div className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-[#ede5dd] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 select-none">
      {/* Top Image Container with Badge and Wishlist Heart */}
      <div className="relative w-full aspect-square bg-[#fbf6f3] overflow-hidden">
        {/* Shimmer Skeleton until image loads */}
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#f5ede7] via-[#faeae4] to-[#f5ede7] animate-pulse z-0" />
        )}

        <Link
          href={product.href}
          className="block relative w-full h-full overflow-hidden z-1"
        >
          {/* Primary Product Image */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            draggable={false}
            onLoad={() => setIsImageLoaded(true)}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
            className={`object-cover object-center pointer-events-none select-none transition-all duration-700 ease-out group-hover:scale-105 ${
              product.hoverImage ? "group-hover:opacity-0" : ""
            } ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
          />

          {/* Model / Alternate Image: Silky Dissolve & Micro-Zoom on Hover */}
          {product.hoverImage && (
            <Image
              src={product.hoverImage}
              alt={`${product.name} alternate view`}
              fill
              draggable={false}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 280px"
              className="object-cover object-center pointer-events-none select-none opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
            />
          )}
        </Link>

        {/* Best Seller Pill Badge */}
        {product.isBestSeller && (
          <div className="absolute top-2.5 left-2.5 z-10">
            <span className="bg-[#241d1b] text-white text-[9px] sm:text-[10px] font-sans font-medium px-2 py-0.5 rounded-sm tracking-wide shadow-xs">
              Best Seller
            </span>
          </div>
        )}

        {/* Wishlist Heart Icon Button */}
        <button
          type="button"
          onClick={handleWishlistClick}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-2.5 right-2.5 z-10 p-1.5 rounded-full bg-white/70 backdrop-blur-xs text-neutral-700 hover:text-[#9f6e5a] hover:bg-white transition-all cursor-pointer shadow-xs"
        >
          <Heart
            className={`w-4 h-4 transition-transform duration-200 ${
              isWishlisted
                ? "fill-[#9f6e5a] text-[#9f6e5a] scale-110"
                : "fill-transparent text-neutral-800 hover:scale-115"
            }`}
          />
        </button>
      </div>

      {/* Lower Card Details */}
      <div className="p-3 sm:p-3.5 flex flex-col flex-1 justify-between bg-white">
        <div>
          {/* Title */}
          <Link href={product.href}>
            <h3 className="font-playfair text-sm sm:text-base font-semibold text-neutral-900 leading-snug hover:text-[#9f6e5a] transition-colors truncate">
              {product.name}
            </h3>
          </Link>

          {/* Subtitle / Tagline */}
          <p className="font-sans text-[11px] sm:text-xs text-neutral-500 font-light mt-0.5 truncate">
            {product.subtitle}
          </p>

          {/* Price */}
          <p className="font-sans font-semibold text-xs sm:text-sm text-neutral-900 mt-1.5">
            ₹{product.price}
          </p>

          {/* Available Sizes */}
          <p className="font-sans text-[10px] sm:text-[11px] text-neutral-500 font-light mt-1">
            {product.sizes}
          </p>

          {/* Color Swatch Dots */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 mt-2.5">
              {product.colors.map((color, cIdx) => (
                <button
                  key={`${color.name}-${cIdx}`}
                  type="button"
                  onClick={(e) => handleColorClick(cIdx, e)}
                  aria-label={`Select color ${color.name}`}
                  style={{ backgroundColor: color.hex }}
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-black/10 transition-transform cursor-pointer ${
                    currentColorIdx === cIdx
                      ? "ring-1 ring-offset-1 ring-neutral-800 scale-110"
                      : "hover:scale-110"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Add to Cart Button */}
        <div className="mt-3.5 sm:mt-4 pt-1">
          <button
            type="button"
            onClick={handleCartClick}
            className={`w-full py-2 px-3 rounded-lg text-xs font-sans font-medium tracking-wide transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              isAddedToCart
                ? "bg-[#241d1b] text-white hover:bg-[#352b28]"
                : "border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white"
            }`}
          >
            {isAddedToCart ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Added to Cart</span>
              </>
            ) : (
              <>
                <span>Add To Cart</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

