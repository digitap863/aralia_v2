"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { ProductItem } from "@/data";

interface ProductSizeChartTabProps {
  product?: ProductItem;
}

interface SizeTableRow {
  band: string;
  cups: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
}

const braSizeData: SizeTableRow[] = [
  {
    band: "32",
    cups: {
      A: "33 – 34",
      B: "34 – 35",
      C: "35 – 36",
      D: "36 – 37",
    },
  },
  {
    band: "34",
    cups: {
      A: "35 – 36",
      B: "36 – 37",
      C: "37 – 38",
      D: "38 – 39",
    },
  },
  {
    band: "36",
    cups: {
      A: "37 – 38",
      B: "38 – 39",
      C: "39 – 40",
      D: "40 – 41",
    },
  },
  {
    band: "38",
    cups: {
      A: "39 – 40",
      B: "40 – 41",
      C: "41 – 42",
      D: "42 – 43",
    },
  },
];

export default function ProductSizeChartTab({ product }: ProductSizeChartTabProps) {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [hoveredCup, setHoveredCup] = useState<string | null>(null);

  return (
    <div className="pt-8 sm:pt-10 max-w-6xl mx-auto space-y-8 select-none">
      {/* 1. Top Header: Badge, Heading, and Description */}
      <div className="max-w-xl">
        {/* HOW TO FIND YOUR SIZE Pill Badge */}
        <div className="inline-flex items-center px-3 sm:px-3.5 py-1 rounded-full border border-[#d8b5a5] bg-white/70 backdrop-blur-xs mb-3">
          <span className="font-sans text-[9px] sm:text-[10px] md:text-[11px] font-medium tracking-[0.16em] uppercase text-[#a06853]">
            HOW TO FIND YOUR SIZE
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-[42px] font-normal text-neutral-900 tracking-tight leading-[1.14] mb-2.5">
          Find Your <span className="text-[#a06853]">Perfect Fit.</span>
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
          The right fit makes all the difference. Follow our simple measurement guide to find your Aralia size.
        </p>
      </div>

      {/* 2. Main Layout: Left Size Chart Table + Right Two Step Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-start">
        {/* Left Column: Bra Size Chart (in inches) Table */}
        <div className="lg:col-span-7 xl:col-span-7 w-full">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-[#e5a8b6] bg-[#fdeeed] shadow-2xs">
            {/* Deep Wine / Burgundy Header Banner */}
            <div className="bg-[#781834] text-white py-2 sm:py-2.5 px-4 sm:px-5 text-center sm:text-left">
              <h3 className="font-sans font-semibold text-xs sm:text-sm md:text-base tracking-wide">
                Bra Size Chart (in inches)
              </h3>
            </div>

            {/* Table */}
            <div className="w-full overflow-x-auto">
              <table className="w-full border-collapse text-center font-sans">
                <thead>
                  {/* Top Header Row */}
                  <tr className="bg-[#fce5e6] border-b border-[#e5a8b6]">
                    <th
                      rowSpan={2}
                      scope="col"
                      className="py-1.5 sm:py-2 px-2 sm:px-3 text-center font-sans font-bold text-xs sm:text-[13px] text-neutral-900 border-r border-[#e5a8b6] w-[26%]"
                    >
                      Band Size
                    </th>
                    <th
                      colSpan={4}
                      scope="col"
                      className="py-1 sm:py-1.5 px-2 sm:px-3 text-center font-sans font-bold text-xs sm:text-[13px] text-neutral-900 border-b border-[#e5a8b6]"
                    >
                      Bust Size (Cup)
                    </th>
                  </tr>

                  {/* Sub-Header Row: A, B, C, D */}
                  <tr className="bg-[#fce5e6] border-b border-[#e5a8b6]">
                    {(["A", "B", "C", "D"] as const).map((cup, idx) => (
                      <th
                        key={cup}
                        scope="col"
                        onMouseEnter={() => setHoveredCup(cup)}
                        onMouseLeave={() => setHoveredCup(null)}
                        className={`py-1 sm:py-1.5 px-2 text-center font-sans font-bold text-xs sm:text-[13px] transition-colors ${
                          idx < 3 ? "border-r border-[#e5a8b6]" : ""
                        } ${
                          hoveredCup === cup
                            ? "bg-[#f5ced5] text-[#781834]"
                            : "text-neutral-900"
                        }`}
                      >
                        {cup}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#e5a8b6] text-neutral-900">
                  {braSizeData.map((row) => {
                    const isRowHovered = hoveredRow === row.band;
                    return (
                      <tr
                        key={row.band}
                        onMouseEnter={() => setHoveredRow(row.band)}
                        onMouseLeave={() => setHoveredRow(null)}
                        className={`transition-colors ${
                          isRowHovered ? "bg-[#fbdcdb]" : "hover:bg-[#fce9e8]"
                        }`}
                      >
                        {/* Band Size Column */}
                        <td
                          className={`py-2 sm:py-2.5 px-2 sm:px-3 font-sans font-bold text-xs sm:text-sm border-r border-[#e5a8b6] transition-colors ${
                            isRowHovered ? "text-[#781834]" : "text-neutral-900"
                          }`}
                        >
                          {row.band}
                        </td>

                        {/* Cup A */}
                        <td
                          className={`py-2 sm:py-2.5 px-1.5 sm:px-2 text-xs sm:text-[13px] font-medium border-r border-[#e5a8b6] transition-colors ${
                            hoveredCup === "A" || isRowHovered
                              ? "bg-[#fbe0e0]/70 font-semibold text-[#781834]"
                              : "text-neutral-800"
                          }`}
                        >
                          {row.cups.A}
                        </td>

                        {/* Cup B */}
                        <td
                          className={`py-2 sm:py-2.5 px-1.5 sm:px-2 text-xs sm:text-[13px] font-medium border-r border-[#e5a8b6] transition-colors ${
                            hoveredCup === "B" || isRowHovered
                              ? "bg-[#fbe0e0]/70 font-semibold text-[#781834]"
                              : "text-neutral-800"
                          }`}
                        >
                          {row.cups.B}
                        </td>

                        {/* Cup C */}
                        <td
                          className={`py-2 sm:py-2.5 px-1.5 sm:px-2 text-xs sm:text-[13px] font-medium border-r border-[#e5a8b6] transition-colors ${
                            hoveredCup === "C" || isRowHovered
                              ? "bg-[#fbe0e0]/70 font-semibold text-[#781834]"
                              : "text-neutral-800"
                          }`}
                        >
                          {row.cups.C}
                        </td>

                        {/* Cup D */}
                        <td
                          className={`py-2 sm:py-2.5 px-1.5 sm:px-2 text-xs sm:text-[13px] font-medium transition-colors ${
                            hoveredCup === "D" || isRowHovered
                              ? "bg-[#fbe0e0]/70 font-semibold text-[#781834]"
                              : "text-neutral-800"
                          }`}
                        >
                          {row.cups.D}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: 2 Measurement Step Cards with Model Photos */}
        <div className="lg:col-span-5 xl:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4.5">
          {/* Step Card 1: Measure Your Band Size */}
          <div className="group flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden border border-[#ede5dd] bg-white shadow-2xs hover:shadow-md transition-all duration-300">
            <div className="relative w-full aspect-[4/3] bg-[#f7ebe4] overflow-hidden">
              <Image
                src="/images/HomePage/size/Underbust Measurement in Pink Bra.webp"
                alt="Measure Your Band Size"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 240px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-104 pointer-events-none select-none"
              />
            </div>
            <div className="p-4 sm:p-4.5 flex flex-col justify-between flex-1 bg-white">
              <div>
                <h4 className="font-sans font-semibold text-xs sm:text-[13px] text-neutral-900 mb-1">
                  Measure Your Band Size
                </h4>
                <p className="font-sans text-[11px] sm:text-xs text-neutral-500 leading-snug font-light">
                  Wrap a measuring tape snugly around your ribcage, just below your bust.
                </p>
              </div>
            </div>
          </div>

          {/* Step Card 2: Measure Your Bust Size */}
          <div className="group flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden border border-[#ede5dd] bg-white shadow-2xs hover:shadow-md transition-all duration-300">
            <div className="relative w-full aspect-[4/3] bg-[#f7ebe4] overflow-hidden">
              <Image
                src="/images/HomePage/size/Studio Measuring Tape Portrait.webp"
                alt="Measure Your Bust Size"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 240px"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-104 pointer-events-none select-none"
              />
            </div>
            <div className="p-4 sm:p-4.5 flex flex-col justify-between flex-1 bg-white">
              <div>
                <h4 className="font-sans font-semibold text-xs sm:text-[13px] text-neutral-900 mb-1">
                  Measure Your Bust Size
                </h4>
                <p className="font-sans text-[11px] sm:text-xs text-neutral-500 leading-snug font-light">
                  Measure around the fullest part of your bust, keeping the tape comfortable and level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
