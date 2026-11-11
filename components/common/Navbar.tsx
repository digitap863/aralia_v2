"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";


interface CollectionItem {
  name: string;
  href: string;
  description?: string;
}

export interface AnnouncementItem {
  id: string;
  text: string;
  mobileText?: string;
  highlight?: string;
  code?: string;
  link?: string;
}

const defaultAnnouncements: AnnouncementItem[] = [
  {
    id: "ann-1",
    text: "Free Shipping Over ₹2000 — Use code",
    code: "SUMMER20",
  },
  {
    id: "ann-2",
    text: "Buy Any 2 Bras & Get 1 FREE",
    highlight: "Limited Time Festive Offer",
    link: "/offers/festive-combo",
  },
  {
    id: "ann-3",
    text: "Feather-Touch Korean Comfort Innerwear Collection",
    highlight: "Explore New Arrivals →",
    link: "/collections/new-arrivals",
  },
];

const collections: CollectionItem[] = [
  { name: "All Collections", href: "/collections" },
  { name: "Bras", href: "/collections/bras" },
  { name: "Panties", href: "/collections/panties" },
  { name: "Loungewear", href: "/collections/loungewear" },
  { name: "Shapewear", href: "/collections/shapewear" },
  { name: "Sleepwear", href: "/collections/sleepwear" },
  { name: "New Arrivals", href: "/collections/new-arrivals" },
];

interface NavbarProps {
  announcements?: AnnouncementItem[];
}

