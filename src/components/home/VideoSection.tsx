import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function VideoSection() {
  return (
    // Scaled down the height of the section, gave flex min-height and padding for mobile
    <section className="relative w-full min-h-[75vh] py-16 md:py-0 md:min-h-0 md:h-[65vh] overflow-hidden flex flex-col items-center justify-center">
      {/* --- BACKGROUND VIDEO --- */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px]" />
      </div>

      {/* --- TEXT CONTENT OVERLAY --- */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 md:px-6">
        {/* Scaled down Floating Icon Badge with Penguin */}
        <div className="mb-4 md:mb-5 w-16 h-16 bg-white border-[2px] border-stone-900 rounded-full flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] overflow-hidden">
          <Image
            src="/penguine2.svg"
            alt="Penguin Icon"
            width={36}
            height={36}
            className="object-contain"
          />
        </div>

        {/* Scaled down heading size and drop-shadow */}
        <h2 className="font-caprasimo text-3xl md:text-6xl lg:text-[72px] text-white uppercase leading-[1.1] md:leading-none tracking-tight max-w-3xl">
          <span className="block drop-shadow-[4px_4px_0px_#406BB5]">Crafting Joy</span>
          <span className="block drop-shadow-[4px_4px_0px_#406BB5]">In Every Scoop</span>
        </h2>

        {/* Scaled down paragraph text and margins */}
        <p className="font-jua text-lg md:text-xl text-white mt-4 md:mt-6 max-w-xl leading-relaxed drop-shadow-md">
          Take a journey through our kitchen and see how we turn real fruits and
          spices into the city's most legendary ice cream.
        </p>

        {/* Scaled down button margins and gaps */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {/* Scaled down button padding, border, shadow, text size, and icon */}
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-white text-stone-950 font-jua border-[2px] border-stone-900 rounded-full shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[3px] hover:translate-y-[3px] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px] text-base uppercase tracking-widest"
          >
            Our Story <ChevronRight size={18} strokeWidth={3} />
          </Link>

          {/* Scaled down secondary button padding, border, and text size */}
          <Link
            href="/flavors"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 bg-transparent text-white font-jua border-[2px] border-white rounded-full hover:bg-white hover:text-stone-900 transition-colors text-base uppercase tracking-widest"
          >
            View Flavors
          </Link>
        </div>
      </div>
    </section>
  );
}
