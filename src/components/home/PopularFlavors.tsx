"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronRight, ChevronLeft, Heart } from "lucide-react";

const flavors = [
  { name: "Mango", id: "mango" },
  { name: "Strawberry", id: "strawberry" },
  { name: "Peach", id: "peach" },
  { name: "Raspberry", id: "raspberry" },
  { name: "Grapes", id: "grapes" },
];

export default function PopularFlavors() {
  const carouselRef = useRef<any>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-white lg:pt-30 px-6 ">
      <div className="max-w-full mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:px-12 lg:px-20  justify-between mb-12 gap-6">
          <div className="flex items-center gap-3 md:gap-4">
            <Image
              src="/penguine2.svg"
              alt="Flavors Icon"
              width={40}
              height={40}
              className="object-contain"
            />
            <h2 className="font-caprasimo text-4xl md:text-5xl lg:text-[54px] text-stone-900 uppercase tracking-wide leading-none">
              Popular <br className="hidden md:block lg:hidden" /> Flavors{" "}
              <span className="hidden lg:inline">-</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            {/* Carousel Navigation Arrows */}
            <div className="hidden md:flex items-center gap-2 mr-4">
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="w-12 h-12 flex items-center justify-center bg-white border-[3px] border-stone-900 rounded-full shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all"
              >
                <ChevronLeft
                  size={24}
                  strokeWidth={3}
                  className="text-stone-900"
                />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="w-12 h-12 flex items-center justify-center bg-white border-[3px] border-stone-900 rounded-full shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all"
              >
                <ChevronRight
                  size={24}
                  strokeWidth={3}
                  className="text-stone-900"
                />
              </button>
            </div>
          </div>
        </div>

        {/* === CAROUSEL CONTAINER === */}
        {/* The ugly utility classes at the end hide the default scrollbar across all browsers! */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-12 pt-4 px-2 -mx-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {flavors.map((flavor) => (
            <div
              key={flavor.id}
              className="flex flex-col items-center gap-5 shrink-0 snap-center min-w-[85vw] sm:min-w-[340px] md:min-w-[360px] lg:min-w-[400px]"
            >
              <div className="w-full aspect-[4/5] bg-white border-[3px] border-stone-900 rounded-[2.5rem] flex items-center justify-center p-6 relative overflow-hidden transition-transform hover:-translate-y-3 duration-300 shadow-sm hover:shadow-xl">
                <div className="w-full h-full relative bg-stone-50 rounded-3xl flex items-center justify-center border-2 border-dashed border-stone-200">
                  <span className="font-jua text-stone-400">
                    Add {flavor.name} Image
                  </span>

                  {/* <Image 
                    src={`/${flavor.id}.png`} 
                    alt={`${flavor.name} ice cream`} 
                    fill 
                    className="object-contain p-6 hover:scale-105 transition-transform duration-500" 
                  /> */}
                </div>
              </div>

              <h3 className="font-caprasimo text-stone-900 text-xl md:text-2xl uppercase tracking-wider text-center">
                {flavor.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
