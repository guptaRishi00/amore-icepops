"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutHero() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="w-full px-4 md:px-8 pb-12">
      <div className="relative w-full max-w-8xl mx-auto min-h-[60vh] flex flex-col md:flex-row items-stretch overflow-hidden rounded-[2rem] bg-stone-50 border-[4px] border-stone-900 shadow-[8px_8px_0px_0px_rgba(28,25,23,1)]">

        {/* Text Content (Left Half) */}
        <div className="relative z-10 w-full md:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center gap-8">
          <div className="reveal inline-block px-6 py-2 bg-[#406BB5] text-white border-[3px] border-stone-900 rounded-full font-jua text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] w-fit">
            Who We Are
          </div>

          <h1 className="reveal reveal-delay-1 font-caprasimo text-5xl md:text-6xl lg:text-[4.5rem] text-stone-900 uppercase tracking-wide leading-[1.1] [-webkit-text-stroke:1px_#1c1917] drop-shadow-[4px_4px_0px_rgba(64,107,181,0.3)]">
            Spreading Smiles
          </h1>

          <p className="reveal reveal-delay-2 font-jua text-stone-700 text-lg md:text-xl lg:text-2xl leading-relaxed">
            We are a team of flavor enthusiasts, dedicated to sharing the simple, unadulterated joy of real fruit with our community. No secrets, just sunshine on a stick.
          </p>
        </div>

        {/* Image Content (Right Half) */}
        <div className="w-full md:w-1/2 bg-stone-200 border-t-[4px] md:border-t-0 md:border-l-[4px] border-stone-900 relative min-h-[400px]">
          <Image
            src="/shop1.png"
            alt="The Amore Team"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}
