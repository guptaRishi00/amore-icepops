import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
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
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6">
        {/* Floating Icon Badge with Penguin */}
        <div className="mb-6 w-20 h-20 bg-white border-[3px] border-stone-900 rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] overflow-hidden">
          <Image
            src="/penguine2.svg"
            alt="Penguin Icon"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        <h2 className="font-caprasimo text-5xl md:text-7xl lg:text-[90px] text-white uppercase leading-none tracking-tight drop-shadow-[6px_6px_0px_#406BB5] max-w-4xl">
          Crafting Joy <br />
          <span className="text-white">In Every Scoop</span>
        </h2>

        <p className="font-jua text-xl md:text-2xl text-white mt-8 max-w-2xl leading-relaxed drop-shadow-md">
          Take a journey through our kitchen and see how we turn real fruits and
          spices into the city's most legendary ice cream.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-stone-950 font-jua border-[3px] border-stone-900 rounded-full shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all active:shadow-none active:translate-x-[6px] active:translate-y-[6px] text-lg uppercase tracking-widest"
          >
            Our Story <ChevronRight size={22} strokeWidth={3} />
          </Link>

          <Link
            href="/flavors"
            className="inline-flex items-center gap-2 px-10 py-4 bg-transparent text-white font-jua border-[3px] border-white rounded-full hover:bg-white hover:text-stone-900 transition-colors text-lg uppercase tracking-widest"
          >
            View Flavors
          </Link>
        </div>
      </div>
    </section>
  );
}
