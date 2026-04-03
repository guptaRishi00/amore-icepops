import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function BestSellerSection() {
  return (
    // Scaled down vertical padding and top margin
    <section className="relative w-full bg-[#406BB5] py-16 md:py-24 px-5 md:px-8 overflow-hidden">
      {/* --- ADDED: Background Texture --- */}
      <div
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.6) 2px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Reduced max-width and gap between columns */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-8 relative z-10">
        {/* --- LEFT COLUMN: TEXT & CTA --- */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
          {/* Scaled down font sizes, strokes, and drop-shadows */}
          <h2 className="font-caprasimo flex flex-col items-center md:items-start text-4xl md:text-6xl lg:text-[72px] text-white uppercase tracking-tight [-webkit-text-stroke:1.5px_#1c1917] md:[-webkit-text-stroke:2px_#1c1917]">
            <span className="block leading-[0.9] drop-shadow-[4px_4px_0px_rgba(28,25,23,1)] md:drop-shadow-[6px_6px_0px_rgba(28,25,23,1)]">Best</span>
            <span className="block leading-[0.9] drop-shadow-[4px_4px_0px_rgba(28,25,23,1)] md:drop-shadow-[6px_6px_0px_rgba(28,25,23,1)]">Seller</span>
            <span className="block leading-[0.9] drop-shadow-[4px_4px_0px_rgba(28,25,23,1)] md:drop-shadow-[6px_6px_0px_rgba(28,25,23,1)]">IcePop</span>
          </h2>

          {/* Scaled down paragraph text */}
          <p className="font-jua text-lg md:text-xl text-white/95 max-w-md leading-relaxed mt-2 drop-shadow-md">
            Crafted with 100% pure strawberries. Made with less sugar, savor the
            natural taste of real fruit.
          </p>

          <div className="pt-2 lg:pt-4">
            {/* Scaled down button padding, borders, shadows, and icon */}
            <Link
              href="/shop/blueberry-bliss"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-stone-950 font-jua border-[2px] border-stone-900 rounded-full shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:shadow-none active:translate-x-[3px] active:translate-y-[3px] text-sm md:text-base uppercase tracking-widest"
            >
              Try It Now <ChevronRight size={18} strokeWidth={3} />
            </Link>
          </div>
        </div>

        {/* --- RIGHT COLUMN: REAL IMAGE & BADGE --- */}
        <div className="w-full md:w-1/2 flex justify-center lg:justify-end relative min-h-[300px] md:min-h-[350px] lg:min-h-[400px] mt-8 md:mt-0">
          {/* Scaled down image container size, borders, and shadows */}
          <div className="w-full max-w-[240px] md:max-w-[280px] lg:max-w-[340px] aspect-[3/4] bg-white border-[3px] border-stone-900 rounded-[2.5rem] shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] flex items-center justify-center relative duration-500 z-10 overflow-hidden">
            <Image
              src="/strawberry.png"
              alt="Blueberry Bliss Gelato"
              width={340}
              height={450}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Scaled down floating badge */}
          <div className="absolute bottom-4 -right-1 md:bottom-8 md:-right-4 bg-stone-900 text-white px-5 py-3 rounded-2xl border-[2px] border-white shadow-xl z-20 flex items-center gap-3 hover:rotate-0 transition-transform duration-300 cursor-default">
            <div className="flex flex-col font-caprasimo uppercase text-right leading-[1.1] text-base lg:text-lg tracking-wide">
              <span>Strawberry</span>
              <span className="text-[#406BB5]">Bliss</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
