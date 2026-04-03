"use client";

import Image from "next/image";
import { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const flavors = [
  { name: "Mango", id: "mango", image: "/mango3.png" },
  { name: "Strawberry", id: "strawberry", image: "/strawberry3.png" },
  { name: "Peach", id: "peach", image: "/peach3.png" },
  { name: "Raspberry", id: "raspberry", image: "/rasp2.png" },
  { name: "Grapes", id: "grapes", image: "/grape4.png" },
];

export default function PopularFlavors() {
  return (
    <section className="w-full bg-white pt-12 lg:pt-16 px-5 lg:mt-0">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 lg:px-4">
          <div className="flex items-center gap-3">
            <Image
              src="/penguine2.svg"
              alt="Flavors Icon"
              width={32}
              height={32}
              className="object-contain"
            />
            <h2 className="font-caprasimo text-2xl md:text-4xl lg:text-[40px] text-stone-900 uppercase tracking-wide leading-none">
              The Classic  <br className="hidden md:block lg:hidden" /> Collection{" "}
              <span className="hidden lg:inline">-</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-nowrap overflow-x-auto md:grid md:grid-cols-5 snap-x snap-mandatory gap-6 lg:gap-8 pb-8 pt-2 lg:px-10 lg:py-3 -mx-2 md:mx-0 md:pb-2 md:pt-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {flavors.map((flavor, index) => (
            <div
              key={`${flavor.id}-${index}`}
              className="flex flex-col items-center gap-3 shrink-0 snap-center min-w-[75vw] sm:min-w-[300px] md:min-w-0"
            >
              <div className="w-full aspect-4/5 bg-stone-50 border-[3px] border-stone-900 rounded-[2.5rem] flex items-center justify-center relative overflow-hidden transition-transform hover:-translate-y-2 duration-300 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] group">
                <Image
                  src={flavor.image}
                  alt={`${flavor.name} ice cream`}
                  fill
                  sizes="(max-width: 768px) 75vw, 20vw"
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
