import Image from "next/image";

export default function FlavorsHero() {
  return (
    <section className="relative w-full bg-[#406BB5] pt-24 pb-16 md:pt-40 md:pb-28 px-4 md:px-8 overflow-hidden">
      {/* Decorative dot pattern */}
      <div
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.6) 2px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Floating badge */}
        <div className="mb-6 w-16 h-16 md:w-24 md:h-24 bg-white border-[3px] border-stone-900 rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:-rotate-12 transition-transform duration-300">
          <Image
            src="/penguine2.svg"
            alt="Penguin Mascot"
            width={40}
            height={40}
            className="object-contain md:w-16"
          />
        </div>

        {/* Massive Headline */}
        <h1 className="font-caprasimo flex flex-col text-4xl sm:text-6xl md:text-[80px] lg:text-[96px] text-white uppercase tracking-tight [-webkit-text-stroke:1px_#1c1917] md:[-webkit-text-stroke:3px_#1c1917] mb-4">
          <span className="block leading-[0.9] drop-shadow-[3px_3px_0px_rgba(28,25,23,1)] md:drop-shadow-[8px_8px_0px_rgba(28,25,23,1)]">
            Explore All
          </span>
          <span className="block leading-[0.9] drop-shadow-[3px_3px_0px_rgba(28,25,23,1)] md:drop-shadow-[8px_8px_0px_rgba(28,25,23,1)]">
            Flavors
          </span>
        </h1>

        <p className="font-jua text-stone-100 text-base md:text-2xl max-w-2xl leading-relaxed mt-4 drop-shadow-sm">
          From tropical mango to rich dark fruit, discover the vibrant range of
          our handcrafted ice pops perfectly curated for a sunny day.
        </p>
      </div>
    </section>
  );
}
