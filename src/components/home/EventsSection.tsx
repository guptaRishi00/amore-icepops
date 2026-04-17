"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function EventsSection() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="relative z-10 w-full bg-[#FAF9F6] py-10 md:py-24 px-6 lg:px-20">
      <div className="reveal mx-auto flex flex-col md:flex-row bg-[#406BB5] border-4 border-stone-900 rounded-3xl md:rounded-[2.5rem] shadow-[8px_8px_0px_0px_rgba(28,25,23,1)] overflow-hidden">

        {/* Left Side: Illustration / Visuals */}
        <div className="md:w-5/12 bg-[#FFB000] border-b-4 md:border-b-0 md:border-r-4 border-stone-900 flex flex-col items-center justify-center relative overflow-hidden isolate min-h-[250px] md:min-h-[400px]">
          <div
            className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-multiply"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(0, 0, 0, 0.4) 1px, transparent 0)",
              backgroundSize: "16px 16px",
            }}
          />

          <div className="absolute inset-0 z-10 block w-full h-full overflow-hidden">
            <Image
              src="/party.png"
              alt="Party Ice Pop Event"
              fill
              className="object-cover drop-shadow-[4px_4px_0px_rgba(28,25,23,1)] max-w-full"
            />
          </div>

          <div className="absolute top-4 right-4 z-20 bg-white text-stone-900 border-2 border-stone-900 rounded-full px-4 py-1 font-jua text-sm shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] rotate-12">
            Let's Party!
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="md:w-7/12 p-6 md:p-14 relative z-10 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <div className="reveal reveal-delay-1 inline-flex max-w-max items-center gap-2 px-4 py-2 bg-white text-stone-900 border-2 border-stone-900 rounded-full font-jua text-sm md:text-base uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] mb-6">
            Bookings & Catering
          </div>

          <h2 className="reveal reveal-delay-2 font-caprasimo text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight [-webkit-text-stroke:1px_#1c1917] md:[-webkit-text-stroke:2px_#1c1917] drop-shadow-[4px_4px_0px_rgba(28,25,23,1)] leading-[1.1] mb-6">
            Bring the <br className="hidden sm:block" /> Cool to Your Event
          </h2>

          <p className="reveal reveal-delay-3 font-jua text-white/90 text-base md:text-xl leading-relaxed mb-8 max-w-xl drop-shadow-md">
            Whether it's a birthday bash, a corporate gathering, or a sunny outdoor festival, Amore ice pops are the perfect refreshing treat for massive crowds. Book our vibrant pop-carts for your next big celebration!
          </p>

          <div className="reveal-scale reveal-delay-4">
            <Link
              href="/contact"
              className="inline-flex max-w-max items-center gap-2 px-6 py-3.5 bg-white text-stone-900 font-jua text-base md:text-lg uppercase tracking-widest border-[3px] border-stone-900 rounded-full shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px] font-bold"
            >
              Request a Quote
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
