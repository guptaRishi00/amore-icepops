"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Palette, Handshake, Gem } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver the finest quality fruit pops made with farm-fresh fruits to every customer — without any added preservatives or artificial flavors.",
    color: "bg-[#406BB5]",
    accent: "text-[#406BB5]",
    number: "01",
    image: "/shop2.png",
  },
  {
    icon: Palette,
    title: "Our Creativity",
    description:
      "We let our imagination flow to create unique ways to enjoy real fruit. Every flavor combination is a small adventure, crafted with curiosity and care.",
    color: "bg-[#FFB000]",
    accent: "text-[#FFB000]",
    number: "02",
    image: "/shop3.png",
  },
  {
    icon: Handshake,
    title: "Our Culture",
    description:
      "Built on integrity, transparency, and genuine partnerships. We work hand-in-hand with local farms and suppliers who share our passion for quality.",
    color: "bg-[#ff4d8c]",
    accent: "text-[#ff4d8c]",
    number: "03",
    image: "/shop4.png",
  },
  {
    icon: Gem,
    title: "Our Craft",
    description:
      "Handling fruit is an art. Every pop is shaped by hand and guided by heart — our makers treat each creation like a small masterpiece.",
    color: "bg-[#9bc53d]",
    accent: "text-[#9bc53d]",
    number: "04",
    image: "/shop5.png",
  },
];

export default function StoryPillars() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="w-full bg-stone-50 py-16 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="reveal text-center mb-16 md:mb-24">
          <h2 className="font-caprasimo text-3xl md:text-5xl lg:text-[3.5rem] uppercase tracking-wider text-stone-900 mb-4 drop-shadow-[3px_3px_0px_rgba(64,107,181,0.3)]">
            What Drives Us
          </h2>
          <p className="font-jua text-stone-500 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Four pillars that shape every pop we make.
          </p>
        </div>

        {/* Alternating rows */}
        <div className="flex flex-col gap-12 md:gap-0">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`reveal reveal-delay-${(index % 2) + 1} flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-stretch gap-0 bg-white border-[3px] border-stone-900 rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] overflow-hidden md:min-h-[320px] ${index > 0 ? "md:mt-10" : ""}`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 relative min-h-[240px] md:min-h-0 bg-stone-100 border-b-[3px] md:border-b-0 border-stone-900" style={{ borderRight: isEven ? "3px solid #1c1917" : "none", borderLeft: !isEven ? "3px solid #1c1917" : "none" }}>
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 lg:p-16 gap-5 relative">
                  {/* Large faded number */}
                  <span className="absolute top-4 right-6 md:top-6 md:right-10 font-caprasimo text-[80px] md:text-[120px] leading-none text-stone-900/[0.09] select-none pointer-events-none">
                    {pillar.number}
                  </span>

                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full ${pillar.color} border-[3px] border-stone-900 shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] flex items-center justify-center shrink-0`}>
                      <Icon size={22} strokeWidth={2.5} className="text-white" />
                    </div>

                  </div>

                  <h3 className="font-caprasimo text-2xl lg:text-3xl text-stone-900 uppercase tracking-wide">
                    {pillar.title}
                  </h3>

                  <p className="font-jua text-stone-600 text-base lg:text-lg leading-relaxed max-w-md">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}