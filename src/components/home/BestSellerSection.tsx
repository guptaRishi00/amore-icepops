import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function BestSellerSection() {
  return (
    <section className="relative w-full bg-[#406BB5] py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-12 relative z-10">
        {/* --- LEFT COLUMN: TEXT & CTA --- */}
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
          <h2 className="font-caprasimo text-6xl md:text-7xl lg:text-[100px] text-white uppercase leading-[0.85] tracking-tight [-webkit-text-stroke:2px_#1c1917] md:[-webkit-text-stroke:3px_#1c1917] drop-shadow-[5px_5px_0px_rgba(28,25,23,1)] md:drop-shadow-[8px_8px_0px_rgba(28,25,23,1)]">
            Best <br />
            Seller <br />
            IcePop
          </h2>

          <p className="font-jua text-xl md:text-2xl text-white/95 max-w-md leading-relaxed mt-4 drop-shadow-md">
            Crafted with 100% pure strawberries. Made with less sugar, savor the
            natural taste of real fruit.
          </p>

          <div className="pt-4">
            <Link
              href="/shop/blueberry-bliss"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-stone-950 font-jua border-[3px] border-stone-900 rounded-full shadow-[5px_5px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all active:shadow-none active:translate-x-[5px] active:translate-y-[5px] text-lg uppercase tracking-widest"
            >
              Try It Now <ChevronRight size={22} strokeWidth={3} />
            </Link>
          </div>
        </div>

        {/* --- RIGHT COLUMN: REAL IMAGE & BADGE --- */}
        <div className="w-full md:w-1/2 flex justify-center lg:justify-end relative min-h-[400px] lg:min-h-[500px] mt-10 md:mt-0">
          {/* Main Floating Image Container - Cleaned up placeholder styles */}
          <div className="w-full max-w-[320px] lg:max-w-[420px] aspect-[3/4] bg-white border-[4px] border-stone-900 rounded-[3rem] shadow-[10px_10px_0px_0px_rgba(28,25,23,1)] flex items-center justify-center relative duration-500 z-10 overflow-hidden">
            <Image
              src="/strawberry.png"
              alt="Blueberry Bliss Gelato"
              width={400}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Floating Blue Berry Bliss Badge */}
          <div className="absolute bottom-4 -right-2 md:bottom-12 md:-right-6 bg-stone-900 text-white px-6 py-4 rounded-3xl border-[3px] border-white shadow-xl z-20 flex items-center gap-4 hover:rotate-0 transition-transform duration-300 cursor-default">
            <div className="flex flex-col font-caprasimo uppercase text-right leading-[1.1] text-lg lg:text-xl tracking-wide">
              <span>Strawberry</span>

              <span className="text-[#406BB5]">Bliss</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
