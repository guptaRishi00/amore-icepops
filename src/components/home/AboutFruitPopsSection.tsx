"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "100%", label: "Real Fruit" },
  { value: "50+", label: "Flavors" },
  { value: "10K+", label: "Happy Customers" },
];

export default function AboutFruitPopsSection() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="relative w-full bg-white py-16 md:py-28 px-6 lg:px-20 overflow-hidden">
      {/* Subtle decorative dots in background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1c1917 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 w-full mx-auto flex flex-col lg:flex-row items-stretch gap-10 lg:gap-20">
        {/* Left: Image */}
        <div className="reveal-left w-full lg:w-[55%] flex">
          <div className="relative w-full min-h-[340px] md:min-h-[460px] lg:min-h-0 bg-stone-100 border-4 border-stone-900 rounded-3xl md:rounded-[2.5rem] shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] overflow-hidden">
            <Image
              src="/about.png"
              alt="About Amore Fruit Pops"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center gap-6 md:gap-8 text-center lg:text-left items-center lg:items-start py-4 lg:py-8">
          {/* Badge */}
          <div className="reveal inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFB000] text-stone-900 border-[3px] border-stone-900 rounded-full font-jua text-sm md:text-base uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]">
            {/* <Sparkles size={16} fill="currentColor" strokeWidth={2.5} /> */}
            Our Story
          </div>

          {/* Heading */}
          <h2 className="reveal reveal-delay-1 font-caprasimo text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-stone-900 uppercase leading-[1.08] tracking-wider max-w-xl">
            Handcrafted With Love, Made With Real Fruit
          </h2>

          {/* Description */}
          <div className="reveal reveal-delay-2 space-y-4 max-w-lg">
            <p className="font-jua text-stone-600 text-base md:text-lg leading-relaxed">
              Born from a love of authentic, sun-ripened flavors and a desire to
              bring smiles to every face. We set out to redefine what a frozen
              treat could be.
            </p>
            <p className="font-jua text-stone-600 text-base md:text-lg leading-relaxed">
              No artificial colors, no shortcuts — just real, juicy fruit purees
              hand-molded into delightful works of art. Every pop is a labor of
              love, as beautiful as it is delicious.
            </p>
          </div>

          {/* Stats Row */}
          <div className="reveal reveal-delay-3 flex flex-row flex-wrap items-stretch md:items-center justify-center lg:justify-start gap-4 md:gap-5 pt-4 w-full">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center px-4 md:px-7 py-4 md:py-5 bg-white border-[3px] border-stone-900 rounded-2xl shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] md:min-w-[110px] ${
                  stat.value === "10K+"
                    ? "w-full md:w-auto"
                    : "w-[calc(50%-0.5rem)] md:w-auto"
                }`}
              >
                <span className="font-caprasimo text-2xl md:text-3xl text-stone-900 leading-none">
                  {stat.value}
                </span>
                <span className="font-jua text-xs md:text-sm text-stone-500 uppercase tracking-wider mt-1.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
