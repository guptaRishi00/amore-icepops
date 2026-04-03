import { Star } from "lucide-react";
import Image from "next/image";

export default function AboutFruitPopsSection() {
  return (
    <section className="px-5 w-full bg-white py-16 md:py-24 z-10 relative">
      <div className="w-full mx-auto bg-black border-4 border-stone-900 rounded-xl shadow-[8px_8px_0px_0px_rgba(28,25,23,1)] relative overflow-hidden">

        {/* Background Image with Black Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/about.png"
            alt="Background pattern"
            fill
            className="object-cover"
          />
          {/* Black overlay mask */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-14 py-8 md:py-14 flex flex-col lg:flex-row gap-10 items-center relative z-10">
          {/* Left Side: Badge and Header */}
          <div className="flex-1 w-full relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-stone-900 border-[3px] border-stone-900 rounded-full font-jua text-sm md:text-base uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] transition-all mb-6">
              <Star size={18} fill="currentColor" strokeWidth={3} /> The Real Deal
            </div>

            <h2 className="font-caprasimo text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight [-webkit-text-stroke:2px_#1c1917] drop-shadow-[4px_4px_0px_rgba(28,25,23,1)] leading-[1.1] mb-6">
              Fruit Shaped,<br />
              Nature Filled.
            </h2>
          </div>

          {/* Right Side: Description */}
          <div className="flex-1 w-full bg-white border-4 border-stone-900 rounded-4xl p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] relative overflow-hidden">
            <div
              className="absolute inset-0 z-0 opacity-20 mix-blend-multiply pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, rgba(0, 0, 0, 0.4) 1px, transparent 0)",
                backgroundSize: "16px 16px",
              }}
            />
            <div className="relative z-10 flex flex-col gap-6">
              <p className="font-jua text-stone-800 text-lg md:text-xl md:leading-relaxed">
                Why settle for boring logs when you can have ice pops shaped like the real thing? Each of our pops is meticulously crafted into the shape of its star fruit, bringing a burst of joy before you even take a bite.
              </p>
              <p className="font-jua text-stone-800 text-lg md:text-xl md:leading-relaxed">
                But it’s not just about looks. We pack real, juicy, sun-ripened fruit purees into every pop. It's the authentic taste of nature, frozen in its most playful form!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
