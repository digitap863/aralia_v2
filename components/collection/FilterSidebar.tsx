"use client";

import React, { useState } from "react";
import {
  SlidersHorizontal,
  ChevronDown,
  ChevronRight,
  Check,
  X,
  RotateCcw,
} from "lucide-react";
import type { ProductColor } from "@/data";

export interface CategoryCountItem {
  name: string;
  count: number;
}

export interface CupTypeCountItem {
  type: string;
  count: number;
}

export interface FilterSidebarProps {
  // Real dynamic data extracted from products
  categories: CategoryCountItem[];
  collectionName: string;
  totalProductsCount: number;
  minPrice: number;
  maxPrice: number;
  currentMaxPrice: number;
  availableSizes: string[];
  availableColors: ProductColor[];
  availableCupTypes: CupTypeCountItem[];

  // Active filter state
  selectedCategories: string[];
  selectedSizes: string[];
  selectedColors: string[];
  selectedCupTypes: string[];
  hasActiveFilters: boolean;

  // Handlers
  onToggleCategory: (categoryName: string) => void;
  onPriceChange: (newMaxPrice: number) => void;
  onToggleSize: (size: string) => void;
  onToggleColor: (colorName: string) => void;
  onToggleCupType: (cupType: string) => void;
  onClearAll: () => void;

  // Mobile drawer controls
  isMobileDrawer?: boolean;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

export default function FilterSidebar({
  categories,
  collectionName,
  totalProductsCount,
  minPrice,
  maxPrice,
  currentMaxPrice,
  availableSizes,
  availableColors,
  availableCupTypes,

  selectedCategories,
  selectedSizes,
  selectedColors,
  selectedCupTypes,
  hasActiveFilters,

  onToggleCategory,
  onPriceChange,
  onToggleSize,
  onToggleColor,
  onToggleCupType,
  onClearAll,

  isMobileDrawer = false,
  isOpenMobile = false,
  onCloseMobile,
}: FilterSidebarProps) {
  // Accordion collapsed/expanded states
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isSizeOpen, setIsSizeOpen] = useState(true);
  const [isColorsOpen, setIsColorsOpen] = useState(true);
  const [isCupOpen, setIsCupOpen] = useState(true);

  const isAllCategoriesSelected = selectedCategories.length === 0;

