"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

// 1. ADDED: An 'image' property to each flavor object.
// When you get your real images, just change "/grape2.png" to "/mango.png", etc.
const flavors = [
  { name: "Mango", id: "mango", image: "/mango2.png" },
  { name: "Strawberry", id: "strawberry", image: "/strawberry2.png" },
  { name: "Peach", id: "peach", image: "/peach2.png" },
  { name: "Raspberry", id: "raspberry", image: "/rasp.png" },
  { name: "Grapes", id: "grapes", image: "/grape3.png" },
];

export default function PopularFlavors() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate the array to create that "infinite" long track feel
  const displayFlavors = [...flavors, ...flavors, ...flavors];

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // --- AUTO SCROLL LOGIC ---
  useEffect(() => {
    if (isHovered) return; // Pause scrolling when user hovers/touches

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

        // If we hit the end of the scrollable area, rewind to the start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Otherwise, just scroll one card to the right
          scroll("right");
        }
      }
    }, 3000); // Scrolls every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="w-full bg-white lg:pt-30 px-6 ">
      <div className="max-w-full mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:px-12 lg:px-20 justify-between mb-12 gap-6">
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
        <div
          ref={carouselRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-12 pt-4 px-2 -mx-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {displayFlavors.map((flavor, index) => (
            <div
              key={`${flavor.id}-${index}`}
              className="flex flex-col items-center gap-5 shrink-0 snap-center min-w-[85vw] sm:min-w-[340px] md:min-w-[360px] lg:min-w-[400px]"
            >
              <div className="w-full aspect-[4/5] bg-white border-[3px] border-stone-900 rounded-[2.5rem] flex items-center justify-center relative overflow-hidden transition-transform hover:-translate-y-3 duration-300 shadow-sm hover:shadow-xl group">
                {/* 2. ADDED: Uses 'flavor.image' instead of hardcoding the image path */}
                <Image
                  src={flavor.image}
                  alt={`${flavor.name} ice cream`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