export default function Navbar({
  announcements = defaultAnnouncements,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const [isMobileCollectionsOpen, setIsMobileCollectionsOpen] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const [isAnnouncementFading, setIsAnnouncementFading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Rotate announcement bar every 2 seconds
  useEffect(() => {
    if (announcements.length <= 1) return;

    const interval = setInterval(() => {
      setIsAnnouncementFading(true);
      setTimeout(() => {
        setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
        setIsAnnouncementFading(false);
      }, 200);
    }, 5000);

    return () => clearInterval(interval);
  }, [announcements.length]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCollectionsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const currentAnnouncement =
    announcements[announcementIndex] || announcements[0];

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-neutral-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)] font-sans">
      {/* Top Announcement Bar - Dynamic Rotator with Fluid Auto-Scaling Font */}
      <div className="bg-[#212224] text-neutral-200 text-[clamp(10px,2.5vw,13px)] tracking-tight sm:tracking-normal md:tracking-wide py-1.5 sm:py-2 px-2 sm:px-4 text-center font-normal h-8 sm:h-9 overflow-hidden flex items-center justify-center">
        <div
          className={`w-full max-w-full px-1 flex items-center justify-center transition-all duration-200 ease-out transform ${
            isAnnouncementFading
              ? "opacity-0 -translate-y-1.5"
              : "opacity-100 translate-y-0"
          }`}
        >
          {currentAnnouncement?.link ? (
            <Link
              href={currentAnnouncement.link}
              className="hover:text-white transition-colors inline-flex items-center gap-1 sm:gap-1.5 justify-center whitespace-nowrap max-w-full"
            >
              <span className="hidden sm:inline truncate">{currentAnnouncement.text}</span>
              <span className="inline sm:hidden truncate">{currentAnnouncement.mobileText || currentAnnouncement.text}</span>
              {currentAnnouncement.code && (
                <span className="font-semibold text-white tracking-wider bg-white/15 px-1.5 py-0.5 rounded-xs text-[10px] sm:text-[11px] shrink-0">
                  {currentAnnouncement.code}
                </span>
              )}
              {currentAnnouncement.highlight && !currentAnnouncement.code && (
                <span className="font-semibold text-white underline underline-offset-2 shrink-0">
                  {currentAnnouncement.highlight}
                </span>
              )}
            </Link>
          ) : (
            <p className="inline-flex items-center gap-1 sm:gap-1.5 justify-center whitespace-nowrap max-w-full">
              <span className="hidden sm:inline truncate">{currentAnnouncement?.text}</span>
              <span className="inline sm:hidden truncate">{currentAnnouncement?.mobileText || currentAnnouncement?.text}</span>
              {currentAnnouncement?.code && (
                <span className="font-semibold text-white tracking-wider bg-white/15 px-1.5 py-0.5 rounded-xs text-[10px] sm:text-[11px] shrink-0">
                  {currentAnnouncement.code}
                </span>
              )}
              {currentAnnouncement?.highlight && !currentAnnouncement?.code && (
                <span className="font-semibold text-white shrink-0">
                  {currentAnnouncement.highlight}
                </span>
              )}
            </p>
          )}
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          
          {/* Mobile Menu Button - visible on screens below lg */}
          <div className="flex items-center lg:hidden flex-1">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -ml-2 text-neutral-800 hover:text-black focus:outline-none transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 stroke-[1.75]" />
            </button>
          </div>

          {/* Desktop Left Nav Links */}
          <div className="hidden lg:flex items-center justify-end space-x-10 xl:space-x-12 flex-1">
            <Link
              href="/"
              className="text-[13px] xl:text-[14px] font-medium tracking-[0.16em] text-neutral-800 hover:text-neutral-500 transition-colors uppercase"
            >
              HOME
            </Link>

            <Link
              href="/shop"
              className="text-[13px] xl:text-[14px] font-medium tracking-[0.16em] text-neutral-800 hover:text-neutral-500 transition-colors uppercase"
            >
              SHOP
            </Link>

            {/* COLLECTIONS Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsCollectionsOpen(true)}
              onMouseLeave={() => setIsCollectionsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
                className="inline-flex items-center gap-1.5 text-[13px] xl:text-[14px] font-medium tracking-[0.16em] text-neutral-800 hover:text-neutral-500 transition-colors uppercase group"
                aria-expanded={isCollectionsOpen}
              >
                <span>COLLECTIONS</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isCollectionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isCollectionsOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-sm shadow-xl border border-neutral-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="text-[11px] font-semibold text-neutral-400 px-4 py-1 uppercase tracking-wider">
                    Categories
                  </div>
                  {collections.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-xs tracking-wider uppercase text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950 transition-colors"
                      onClick={() => setIsCollectionsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Center Brand Logo */}
          <div className="flex justify-center items-center px-4 shrink-0">
            <Link href="/" className="flex items-center justify-center group" aria-label="Aralia Home">
              <div className="relative h-12 sm:h-14 md:h-16 w-32 sm:w-38 md:w-44 flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.02]">
                <Image
                  src="/images/logo.webp"
                  alt="Aralia Logo"
                  fill
                  sizes="(max-width: 768px) 130px, 176px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Right Nav Links */}
          <div className="hidden lg:flex items-center justify-start space-x-10 xl:space-x-12 flex-1">
            <Link
              href="/contact"
              className="text-[13px] xl:text-[14px] font-medium tracking-[0.16em] text-neutral-800 hover:text-neutral-500 transition-colors uppercase"
            >
              CONTACT US
            </Link>

            <Link
              href="/about"
              className="text-[13px] xl:text-[14px] font-medium tracking-[0.16em] text-neutral-800 hover:text-neutral-500 transition-colors uppercase"
            >
              ABOUT
            </Link>

            <Link
              href="/cart"
              className="text-[13px] xl:text-[14px] font-medium tracking-[0.16em] text-neutral-800 hover:text-neutral-500 transition-colors uppercase inline-flex items-center gap-1.5"
            >
              <span>BAG(00)</span>
            </Link>
          </div>

          {/* Mobile Right: Bag shortcut */}
          <div className="flex items-center justify-end lg:hidden flex-1">
            <Link
              href="/cart"
              className="text-[12px] sm:text-[13px] font-medium tracking-[0.14em] text-neutral-800 hover:text-black uppercase inline-flex items-center gap-1.5 py-1 px-2"
              aria-label="Shopping bag"
            >
              <span>BAG(00)</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop & Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Sidebar */}
          <div className="fixed inset-y-0 left-0 w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col z-50 animate-in slide-in-from-left duration-300">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
              <div className="relative h-12 w-28">
                <Image
                  src="/images/logo.webp"
                  alt="Aralia Logo"
                  fill
                  sizes="120px"
                  className="object-contain object-left"
                />
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-2 text-neutral-600 hover:text-black transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation links */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-medium tracking-[0.18em] text-neutral-800 hover:text-neutral-500 uppercase py-2 border-b border-neutral-50"
              >
                HOME
              </Link>

              <Link
                href="/shop"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-medium tracking-[0.18em] text-neutral-800 hover:text-neutral-500 uppercase py-2 border-b border-neutral-50"
              >
                SHOP
              </Link>

              {/* Collections Accordion */}
              <div className="border-b border-neutral-50 pb-2">
                <button
                  type="button"
                  onClick={() => setIsMobileCollectionsOpen(!isMobileCollectionsOpen)}
                  className="w-full flex items-center justify-between text-sm font-medium tracking-[0.18em] text-neutral-800 hover:text-neutral-500 uppercase py-2"
                >
                  <span>COLLECTIONS</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileCollectionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isMobileCollectionsOpen && (
                  <div className="pl-4 pt-2 pb-1 space-y-2.5">
                    {collections.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-xs font-normal tracking-[0.12em] text-neutral-600 hover:text-neutral-900 uppercase py-1"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-medium tracking-[0.18em] text-neutral-800 hover:text-neutral-500 uppercase py-2 border-b border-neutral-50"
              >
                CONTACT US
              </Link>

              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-medium tracking-[0.18em] text-neutral-800 hover:text-neutral-500 uppercase py-2 border-b border-neutral-50"
              >
                ABOUT
              </Link>

              <Link
                href="/cart"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between text-sm font-medium tracking-[0.18em] text-neutral-800 hover:text-neutral-500 uppercase py-2 border-b border-neutral-50"
              >
                <span>BAG</span>
                <span className="text-xs bg-neutral-100 text-neutral-700 px-2.5 py-0.5 rounded-full font-sans tracking-normal">
                  (00)
                </span>
              </Link>
            </div>

            {/* Drawer Footer */}
            <div className="p-6 bg-neutral-50 border-t border-neutral-100">
              <p className="text-xs text-neutral-500 tracking-wider text-center uppercase">
                Premium Innerwear • Made for Her
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

