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

              {/* Part 2: Written Address */}
              <div className="relative w-full min-h-[500px] bg-[#FFDDE6] p-8 md:p-12 flex flex-col justify-center items-start border-stone-900 group">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-caprasimo text-2xl md:text-3xl text-stone-900 uppercase tracking-wider mb-2">
                      Our Flagship Store
                    </h4>
                    <div className="w-20 h-1.5 bg-stone-900 rounded-full mb-6" />
                  </div>

                  <div className="space-y-4">
                    <p className="font-jua text-xl md:text-2xl text-stone-800 leading-tight">
                      123 Popsicle Avenue, <br />
                      Fruit Park, Road No. 45, <br />
                      Mumbai, Maharashtra 400001, <br />
                      India
                    </p>

                    <div className="flex flex-col gap-2 pt-4">
                      <p className="font-caprasimo text-lg text-stone-900 uppercase tracking-widest">
                        Store Hours
                      </p>
                      <p className="font-jua text-lg text-stone-700">
                        Mon - Sun: 11:00 AM - 11:00 PM
                      </p>
                    </div>
                  </div>


                </div>

                {/* Decor Overlay - Repositioned */}
                <div className="absolute top-6 right-6 z-10 pointer-events-none hidden md:block">
                  <div className="px-4 py-2 bg-[#FFB000] border-2 border-stone-900 rounded-full font-jua text-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] rotate-6">
                    Amore is Here! 📍
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
