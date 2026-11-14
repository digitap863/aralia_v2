"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Star, Minus, Plus, Check, ShoppingBag } from "lucide-react";
import type { ProductItem, ProductColor } from "@/data";

interface ProductInfoProps {
  product: ProductItem;
  onAddToCart?: (product: ProductItem, color: ProductColor, size: string, quantity: number) => void;
  onBuyNow?: (product: ProductItem, color: ProductColor, size: string, quantity: number) => void;
}

export default function ProductInfo({
  product,
  onAddToCart,
  onBuyNow,
}: ProductInfoProps) {
  // Available colors (fallback if empty)
  const colors = product.colors && product.colors.length > 0
    ? product.colors
    : [
        { name: "Pink", hex: "#e58b88" },
        { name: "Sage", hex: "#b4c3bd" },
        { name: "Nude", hex: "#a8715a" },
      ];

  // Available sizes (fallback to standard sizes)
  const sizes = product.availableSizes && product.availableSizes.length > 0
    ? product.availableSizes
    : ["32B", "32C", "34B", "34C", "36B", "36C", "38B", "40D"];

  // Interactive selection states
  const [selectedColor, setSelectedColor] = useState<ProductColor>(colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [isAdded, setIsAdded] = useState(false);

  // Price calculations
  const originalPrice = product.originalPrice || Math.round(product.price * 1.2);
  const discountPercent = Math.round(((originalPrice - product.price) / originalPrice) * 100);

  const handleDecreaseQty = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleIncreaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    setIsAdded(true);
    if (onAddToCart) {
      onAddToCart(product, selectedColor, selectedSize, quantity);
    }
    setTimeout(() => setIsAdded(false), 2200);
  };

  const handleBuyNow = () => {
    if (onBuyNow) {
      onBuyNow(product, selectedColor, selectedSize, quantity);
    } else {
      window.location.href = "/cart";
    }
  };

  return (
    <div className="flex flex-col w-full select-none">
      {/* 1. Best Seller Pill Badge (highlighted in user mockup) */}
      <div className="flex items-center mb-3">
        {product.isBestSeller ? (
          <span className="inline-flex items-center justify-center bg-[#1d1b1a] text-white text-[11px] sm:text-xs font-sans font-medium px-4 py-1.5 rounded-full tracking-wide shadow-2xs">
            Best Seller
          </span>
        ) : (
          <span className="inline-flex items-center justify-center bg-[#f2ebe5] text-[#8e614f] text-[11px] sm:text-xs font-sans font-medium px-4 py-1.5 rounded-full tracking-wide">
            {product.collection || "Korean Comfort"}
          </span>
        )}
      </div>

      {/* 2. Product Title */}
      <h1 className="font-sans text-2xl sm:text-3xl lg:text-[28px] font-medium text-neutral-900 tracking-tight leading-snug">
        {product.name}
      </h1>

      {/* Optional Subtitle */}
      {product.subtitle && (
        <p className="font-sans text-xs sm:text-sm text-neutral-500 font-light mt-1">
          {product.subtitle}
        </p>
      )}

      {/* 3. Star Ratings (4.5/5) */}
      <button
        type="button"
        onClick={() => {
          if (typeof window !== "undefined") {
            window.dispatchEvent(
              new CustomEvent("aralia:open-tab", { detail: "reviews" })
            );
            const el = document.getElementById("product-detail-tabs");
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
        }}
        className="flex items-center gap-1.5 mt-2.5 cursor-pointer w-fit text-left group"
        title="View Reviews"
      >
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-4 h-4 ${
                star <= 4
                  ? "fill-[#f5a623] text-[#f5a623]"
                  : "fill-[#f5a623]/40 text-[#f5a623]/40"
              }`}
            />
          ))}
        </div>
        <span className="text-xs sm:text-[13px] font-sans font-medium text-neutral-500 ml-1.5 group-hover:text-neutral-800 transition-colors">
          {product.rating || "4.5"}/5
        </span>
        {product.reviewsCount && (
          <span className="text-xs text-neutral-400 font-sans ml-1 group-hover:underline">
            ({product.reviewsCount} reviews)
          </span>
        )}
      </button>

      {/* 4. Pricing Row */}
      <div className="flex items-center gap-3 mt-3.5">
        <span className="font-sans text-2xl sm:text-3xl lg:text-[28px]  font-semibold text-neutral-900 tracking-tight">
          ₹{product.price}
        </span>
        {originalPrice > product.price && (
          <span className="font-sans text-lg sm:text-xl text-neutral-400 line-through font-normal">
            ₹{originalPrice}
          </span>
        )}
        {discountPercent > 0 && (
          <span className="font-sans text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#ffeceb] text-[#e05656]">
            -{discountPercent}%
          </span>
        )}
      </div>

      {/* Thin Divider */}
      <div className="w-full h-px bg-[#ede5dd] my-5 sm:my-6" />

      {/* 6. Color Selection */}
      <div>
        <p className="font-sans text-xs sm:text-[13px] text-neutral-600 font-normal">
          Select Colors:{" "}
          <span className="font-medium text-neutral-900">
            {selectedColor.name}
          </span>
        </p>
        <div className="flex items-center gap-2.5 sm:gap-3 mt-3">
          {colors.map((color) => {
            const isSelected = selectedColor.name === color.name;
            const isLight =
              color.hex.toLowerCase() === "#ffffff" ||
              color.hex.toLowerCase() === "#fff";

            return (
              <button
                key={color.name}
                type="button"
                onClick={() => setSelectedColor(color)}
                style={{ backgroundColor: color.hex }}
                aria-label={`Select color ${color.name}`}
                className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                  isLight ? "border-neutral-300" : "border-black/10"
                } ${
                  isSelected
                    ? "ring-2 ring-offset-2 ring-neutral-900 scale-110 shadow-xs"
                    : "hover:scale-105"
                }`}
              >
                {isSelected && (
                  <Check
                    className={`w-3.5 h-3.5 stroke-[3] ${
                      isLight ? "text-neutral-900" : "text-white"
                    }`}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Thin Divider */}
      <div className="w-full h-px bg-[#ede5dd] my-5 sm:my-6" />

      {/* 7. Size Selection */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="font-sans text-xs sm:text-[13px] text-neutral-600 font-normal">
            Choose Size
          </p>
          <button
            type="button"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.dispatchEvent(
                  new CustomEvent("aralia:open-tab", { detail: "sizeChart" })
                );
                const el = document.getElementById("product-detail-tabs");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }
            }}
            className="text-[11px] font-sans text-neutral-500 hover:text-neutral-900 underline underline-offset-2 transition-colors cursor-pointer"
          >
            Size Guide
          </button>
        </div>

        {/* Size Pill Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          {sizes.map((sz) => {
            const isSelected = selectedSize === sz;
            return (
              <button
                key={sz}
                type="button"
                onClick={() => setSelectedSize(sz)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-[13px] font-sans font-medium transition-all cursor-pointer ${
                  isSelected
                    ? "bg-white text-neutral-900 border border-neutral-300 shadow-[0_2px_8px_rgba(0,0,0,0.06)] font-semibold"
                    : "bg-[#f1f1f3] text-neutral-600 hover:bg-[#e7e7eb] hover:text-neutral-900"
                }`}
              >
                {sz}
              </button>
            );
          })}
        </div>
      </div>

      {/* Thin Divider */}
      <div className="w-full h-px bg-[#ede5dd] my-5 sm:my-6" />

      {/* 8. Action Bar: Quantity Stepper + Add to Cart + Buy Now */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {/* Quantity Stepper */}
        <div className="bg-[#f0f0f0] rounded-full px-3.5 py-2.5 flex items-center justify-between gap-4 shrink-0 sm:w-32">
          <button
            type="button"
            onClick={handleDecreaseQty}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
            className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
              quantity <= 1
                ? "text-neutral-300 cursor-not-allowed"
                : "text-neutral-800 hover:bg-white hover:text-black cursor-pointer shadow-2xs"
            }`}
          >
            <Minus className="w-3.5 h-3.5" />
          </button>

          <span className="font-sans font-semibold text-sm text-neutral-900 tabular-nums">
            {quantity}
          </span>

          <button
            type="button"
            onClick={handleIncreaseQty}
            aria-label="Increase quantity"
            className="w-6 h-6 rounded-full flex items-center justify-center text-neutral-800 hover:bg-white hover:text-black transition-colors cursor-pointer shadow-2xs"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          type="button"
          onClick={handleAddToCart}
          className={`flex-1 rounded-full py-3.5 px-6 font-sans font-medium text-xs sm:text-[13px] tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
            isAdded
              ? "bg-[#241d1b] text-white"
              : "bg-[#242426] text-white hover:bg-black active:scale-98"
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-4 h-4 stroke-[2.5]" />
              <span>Added to Cart</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              <span>Add to Cart</span>
            </>
          )}
        </button>

        {/* Buy Now Button */}
        <button
          type="button"
          onClick={handleBuyNow}
          className="flex-1 rounded-full py-3.5 px-6 font-sans font-medium text-xs sm:text-[13px] tracking-wide border border-neutral-800 text-neutral-900 hover:bg-neutral-900 hover:text-white active:scale-98 transition-all flex items-center justify-center cursor-pointer shadow-xs"
        >
          Buy Now
        </button>
      </div>

      {/* Description Snippet */}
      {product.description && (
        <p className="font-sans text-xs sm:text-[13px] text-neutral-500 font-light leading-relaxed mt-5 pt-5 border-t border-[#ede5dd]">
          {product.description}
        </p>
      )}
    </div>
  );
}

