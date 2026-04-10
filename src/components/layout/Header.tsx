"use client";

import { useState } from "react";
import {
  ShoppingBag,
  Search,
  ChevronDown,
  ChevronRight,
  Truck,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative w-full z-50 flex flex-col bg-white">
      <div className="px-3 pt-3 md:px-5">
        <div className="w-full bg-[#406BB5] text-stone-100 py-2.5 px-6 md:px-10 flex items-center justify-between text-[10px] sm:text-[11px] font-extrabold tracking-[0.15em] uppercase rounded-md">
          <div className="hidden md:flex items-center gap-2">
            <Truck size={14} strokeWidth={2.5} />
            <span>Free Shipping</span>
          </div>

          <div className="text-center w-full md:w-auto text-[#e6dcd3]">
            FREE SHIPPING ABOVE ₹500
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Truck size={14} strokeWidth={2.5} />
            <span>Free Shipping</span>
          </div>
        </div>
      </div>

      {/* Changed to a grid layout to perfectly center the middle element */}
      <header className="w-full py-5 px-6 lg:px-20 grid grid-cols-2 md:grid-cols-3 items-center mt-1">
        {/* 1. LEFT: Logo */}
        <div className="flex justify-start">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={180}
              height={60}
              loading="eager"
              className="object-contain w-32 md:w-40"
            />
          </Link>
        </div>

        {/* 2. CENTER: Navigation Links */}
        <nav className="hidden md:flex justify-center items-center gap-7 lg:gap-9 font-caprasimo text-stone-900 text-[15px] tracking-wide pt-1">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#406BB5] transition-colors group"
          >
            Home
          </Link>

          <Link
            href="/flavors"
            className="flex items-center gap-1 hover:text-[#406BB5] transition-colors group"
          >
            Flavors
          </Link>

          <Link
            href="/story"
            className="hover:text-[#406BB5] transition-colors"
          >
            Our Story
          </Link>

          {/* <Link
            href="/about"
            className="hover:text-[#406BB5] transition-colors"
          >
            About Us
          </Link> */}

          <Link
            href="/contact"
            className="hover:text-[#406BB5] transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* 3. RIGHT: Cart and Order Button */}
        <div className="flex items-center justify-end gap-5 lg:gap-7 shrink-0 pt-1">
          <Link
            href="/cart"
            aria-label="Cart"
            className="relative text-stone-900 hover:text-[#406BB5] cursor-pointer transition-colors"
          >
            <ShoppingBag size={24} strokeWidth={2.5} />
            {cartItemCount > 0 && (
              <span className="absolute -top-1.5 -right-2 min-w-[20px] h-[20px] px-1 bg-[#2C2A29] text-white rounded-full flex items-center justify-center font-jua text-[11px] shadow-[2px_2px_0px_0px_rgba(64,107,181,1)]">
                {cartItemCount}
              </span>
            )}
          </Link>

          <Link
            href="/flavors"
            className="hidden sm:flex items-center gap-1 px-5 py-2 bg-white text-stone-900 font-jua text-[13px] uppercase tracking-widest border-2 border-stone-900 rounded-full shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:shadow-none active:translate-x-0.75 active:translate-y-0.75"
          >
            Order Now <ChevronRight size={16} strokeWidth={3} />
          </Link>

          {/* Hamburger Menu Toggle */}
          <button
            className="md:hidden text-stone-900 hover:text-[#406BB5] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden w-full bg-white border-t border-stone-200 absolute top-full left-0 z-40 flex flex-col px-6 py-4 shadow-xl">
          <nav className="flex flex-col gap-4 font-caprasimo text-stone-900 text-lg tracking-wide">
            <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#406BB5] py-2 border-b border-stone-100">
              Shop
            </Link>
            <Link href="/flavors" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#406BB5] py-2 border-b border-stone-100">
              Flavors
            </Link>
            <Link href="/story" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#406BB5] py-2 border-b border-stone-100">
              Story
            </Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#406BB5] py-2 border-b border-stone-100">
              About Us
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#406BB5] py-2">
              Contact
            </Link>
            <Link
              href="/flavors"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-1 px-5 py-3 bg-[#406BB5] text-white font-jua text-sm uppercase tracking-widest rounded-full shadow-md"
            >
              Order Now <ChevronRight size={16} strokeWidth={3} />
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
