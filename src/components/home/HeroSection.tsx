import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="px-5 ">
      <div className="relative w-full min-h-screen flex items-center overflow-hidden pt-20 rounded-xl">
        <Image
          src="/hero2.png"
          alt="Delicious colorful ice pops"
          fill
          priority
          className="object-cover object-center -z-20"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
          <div className="flex flex-col items-start max-w-3xl gap-20">
            <div className="flex items-start flex-col gap-6">
              <h1 className="font-caprasimo text-6xl sm:text-7xl md:text-8xl lg:text-[110px] text-white uppercase leading-[0.9] tracking-tight [-webkit-text-stroke:2px_#1c1917] md:[-webkit-text-stroke:4px_#1c1917] drop-shadow-[4px_4px_0px_rgba(28,25,23,1)] md:drop-shadow-[8px_8px_0px_rgba(28,25,23,1)] mb-6 md:mb-10">
                Taste The <br />
                Summer.
              </h1>
              <p className="font-caprasimo text-stone-900 text-2xl md:text-xl max-w-xl leading-snug text-center sm:text-left">
                Dive into a frozen paradise and let our handcrafted ice-pops
                take you to a land of pure joy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              <Link
                href="/shop"
                className="shrink-0 flex items-center gap-2 px-8 py-4 bg-white text-stone-900 font-jua text-sm md:text-base uppercase tracking-widest border-[3px] border-stone-900 rounded-full shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:shadow-none active:translate-x-1 active:translate-y-1 font-bold"
              >
                Shop Flavors <ChevronRight size={20} strokeWidth={3} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
