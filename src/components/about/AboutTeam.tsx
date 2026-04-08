"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const teamMembers = [
  {
    name: "Marco Rossi",
    role: "Founder & Flavorist",
    image: "/penguine2.svg",
    description: "Always chasing the perfect peach and blending new ideas."
  },
  {
    name: "Sofia Lin",
    role: "Operations Director",
    image: "/penguine.png",
    description: "Keeps the carts running and the pops perfectly frozen."
  },
  {
    name: "David Chen",
    role: "Community Manager",
    image: "/penguine5.png",
    description: "Making sure every customer leaves with a smile and a story."
  }
];

export default function AboutTeam() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="w-full px-4 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="reveal text-center mb-16 px-4">
        <h2 className="font-caprasimo text-4xl md:text-5xl lg:text-[4rem] uppercase tracking-wider text-stone-900 mb-6 drop-shadow-[2px_2px_0px_rgba(64,107,181,0.2)]">
          Meet The Team
        </h2>
        <p className="font-jua text-stone-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          The passionate individuals behind your favorite treats.
        </p>
      </div>

      {/* Standard 3-Column Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            className={`reveal reveal-delay-${index + 1} bg-white border-[4px] border-stone-900 rounded-[2rem] p-6 shadow-[8px_8px_0px_0px_rgba(28,25,23,1)] text-stone-900 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2 overflow-hidden`}
          >
            {/* Image Container */}
            <div className="relative w-full aspect-square bg-stone-100 border-[3px] border-stone-900 rounded-[1.5rem] mb-6 overflow-hidden">
              <Image 
                src={member.image} 
                alt={member.name} 
                fill
                className="object-contain p-6"
              />
            </div>
            
            {/* Details */}
            <h3 className="font-caprasimo text-2xl uppercase mb-1">
              {member.name}
            </h3>
            
            <p className="font-jua text-[#406BB5] text-sm uppercase tracking-widest font-bold mb-4">
              {member.role}
            </p>
            
            <p className="font-jua text-stone-600 text-base leading-relaxed px-2 pb-4">
              {member.description}
            </p>
          </div>
        ))}
      </div>
      
    </section>
  );
}
