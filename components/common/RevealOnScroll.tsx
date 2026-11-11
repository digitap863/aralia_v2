"use client";

import React, { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
  threshold?: number; // 0 to 1
  rootMargin?: string;
  direction?: "up" | "down" | "none";
}

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  threshold = 0.08,
  rootMargin = "0px 0px -50px 0px",
  direction = "up",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  const getTransformClasses = () => {
    if (isVisible) return "opacity-100 translate-y-0";

    switch (direction) {
      case "up":
        return "opacity-0 translate-y-10";
      case "down":
        return "opacity-0 -translate-y-10";
      case "none":
        return "opacity-0";
      default:
        return "opacity-0 translate-y-10";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`w-full transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${getTransformClasses()} ${className}`}
    >
      {children}
    </div>
  );
}

