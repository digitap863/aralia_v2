"use client";

import React, { useState, useMemo } from "react";
import {
  Star,
  Check,
  MoreHorizontal,
  SlidersHorizontal,
  ChevronDown,
  ArrowRight,
  X,
} from "lucide-react";
import type { ProductItem } from "@/data";
import {
  getReviewsByProductId,
  calculateReviewSummary,
  type ReviewItem,
} from "@/data/reviews";

interface ProductReviewsTabProps {
  product?: ProductItem;
}

/**
 * Renders exact stars matching the reference image:
 * e.g. Liam K. has 4 stars, Ava H. has 4 full + 1 half star
 */
function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1 text-[#f59e0b]">
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star
          key={`full-${i}`}
          className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#f59e0b] text-[#f59e0b]"
        />
      ))}
      {hasHalf && (
        <div className="relative w-4 h-4 sm:w-4.5 sm:h-4.5">
          {/* Empty gray background star */}
          <Star className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-neutral-200 fill-neutral-200" />
          {/* Half filled overlay */}
          <div className="absolute inset-0 overflow-hidden w-[50%]">
            <Star className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#f59e0b] text-[#f59e0b]" />
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProductReviewsTab({ product }: ProductReviewsTabProps) {
  // 1. Fetch reviews dynamically from the reviews data source
  const [reviews, setReviews] = useState<ReviewItem[]>(() =>
    getReviewsByProductId(product?.id)
  );

  const [sortBy, setSortBy] = useState<"latest" | "highest" | "lowest">("latest");
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  // Form states for adding dynamic reviews
  const [newName, setNewName] = useState("");
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [isSuccess, setIsSuccess] = useState(false);

  // 2. Compute live rating statistics dynamically
  const summary = useMemo(() => calculateReviewSummary(reviews), [reviews]);
  const displayTotalCount = product?.reviewsCount || 451;

  // 3. Dynamic sorting & filtering
  const processedReviews = useMemo(() => {
    let list = [...reviews];


    // Sort
    switch (sortBy) {
      case "highest":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "lowest":
        list.sort((a, b) => a.rating - b.rating);
        break;
      case "latest":
      default:
        list.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
        break;
    }

    return list;
  }, [reviews, sortBy]);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) return;

    const newReview: ReviewItem = {
      id: `rev-${Date.now()}`,
      productId: product?.id,
      name: newName.trim(),
      isVerified: true,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      timestamp: Date.now(),
      rating: newRating,
      comment: newComment.trim(),
    };

    setReviews((prev) => [newReview, ...prev]);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setShowReviewForm(false);
      setNewName("");
      setNewComment("");
    }, 1500);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="pt-8 sm:pt-10 max-w-5xl mx-auto space-y-8 select-none">
      {/* 1. Customer Reviews Rating Breakdown Card */}
      <div className="bg-[#fffcfb] rounded-2xl sm:rounded-3xl border border-[#ede5dd] p-6 sm:p-8 md:p-9 shadow-2xs">
        <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#ede5dd]">
          <h3 className="font-playfair text-xl sm:text-2xl font-normal text-neutral-900 tracking-tight">
            Customer Reviews{" "}
            <span className="text-neutral-500 font-sans text-base sm:text-lg font-light">
              (320)
            </span>
          </h3>

          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("reviews-grid");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-sans font-medium text-neutral-800 hover:text-black transition-colors cursor-pointer group"
          >
            <span>View All Reviews</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left: Overall Score (dynamically rendered) */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-1.5 md:border-r md:border-[#ede5dd] md:pr-8">
            <div className="flex items-baseline gap-1">
              <span className="font-sans text-4xl sm:text-5xl font-bold text-neutral-900 tracking-tight">
                {summary.average.toFixed(1)}
              </span>
              <span className="font-sans text-xl sm:text-2xl text-neutral-400 font-light">
                / 5
              </span>
            </div>

            <div className="flex items-center gap-1 py-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]"
                />
              ))}
            </div>

            <p className="font-sans text-xs sm:text-[13px] text-neutral-500 font-light">
              Based on 320 reviews
            </p>
          </div>

          {/* Right: Star Breakdown Progress Bars */}
          <div className="md:col-span-8 w-full space-y-2.5">
            {summary.breakdown.map((row) => (
              <div
                key={row.stars}
                className="flex items-center gap-3 text-xs sm:text-sm font-sans"
              >
                <span className="w-6 text-right font-medium text-neutral-800 shrink-0">
                  {row.stars} ★
                </span>

                <div className="flex-1 h-2 sm:h-2.5 bg-[#f0eae5] rounded-full overflow-hidden">
                  <div
                    style={{ width: `${row.percentage}%` }}
                    className="h-full bg-[#502328] rounded-full transition-all duration-700"
                  />
                </div>

                <span className="w-9 text-right font-medium text-neutral-600 tabular-nums shrink-0">
                  {row.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Reviews Toolbar: "All Reviews (451)" + Filter + Sort + "Write a Review" */}
      <div
        id="reviews-grid"
        className="flex flex-wrap items-center justify-between gap-4 pt-2"
      >
        <h4 className="font-sans text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
          All Reviews{" "}
          <span className="text-neutral-400 font-normal text-sm sm:text-base font-sans">
            ({displayTotalCount})
          </span>
        </h4>

        <div className="flex items-center gap-2.5 sm:gap-3">
        

          {/* Dynamic Sort Dropdown */}
          <div className="relative inline-flex items-center">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="appearance-none bg-[#f3f4f6] hover:bg-[#e5e7eb] border border-neutral-200 rounded-full pl-4 pr-9 py-2 text-xs sm:text-sm font-sans font-medium text-neutral-800 transition-colors cursor-pointer focus:outline-none"
            >
              <option value="latest">Latest</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-neutral-500 absolute right-3 pointer-events-none stroke-[2.5]" />
          </div>

          {/* Write a Review Button */}
          <button
            type="button"
            onClick={() => setShowReviewForm((prev) => !prev)}
            className="bg-black hover:bg-neutral-800 active:scale-98 text-white rounded-full px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-sans font-medium transition-all cursor-pointer shadow-xs"
          >
            {showReviewForm ? "Cancel" : "Write a Review"}
          </button>
        </div>
      </div>

      {/* Review Submission Form Drawer */}
      {showReviewForm && (
        <form
          onSubmit={handleAddReview}
          className="bg-white border border-[#e5e7eb] rounded-2xl p-5 sm:p-7 space-y-4 shadow-sm animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
            <h5 className="font-sans text-base font-semibold text-neutral-900">
              Write a Review for {product?.name || "Aralia"}
            </h5>
            <button
              type="button"
              onClick={() => setShowReviewForm(false)}
              className="text-neutral-400 hover:text-neutral-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-sans text-neutral-600">Your Rating:</span>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setNewRating(star)}
                  className="cursor-pointer"
                >
                  <Star
                    className={`w-4 h-4 ${
                      star <= newRating
                        ? "fill-[#f59e0b] text-[#f59e0b]"
                        : "text-neutral-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <input
            type="text"
            placeholder="Your Name *"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            required
            className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm bg-[#faf8f6] focus:bg-white focus:outline-none focus:ring-1 focus:ring-black"
          />

          <textarea
            placeholder="Write your review here. What did you think about the fit, softness, and comfort? *"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
            rows={3}
            className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-xs sm:text-sm bg-[#faf8f6] focus:bg-white focus:outline-none focus:ring-1 focus:ring-black resize-none"
          />

          <div className="flex items-center justify-between">
            {isSuccess ? (
              <span className="text-xs text-emerald-600 font-medium">
                Thank you! Your review has been submitted dynamically.
              </span>
            ) : (
              <span />
            )}
            <button
              type="submit"
              className="bg-black text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-sans font-medium hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Post Review
            </button>
          </div>
        </form>
      )}

      {/* 3. Review Cards 2-Column Grid (dynamically mapped from processedReviews) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {processedReviews.slice(0, visibleCount).map((rev) => (
          <div
            key={rev.id}
            className="bg-white rounded-2xl sm:rounded-[20px] border border-[#e5e7eb] p-6 sm:p-7 flex flex-col justify-between shadow-none hover:shadow-xs transition-shadow"
          >
            <div>
              {/* Top Row: Stars on left + Three Dots (...) on right */}
              <div className="flex items-center justify-between mb-3.5">
                <StarRating rating={rev.rating} />

                <button
                  type="button"
                  aria-label="More options"
                  className="text-neutral-400 hover:text-neutral-600 transition-colors cursor-pointer"
                >
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>

              {/* Author Row: Name + Green Verified Checkmark Circle Badge */}
              <div className="flex items-center gap-1.5 mb-3">
                <span className="font-sans font-bold text-base text-neutral-900">
                  {rev.name}
                </span>
                {rev.isVerified && (
                  <span
                    aria-label="Verified Reviewer"
                    className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#10b981] text-white shrink-0"
                  >
                    <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                  </span>
                )}
              </div>

              {/* Review Text Body */}
              <p className="font-sans text-xs sm:text-[13px] text-[#4b5563] font-normal leading-relaxed mb-6">
                {rev.comment}
              </p>
            </div>

            {/* Date Footer: Posted on [Date] */}
            <div className="mt-auto">
              <span className="font-sans text-xs text-neutral-400 font-normal">
                Posted on {rev.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 4. "Load More Reviews" Button (CENTERED per user request) */}
      {visibleCount < processedReviews.length && (
        <div className="flex justify-center items-center pt-4 pb-6">
          <button
            type="button"
            onClick={handleLoadMore}
            className="bg-white hover:bg-[#faf7f4] border border-neutral-200 text-neutral-800 text-xs sm:text-sm font-sans font-medium px-8 py-3 rounded-full transition-all cursor-pointer shadow-2xs hover:shadow-xs active:scale-98"
          >
            Load More Reviews
          </button>
        </div>
      )}
    </div>
  );
}
