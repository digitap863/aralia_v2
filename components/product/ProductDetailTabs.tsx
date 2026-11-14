"use client";

import React, { useState, useEffect } from "react";
import type { ProductItem } from "@/data";
import {
  ProductDetailsTab,
  ProductSizeChartTab,
  ProductReviewsTab,
} from "./tabs";

interface ProductDetailTabsProps {
  product: ProductItem;
}

export default function ProductDetailTabs({ product }: ProductDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<"details" | "sizeChart" | "reviews">("details");

  useEffect(() => {
    const handleOpenTab = (e: Event) => {
      const customEvent = e as CustomEvent<"details" | "sizeChart" | "reviews">;
      if (customEvent.detail) {
        setActiveTab(customEvent.detail);
      }
    };

    const checkHash = () => {
      if (window.location.hash === "#size-chart" || window.location.hash === "#size-guide") {
        setActiveTab("sizeChart");
        const el = document.getElementById("product-detail-tabs");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else if (window.location.hash === "#reviews") {
        setActiveTab("reviews");
        const el = document.getElementById("product-detail-tabs");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    window.addEventListener("aralia:open-tab", handleOpenTab);
    window.addEventListener("hashchange", checkHash);
    checkHash();

    return () => {
      window.removeEventListener("aralia:open-tab", handleOpenTab);
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  return (
    <section
      id="product-detail-tabs"
      className="w-full bg-white py-8 sm:py-10 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Tabs Header */}
        <div className="flex items-center gap-6 sm:gap-12 border-b border-[#e5ddd7] pb-px select-none overflow-x-auto scrollbar-none whitespace-nowrap">
          <button
            type="button"
            onClick={() => setActiveTab("details")}
            className={`pb-3 text-sm sm:text-base font-sans tracking-tight transition-all cursor-pointer relative ${
              activeTab === "details"
                ? "text-neutral-900 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-neutral-900"
                : "text-neutral-500 font-normal hover:text-neutral-800"
            }`}
          >
            Product Details
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("sizeChart")}
            className={`pb-3 text-sm sm:text-base font-sans tracking-tight transition-all cursor-pointer relative ${
              activeTab === "sizeChart"
                ? "text-neutral-900 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-neutral-900"
                : "text-neutral-500 font-normal hover:text-neutral-800"
            }`}
          >
            Size Chart
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("reviews")}
            className={`pb-3 text-sm sm:text-base font-sans tracking-tight transition-all cursor-pointer relative ${
              activeTab === "reviews"
                ? "text-neutral-900 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-neutral-900"
                : "text-neutral-500 font-normal hover:text-neutral-800"
            }`}
          >
            Reviews {product.reviewsCount ? `(${product.reviewsCount})` : "(451)"}
          </button>
        </div>

        {/* Modular Tab Content Panes */}
        {activeTab === "details" && <ProductDetailsTab product={product} />}
        {activeTab === "sizeChart" && <ProductSizeChartTab product={product} />}
        {activeTab === "reviews" && <ProductReviewsTab product={product} />}
      </div>
    </section>
  );
}
