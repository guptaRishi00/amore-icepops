"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutVideoSection() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="w-full px-4 md:px-8 py-16 md:py-28">
      <div className="max-w-8xl mx-auto">

        {/* Section Header */}
        <div className="reveal text-center mb-12 md:mb-16 px-4">
          <div className="inline-block px-6 py-2 bg-[#FFB000] text-stone-900 border-[3px] border-stone-900 rounded-full font-jua text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] mb-8">
            Behind the Scenes
          </div>
          <h2 className="font-caprasimo text-3xl md:text-5xl lg:text-[3.5rem] uppercase tracking-wider text-stone-900 mb-6 drop-shadow-[3px_3px_0px_rgba(64,107,181,0.3)]">
            Our Secret
          </h2>
          <p className="font-jua text-stone-600 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
            Watch how we turn the freshest fruits into frozen works of art — handcrafted with love, one pop at a time.
          </p>
        </div>

        {/* Video Container */}
        <div className="reveal reveal-delay-1 relative w-full max-w-4xl mx-auto aspect-video bg-stone-100 border-[4px] border-stone-900 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(64,107,181,1)] overflow-hidden">
          <video
            className="w-full h-full object-cover"
            controls
            playsInline
            preload="metadata"
            muted
            autoPlay
            loop
          >
            <source src="/witch.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>
    </section>
  );
}
