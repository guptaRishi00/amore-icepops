"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ServicesSection() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="relative w-full bg-white py-10 md:py-24 px-4 md:px-8 overflow-hidden">
      <div className="mx-auto relative z-10 flex flex-col items-center">
        <h2 className="reveal font-caprasimo text-3xl md:text-5xl lg:text-5xl text-stone-900 uppercase leading-[1.1] tracking-tight mb-10 md:mb-16 text-center">
          Featured Flavors
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8">
          {/* === COLUMN 1: MANGO === */}
          <div className="reveal reveal-delay-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-full aspect-3/4 bg-stone-100 border-2 border-stone-900 rounded-4xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative transition-transform duration-300 hover:-translate-y-2">
              <Image
                src="/mango.png"
                alt="Tropical Mango"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-caprasimo text-2xl lg:text-3xl text-stone-900 mt-6 mb-3 uppercase tracking-wider">
              Tropical Mango
            </h3>
            <p className="font-jua text-base text-stone-800 mb-6 leading-relaxed max-w-sm md:max-w-none">
              We source the finest tropical mangoes to bring you a sweet, refreshing flavor that tastes just like a summer vacation. 100% real fruit in every bite!
            </p>

            <Link
              href="/flavors"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-stone-950 font-jua border-2 border-stone-900 rounded-full shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:shadow-none active:translate-x-1 active:translate-y-1 text-sm uppercase tracking-wider mt-auto"
            >
              Order Now <ChevronRight size={16} strokeWidth={3} />
            </Link>
          </div>

          {/* === COLUMN 2: PEACH === */}
          <div className="reveal reveal-delay-2 flex flex-col items-center md:items-start text-center md:text-left md:pt-6">
            <h3 className="font-caprasimo text-2xl lg:text-3xl text-stone-900 mb-3 uppercase tracking-wider order-2 md:order-0 mt-6 md:mt-0">
              Perfect Peach
            </h3>
            <p className="font-jua text-base text-stone-800 mb-6 leading-relaxed order-3 md:order-0 max-w-sm md:max-w-none">
              Our peach pops are made with ripe, juicy peaches blended to perfection, capturing the delicate and natural sweetness of the fruit. Like a warm summer breeze!
            </p>

            <Link
              href="/flavors"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-stone-950 font-jua border-2 border-stone-900 rounded-full shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:shadow-none active:translate-x-1 active:translate-y-1 text-sm uppercase tracking-wider order-4 md:order-0"
            >
              Order Now <ChevronRight size={16} strokeWidth={3} />
            </Link>

            <div className="w-full aspect-4/3 md:aspect-3/4 lg:aspect-4/5 mt-6 bg-stone-100 border-2 border-stone-900 rounded-4xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative transition-transform duration-300 hover:-translate-y-2 order-1 md:order-0">
              <Image
                src="/peach.png"
                alt="Perfect Peach"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* === COLUMN 3: GRAPE === */}
          <div className="reveal reveal-delay-3 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-full aspect-4/3 md:aspect-3/4 lg:aspect-4/5 bg-stone-100 border-2 border-stone-900 rounded-4xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative transition-transform duration-300 hover:-translate-y-2">
              <Image
                src="/grape2.png"
                alt="Concord Grape"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-caprasimo text-2xl lg:text-3xl text-stone-900 mt-6 mb-3 uppercase tracking-wider">
              Concord Grape
            </h3>
            <p className="font-jua text-base text-stone-800 mb-6 leading-relaxed max-w-sm md:max-w-none">
              Experience the bold and tangy burst of real concord grapes, hand-picked and freshly pressed for a nostalgic treat that takes you back to childhood.
            </p>

            <Link
              href="/flavors"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-stone-950 font-jua border-2 border-stone-900 rounded-full shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:shadow-none active:translate-x-1 active:translate-y-1 text-sm uppercase tracking-wider mt-auto"
            >
              Order Now <ChevronRight size={16} strokeWidth={3} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
