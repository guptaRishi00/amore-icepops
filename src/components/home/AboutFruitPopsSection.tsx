import { Heart } from "lucide-react";
import Image from "next/image";

export default function AboutFruitPopsSection() {
  return (
    <section className="relative z-10 w-full bg-white py-16 md:py-24 px-5 md:px-8">
      <div className="w-full mx-auto bg-black border-4 border-stone-900 rounded-2xl relative overflow-hidden min-h-[70vh] lg:min-h-[85vh] flex items-center">

        {/* Background Image with Darker Overlay for Story Mood */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/about.png"
            alt="Our Story Background"
            fill
            className="object-cover object-center"
          />
          {/* Moody Black overlay mask */}
          <div className="absolute inset-0 bg-stone-900/50" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-6 md:px-14 py-16 flex flex-col lg:flex-row gap-16 lg:gap-20 items-center justify-between relative z-10">

          {/* Left Side: Story Intro */}
          <div className="flex-1 w-full relative flex flex-col items-start lg:pr-10">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FFB000] text-stone-900 border-[3px] border-stone-900 rounded-full font-jua text-sm md:text-base uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] transition-all mb-8 ">
              <Heart size={18} fill="currentColor" strokeWidth={3} /> Our Story
            </div>

            <h2 className="font-caprasimo text-5xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight [-webkit-text-stroke:2px_#1c1917] drop-shadow-[5px_5px_0px_rgba(28,25,23,1)] leading-[1.05] mb-8">
              A Taste of <br className="hidden sm:block" />
              Real Magic.
            </h2>

            <p className="font-jua text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl drop-shadow-md">
              Born from a love of authentic, sun-ripened flavors and a desire to make people smile. We set out to redefine what a frozen treat could be.
            </p>
          </div>

          {/* Right Side: Narrative Timeline/Cards */}
          <div className="flex-[1.2] w-full flex flex-col gap-8 md:gap-10">

            {/* Story Card 1 */}
            <div className="bg-[#FAF9F6] border-4 border-stone-900 rounded-4xl p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] relative transition-transform hover:-translate-y-2 duration-300">
              <div className="absolute -top-6 -left-6 bg-[#406BB5] text-white w-14 h-14 flex items-center justify-center rounded-full border-4 border-stone-900 font-caprasimo text-2xl shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] -rotate-6">
                1
              </div>
              <h3 className="font-caprasimo text-2xl text-stone-900 mb-4 uppercase tracking-wider">The Inspiration</h3>
              <p className="font-jua text-stone-700 text-lg leading-relaxed">
                It all started on the vibrant streets of Thailand. Experiencing the joy of handmade ice cream rolls sparked our obsession. We wanted to distill that pure, joyful energy into a perfectly crafted fruit pop.
              </p>
            </div>

            {/* Story Card 2 - Offset visually */}
            <div className="bg-white border-4 border-stone-900 rounded-4xl p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] relative transition-transform hover:-translate-y-2 duration-300 lg:ml-12">
              <div className="absolute -top-6 -left-6 bg-[#FFDEE6] text-stone-900 w-14 h-14 flex items-center justify-center rounded-full border-4 border-stone-900 font-caprasimo text-2xl shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] rotate-6">
                2
              </div>
              <h3 className="font-caprasimo text-2xl text-stone-900 mb-4 uppercase tracking-wider">The Craft</h3>
              <p className="font-jua text-stone-700 text-lg leading-relaxed">
                No artificial colors, no boring shapes. Just real, juicy fruit purees hand-molded into delightful, nature-filled works of art. Every pop is a labor of love designed to be as beautiful as it is delicious.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
