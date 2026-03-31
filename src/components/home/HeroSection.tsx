import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="px-5">
      {/* Reduced height from min-h-screen to min-h-[60vh] and adjusted padding */}
      <div className="relative w-full min-h-[77vh] flex items-center overflow-hidden py-16 md:py-24 rounded-xl">
        <Image
          src="/hero4.png"
          alt="Delicious colorful ice pops"
          fill
          priority
          className="object-cover object-center -z-20"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 w-full">
          {/* Reduced main gap from 20 to 10 */}
          <div className="flex flex-col items-start max-w-2xl gap-10">
            {/* Reduced inner gap from 6 to 4 */}
            <div className="flex items-start flex-col gap-4">
              {/* Scaled down font sizes, strokes, and drop-shadows */}
              <h1 className="font-caprasimo text-5xl sm:text-6xl md:text-7xl lg:text-[80px] text-white uppercase leading-[0.9] tracking-tight [-webkit-text-stroke:1.5px_#1c1917] md:[-webkit-text-stroke:3px_#1c1917] drop-shadow-[3px_3px_0px_rgba(28,25,23,1)] md:drop-shadow-[6px_6px_0px_rgba(28,25,23,1)] mb-2 md:mb-4">
                Taste The <br />
                Summer.
              </h1>
              {/* Scaled down text size to a consistent text-lg */}
              <p className="font-caprasimo text-stone-900 text-lg md:text-lg max-w-lg leading-snug text-center sm:text-left">
                Dive into a frozen paradise and let our handcrafted ice-pops
                take you to a land of pure joy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
              {/* Scaled down button padding, borders, shadows, and icon size */}
              <Link
                href="/shop"
                className="shrink-0 flex items-center gap-2 px-6 py-3 bg-white text-stone-900 font-jua text-sm uppercase tracking-widest border-[2px] border-stone-900 rounded-full shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:shadow-none active:translate-x-1 active:translate-y-1 font-bold"
              >
                Shop Flavors <ChevronRight size={18} strokeWidth={3} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
