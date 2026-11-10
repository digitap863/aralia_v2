"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Playball } from "next/font/google";

const script = Playball({ subsets: ["latin"], weight: "400" });


export default function NatureBanner() {
  return (
    <section className="w-full overflow-hidden select-none bg-[#fbf6f3]">
      {/* container-type lets children size themselves with cqw units */}
      <div className="relative w-full aspect-2048/708 @container">
        <Link
          href="/collections/signature"
          aria-label="Discover The Signature Collections - Nature, Woven Into You"
          className="group block relative w-full h-full overflow-hidden cursor-pointer"
        >
          {/* Background only */}
          <Image
            src="/images/HomePage/nature-banner.webp"
            alt="Aralia - Nature, Woven Into You. Strong Looks, Stronger Lifts."
            fill
            priority={false}
            sizes="100vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />

          {/* "Nature," */}
          <h2
            className="absolute pointer-events-none font-sans font-normal leading-none text-[#0a5a12]"
            style={{ left: "22.6%", top: "9%", fontSize: "6.3cqw" }}
          >
            Nature,
          </h2>

          {/* "Woven Into You." */}
          <p
            className={`${script.className} absolute pointer-events-none leading-none text-[#0a5a12] italic whitespace-nowrap`}
            style={{ left: "29.4%", top: "29.5%", fontSize: "3.7cqw" }}
          >
            Woven Into You.
          </p>

          {/* Arrow underline */}
          <svg
            className="absolute pointer-events-none text-[#0a5a12]"
            style={{ left: "32.8%", top: "43%", width: "14.2%" }}
            viewBox="0 0 160 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M2 8 H156" opacity="0.85" />
            <path d="M146 2 L157 8 L146 13" />
          </svg>

          {/* Logo above "Strong Looks," */}
          {/* Logo above "Strong Looks," */}
<div
  className="absolute pointer-events-none -translate-x-1/2"
  style={{ left: "60%", top: "8%", width: "13%" }}
>
  <Image
    src="/images/logo.webp"
    alt="Aralia Premium Innerwear"
    width={275}
    height={193}
    sizes="13vw"
    className="w-full h-auto drop-shadow-[0_1px_2px_rgba(120,60,50,0.15)]"
  />
</div>

          {/* CTA button – under the 3 feature icons */}
          <div
            className="absolute -translate-x-1/2 pointer-events-auto"
            style={{ left: "68.1%", bottom: "5.6%" }}
          >
            <span
              className="inline-flex items-center justify-center whitespace-nowrap rounded-[3px] bg-[#221c1a] text-white font-sans font-medium tracking-wide shadow-md transition-all duration-300 group-hover:bg-[#342a26] group-hover:shadow-lg group-hover:scale-105"
              style={{
                gap: "0.5cqw",
                padding: "0.95cqw 2.1cqw",
                fontSize: "clamp(8px, 1.2cqw, 15px)",
                minWidth: "23cqw",
              }}
            >
              <span>Discover&nbsp; The Signature Collections</span>
              <ArrowRight className="w-[1.2em] h-[1.2em] transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}