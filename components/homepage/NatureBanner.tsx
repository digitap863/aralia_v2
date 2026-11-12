"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Cloud, Waves } from "lucide-react";
import { Playball } from "next/font/google";

const script = Playball({ subsets: ["latin"], weight: "400" });

const GREEN = "#0a5a12";
const ROSE = "#c98383";

const features = [
  { label: ["Natural", "Support"], Icon: Leaf },
  { label: ["All-Day", "Comfort"], Icon: Cloud },
  { label: ["Seamless", "Fit"], Icon: Waves },
];

/* Curved (swoosh) arrow instead of a straight line */
function CurvedArrow({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 160 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path
        d="M2 5 C 40 24, 105 24, 152 9"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M142 4 L153 9 L143 17"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function NatureBanner() {
  return (
    <section className="w-full overflow-hidden select-none bg-[#fbf6f3]">
      {/* =====================================================
          MOBILE + TABLET (below lg): image on top, content below
      ===================================================== */}
      <div className="lg:hidden">
        <div className="relative w-full aspect-[3/2] sm:aspect-[2/1]">
          <Image
            src="/images/HomePage/nature-banner.webp"
            alt="Aralia - Nature, Woven Into You."
            fill
            sizes="100vw"
            className="object-cover object-[18%_center]"
          />
        </div>

        <div className="px-6 sm:px-10 py-8 sm:py-10 text-center bg-linear-to-b from-[#fdeee9] to-[#fbf6f3]">
          <h2
            className="font-sans font-normal leading-none text-5xl sm:text-6xl"
            style={{ color: GREEN }}
          >
            Nature,
          </h2>
          <p
            className={`${script.className} italic mt-2 text-3xl sm:text-4xl`}
            style={{ color: GREEN }}
          >
            Woven Into You.
          </p>
          <CurvedArrow
            className="mx-auto mt-1 w-28 sm:w-36"
            style={{ color: GREEN }}
          />

          <Image
            src="/images/logo.webp"
            alt="Aralia Premium Innerwear"
            width={275}
            height={193}
            className="mx-auto mt-6 w-24 sm:w-28 h-auto grayscale opacity-70"
          />

          <h3 className="mt-4 font-sans leading-tight">
            <span className="block text-2xl sm:text-3xl text-[#4a4545]">
              Strong Looks,
            </span>
            <span
              className="block text-2xl sm:text-3xl font-bold"
              style={{ color: ROSE }}
            >
              Stronger Lifts.
            </span>
          </h3>

          <p className="mx-auto mt-3 max-w-md text-sm sm:text-base leading-relaxed text-[#5d5656]">
            Inspired by nature, designed for your body. Experience effortless
            comfort, gentle support, and a fit that moves with you.
          </p>

          <div className="mx-auto mt-6 grid max-w-md grid-cols-3">
            {features.map(({ label, Icon }, i) => (
              <div
                key={label.join(" ")}
                className={`flex flex-col items-center gap-2 px-2 ${
                  i > 0 ? "border-l" : ""
                }`}
                style={{ borderColor: `${ROSE}55` }}
              >
                <Icon
                  className="w-6 h-6 sm:w-7 sm:h-7"
                  strokeWidth={1.2}
                  style={{ color: ROSE }}
                />
                <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider leading-tight text-[#6b5f5f]">
                  {label[0]}
                  <br />
                  {label[1]}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/collections/signature"
            className="mt-7 inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-[3px] bg-[#221c1a] px-5 py-3 text-sm font-medium tracking-wide text-white shadow-md transition-colors hover:bg-[#342a26]"
          >
            <span>Discover The Signature Collections</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* =====================================================
          DESKTOP (lg+): text overlaid on the image, scaled with cqw
      ===================================================== */}
      <div className="hidden lg:block relative w-full aspect-2048/708 @container">
        <Image
          src="/images/HomePage/nature-banner.webp"
          alt="Aralia - Nature, Woven Into You. Strong Looks, Stronger Lifts."
          fill
          sizes="100vw"
          className="object-cover object-center pointer-events-none"
        />

        {/* "Nature," */}
        <h2
          className="absolute pointer-events-none font-sans font-normal leading-none"
          style={{
            left: "22.6%",
            top: "9%",
            fontSize: "6.3cqw",
            color: ROSE,
          }}
        >
          Nature,
        </h2>

        {/* "Woven Into You." */}
        <p
          className={`${script.className} absolute pointer-events-none leading-none italic whitespace-nowrap`}
          style={{
            left: "29.4%",
            top: "29.5%",
            fontSize: "3.7cqw",
            color: ROSE,
          }}
        >
          Woven Into You.
        </p>

        {/* Curved arrow */}
        <CurvedArrow
          className="absolute pointer-events-none"
          style={{ left: "32.8%", top: "42%", width: "14.2%", color: ROSE }}
        />

        {/* Logo (grey) */}
        <div
          className="absolute pointer-events-none -translate-x-1/2"
          style={{ left: "61.5%", top: "18%", width: "10%" }}
        >
          <Image
            src="/images/logo.webp"
            alt="Aralia Premium Innerwear"
            width={275}
            height={193}
            sizes="10vw"
            className="w-full h-auto grayscale opacity-70"
          />
        </div>

        {/* Heading with vertical rose divider */}
        <div
          className="absolute pointer-events-none font-sans"
          style={{
            left: "53.3%",
            top: "41.5%",
            paddingLeft: "1.1cqw",
            borderLeft: `1.5px solid ${ROSE}`,
            lineHeight: 1.15,
          }}
        >
          <span
            className="block text-[#4a4545]"
            style={{ fontSize: "clamp(16px, 2.45cqw, 40px)" }}
          >
            Strong Looks,
          </span>
          <span
            className="block font-bold"
            style={{
              fontSize: "clamp(18px, 2.75cqw, 44px)",
              color: ROSE,
            }}
          >
            Stronger Lifts.
          </span>
        </div>

        {/* Paragraph */}
        <p
          className="absolute pointer-events-none font-sans text-[#5d5656]"
          style={{
            left: "53.3%",
            top: "59.5%",
            width: "30.5%",
            fontSize: "clamp(9px, 1.1cqw, 16px)",
            lineHeight: 1.45,
          }}
        >
          Inspired by nature, designed for your body. Experience effortless
          comfort, gentle support, and a fit that moves with you.
        </p>

        {/* Feature icons row */}
        <div
          className="absolute pointer-events-none flex items-center font-sans"
          style={{ left: "53.3%", top: "72%", width: "31%" }}
        >
          {features.map(({ label, Icon }, i) => (
            <div
              key={label.join(" ")}
              className="flex flex-1 items-center"
              style={{
                gap: "0.7cqw",
                paddingLeft: i > 0 ? "1.4cqw" : 0,
                borderLeft: i > 0 ? `1px solid ${ROSE}55` : "none",
              }}
            >
              <Icon
                strokeWidth={1.1}
                style={{
                  color: ROSE,
                  width: "clamp(18px, 2.6cqw, 40px)",
                  height: "clamp(18px, 2.6cqw, 40px)",
                  flexShrink: 0,
                }}
              />
              <span
                className="font-medium uppercase text-[#6b5f5f]"
                style={{
                  fontSize: "clamp(7px, 0.9cqw, 13px)",
                  letterSpacing: "0.08em",
                  lineHeight: 1.25,
                }}
              >
                {label[0]}
                <br />
                {label[1]}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/collections"
          className="group absolute -translate-x-1/2 inline-flex items-center justify-center whitespace-nowrap rounded-[3px] bg-[#221c1a] text-white font-sans font-medium tracking-wide shadow-md transition-all duration-300 hover:bg-[#342a26] hover:shadow-lg"
          style={{
            left: "68.1%",
            bottom: "5.6%",
            gap: "0.5cqw",
            padding: "0.95cqw 2.1cqw",
            fontSize: "clamp(9px, 1.2cqw, 15px)",
            minWidth: "23cqw",
          }}
        >
          <span>Discover&nbsp; The Signature Collections</span>
          <ArrowRight className="w-[1.2em] h-[1.2em] transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
      </div>
    </section>
  );
}