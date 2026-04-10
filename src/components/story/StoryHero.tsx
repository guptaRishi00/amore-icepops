"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function StoryHero() {
  return (
    <section className="w-full px-4 md:px-8">
      <div className="relative w-full min-h-[86vh] flex items-center overflow-hidden py-16 md:py-24 rounded-xl">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/shop1.png"
            alt="About Amore Fruit Pops"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* --- Dark Gradient Overlay --- */}
        <div className="absolute inset-0 bg-linear-to-r from-stone-950/50 via-stone-900/10 to-transparent -z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="flex flex-col items-start max-w-3xl gap-12">
            <div className="flex items-start flex-col gap-6">
              <h1 className="font-caprasimo flex flex-col text-5xl sm:text-7xl md:text-[88px] lg:text-[100px] text-white uppercase tracking-tight [-webkit-text-stroke:2px_#1c1917] md:[-webkit-text-stroke:4px_#1c1917] mb-2 md:mb-4">
                <span className="block leading-[0.9] drop-shadow-[4px_4px_0px_rgba(28,25,23,1)] md:drop-shadow-[8px_8px_0px_rgba(28,25,23,1)] animate-[fadeUp_0.8s_ease-out_both]">
                  Spreading
                </span>
                <span className="block leading-[0.9] drop-shadow-[4px_4px_0px_rgba(28,25,23,1)] md:drop-shadow-[8px_8px_0px_rgba(28,25,23,1)] animate-[fadeUp_0.8s_ease-out_0.2s_both]">
                  Smiles
                </span>
              </h1>
              <p className="font-caprasimo text-stone-100 text-lg md:text-2xl max-w-xl leading-snug text-left drop-shadow-md animate-[fadeUp_0.8s_ease-out_0.4s_both]">
                A team of flavor enthusiasts dedicated to sharing the simple,
                unadulterated joy of real fruit with our community.
              </p>
            </div>

            {/* <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 animate-[fadeUp_0.5s_ease-out_0.6s_both]">
              <Link
                href="/story"
                className="shrink-0 flex items-center gap-2 px-8 py-4 bg-white text-stone-900 font-jua text-base md:text-lg uppercase tracking-widest border-[3px] border-stone-900 rounded-full shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:shadow-none active:translate-x-1 active:translate-y-1 font-bold"
              >
                Our Story <ChevronRight size={20} strokeWidth={3} />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
