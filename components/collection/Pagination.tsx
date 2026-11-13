"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  // Generate page numbers with ellipsis windowing
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage, "...", totalPages);
      }
    }
    return pages;
  };

  const handlePageSelect = (page: number) => {
    onPageChange(page);
    window.scrollTo({ top: 350, behavior: "smooth" });
  };

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 select-none pt-4 pb-2">
      {/* Prev Button */}
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => handlePageSelect(currentPage - 1)}
        className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full border text-xs sm:text-sm font-sans font-medium transition-all cursor-pointer ${
          currentPage === 1
            ? "border-neutral-200 text-neutral-300 cursor-not-allowed opacity-60"
            : "border-neutral-300 text-neutral-800 hover:border-neutral-900 hover:bg-neutral-50 active:scale-95"
        }`}
        aria-label="Previous Page"
      >
        <ChevronLeft className="w-3.5 h-3.5 stroke-[2.2]" />
        <span>Prev</span>
      </button>

      {/* Numbered Page Buttons */}
      <div className="flex items-center gap-1 sm:gap-1.5">
        {getPageNumbers().map((item, idx) => {
          if (item === "...") {
            return (
              <span
                key={`ellipsis-${idx}`}
                className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm text-neutral-400 font-sans tracking-widest"
              >
                ...
              </span>
            );
          }

          const pageNum = Number(item);
          const isActive = currentPage === pageNum;

          return (
            <button
              key={pageNum}
              type="button"
              onClick={() => handlePageSelect(pageNum)}
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs sm:text-sm font-sans font-medium transition-all flex items-center justify-center cursor-pointer ${
                isActive
                  ? "bg-[#241d1b] text-white shadow-xs"
                  : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 active:scale-95"
              }`}
              aria-label={`Go to page ${pageNum}`}
              aria-current={isActive ? "page" : undefined}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => handlePageSelect(currentPage + 1)}
        className={`inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full border text-xs sm:text-sm font-sans font-medium transition-all cursor-pointer ${
          currentPage === totalPages
            ? "border-neutral-200 text-neutral-300 cursor-not-allowed opacity-60"
            : "border-neutral-300 text-neutral-800 hover:border-neutral-900 hover:bg-neutral-50 active:scale-95"
        }`}
        aria-label="Next Page"
      >
        <span>Next</span>
        <ChevronRight className="w-3.5 h-3.5 stroke-[2.2]" />
      </button>
    </div>
  );
}

