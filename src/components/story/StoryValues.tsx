"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ShieldCheck, Lightbulb, Leaf, Heart, IceCreamCone } from "lucide-react";

const valuesData = [
  {
    icon: ShieldCheck,
    label: "No Compromise\non Quality",
    color: "text-green-500",
  },
  {
    icon: Lightbulb,
    label: "Innovation and\nCreative",
    color: "text-blue-500",
  },
  {
    icon: Leaf,
    label: "100% Natural Fruits",
    color: "text-emerald-500",
  },
  {
    icon: Heart,
    label: "Made with Love\nand Care",
    color: "text-rose-500",
  },
  {
    icon: IceCreamCone,
    label: "More Creamy and\nFruitful",
    color: "text-amber-500",
  },
];

export default function StoryValues() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="w-full px-4 md:px-8 py-12 md:py-20 max-w-8xl mx-auto">
      {/* Section Header */}
      <div className="reveal text-center mb-12 md:mb-16">
        <h2 className="font-caprasimo text-3xl md:text-5xl uppercase tracking-wider text-stone-900 mb-4 drop-shadow-[3px_3px_0px_rgba(64,107,181,0.3)]">
          Our Core Values
        </h2>
        <p className="font-jua text-stone-500 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
          The principles that guide everything we create.
        </p>
      </div>

      <div className="reveal flex flex-wrap items-start justify-center gap-8 md:gap-12 lg:gap-16">
        {valuesData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`reveal reveal-delay-${index + 1} flex flex-col items-center text-center gap-5 w-[140px] md:w-[160px]`}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-stone-100 border-[3px] border-stone-900 shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] flex items-center justify-center">
                <Icon size={28} strokeWidth={2.5} className={item.color} />
              </div>
              <span className="font-jua text-xs md:text-sm text-stone-900 uppercase tracking-wider leading-snug whitespace-pre-line">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
