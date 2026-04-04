import React from "react";
import { Grape } from "lucide-react";

// Custom SVG Icons replacing lucide-react
// Using fill="currentColor" to inherit the text-[#406BB5] color from the parent div.
// The cutout details use fill="#f3f4f6" to match the bg-gray-100 of the circle, creating negative space.

const CustomPalette = ({ size }:any) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.17-.6-1.61-.31-.36-.5-.83-.5-1.34 0-1.1.9-2 2-2h1.55c2.79 0 5.05-2.26 5.05-5.05C22 6.84 17.52 2 12 2zM6.5 11.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3-4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
  </svg>
);

const LeafTubIcon = ({ size }:any) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Ice cream scoops */}
    <path d="M7 8C7 5.24 9.24 3 12 3C14.76 3 17 5.24 17 8H7Z" />
    {/* Tub rim */}
    <path d="M4 8.5C4 7.67 4.67 7 5.5 7H18.5C19.33 7 20 7.67 20 8.5V10.5C20 11.33 19.33 12 18.5 12H5.5C4.67 12 4 11.33 4 10.5V8.5Z" />
    {/* Tub base */}
    <path d="M5.5 13H18.5L17.34 20.54C17.16 21.36 16.44 22 15.6 22H8.4C7.56 22 6.84 21.36 6.66 20.54L5.5 13Z" />
    {/* Leaves Cutout */}
    <path
      fill="#f3f4f6"
      d="M11 17C11 17 9 15.5 9.5 14C9.5 14 11.5 14.5 12 16C12 16 13.5 14.5 14.5 15C14.5 15 14 17 12.5 16.5C12.5 16.5 11.5 18 11 17Z"
    />
  </svg>
);

const IceCreamBowlIcon = ({ size }:any) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Scoops */}
    <path d="M12 3C10.15 3 8.56 4.14 7.82 5.74C5.69 6.2 4 8.1 4 10.4V11H20V10.4C20 8.1 18.31 6.2 16.18 5.74C15.44 4.14 13.85 3 12 3Z" />
    {/* Spoon sticking out */}
    <path d="M19.4 6.6L16.5 9.5H20V11H4V9.5H14.5L17.1 6.9C16.8 6 16.8 4.9 17.5 4.2C18.2 3.5 19.3 3.5 20 4.2C20.7 4.9 20.5 6 19.4 6.6Z" />
    {/* Bowl rim */}
    <path d="M4 12H20V13.5C20 14.33 19.33 15 18.5 15H5.5C4.67 15 4 14.33 4 13.5V12Z" />
    {/* Bowl base */}
    <path d="M5.5 16H18.5L16.82 21.31C16.56 22.28 15.69 23 14.68 23H9.32C8.31 23 7.44 22.28 7.18 21.31L5.5 16Z" />
  </svg>
);

const StrawberryIcon = ({ size }:any) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Strawberry Body & Stem */}
    <path d="M13 2.5C13 1.67 12.33 1 11.5 1C10.67 1 10 1.67 10 2.5V3.5C7.24 3.92 5 6.47 5 9.5C5 14 8.5 20.5 11.5 22.5C14.5 20.5 18 14 18 9.5C18 6.47 15.76 3.92 13 3.5V2.5Z" />
    {/* Leaves top detail cutout */}
    <path
      d="M7 6C7 6 8.5 6 9.5 7.5C9.5 7.5 10.5 5.5 12 5.5C13.5 5.5 14.5 7.5 14.5 7.5C15.5 6 17 6 17 6C17 6 16.5 8 15.5 8.5C15.5 8.5 16 10 16 10C16 10 13.5 9.5 12 11C10.5 9.5 8 10 8 10C8 10 8.5 8.5 8.5 8.5C7.5 8 7 6 7 6Z"
      fill="#f3f4f6"
    />
    {/* Seed cutouts */}
    <circle cx="10" cy="13" r="1.2" fill="#f3f4f6" />
    <circle cx="13" cy="15" r="1.2" fill="#f3f4f6" />
    <circle cx="11" cy="17.5" r="1.2" fill="#f3f4f6" />
    <circle cx="14" cy="11.5" r="1.2" fill="#f3f4f6" />
  </svg>
);

// Map the new custom icons to your features
const features = [
  { text: "No artificial colours", icon: CustomPalette },
  { text: "Zero added preservatives", icon: LeafTubIcon },
  { text: "No artificial flavours", icon: IceCreamBowlIcon },
  { text: "100% Real fruit", icon: Grape },
];

export default function FeaturesBanner() {
  // We duplicate the array a few times to ensure the banner is long enough
  // to never show a blank space, even on massive ultra-wide monitors!
  const repeatedFeatures = [...features, ...features, ...features, ...features];

  return (
    <section className="w-full bg-white py-4 md:py-6 overflow-hidden flex items-center border-y-4 border-stone-900">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* The moving track */}
      <div className="flex w-max animate-marquee items-center gap-10 md:gap-16 px-4 md:px-8">
        {repeatedFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="flex items-center gap-4 shrink-0">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gray-100 flex items-center justify-center text-[#406BB5]">
                {/* Custom solid SVGs don't need strokeWidth */}
                <span className="hidden md:block">
                  <Icon size={32} />
                </span>
                <span className="md:hidden">
                  <Icon size={24} />
                </span>
              </div>
              <span className="font-caprasimo text-base md:text-3xl text-stone-900 tracking-wide pt-1">
                {feature.text}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
