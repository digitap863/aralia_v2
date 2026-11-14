import React from "react";
import Image from "next/image";
import { Check, Feather, Wind, Leaf, ShieldCheck } from "lucide-react";
import type { ProductItem } from "@/data";

interface ProductDetailsTabProps {
  product: ProductItem;
}

export default function ProductDetailsTab({ product }: ProductDetailsTabProps) {
  const descriptionText =
    product.description ||
    `The ${product.name} is your everyday essential for all-day ease. Designed with soft, breathable fabric and a natural fit, it gives gentle support without compromising on comfort.`;

  const features =
    product.features && product.features.length > 0
      ? product.features
      : [
          "Seamless and lightweight feel.",
          "Soft, breathable, skin-friendly fabric",
          "Gentle lift and natural shaping",
          "Ideal for everyday, all-day wear",
        ];

  const fabricDescription =
    product.fabricDescription ||
    "Made with a premium, skin-friendly blend that feels soft, breathable and stays comfortable all day.";

  const fabricComposition =
    product.fabricComposition || "90% Polyester & 10% Spandex";

  const materialImage =
    product.materialImage || "/images/products/material-silk.webp";

  const highlights =
    product.highlights && product.highlights.length > 0
      ? product.highlights
      : [
          "Breathable air-filled design promotes continuous airflow, releasing heat and moisture to keep you fresh all day.",
          "Thermal regulation: Trapped air acts as natural insulation, supporting a consistently comfortable skin temperature.",
          "Full-Frame Plus-Size Design: Full coverage with a minimising effect for a balanced silhouette.",
          "Lightweight design: A lighter alternative to traditional foams, offering support without added weight for everyday wear.",
          "Ultra-light spacer fabric designed for breathable, all-day comfort.",
          "A minimizer design that reduces projection while maintaining a natural look.",
          "Wire-free and non-padded for effortless, everyday comfort.",
          "Adjustable back hook ensures a secure, customized fit.",
          "Fixed supportive straps provide consistent lift and stability.",
        ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-8 sm:pt-10 items-start">
      {/* Left Column: Product Description & Fabric Material */}
      <div className="lg:col-span-6 w-full space-y-10">
        {/* Product Description */}
        <div>
          <h2 className="font-sans text-2xl sm:text-[28px] font-medium text-neutral-900 tracking-tight mb-3">
            Product Description
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-600 font-light leading-relaxed mb-6">
            {descriptionText}
          </p>

          {/* Features Checkmark List */}
          <div className="space-y-3">
            {features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-[18px] h-[18px] rounded-full border border-neutral-700 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-neutral-800 stroke-[3]" />
                </div>
                <span className="font-sans text-xs sm:text-[13px] text-neutral-700 font-normal">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Fabric & Material */}
        <div>
          <h2 className="font-sans text-2xl sm:text-[28px] font-medium text-neutral-900 tracking-tight mb-3">
            Fabric & Material
          </h2>
          <p className="font-sans text-xs sm:text-sm text-neutral-600 font-light leading-relaxed mb-5">
            {fabricDescription}
          </p>

          {/* Highlight Composition Pill/Box */}
          <div className="bg-[#f0edea] border border-[#e2ddd8] rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center gap-3 shadow-2xs">
            <div className="w-[18px] h-[18px] rounded-full border border-neutral-700 flex items-center justify-center shrink-0 bg-white">
              <Check className="w-2.5 h-2.5 text-neutral-900 stroke-[3]" />
            </div>
            <span className="font-sans text-xs sm:text-[13px] font-medium text-neutral-900">
              Fabric Composition: {fabricComposition}
            </span>
          </div>
        </div>
      </div>

      {/* Right Column: Product Speciality + Material Circular Image + Product Highlight */}
      <div className="lg:col-span-6 w-full space-y-8">
        {/* Product Speciality Section */}
        <div>
          <h2 className="font-sans text-2xl sm:text-[28px] font-medium text-neutral-900 tracking-tight mb-5">
            Product Speciality
          </h2>

          <div className="flex flex-row items-center justify-between gap-3 sm:gap-4 pb-6">
            {/* 4 Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-2 flex-1">
              {/* Badge 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[#c2847a] mb-1.5 sm:mb-2">
                  <Feather className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.6]" />
                </div>
                <span className="font-sans text-[9px] sm:text-[10px] font-bold tracking-wider text-neutral-700 uppercase leading-snug">
                  Ultra-Soft<br />Fabrics
                </span>
              </div>

              {/* Badge 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[#c2847a] mb-1.5 sm:mb-2">
                  <Wind className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.6]" />
                </div>
                <span className="font-sans text-[9px] sm:text-[10px] font-bold tracking-wider text-neutral-700 uppercase leading-snug">
                  Breathable<br />& Light
                </span>
              </div>

              {/* Badge 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[#c2847a] mb-1.5 sm:mb-2">
                  <Leaf className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.6]" />
                </div>
                <span className="font-sans text-[9px] sm:text-[10px] font-bold tracking-wider text-neutral-700 uppercase leading-snug">
                  Natural<br />Support
                </span>
              </div>

              {/* Badge 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[#c2847a] mb-1.5 sm:mb-2">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.6]" />
                </div>
                <span className="font-sans text-[9px] sm:text-[10px] font-bold tracking-wider text-neutral-700 uppercase leading-snug">
                  Durable &<br />Long-Lasting
                </span>
              </div>
            </div>

            {/* Circular Material Swirl Image */}
            <div className="relative w-20 h-20 sm:w-26 sm:h-26 md:w-28 md:h-28 rounded-full overflow-hidden shrink-0 border border-[#e8dfd8] shadow-sm ml-1 sm:ml-2">
              <Image
                src={materialImage}
                alt="Aralia Premium Silk Innerwear Material"
                fill
                sizes="(max-width: 640px) 80px, 112px"
                className="object-cover object-center pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Product Highlight */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-sans text-2xl sm:text-[28px] font-medium text-neutral-900 tracking-tight">
              Product Highlight
            </h3>
            <span className="text-xl text-neutral-600 font-light select-none">—</span>
          </div>

          <ul className="space-y-2 text-xs sm:text-[13px] text-black
           leading-relaxed list-disc pl-4 font-light">
            {highlights.map((item, idx) => (
              <li key={idx} className="marker:text-black">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

