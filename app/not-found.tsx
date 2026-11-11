import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Sparkles, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-[calc(100vh-140px)] flex flex-col justify-center items-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#ffffff] via-[#fcf9f7] to-[#f7f2ef] overflow-hidden select-none">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] sm:w-[750px] sm:h-[450px] -z-10 pointer-events-none blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(246,207,191,0.5) 0%, rgba(242,226,220,0.25) 50%, transparent 100%)",
        }}
      />

      {/* Subtle large decorative "404" watermark in background */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-playfair text-[120px] sm:text-[180px] md:text-[240px] font-bold text-[#AC7058]/6 select-none pointer-events-none tracking-widest -z-5"
      >
        404
      </div>

      <div className="w-full max-w-2xl mx-auto text-center flex flex-col items-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-[#AC7058]/50 bg-white/80 backdrop-blur-sm text-[10px] sm:text-xs font-sans font-medium tracking-[0.16em] uppercase text-[#AC7058] shadow-xs mb-5">
          <Compass className="w-3.5 h-3.5 text-[#AC7058]" />
          <span>404 • Page Not Found</span>
        </div>

        {/* Headline */}
        <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-[#1f1a18] font-normal tracking-tight mb-3 sm:mb-4">
          Lost in the Details?
        </h1>

        {/* Subtext */}
        <p className="font-sans text-neutral-600 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-lg mb-8">
          The page or product you are looking for doesn&apos;t exist, has been relocated, or is temporarily unavailable. Let us guide you back to our sanctuary of comfort.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#1f242d] hover:bg-black active:bg-neutral-900 text-white text-xs sm:text-[13px] font-medium tracking-wide rounded-xs transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/collections"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white hover:bg-neutral-50 active:bg-neutral-100 text-neutral-800 text-xs sm:text-[13px] font-medium tracking-wide rounded-xs border border-neutral-300 transition-all duration-200 shadow-xs hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#9f6e5a]" />
            <span>Explore Collections</span>
          </Link>
        </div>

        {/* Quick Directory Links */}
        <div className="pt-6 border-t border-neutral-200/80 w-full max-w-md">
          <p className="text-[11px] font-sans uppercase tracking-[0.12em] text-neutral-400 mb-3">
            Popular Destinations
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            <Link
              href="/shop"
              className="px-3 py-1 rounded-full bg-white/70 border border-neutral-200 text-neutral-700 hover:text-black hover:border-neutral-400 transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/collections"
              className="px-3 py-1 rounded-full bg-white/70 border border-neutral-200 text-neutral-700 hover:text-black hover:border-neutral-400 transition-colors"
            >
              Collections
            </Link>
            <Link
              href="/about"
              className="px-3 py-1 rounded-full bg-white/70 border border-neutral-200 text-neutral-700 hover:text-black hover:border-neutral-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-3 py-1 rounded-full bg-white/70 border border-neutral-200 text-neutral-700 hover:text-black hover:border-neutral-400 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

