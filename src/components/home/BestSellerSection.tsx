"use client";

import { useState } from "react";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCartStore } from "@/store/useCartStore";
import { motion, AnimatePresence } from "framer-motion";

export default function BestSellerSection() {
  const ref = useScrollReveal();
  const addItem = useCartStore((state) => state.addItem);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleAddToCart = () => {
    addItem({
      id: "strawberry-bliss",
      name: "Strawberry Bliss",
      price: 35, // ₹35 per pop
      quantity: 5,
      image: "/straw1.jpeg",
    });
    setToastMessage("Added Strawberry Bliss to cart!");
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <section ref={ref} className="relative w-full bg-[#406BB5] py-10 md:py-24 px-4 md:px-8 overflow-hidden">
      {/* --- Background Texture --- */}
      <div
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.6) 2px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-8 relative z-10">
        {/* --- LEFT COLUMN: TEXT & CTA --- */}
        <div className="reveal-left w-full md:w-1/2 flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
          <h2 className="font-caprasimo flex flex-col items-center md:items-start text-3xl md:text-6xl lg:text-[80px] text-white uppercase tracking-tight [-webkit-text-stroke:1px_#1c1917] md:[-webkit-text-stroke:2px_#1c1917]">
            <span className="block leading-[0.9] drop-shadow-[3px_3px_0px_rgba(28,25,23,1)] md:drop-shadow-[6px_6px_0px_rgba(28,25,23,1)]">Best Seller</span>
            <span className="block leading-[0.9] drop-shadow-[3px_3px_0px_rgba(28,25,23,1)] md:drop-shadow-[6px_6px_0px_rgba(28,25,23,1)]">IcePop</span>
          </h2>

          <p className="font-jua text-base md:text-xl text-white/95 max-w-md leading-relaxed mt-2 drop-shadow-md">
            Crafted with 100% pure strawberries. Made with less sugar, savor the
            natural taste of real fruit.
          </p>

          <div className="pt-2 lg:pt-4">
            <button
              onClick={handleAddToCart}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-stone-950 font-jua border-2 border-stone-900 rounded-full shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:shadow-none active:translate-x-[3px] active:translate-y-[3px] text-sm md:text-base uppercase tracking-widest cursor-pointer"
            >
              Try It Now <ChevronRight size={18} strokeWidth={3} />
            </button>
          </div>
        </div>

        {/* --- RIGHT COLUMN: IMAGE & BADGE --- */}
        <div className="reveal w-full md:w-1/2 flex justify-center lg:justify-end relative min-h-[300px] md:min-h-[350px] lg:min-h-[400px] mt-8 md:mt-0">
          <div className="w-full max-w-[200px] md:max-w-[280px] lg:max-w-[340px] aspect-3/4 bg-white border-[3px] border-stone-900 rounded-3xl md:rounded-[2.5rem] shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] flex items-center justify-center relative duration-500 z-10 overflow-hidden">
            <Image
              src="/straw1.jpeg"
              alt="Blueberry Bliss Gelato"
              width={340}
              height={450}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="reveal-scale reveal-delay-3 absolute bottom-4 -right-1 md:bottom-8 md:-right-16 bg-stone-900 text-white px-5 py-3 rounded-2xl border-2 border-white shadow-xl z-20 flex items-center gap-3 transition-transform duration-300 cursor-default">
            <div className="flex flex-col font-caprasimo uppercase text-right leading-[1.1] text-base lg:text-lg tracking-wide">
              <span>Strawberry</span>
              <span className="text-[#406BB5]">Bliss</span>
            </div>
          </div>
        </div>
      </div>
      {/* Custom Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-6 left-1/2 z-50 flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-4 bg-white border-2 md:border-[3px] border-stone-900 shadow-[4px_4px_0px_0px_rgba(64,107,181,1)] md:shadow-[6px_6px_0px_0px_rgba(64,107,181,1)] rounded-full max-w-[90vw]"
          >
            <CheckCircle2 size={18} className="text-[#406BB5] shrink-0 md:w-6 md:h-6" />
            <span className="font-jua text-stone-900 text-sm md:text-lg truncate">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}