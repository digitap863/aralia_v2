"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SizeTableRow {
  band: string;
  cups: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
}

const sizeData: SizeTableRow[] = [
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

export default function SizeGuide() {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [hoveredCup, setHoveredCup] = useState<string | null>(null);

  return (
    <section className="w-full bg-white pt-5 sm:pt-0 pb-4 sm:pb-6 md:pb-8 lg:pb-10 overflow-hidden select-none">
      <div className="max-w-8xlmx-auto px-5 sm:px-8 md:px-20 lg:px-22">
        
        {/* Main Card with Soft Blush Background */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-[#fae1de] border border-[#f2ded5] overflow-hidden p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_4px_24px_rgba(160,104,83,0.04)]">
          
          {/* Subtle Ambient Lace / Ribbon Texture on the Left (hidden on mobile) */}
          <div className="hidden md:block absolute md:left-0 md:-top-6 md:w-95 lg:w-105 h-[115%] pointer-events-none select-none opacity-45 mix-blend-multiply z-0">
            <Image
              src="/images/HomePage/size/left_img.webp"
              alt="Aralia lace ribbon accent"
              fill
              sizes="(max-width: 1024px) 380px, 420px"
              className="object-contain object-left pointer-events-none"
              priority={false}
            />
          </div>

          {/* 3-Column Content Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
            
            {/* 1. Left Content: Heading, Subtitle & CTA */}
            <div className="lg:col-span-3 xl:col-span-3 flex flex-col items-start">
              
              {/* Badge: HOW TO FIND YOUR SIZE */}
              <div className="inline-flex items-center px-3 sm:px-3.5 py-1 rounded-full border border-[#d8b5a5] bg-white/60 backdrop-blur-xs mb-3.5 sm:mb-4">
                <span className="font-sans text-[9px] sm:text-[10px] md:text-[11px] font-medium tracking-[0.16em] uppercase text-[#a06853]">
                  HOW TO FIND YOUR SIZE
                </span>
              </div>

              {/* Title */}
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] font-normal text-neutral-900 leading-[1.14] tracking-tight mb-3 sm:mb-4">
                Find Your <br />
                <span className="text-[#a06853]">Perfect Fit.</span>
              </h2>

              {/* Description */}
              <p className="font-sans text-xs sm:text-[13px] md:text-sm text-neutral-600 leading-relaxed max-w-[280px] sm:max-w-[320px] mb-5 sm:mb-7">
                The right fit makes all the difference. Follow our simple measurement guide to find your Aralia size.
              </p>

              {/* CTA Button */}
              <Link
                href="/size-guide"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm border border-neutral-900 bg-transparent text-neutral-900 text-xs sm:text-[13px] font-sans font-medium hover:bg-neutral-900 hover:text-white transition-all duration-300 group cursor-pointer shadow-2xs"
              >
                <span>Explore Size Guide</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* 2. Middle Column: Two Measurement Step Cards */}
            <div className="lg:col-span-5 xl:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              
              {/* Step Card 1: Measure Your Band Size */}
              <div className="group flex flex-col rounded-xl sm:rounded-2xl overflow-hidden border border-[#e5cdbf] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300">
                <div className="relative w-full aspect-[16/10] bg-[#f7ebe4] overflow-hidden">
                  <Image
                    src="/images/HomePage/size/Underbust Measurement in Pink Bra.webp"
                    alt="Measure Your Band Size"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
                <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <h3 className="font-sans font-semibold text-xs sm:text-[13px] text-neutral-900 mb-1">
                      Measure Your Band Size
                    </h3>
                    <p className="font-sans text-[11px] sm:text-xs text-neutral-600 leading-snug">
                      Wrap a measuring tape snugly around your ribcage, just below your bust.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step Card 2: Measure Your Bust Size */}
              <div className="group flex flex-col rounded-xl sm:rounded-2xl overflow-hidden border border-[#e5cdbf] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300">
                <div className="relative w-full aspect-[16/10] bg-[#f7ebe4] overflow-hidden">
                  <Image
                    src="/images/HomePage/size/Studio Measuring Tape Portrait.webp"
                    alt="Measure Your Bust Size"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
                <div className="p-3.5 sm:p-4 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <h3 className="font-sans font-semibold text-xs sm:text-[13px] text-neutral-900 mb-1">
                      Measure Your Bust Size
                    </h3>
                    <p className="font-sans text-[11px] sm:text-xs text-neutral-600 leading-snug">
                      Measure around the fullest part of your bust, keeping the tape comfortable and level.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* 3. Right Column: Bra Size Chart Table */}
            <div className="lg:col-span-4 xl:col-span-4 w-full">
              <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-[#dfc5b7] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
                
                {/* Deep Wine / Maroon Header Banner */}
                <div className="bg-[#781834] text-white py-2.5 px-4 text-center">
                  <h3 className="font-sans font-medium text-xs sm:text-[13px] tracking-wide">
                    Bra Size Chart (in inches)
                  </h3>
                </div>

                {/* Table Content */}
                <div className="w-full overflow-x-auto">
                  <table className="w-full border-collapse text-left text-neutral-800">
                    <thead>
                      {/* Top Header Row */}
                      <tr className="bg-[#fbf0ea] border-b border-[#e5cbbe]">
                        <th
                          rowSpan={2}
                          scope="col"
                          className="py-2.5 px-2.5 sm:px-3 text-center font-sans font-semibold text-[11px] sm:text-xs text-neutral-800 border-r border-[#e5cbbe] w-[24%]"
                        >
                          Band Size
                        </th>
                        <th
                          colSpan={4}
                          scope="col"
                          className="py-1.5 px-2 text-center font-sans font-semibold text-[11px] sm:text-xs text-neutral-800 border-b border-[#e5cbbe]"
                        >
                          Bust Size (Cup)
                        </th>
                      </tr>

                      {/* Sub-Header Row: A, B, C, D */}
                      <tr className="bg-[#fbf0ea] border-b border-[#e5cbbe]">
                        {(["A", "B", "C", "D"] as const).map((cup, idx) => (
                          <th
                            key={cup}
                            scope="col"
                            onMouseEnter={() => setHoveredCup(cup)}
                            onMouseLeave={() => setHoveredCup(null)}
                            className={`py-1.5 px-1 sm:px-2 text-center font-sans font-semibold text-[11px] sm:text-xs transition-colors ${
                              idx < 3 ? "border-r border-[#e5cbbe]" : ""
                            } ${hoveredCup === cup ? "bg-[#f3ded4] text-[#781834]" : "text-neutral-800"}`}
                          >
                            {cup}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {sizeData.map((row, rowIdx) => {
                        const isRowHovered = hoveredRow === row.band;
                        const isLast = rowIdx === sizeData.length - 1;

                        return (
                          <tr
                            key={row.band}
                            onMouseEnter={() => setHoveredRow(row.band)}
                            onMouseLeave={() => setHoveredRow(null)}
                            className={`transition-colors ${
                              !isLast ? "border-b border-[#e5cbbe]" : ""
                            } ${isRowHovered ? "bg-[#fef5f0]" : "bg-white"}`}
                          >
                            {/* Band Size Column */}
                            <td
                              className={`py-2.5 px-2 text-center font-sans font-semibold text-xs sm:text-[13px] border-r border-[#e5cbbe] transition-colors ${
                                isRowHovered ? "bg-[#fbf0ea] text-[#781834]" : "bg-[#fbf0ea]/45 text-neutral-900"
                              }`}
                            >
                              {row.band}
                            </td>

                            {/* Cup Values */}
                            {(["A", "B", "C", "D"] as const).map((cup, cupIdx) => {
                              const isCupHovered = hoveredCup === cup;

                              return (
                                <td
                                  key={cup}
                                  onMouseEnter={() => setHoveredCup(cup)}
                                  onMouseLeave={() => setHoveredCup(null)}
                                  className={`py-2.5 px-1 sm:px-2 text-center font-sans text-[11px] sm:text-xs whitespace-nowrap transition-colors ${
                                    cupIdx < 3 ? "border-r border-[#e5cbbe]" : ""
                                  } ${
                                    isRowHovered || isCupHovered
                                      ? "bg-[#faeee8] text-neutral-900 font-medium"
                                      : "text-neutral-700"
                                  }`}
                                >
                                  {row.cups[cup]}
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

