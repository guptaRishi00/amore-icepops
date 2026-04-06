"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const flavors = [
  { name: "Mango", id: "mango", image: "/mango3.png" },
  { name: "Strawberry", id: "strawberry", image: "/strawberry3.png" },
  { name: "Peach", id: "peach", image: "/peach3.png" },
  { name: "Raspberry", id: "raspberry", image: "/rasp2.png" },
  { name: "Grapes", id: "grapes", image: "/grape4.png" },
];

export default function PopularFlavors() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useScrollReveal();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let intervalId: NodeJS.Timeout;

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (isPaused) return;

        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
        const maxScroll = scrollWidth - clientWidth;

        if (scrollLeft >= maxScroll - 10) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainer.scrollBy({ left: clientWidth * 0.8, behavior: "smooth" });
        }
      }, 3500);
    };

    const handleResize = () => {
      clearInterval(intervalId);
      if (window.innerWidth < 768) {
        startAutoScroll();
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, [isPaused]);

  return (
    <section ref={sectionRef} className="w-full bg-white py-10 md:py-24 px-6 lg:px-20">
      <div className="mx-auto">
        <div className="reveal flex flex-col items-center justify-center mb-8 md:mb-12 gap-4 text-center">
          <div className="flex items-center justify-center gap-3 md:gap-5">
            <Image
              src="/penguine2.svg"
              alt="Flavors Icon Left"
              width={40}
              height={40}
              className="object-contain drop-shadow-sm md:w-12 md:h-12"
            />
            <h2 className="font-caprasimo text-2xl md:text-4xl lg:text-[45px] text-stone-900 uppercase tracking-wide leading-none text-center">
              The Classic Collection
            </h2>
            <Image
              src="/penguine2.svg"
              alt="Flavors Icon Right"
              width={40}
              height={40}
              className="object-contain -scale-x-100 drop-shadow-sm md:w-12 md:h-12"
            />
          </div>
        </div>

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
          className="flex flex-nowrap overflow-x-auto md:grid md:grid-cols-5 snap-x snap-mandatory gap-5 lg:gap-8 pb-6 md:pb-2 pt-2 px-2 md:px-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {flavors.map((flavor, index) => (
            <div
              key={`${flavor.id}-${index}`}
              className={`reveal reveal-delay-${index + 1} flex flex-col items-center gap-3 shrink-0 snap-center min-w-[80vw] sm:min-w-[300px] md:min-w-0`}
            >
              <div className="w-full aspect-4/5 bg-stone-50 border-[3px] border-stone-900 rounded-[2.5rem] flex items-center justify-center relative overflow-hidden transition-transform hover:-translate-y-2 duration-300 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] group">
                <Image
                  src={flavor.image}
                  alt={`${flavor.name} ice cream`}
                  fill
                  sizes="(max-width: 768px) 80vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-caprasimo text-stone-900 text-lg md:text-xl uppercase tracking-wider text-center mt-2">
                {flavor.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
