"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const flavors = [
  { name: "Mango", id: "mango", image: "/mango3.png" },
  { name: "Strawberry", id: "strawberry", image: "/strawberry3.png" },
  { name: "Peach", id: "peach", image: "/peach3.png" },
  { name: "Raspberry", id: "raspberry", image: "/rasp2.png" },
  { name: "Grapes", id: "grapes", image: "/grape4.png" },
];

export default function PopularFlavors() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const displayFlavors = [...flavors, ...flavors, ...flavors];

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      // Reduced scroll amount to match new scaled-down card widths
      const scrollAmount = direction === "left" ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scroll("right");
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    // Scaled down top padding and horizontal padding
    <section className="w-full bg-white pt-12 lg:pt-16 px-4 md:px-8 lg:mt-20">
      <div className="max-w-full mx-auto">
        {/* Reduced bottom margin and gaps */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 lg:px-12">
          <div className="flex items-center gap-3">
            {/* Scaled down icon from 40 to 32 */}
            <Image
              src="/penguine2.svg"
              alt="Flavors Icon"
              width={32}
              height={32}
              className="object-contain"
            />
            {/* Scaled down heading sizes */}
            <h2 className="font-caprasimo text-3xl md:text-4xl lg:text-[40px] text-stone-900 uppercase tracking-wide leading-none">
              Popular <br className="hidden md:block lg:hidden" /> Flavors{" "}
              <span className="hidden lg:inline">-</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden md:flex items-center gap-2 mr-2">
              {/* Scaled down buttons: w-10 h-10, border-[2px], smaller shadow */}
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="w-10 h-10 flex items-center justify-center bg-white border-[2px] border-stone-900 rounded-full shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
              >
                <ChevronLeft
                  size={20}
                  strokeWidth={2.5}
                  className="text-stone-900"
                />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="w-10 h-10 flex items-center justify-center bg-white border-[2px] border-stone-900 rounded-full shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
              >
                <ChevronRight
                  size={20}
                  strokeWidth={2.5}
                  className="text-stone-900"
                />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={carouselRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          // Reduced gap and bottom padding
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-8 pt-2 px-2 -mx-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] lg:px-12"
        >
          {displayFlavors.map((flavor, index) => (
            <div
              key={`${flavor.id}-${index}`}
              // Scaled down min-widths for the cards
              className="flex flex-col items-center gap-3 shrink-0 snap-center min-w-[75vw] sm:min-w-[260px] md:min-w-[280px] lg:min-w-[300px]"
            >
              {/* Reduced border width and border radius */}
              <div className="w-full aspect-4/5 bg-white border-[2px] border-stone-900 rounded-[2rem] flex items-center justify-center relative overflow-hidden transition-transform hover:-translate-y-2 duration-300 shadow-sm hover:shadow-lg group">
                <Image
                  src={flavor.image}
                  alt={`${flavor.name} ice cream`}
                  fill
                  sizes="(max-width: 768px) 75vw, 300px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Scaled down text sizing */}
              <h3 className="font-caprasimo text-stone-900 text-lg md:text-xl uppercase tracking-wider text-center">
                {flavor.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
