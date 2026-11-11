"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3500);
    }
  };

  return (
    <footer className="w-full bg-gradient-to-b from-[#2b211e] via-[#221917] to-[#1c1412] text-[#c7bbb5] border-t border-[#3a2c27] font-sans selection:bg-[#a56852] selection:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          
          {/* Column 1: Brand Logo & Socials */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-6">
            <Link href="/" className="inline-block group" aria-label="Aralia Home">
              <div className="relative h-28 sm:h-32 w-48 sm:w-56 transition-transform duration-200 group-hover:scale-[1.02]">
                <Image
                  src="/images/logo.webp"
                  alt="Aralia - Premium Innerwear"
                  fill
                  sizes="230px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-1">
              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-full bg-[#1b1412] border border-[#3e2e28] hover:bg-[#a56852] hover:border-[#a56852] flex items-center justify-center text-[#c7bbb5] hover:text-white transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#1b1412] border border-[#3e2e28] hover:bg-[#a56852] hover:border-[#a56852] flex items-center justify-center text-[#c7bbb5] hover:text-white transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#1b1412] border border-[#3e2e28] hover:bg-[#a56852] hover:border-[#a56852] flex items-center justify-center text-[#c7bbb5] hover:text-white transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-full bg-[#1b1412] border border-[#3e2e28] hover:bg-[#a56852] hover:border-[#a56852] flex items-center justify-center text-[#c7bbb5] hover:text-white transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 sm:pl-2">
            <h3 className="text-[#eee4de] font-medium text-sm sm:text-[15px] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/shop"
                  className="text-[#bbaea7] hover:text-white transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="text-[#bbaea7] hover:text-white transition-colors"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/size-guide"
                  className="text-[#bbaea7] hover:text-white transition-colors"
                >
                  Size Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#bbaea7] hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#bbaea7] hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div className="lg:col-span-3">
            <h3 className="text-[#eee4de] font-medium text-sm sm:text-[15px] mb-4">
              Customer Service
            </h3>

            {/* Direct Contact Info */}
            <div className="space-y-3 text-sm">
              <a
                href="mailto:care@aralia.in"
                className="flex items-center space-x-3 text-[#bbaea7] hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#c4826b] shrink-0 group-hover:scale-110 transition-transform" />
                <span>care@aralia.in</span>
              </a>

              <a
                href="tel:+1234567890"
                className="flex items-center space-x-3 text-[#bbaea7] hover:text-white transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#c4826b] shrink-0 group-hover:scale-110 transition-transform" />
                <span>+1 23 456 7890</span>
              </a>

              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-[#bbaea7] hover:text-white transition-colors group"
              >
                {/* WhatsApp Icon */}
                <svg
                  className="w-4 h-4 text-[#c4826b] fill-current shrink-0 group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.173.086.275.071.376-.044.101-.115.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.126.554 4.125 1.523 5.864l-1.616 5.908 6.07-1.593c1.688.922 3.619 1.447 5.671 1.447 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm.048 21.6c-1.849 0-3.601-.527-5.1-1.469l-.365-.229-3.794.995 1.013-3.697-.238-.379c-1.025-1.633-1.564-3.518-1.564-5.467 0-5.322 4.329-9.652 9.653-9.652 5.321 0 9.649 4.33 9.649 9.652 0 5.321-4.328 9.646-9.254 9.646z" />
                </svg>
                <span>+1 23 456 7890</span>
              </a>
            </div>

            {/* Sub-links */}
            <div className="mt-8 pt-4 border-t border-[#3e2e28]/70 text-xs text-[#9d8f88] space-y-1.5 leading-relaxed">
              <div className="flex flex-wrap gap-x-1.5">
                <Link href="/customer-support" className="hover:text-white transition-colors">
                  Customer Support
                </Link>
                <span>|</span>
                <Link href="/returns-exchange" className="hover:text-white transition-colors">
                  Returns & Exchange
                </Link>
              </div>
              <div className="flex flex-wrap gap-x-1.5">
                <Link href="/shipping" className="hover:text-white transition-colors">
                  Shipping
                </Link>
                <span>|</span>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <span>|</span>
                <Link href="/terms-conditions" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-[#c7bbb5] font-semibold text-xs tracking-[0.2em] uppercase mb-4">
              JOIN OUR NEWSLETTER
            </h3>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-white text-neutral-900 placeholder:text-neutral-400 px-4 py-2.5 rounded text-sm outline-none focus:ring-2 focus:ring-[#b3735d] transition-all"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto min-w-[120px] bg-[#a56852] hover:bg-[#8f5642] active:bg-[#7d4836] text-white px-6 py-2 rounded text-sm font-medium transition-colors shadow-sm cursor-pointer"
                >
                  {isSubscribed ? "Subscribed!" : "Subscribe"}
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Divider & Copyright */}
        <div className="pt-8 border-t border-[#3a2c27] text-center">
          <p className="text-xs text-[#8c7e77] tracking-wide">
            © Copyright Tapclone 2026, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

