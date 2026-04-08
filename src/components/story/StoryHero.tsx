"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function StoryHero() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="w-full px-4 md:px-8 pb-12">
      <div className="relative w-full max-w-8xl mx-auto min-h-[60vh] flex flex-col md:flex-row items-stretch overflow-hidden rounded-[2rem] bg-[#406BB5] border-[4px] border-stone-900 shadow-[8px_8px_0px_0px_rgba(28,25,23,1)]">

        {/* Text Content (Left Half) */}
        <div className="relative z-10 w-full md:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center gap-8">
          <div className="reveal inline-block px-6 py-2 bg-white text-stone-900 border-[3px] border-stone-900 rounded-full font-jua text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] w-fit">
            Our History
          </div>

          <h1 className="reveal reveal-delay-1 font-caprasimo text-5xl md:text-6xl lg:text-[4.5rem] text-white uppercase tracking-wide leading-[1.1] [-webkit-text-stroke:2px_#1c1917] drop-shadow-[5px_5px_0px_rgba(28,25,23,1)]">
            A Sweet Tradition
          </h1>

          <p className="reveal reveal-delay-2 font-jua text-white text-lg md:text-xl lg:text-2xl leading-relaxed drop-shadow-md">
            Built on a simple philosophy: using only the finest ingredients to create unforgettable, handcrafted treats that bring people together.
          </p>
        </div>

        {/* Image Content (Right Half) */}
        <div className="w-full md:w-1/2 bg-stone-100 border-t-[4px] md:border-t-0 md:border-l-[4px] border-stone-900 relative min-h-[400px]">
          <Image
            src="/hero2.png"
            alt="Happy people with fruit pops"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}
