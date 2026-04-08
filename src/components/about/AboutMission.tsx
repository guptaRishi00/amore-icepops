"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutMission() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="w-full px-4 md:px-8 py-12 max-w-7xl mx-auto">
      <div className="w-full bg-[#406BB5] border-[4px] border-stone-900 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(28,25,23,1)] py-16 md:py-24 px-8 text-center flex flex-col items-center">
        
        {/* Decorative Icon */}
        <div className="reveal w-16 h-16 bg-white rounded-full flex items-center justify-center border-[3px] border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] mb-8">
          <span className="font-caprasimo text-3xl text-stone-900">M</span>
        </div>

        {/* Bold Mission Statement */}
        <h2 className="reveal reveal-delay-1 font-caprasimo text-3xl md:text-4xl lg:text-5xl text-white uppercase tracking-wider mb-8 max-w-4xl leading-[1.2]">
          "To craft the most authentic, joyous frozen treats while fostering community and celebrating real ingredients."
        </h2>

        {/* Supporting description */}
        <p className="reveal reveal-delay-2 font-jua text-stone-100 text-lg md:text-xl max-w-2xl leading-relaxed">
          It's not just about dessert. It's about bringing a moment of pure, refreshing happiness to every person we meet. That is the Amore promise.
        </p>
      </div>
    </section>
  );
}
