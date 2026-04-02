import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ServicesSection() {
  return (
    // Scaled down padding and top margin
    <section className="relative w-full bg-white py-16 px-4 md:px-8 lg:px-12 overflow-hidden lg:mt-12">
      {/* Reduced max-width and grid gaps */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8 relative z-10">
        {/* === COLUMN 1: ABOUT US === */}
        <div className="flex flex-col items-start">
          {/* Scaled down border, border-radius, and shadow */}
          <div className="w-full aspect-[3/4] bg-stone-100 border-[2px] border-stone-900 rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative transition-transform duration-300 hover:-translate-y-2">
            <Image
              src="/mango.png"
              alt="About Us"
              fill
              className="object-cover"
            />
          </div>

          {/* Scaled down text and margins */}
          <h3 className="font-caprasimo text-2xl lg:text-3xl text-stone-900 mt-6 mb-3 uppercase tracking-wider">
            About Us
          </h3>
          <p className="font-jua text-base text-stone-800 mb-6 leading-relaxed">
            Take a look behind the scenes and discover how the city's coolest
            ice cream was created. Handmade ice cream rolls from the street
            markets of Thailand to the most beautiful city in the world!
          </p>

          {/* Scaled down button sizes, borders, and shadows */}
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-stone-950 font-jua border-2 border-stone-900 rounded-full shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:shadow-none active:translate-x-1 active:translate-y-1 text-sm uppercase tracking-wider mt-auto"
          >
            Learn More <ChevronRight size={16} strokeWidth={3} />
          </Link>
        </div>

        {/* === COLUMN 2: FOOD TRUCKS (Staggered Layout) === */}
        <div className="flex flex-col items-start md:pt-6">
          <h3 className="font-caprasimo text-2xl lg:text-3xl text-stone-900 mb-3 uppercase tracking-wider order-2 md:order-none mt-6 md:mt-0">
            Food Trucks
          </h3>
          <p className="font-jua text-base text-stone-800 mb-6 leading-relaxed order-3 md:order-none">
            Our cool retro trucks have been traveling throughout Germany since
            2016. Our mission: Bring joy to life in a cup. Let yourself be
            delighted!
          </p>

          <Link
            href="/trucks"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-stone-950 font-jua border-2 border-stone-900 rounded-full shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:shadow-none active:translate-x-1 active:translate-y-1 text-sm uppercase tracking-wider order-4 md:order-none"
          >
            Learn More <ChevronRight size={16} strokeWidth={3} />
          </Link>

          <div className="w-full aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/5] mt-0 md:mt-6 bg-stone-100 border-[2px] border-stone-900 rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative transition-transform duration-300 hover:-translate-y-2 order-1 md:order-none">
            <Image
              src="/peach.png"
              alt="Food Trucks"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* === COLUMN 3: CATERING === */}
        <div className="flex flex-col items-start">
          <div className="w-full aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/5] bg-stone-100 border-[2px] border-stone-900 rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative transition-transform duration-300 hover:-translate-y-2">
            <Image
              src="/grape2.png"
              alt="Catering"
              fill
              className="object-cover"
            />
          </div>

          <h3 className="font-caprasimo text-2xl lg:text-3xl text-stone-900 mt-6 mb-3 uppercase tracking-wider">
            Catering
          </h3>
          <p className="font-jua text-base text-stone-800 mb-6 leading-relaxed">
            Whether it's a corporate event, birthday party, or wedding, we
            deliver for every occasion and offer outstanding catering options.
            We'll make your catering an unforgettable experience!
          </p>

          <Link
            href="/catering"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-stone-950 font-jua border-2 border-stone-900 rounded-full shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:shadow-none active:translate-x-1 active:translate-y-1 text-sm uppercase tracking-wider mt-auto"
          >
            Learn More <ChevronRight size={16} strokeWidth={3} />
          </Link>
        </div>
      </div>
    </section>
  );
}
