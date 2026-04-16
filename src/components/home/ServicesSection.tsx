"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CheckCircle2, ShoppingCart } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCartStore } from "@/store/useCartStore";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesSection() {
  const ref = useScrollReveal();
  const addItem = useCartStore((state) => state.addItem);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleAddToCart = (flavor: any) => {
    addItem({
      id: flavor.id,
      name: flavor.name,
      price: 35, // ₹35 per pop
      quantity: 5,
      image: flavor.image,
    });

    setToastMessage(`Added ${flavor.name} to cart!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <section ref={ref} className="relative w-full bg-white py-10 md:pb-24 px-6 lg:px-20 overflow-hidden">
      <div className="mx-auto relative z-10 flex flex-col items-center">
        <h2 className="reveal font-caprasimo text-3xl md:text-5xl lg:text-5xl text-stone-900 uppercase leading-[1.1] tracking-tight mb-10 md:mb-16 text-center">
          Featured Flavors
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8">
          {/* === COLUMN 1: MANGO === */}
          <div className="reveal reveal-delay-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-full aspect-3/4 bg-stone-100 border-2 border-stone-900 rounded-4xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative transition-transform duration-300 hover:-translate-y-2">
              <Image
                src="/mango44.png"
                alt="Tropical Mango"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-caprasimo text-2xl lg:text-3xl text-stone-900 mt-6 mb-3 uppercase tracking-wider">
              Tropical Mango
            </h3>
            <p className="font-jua text-base text-stone-800 mb-6 leading-relaxed max-w-sm md:max-w-none">
              We source the finest tropical mangoes to bring you a sweet, refreshing flavor that tastes just like a summer vacation. 100% real fruit in every bite!
            </p>

            <button
              onClick={() => handleAddToCart({ id: "concord-grape", name: "Concord Grape", image: "/grape11.png" })}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-stone-950 font-jua border-2 border-stone-900 rounded-full shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:shadow-none active:translate-x-1 active:translate-y-1 text-sm uppercase tracking-wider mt-auto cursor-pointer font-medium"
            >
              Order now
            </button>
          </div>

          {/* === COLUMN 2: PEACH === */}
          <div className="reveal reveal-delay-2 flex flex-col items-center md:items-start text-center md:text-left md:pt-6">
            <h3 className="font-caprasimo text-2xl lg:text-3xl text-stone-900 mb-3 uppercase tracking-wider order-2 md:order-0 mt-6 md:mt-0">
              Perfect Peach
            </h3>
            <p className="font-jua text-base text-stone-800 mb-6 leading-relaxed order-3 md:order-0 max-w-sm md:max-w-none">
              Our peach pops are made with ripe, juicy peaches blended to perfection, capturing the delicate and natural sweetness of the fruit. Like a warm summer breeze!
            </p>

            <button
              onClick={() => handleAddToCart({ id: "concord-grape", name: "Concord Grape", image: "/grape11.png" })}
              className="order-4 md:order-0 inline-flex items-center gap-2 px-6 py-2.5 bg-white text-stone-950 font-jua border-2 border-stone-900 rounded-full shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:shadow-none active:translate-x-1 active:translate-y-1 text-sm uppercase tracking-wider mt-auto cursor-pointer font-medium"
            >
              Order now
            </button>

            <div className="w-full aspect-3/4 lg:aspect-4/5 mt-6 md:mt-6 bg-stone-100 border-2 border-stone-900 rounded-4xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative transition-transform duration-300 hover:-translate-y-2 order-1 md:order-0">
              <Image
                src="/peach55.png"
                alt="Perfect Peach"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* === COLUMN 3: GRAPE === */}
          <div className="reveal reveal-delay-3 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-full aspect-3/4 lg:aspect-4/5 bg-stone-100 border-2 border-stone-900 rounded-4xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative transition-transform duration-300 hover:-translate-y-2">
              <Image
                src="/grape11.png"
                alt="Concord Grape"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-caprasimo text-2xl lg:text-3xl text-stone-900 mt-6 mb-3 uppercase tracking-wider">
              Concord Grape
            </h3>
            <p className="font-jua text-base text-stone-800 mb-6 leading-relaxed max-w-sm md:max-w-none">
              Experience the bold and tangy burst of real concord grapes, hand-picked and freshly pressed for a nostalgic treat that takes you back to childhood.
            </p>

            <button
              onClick={() => handleAddToCart({ id: "concord-grape", name: "Concord Grape", image: "/grape11.png" })}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-stone-950 font-jua border-2 border-stone-900 rounded-full shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:shadow-none active:translate-x-1 active:translate-y-1 text-sm uppercase tracking-wider mt-auto cursor-pointer font-medium"
            >
              Order now
            </button>
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
            className="fixed bottom-10 left-1/2 z-50 flex items-center gap-3 px-6 py-4 bg-white border-[3px] border-stone-900 shadow-[6px_6px_0px_0px_rgba(64,107,181,1)] rounded-full"
          >
            <CheckCircle2 size={24} className="text-[#406BB5]" />
            <span className="font-jua text-stone-900 text-lg">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
