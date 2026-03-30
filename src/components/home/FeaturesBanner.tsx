import { Palette, Leaf, Cherry, Apple } from "lucide-react";

const features = [
  { text: "No artificial colours", icon: Palette },
  { text: "Zero added preservatives", icon: Leaf },
  { text: "No artificial flavours", icon: Cherry },
  { text: "100% Real fruit", icon: Apple },
];

export default function FeaturesBanner() {
  // We duplicate the array a few times to ensure the banner is long enough
  // to never show a blank space, even on massive ultra-wide monitors!
  const repeatedFeatures = [...features, ...features, ...features, ...features];

  return (
    <section className="w-full bg-white py-6 overflow-hidden flex items-center">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* The moving track */}
      <div className="flex w-max animate-marquee items-center gap-10 md:gap-16 px-5 md:px-8">
        {repeatedFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="flex items-center gap-4 shrink-0">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-[#406BB5]">
                <Icon size={28} strokeWidth={2.5} />
              </div>
              <span className="font-caprasimo text-2xl md:text-3xl text-stone-900 tracking-wide pt-1">
                {feature.text}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
