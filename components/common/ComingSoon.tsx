"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Sparkles, Bell, ShieldCheck, HeartHandshake } from "lucide-react";

interface ComingSoonProps {
  pageTitle?: string;
  category?: string;
  description?: string;
  estimatedLaunch?: string;
}

export default function ComingSoon({
  pageTitle = "Something Beautiful is in the Works",
  category = "Coming Soon",
  description = "We are putting the final touches on our Korean comfort innerwear experience. Thoughtfully crafted with refined fabrics, seamless designs, and everyday confidence.",
  estimatedLaunch = "Launching Soon",
}: ComingSoonProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 800);
  };

  return (
    <main className="relative min-h-[calc(100vh-140px)] flex flex-col justify-center items-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#ffffff] via-[#faf6f4] to-[#f7f3f0] overflow-hidden select-none">
      {/* Background Ambient Glows */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] sm:w-[800px] sm:h-[500px] -z-10 pointer-events-none blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, rgba(246,207,191,0.55) 0%, rgba(242,226,220,0.3) 50%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-96 h-96 -z-10 pointer-events-none blur-2xl opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(209,160,143,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="w-full max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Category Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#AC7058]/50 bg-white/80 backdrop-blur-sm text-[10px] sm:text-xs font-sans font-medium tracking-[0.16em] uppercase text-[#AC7058] shadow-xs mb-6">
          <span>{category}</span>
          <span className="w-1 h-1 rounded-full bg-[#AC7058]/40" />
          <span>{estimatedLaunch}</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.15] text-[#1f1a18] font-normal tracking-tight mb-4 max-w-2xl">
          {pageTitle}
        </h1>

        {/* Description */}
        <p className="font-sans text-neutral-600 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xl mb-8 sm:mb-10">
          {description}
        </p>

       

      

        {/* Return to Home CTA */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#1f242d] hover:bg-black active:bg-neutral-900 text-white text-xs sm:text-[13px] font-medium tracking-wide rounded-xs transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