  const content = (
    <div className="flex flex-col gap-6">
      {/* Category Header & Checkbox List */}
      <div>
        <div className="flex items-center justify-between pb-3.5 border-b border-[#f0e7e1]">
          <h3 className="font-playfair text-base sm:text-lg font-semibold text-neutral-900 tracking-tight">
            Category
          </h3>
          <SlidersHorizontal className="w-4 h-4 text-neutral-500 stroke-[1.8]" />
        </div>

        {/* Real dynamic category list */}
        <div className="mt-3.5 space-y-2.5">
          {/* "All" Category option */}
          <label className="flex items-center gap-2.5 cursor-pointer group select-none">
            <span
              className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${
                isAllCategoriesSelected
                  ? "bg-[#241d1b] border-[#241d1b] text-white"
                  : "border-neutral-300 group-hover:border-neutral-500 bg-white"
              }`}
            >
              {isAllCategoriesSelected && <Check className="w-3 h-3 stroke-[3]" />}
            </span>
            <span
              className={`text-xs sm:text-[13px] font-sans transition-colors ${
                isAllCategoriesSelected
                  ? "font-medium text-neutral-900"
                  : "text-neutral-600 group-hover:text-neutral-900"
              }`}
            >
              All {collectionName} ({totalProductsCount})
            </span>
            <input
              type="checkbox"
              className="sr-only"
              checked={isAllCategoriesSelected}
              onChange={() => onToggleCategory("ALL")}
            />
          </label>

          {/* Individual Category options */}
          {categories.map((cat) => {
            const isChecked = selectedCategories.includes(cat.name);
            return (
              <label
                key={cat.name}
                className="flex items-center gap-2.5 cursor-pointer group select-none"
              >
                <span
                  className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${
                    isChecked
                      ? "bg-[#241d1b] border-[#241d1b] text-white"
                      : "border-neutral-300 group-hover:border-neutral-500 bg-white"
                  }`}
                >
                  {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                </span>
                <span
                  className={`text-xs sm:text-[13px] font-sans transition-colors ${
                    isChecked
                      ? "font-medium text-neutral-900"
                      : "text-neutral-600 group-hover:text-neutral-900"
                  }`}
                >
                  {cat.name} ({cat.count})
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isChecked}
                  onChange={() => onToggleCategory(cat.name)}
                />
              </label>
            );
          })}
        </div>
      </div>

      {/* Accordion: Price */}
      {maxPrice > minPrice && (
        <div className="pt-2 border-t border-[#f0e7e1]">
          <button
            type="button"
            onClick={() => setIsPriceOpen(!isPriceOpen)}
            className="w-full flex items-center justify-between py-2 text-left cursor-pointer group"
          >
            <span className="font-sans text-xs sm:text-sm font-semibold text-neutral-900 tracking-wide uppercase">
              Price
            </span>
            <ChevronDown
              className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${
                isPriceOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isPriceOpen && (
            <div className="pt-3 pb-1">
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                step={10}
                value={currentMaxPrice}
                onChange={(e) => onPriceChange(Number(e.target.value))}
                className="w-full accent-[#241d1b] h-1.5 bg-[#ede5dd] rounded-lg cursor-pointer"
              />
              <div className="flex items-center justify-between text-xs text-neutral-600 font-sans mt-2">
                <span>₹{minPrice}</span>
                <span className="font-semibold text-neutral-900">
                  Up to ₹{currentMaxPrice}
                </span>
                <span>₹{maxPrice}</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Accordion: Size */}
      {availableSizes.length > 0 && (
        <div className="pt-2 border-t border-[#f0e7e1]">
          <button
            type="button"
            onClick={() => setIsSizeOpen(!isSizeOpen)}
            className="w-full flex items-center justify-between py-2 text-left cursor-pointer group"
          >
            <span className="font-sans text-xs sm:text-sm font-semibold text-neutral-900 tracking-wide uppercase">
              Size
            </span>
            <ChevronDown
              className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${
                isSizeOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isSizeOpen && (
            <div className="pt-3 flex flex-wrap gap-2">
              {availableSizes.map((sz) => {
                const isSelected = selectedSizes.includes(sz);
                return (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => onToggleSize(sz)}
                    className={`px-3 py-1 rounded-full text-xs font-sans font-medium transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#241d1b] text-white border border-[#241d1b] shadow-xs"
                        : "bg-[#fbf7f4] border border-[#e7ddd6] text-neutral-700 hover:border-neutral-900"
                    }`}
                  >
                    {sz}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Accordion: Colors */}
      {availableColors.length > 0 && (
        <div className="pt-2 border-t border-[#f0e7e1]">
          <button
            type="button"
            onClick={() => setIsColorsOpen(!isColorsOpen)}
            className="w-full flex items-center justify-between py-2 text-left cursor-pointer group"
          >
            <span className="font-sans text-xs sm:text-sm font-semibold text-neutral-900 tracking-wide uppercase">
              Colors
            </span>
            <ChevronDown
              className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${
                isColorsOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isColorsOpen && (
            <div className="pt-3 flex flex-wrap items-center gap-2.5">
              {availableColors.map((color) => {
                const isSelected = selectedColors.includes(color.name);
                const isLight =
                  color.hex.toLowerCase() === "#ffffff" ||
                  color.hex.toLowerCase() === "#fff";

                return (
                  <button
                    key={color.name}
                    type="button"
                    title={color.name}
                    aria-label={`Filter by color ${color.name}`}
                    onClick={() => onToggleColor(color.name)}
                    style={{ backgroundColor: color.hex }}
                    className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                      isLight ? "border-neutral-300" : "border-black/10"
                    } ${
                      isSelected
                        ? "ring-2 ring-offset-2 ring-neutral-900 scale-110"
                        : "hover:scale-110"
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
          )}
        </div>
      )}

      {/* Accordion: Cup Type */}
      {availableCupTypes.length > 0 && (
        <div className="pt-2 border-t border-[#f0e7e1]">
          <button
            type="button"
            onClick={() => setIsCupOpen(!isCupOpen)}
            className="w-full flex items-center justify-between py-2 text-left cursor-pointer group"
          >
            <span className="font-sans text-xs sm:text-sm font-semibold text-neutral-900 tracking-wide uppercase">
              Cup Type
            </span>
            <ChevronDown
              className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${
                isCupOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isCupOpen && (
            <div className="pt-2 space-y-1">
              {availableCupTypes.map((cup) => {
                const isSelected = selectedCupTypes.includes(cup.type);
                return (
                  <button
                    key={cup.type}
                    type="button"
                    onClick={() => onToggleCupType(cup.type)}
                    className={`w-full flex items-center justify-between py-1.5 px-2 rounded-lg text-xs font-sans transition-colors cursor-pointer text-left ${
                      isSelected
                        ? "bg-[#241d1b] text-white font-medium"
                        : "text-neutral-700 hover:bg-[#fbf7f4]"
                    }`}
                  >
                    <span>
                      {cup.type} ({cup.count})
                    </span>
                    <ChevronRight
                      className={`w-3.5 h-3.5 stroke-[2] ${
                        isSelected ? "text-white" : "text-neutral-400"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Clear All Button */}
      {hasActiveFilters && (
        <div className="pt-3 border-t border-[#f0e7e1]">
          <button
            type="button"
            onClick={onClearAll}
            className="w-full py-2.5 rounded-full bg-[#241d1b] text-white text-xs font-sans font-medium tracking-wide hover:bg-[#382f2c] active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Clear All</span>
          </button>
        </div>
      )}
    </div>
  );

  // Desktop inline sidebar rendering
  if (!isMobileDrawer) {
    return (
      <aside className="w-full bg-white rounded-2xl border border-[#ede5dd] p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] sticky top-24">
        {content}
      </aside>
    );
  }

  // Mobile Slide-in Drawer rendering
  if (!isOpenMobile) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onCloseMobile}
        aria-hidden="true"
      />

      {/* Off-canvas Sheet */}
      <div className="relative ml-auto w-full max-w-xs sm:max-w-sm h-full bg-white shadow-2xl flex flex-col z-10 overflow-y-auto p-6">
        <div className="flex items-center justify-between pb-4 border-b border-[#f0e7e1] mb-5">
          <h2 className="font-playfair text-lg font-semibold text-neutral-900">
            Filters
          </h2>
          <button
            type="button"
            onClick={onCloseMobile}
            className="p-1.5 rounded-full text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
            aria-label="Close filters"
          >
            <X className="w-5 h-5 stroke-[2]" />
          </button>
        </div>

        {content}
      </div>
    </div>
  );
}

