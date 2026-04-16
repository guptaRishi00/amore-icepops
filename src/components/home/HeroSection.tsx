"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function HeroSection() {
  return (
    <section className="w-full px-4 md:px-8">
      <div className="relative w-full min-h-[86vh] flex items-start pt-12 pb-16 md:items-center md:py-24 overflow-hidden rounded-xl">
        {/* Mobile background */}
        <div className="absolute inset-0 -z-20 block md:hidden">
          <Image
            src="/mobile.png"
            alt="Delicious colorful ice pops"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        {/* Desktop background */}
        <div className="absolute inset-0 -z-20 hidden md:block">
          <Image
            src="/hero7.png"
            alt="Delicious colorful ice pops"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* --- Black Gradient Overlay --- */}
        <div className="absolute inset-0 bg-linear-to-r from-stone-950/40 via-stone-900/0 to-transparent -z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="flex flex-col items-start max-w-3xl gap-12">
            <div className="flex items-start flex-col gap-6">
              <h1 className="font-caprasimo flex flex-col text-4xl sm:text-6xl md:text-[88px] lg:text-[100px] text-white uppercase tracking-tight [-webkit-text-stroke:2px_#1c1917] md:[-webkit-text-stroke:4px_#1c1917] mb-2 md:mb-4">
                <span className="block leading-[0.9] drop-shadow-[4px_4px_0px_rgba(28,25,23,1)] md:drop-shadow-[8px_8px_0px_rgba(28,25,23,1)] animate-[fadeUp_0.8s_ease-out_both]">
                  Taste The
                </span>
                <span className="block leading-[0.9] drop-shadow-[4px_4px_0px_rgba(28,25,23,1)] md:drop-shadow-[8px_8px_0px_rgba(28,25,23,1)] animate-[fadeUp_0.8s_ease-out_0.2s_both]">
                  Summer
                </span>
              </h1>
              <p className="font-caprasimo text-stone-100 text-base md:text-2xl max-w-xl leading-snug text-left drop-shadow-md animate-[fadeUp_0.8s_ease-out_0.4s_both]">
                Dive into a frozen paradise and let our handcrafted ice-pops
                take you to a land of pure joy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 animate-[fadeUp_0.5s_ease-out_0.6s_both]">
              <Link
                href="/shop"
                className="shrink-0 flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white text-stone-900 font-jua text-sm md:text-lg uppercase tracking-widest border-[3px] border-stone-900 rounded-full shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:shadow-none active:translate-x-1 active:translate-y-1 font-bold"
              >
                Pick Your Favourite<ChevronRight size={20} strokeWidth={3} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
