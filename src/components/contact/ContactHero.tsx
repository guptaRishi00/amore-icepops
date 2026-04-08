"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactHero() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="w-full px-4 md:px-8 pb-12">
      <div className="w-full max-w-8xl mx-auto bg-[#406BB5] border-[4px] border-stone-900 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(28,25,23,1)] py-20 px-8 text-center flex flex-col items-center">

        <div className="reveal inline-block px-6 py-2 bg-white text-stone-900 border-[3px] border-stone-900 rounded-full font-jua text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] mb-8">
          Contact Us
        </div>

        <h1 className="reveal reveal-delay-1 font-caprasimo text-5xl md:text-6xl lg:text-[5rem] text-white uppercase tracking-wider mb-6 leading-[1.1] [-webkit-text-stroke:2px_#1c1917] drop-shadow-[5px_5px_0px_rgba(28,25,23,1)]">
          Get In Touch
        </h1>

        <p className="reveal reveal-delay-2 font-jua text-stone-100 text-lg md:text-xl max-w-2xl leading-relaxed drop-shadow-md">
          Have a question about our flavors, want to book us for an event, or just want to say hi? We'd love to hear from you.
        </p>
      </div>
    </section>
  );
}
