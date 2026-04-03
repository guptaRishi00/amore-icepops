import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const allFlavors = [
  {
    id: "strawberry-bliss",
    name: "Strawberry Bliss",
    accent: "text-[#ff4d8c]",
    image: "/strawberry.png",
    desc: "Sweet, juicy, and 100% natural real strawberries.",
  },
  {
    id: "mango-tango",
    name: "Mango Tango",
    accent: "text-[#ffb000]",
    image: "/mango.png",
    desc: "Tropical bliss squeezed into every frozen bite.",
  },
  {
    id: "peachy-keen",
    name: "Peachy Keen",
    accent: "text-[#ff9c7a]",
    image: "/peach.png",
    desc: "Smooth and refreshing peach nectar puree.",
  },
  {
    id: "wild-raspberry",
    name: "Wild Raspberry",
    accent: "text-[#d82b5e]",
    image: "/rasp.png",
    desc: "A tart and sweet punch of hand-picked raspberries.",
  },
  {
    id: "concord-grape",
    name: "Concord Grape",
    accent: "text-[#8c489f]",
    image: "/grape.png",
    desc: "A blast of rich, nostalgic dark grape flavor.",
  },
  {
    id: "crisp-apple",
    name: "Crisp Apple",
    accent: "text-[#9bc53d]",
    image: "/apple.png",
    desc: "Refreshingly crisp green apple with a hint of citrus.",
  },
];

export default function FlavorsGrid() {
  return (
    <section className="relative w-full bg-[#FAF9F6] py-20 md:py-28 px-4 md:px-8 lg:px-12 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-y-30">
          {allFlavors.map((flavor, idx) => (
            <div
              key={flavor.id}
              className="group flex flex-col items-center bg-white border-[3px] border-stone-900 rounded-[2.5rem] shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(28,25,23,1)]"
            >
              {/* Image Container */}
              <div className="w-full h-[480px] bg-stone-100 border-b-[3px] border-stone-900 relative overflow-hidden flex items-center justify-center">
                {/* Background dot pattern inside card */}
                <div
                  className="absolute inset-0 opacity-30 mix-blend-multiply"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, rgba(0, 0, 0, 0.4) 1px, transparent 0)",
                    backgroundSize: "16px 16px",
                  }}
                />

                <Image
                  src={flavor.image}
                  alt={flavor.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 drop-shadow-xl"
                />
              </div>

              {/* Text & Action */}
              <div className="w-full flex flex-col items-center p-8 text-center bg-white flex-grow">
                <h2 className="font-caprasimo text-2xl md:text-3xl text-stone-900 uppercase tracking-wide mb-3">
                  {flavor.name}
                </h2>

                <p className="font-jua text-stone-600 text-base md:text-lg mb-8 leading-relaxed max-w-xs">
                  {flavor.desc}
                </p>

                <Link
                  href={`/shop/${flavor.id}`}
                  className="mt-auto inline-flex items-center gap-2 px-8 py-3 bg-white text-stone-950 font-jua border-[3px] border-stone-900 rounded-full shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px] text-sm md:text-base uppercase tracking-widest font-bold"
                >
                  Order Now <ChevronRight size={18} strokeWidth={3} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
