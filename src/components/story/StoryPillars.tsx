"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const pillars = [
  {
    title: "Our Mission",
    description:
      "To deliver the finest quality fruit pops made with farm-fresh fruits to every customer — without any added preservatives or artificial flavors.",
    color: "bg-[#406BB5]",
  },
  {
    title: "Our Creativity",
    description:
      "We let our imagination flow to create unique ways to enjoy real fruit. Every flavor combination is a small adventure, crafted with curiosity and care.",
    color: "bg-[#FFB000]",
  },
  {
    title: "Our Culture",
    description:
      "Built on integrity, transparency, and genuine partnerships. We work hand-in-hand with local farms and suppliers who share our passion for quality.",
    color: "bg-[#ff4d8c]",
  },
  {
    title: "Our Craft",
    description:
      "Handling fruit is an art. Every pop is shaped by hand and guided by heart — our makers treat each creation like a small masterpiece.",
    color: "bg-[#9bc53d]",
  },
];

export default function StoryPillars() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="w-full bg-white py-16 md:py-28 px-4 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="reveal text-center mb-16 md:mb-20">
          <h2 className="font-caprasimo text-3xl md:text-5xl lg:text-[3.5rem] uppercase tracking-wider text-stone-900 mb-4 drop-shadow-[3px_3px_0px_rgba(64,107,181,0.3)]">
            What Drives Us
          </h2>
          <p className="font-jua text-stone-500 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Four pillars that shape every pop we make.
          </p>
        </div>

        {/* Standard 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`reveal reveal-delay-${index + 1} flex flex-col items-center md:items-start text-center md:text-left gap-4 bg-white border-[3px] border-stone-900 rounded-2xl p-8 lg:p-10 shadow-[5px_5px_0px_0px_rgba(28,25,23,1)] transition-transform duration-300 hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 rounded-full ${pillar.color} border-[3px] border-stone-900 shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] flex items-center justify-center`}>
                <span className="font-caprasimo text-white text-lg">{index + 1}</span>
              </div>
              <h3 className="font-caprasimo text-xl lg:text-2xl text-stone-900 uppercase tracking-wide">
                {pillar.title}
              </h3>
              <p className="font-jua text-stone-600 text-sm lg:text-base leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
