"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const carouselImages = [
  "/shop1.png",
  "/shop2.png",
  "/shop3.png",
  "/shop5.png",
];

export default function LocationsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#FAF9F6] py-16 px-4 md:px-8 lg:px-12 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Title */}
        <h2 className="font-caprasimo text-4xl md:text-5xl lg:text-5xl text-stone-900 mb-12 text-center uppercase tracking-tight">
          Experience Amore
        </h2>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

          {/* Card 1: Carousel */}
          <div className="flex flex-col bg-stone-100 border-4 border-stone-900 rounded-4xl shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] overflow-hidden relative">
            <div className="p-6 md:p-8 bg-[#E6F3EB] border-b-4 border-stone-900 flex justify-between items-center">
              <h3 className="font-caprasimo text-2xl uppercase tracking-wider text-stone-900">
                Our Moments
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white border-2 border-stone-900 shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] flex items-center justify-center hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none active:bg-stone-100 transition-all"
                >
                  <ChevronLeft size={20} strokeWidth={3} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white border-2 border-stone-900 shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] flex items-center justify-center hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none active:bg-stone-100 transition-all"
                >
                  <ChevronRight size={20} strokeWidth={3} />
                </button>
              </div>
            </div>

            <div className="relative w-full aspect-4/3 md:aspect-video lg:aspect-4/3 overflow-hidden bg-white">
              {carouselImages.map((src, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === currentIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <Image
                    src={src}
                    alt={`Amore Experience ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`w-3 h-3 rounded-full border-2 border-stone-900 shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] transition-all ${idx === currentIdx ? 'bg-[#FFB000] scale-125' : 'bg-white'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Google Maps */}
          <div className="flex flex-col bg-stone-100 border-4 border-stone-900 rounded-4xl shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] overflow-hidden relative">
            <div className="p-6 md:p-8 bg-[#FFDEE6] border-b-4 border-stone-900 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-stone-900 shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] flex items-center justify-center">
                  <MapPin size={20} strokeWidth={3} className="text-stone-900" />
                </div>
                <h3 className="font-caprasimo text-2xl uppercase tracking-wider text-stone-900">
                  Find Us Here
                </h3>
              </div>
            </div>

            <div className="relative w-full aspect-4/3 md:aspect-video lg:aspect-4/3 bg-stone-200">
              {/* Google Maps iFrame */}
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

              {/* Decor Overlay to make it feel branded */}
              <div className="absolute bottom-6 right-6 z-10 pointer-events-none">
                <div className="px-4 py-2 bg-[#FFB000] border-2 border-stone-900 rounded-full font-jua text-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] -rotate-6">
                  Currently in India!
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
