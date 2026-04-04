import React from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function LocationsSection() {
  return (
    <section className="w-full bg-[#FAF9F6] py-10 md:py-24 px-4 md:px-8 relative z-10">
      <div className="max-w-8xl mx-auto flex flex-col items-center">

        {/* Title */}
        <h2 className="font-caprasimo text-3xl md:text-5xl lg:text-6xl text-stone-900 mb-8 md:mb-12 text-center uppercase tracking-tight">
          Experience Amore
        </h2>

        <div className="w-full">
          {/* Single Combined Card */}
          <div className="flex flex-col bg-stone-100 border-4 border-stone-900 rounded-3xl md:rounded-[2.5rem] overflow-hidden relative transition-transform duration-300 ">

            {/* Unified Header */}
            <div className="p-5 md:p-8 bg-[#E6F3EB] border-b-4 border-stone-900 flex justify-between items-center">
              <h3 className="font-caprasimo text-xl md:text-2xl uppercase tracking-wider text-stone-900">
                Visit Our Shop
              </h3>
              <div className="w-10 h-10 rounded-full bg-white border-2 border-stone-900 shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] flex items-center justify-center">
                <MapPin size={20} strokeWidth={3} className="text-stone-900" />
              </div>
            </div>

            {/* Split Content Body */}
            <div className="grid grid-cols-1 md:grid-cols-2">

              {/* Part 1: Single Image */}
              <div className="relative w-full aspect-square md:aspect-auto md:h-[500px] border-b-4 md:border-b-0 md:border-r-4 border-stone-900 overflow-hidden bg-white group">
                <Image
                  src="/shop3.png"
                  alt="Amore Experience"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Part 2: Google Maps */}
              <div className="relative w-full aspect-square md:aspect-auto md:h-[500px] bg-stone-200">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?q=India&t=&z=5&ie=UTF8&iwloc=&output=embed"
                  className="grayscale-20 contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  title="Amore Locations Map"
                ></iframe>

                {/* Decor Overlay */}
                <div className="absolute bottom-6 right-6 z-10 pointer-events-none">
                  <div className="px-4 py-2 bg-[#FFB000] border-2 border-stone-900 rounded-full font-jua text-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] -rotate-6">
                    Currently in India!
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
