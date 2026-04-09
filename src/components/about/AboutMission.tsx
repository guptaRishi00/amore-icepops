"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Sprout, Users, Sparkles, HandHeart, Leaf } from "lucide-react";

const missionCards = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To craft the most authentic, joyous frozen treats while fostering community and celebrating real ingredients.",
    color: "bg-[#406BB5]",
  },
  {
    icon: Sprout,
    title: "Farm Fresh",
    description:
      "We source every ingredient from trusted local farms — ensuring peak ripeness, flavor, and freshness in every pop.",
    color: "bg-[#9bc53d]",
  },
  {
    icon: HandHeart,
    title: "Made with Care",
    description:
      "Each pop is hand-poured and carefully prepared by real people who genuinely love what they do.",
    color: "bg-[#ff4d8c]",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "We believe in bringing people together — one pop at a time. Every event, every smile, every moment matters.",
    color: "bg-[#FFB000]",
  },
  {
    icon: Leaf,
    title: "Zero Artificial",
    description:
      "No preservatives, no artificial colors, no shortcuts. Just pure, real fruit — the way nature intended.",
    color: "bg-emerald-400",
  },
  {
    icon: Sparkles,
    title: "The Amore Promise",
    description:
      "It's not just dessert — it's a moment of pure, refreshing happiness delivered to every person we meet.",
    color: "bg-[#406BB5]",
  },
];

export default function AboutMission() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="w-full px-4 md:px-8 py-16 md:py-28">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="reveal text-center mb-14 md:mb-20">
          <h2 className="font-caprasimo text-3xl md:text-5xl lg:text-[3.5rem] uppercase tracking-wider text-stone-900 mb-4 drop-shadow-[3px_3px_0px_rgba(64,107,181,0.3)]">
            What We Stand For
          </h2>
          <p className="font-jua text-stone-500 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            The values and promises that define every Amore pop.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {missionCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className={`reveal reveal-delay-${(index % 3) + 1} flex flex-col items-center md:items-start text-center md:text-left gap-5 bg-white border-[3px] border-stone-900 rounded-2xl p-8 lg:p-10 shadow-[5px_5px_0px_0px_rgba(28,25,23,1)] transition-transform duration-300 hover:-translate-y-1`}
              >
                <div className={`w-14 h-14 rounded-full ${card.color} border-[3px] border-stone-900 shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] flex items-center justify-center`}>
                  <Icon size={26} strokeWidth={2.5} className="text-white" />
                </div>
                <h3 className="font-caprasimo text-xl lg:text-2xl text-stone-900 uppercase tracking-wide">
                  {card.title}
                </h3>
                <p className="font-jua text-stone-600 text-sm lg:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
