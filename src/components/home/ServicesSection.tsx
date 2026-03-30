import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="relative w-full bg-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-12 relative z-10">
        {/* === COLUMN 1: ABOUT US === */}
        <div className="flex flex-col items-start">
          <div className="w-full aspect-[3/4] bg-stone-100 border-[3px] border-stone-900 rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative transition-transform duration-300 hover:-translate-y-2">
            <Image
              src="/mango.png"
              alt="About Us"
              fill
              className="object-cover"
            />
          </div>

          <h3 className="font-caprasimo text-4xl text-stone-900 mt-10 mb-4 uppercase tracking-wider">
            About Us
          </h3>
          <p className="font-jua text-lg text-stone-800 mb-8 leading-relaxed">
            Take a look behind the scenes and discover how the city's coolest
            ice cream was created. Handmade ice cream rolls from the street
            markets of Thailand to the most beautiful city in the world!
          </p>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-stone-950 font-jua border-[3px] border-stone-900 rounded-full shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:shadow-none active:translate-x-1 active:translate-y-1 text-base uppercase tracking-wider mt-auto"
          >
            Learn More <ChevronRight size={18} strokeWidth={3} />
          </Link>
        </div>

        {/* === COLUMN 2: FOOD TRUCKS (Staggered Layout) === */}
        <div className="flex flex-col items-start md:pt-8">
          <h3 className="font-caprasimo text-4xl text-stone-900 mb-4 uppercase tracking-wider">
            Food Trucks
          </h3>
          <p className="font-jua text-lg text-stone-800 mb-8 leading-relaxed">
            Our cool retro trucks have been traveling throughout Germany since
            2016. Our mission: Bring joy to life in a cup. Let yourself be
            delighted!
          </p>

          <Link
            href="/trucks"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-stone-950 font-jua border-[3px] border-stone-900 rounded-full shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:shadow-none active:translate-x-1 active:translate-y-1 text-base uppercase tracking-wider"
          >
            Learn More <ChevronRight size={18} strokeWidth={3} />
          </Link>

          <div className="w-full aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/5] mt-10 bg-stone-100 border-[3px] border-stone-900 rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative transition-transform duration-300 hover:-translate-y-2">
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
          <div className="w-full aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/5] bg-stone-100 border-[3px] border-stone-900 rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative transition-transform duration-300 hover:-translate-y-2">
            <Image
              src="/grape2.png"
              alt="Catering"
              fill
              className="object-cover"
            />
          </div>

          <h3 className="font-caprasimo text-4xl text-stone-900 mt-10 mb-4 uppercase tracking-wider">
            Catering
          </h3>
          <p className="font-jua text-lg text-stone-800 mb-8 leading-relaxed">
            Whether it's a corporate event, birthday party, or wedding, we
            deliver for every occasion and offer outstanding catering options.
            We'll make your catering an unforgettable experience!
          </p>

          <Link
            href="/catering"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-stone-950 font-jua border-[3px] border-stone-900 rounded-full shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:shadow-none active:translate-x-1 active:translate-y-1 text-base uppercase tracking-wider mt-auto"
          >
            Learn More <ChevronRight size={18} strokeWidth={3} />
          </Link>
        </div>
      </div>
    </section>
  );
}
