"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const valuesData = [
  {
    icon: "1",
    title: "100% Real Fruit",
    description: "No syrups or fake colors. We source the freshest fruits directly from local farms. It's truly nature's candy."
  },
  {
    icon: "2",
    title: "Handmade Joy",
    description: "Every pop is carefully poured and prepared by real people. Imperfections in shape mean perfection in taste."
  },
  {
    icon: "3",
    title: "For the Community",
    description: "A frozen treat meant for everyone. We believe in creating moments that bring people of all ages together."
  }
];

export default function StoryValues() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="w-full px-4 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="reveal text-center mb-16 px-4">
        <h2 className="font-caprasimo text-4xl md:text-5xl lg:text-[4rem] uppercase tracking-wider text-stone-900 mb-6 drop-shadow-[3px_3px_0px_rgba(64,107,181,0.3)]">
          Core Values
        </h2>
        <p className="font-jua text-stone-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          The three foundational pillars that define everything we do.
        </p>
      </div>

      {/* Standard 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {valuesData.map((item, index) => (
          <div 
            key={index}
            className={`reveal reveal-delay-${index + 1} bg-white border-[4px] border-stone-900 rounded-[2rem] p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(64,107,181,1)] text-stone-900 flex flex-col items-center text-center gap-6 transition-transform duration-300 hover:-translate-y-2`}
          >
            {/* Icon/Number */}
            <div className="w-16 h-16 bg-[#406BB5] rounded-full flex items-center justify-center border-[3px] border-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]">
              <span className="font-caprasimo text-2xl text-white">{item.icon}</span>
            </div>
            
            {/* Title */}
            <h3 className="font-caprasimo text-2xl lg:text-3xl uppercase leading-tight">
              {item.title}
            </h3>
            
            {/* Description */}
            <p className="font-jua text-stone-600 text-base md:text-lg leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      
    </section>
  );
}
