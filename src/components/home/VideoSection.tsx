"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function VideoSection() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="relative w-full min-h-[60vh] py-12 md:py-0 md:min-h-0 md:h-[65vh] overflow-hidden flex flex-col items-center justify-center">
      {/* --- BACKGROUND VIDEO --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px]" />
      </div>

      {/* --- TEXT CONTENT OVERLAY --- */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 md:px-6">
        <div className="reveal-scale mb-4 md:mb-5 w-12 h-12 md:w-16 md:h-16 bg-white border-2 border-stone-900 rounded-full flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] overflow-hidden">
          <Image
            src="/penguine2.svg"
            alt="Penguin Icon"
            width={28}
            height={28}
            className="object-contain md:w-9 md:h-9"
          />
        </div>

        <h2 className="reveal reveal-delay-1 font-caprasimo text-2xl md:text-6xl lg:text-[72px] text-white uppercase leading-[1.1] md:leading-none tracking-tight max-w-3xl">
          <span className="block drop-shadow-[3px_3px_0px_#406BB5] md:drop-shadow-[4px_4px_0px_#406BB5]">Crafting Joy</span>
          <span className="block drop-shadow-[3px_3px_0px_#406BB5] md:drop-shadow-[4px_4px_0px_#406BB5]">In Every Scoop</span>
        </h2>

        <p className="reveal reveal-delay-2 font-jua text-base md:text-xl text-white mt-4 md:mt-6 max-w-xl leading-relaxed drop-shadow-md">
          Take a journey through our kitchen and see how we turn real fruits and
          spices into the city's most legendary ice cream.
        </p>

        <div className="reveal reveal-delay-3 mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 md:px-8 md:py-3 bg-white text-stone-950 font-jua border-2 border-stone-900 rounded-full shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px] text-sm md:text-base uppercase tracking-widest"
          >
            Order Now
            <span className="hidden md:inline-flex"><ChevronRight size={18} strokeWidth={3} /></span>
            <span className="md:hidden inline-flex"><ChevronRight size={16} strokeWidth={3} /></span>
          </Link>

          <Link
            href="/flavors"
            className="inline-flex items-center gap-2 px-5 py-2.5 md:px-8 md:py-3 bg-transparent text-white font-jua border-2 border-white rounded-full hover:bg-white hover:text-stone-900 transition-colors text-sm md:text-base uppercase tracking-widest"
          >
            Call Us
          </Link>
        </div>
      </div>
    </section>
  );
}
