"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingCart, CheckCircle2 } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { motion, AnimatePresence } from "framer-motion";

const allFlavors = [
  {
    id: "strawberry-bliss",
    name: "Strawberry ",
    accent: "text-[#ff4d8c]",
    image: "/straw1.jpeg",
    desc: "Sweet, juicy, and 100% natural real strawberries.",
  },
  {
    id: "mango-tango",
    name: "Mango Tango",
    accent: "text-[#ffb000]",
    image: "/mango44.png",
    desc: "Tropical bliss squeezed into every frozen bite.",
  },
  {
    id: "peachy-keen",
    name: "Peachy Keen",
    accent: "text-[#ff9c7a]",
    image: "/peach55.png",
    desc: "Smooth and refreshing peach nectar puree.",
  },
  {
    id: "wild-raspberry",
    name: "Wild Raspberry",
    accent: "text-[#d82b5e]",
    image: "/rasp77.png",
    desc: "A tart and sweet punch of hand-picked raspberries.",
  },
  {
    id: "concord-grape",
    name: "Concord Grape",
    accent: "text-[#8c489f]",
    image: "/grape11.png",
    desc: "A blast of rich, nostalgic dark grape flavor.",
  },
  {
    id: "crisp-apple",
    name: "Crisp Apple",
    accent: "text-[#9bc53d]",
    image: "/apple2.png",
    desc: "Refreshingly crisp green apple with a hint of citrus.",
  },
];

export default function FlavorsGrid() {
  const addItem = useCartStore((state) => state.addItem);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleAddToCart = (flavor: any) => {
    addItem({
      id: flavor.id,
      name: flavor.name,
      price: 4.50, // Setting a uniform dummy price for all pops
      quantity: 1,
      image: flavor.image,
    });

    setToastMessage(`Added ${flavor.name} to cart!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <section className="relative w-full bg-[#FAF9F6] py-10 md:py-28 px-4 md:px-8 lg:px-12 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-30">
          {allFlavors.map((flavor, idx) => (
            <div
              key={flavor.id}
              className="flex flex-col items-center bg-white border-[3px] border-stone-900 rounded-3xl md:rounded-[2.5rem] shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] overflow-hidden"
            >
              {/* Image Container */}
              <div className="w-full h-[220px] md:h-[320px] bg-stone-100 border-b-[3px] border-stone-900 relative overflow-hidden flex items-center justify-center">
                {/* Background dot pattern inside card */}
                <div
                  className="absolute inset-0 opacity-30 mix-blend-multiply"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, rgba(0, 0, 0, 0.4) 1px, transparent 0)",
                    backgroundSize: "16px 16px",
                  }}
                />

                <Image
                  src={flavor.image}
                  alt={flavor.name}
                  fill
                  className="object-cover drop-shadow-xl"
                />
              </div>

              {/* Text & Action */}
              <div className="w-full flex flex-col items-center p-6 md:p-8 text-center bg-white grow">
                <h2 className="font-caprasimo text-xl md:text-3xl text-stone-900 uppercase tracking-wide mb-3 min-h-[56px] md:min-h-[72px] flex items-center justify-center">
                  {flavor.name}
                </h2>

                <p className="font-jua text-stone-600 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed max-w-xs">
                  {flavor.desc}
                </p>

                <button
                  onClick={() => handleAddToCart(flavor)}
                  className="mt-auto inline-flex items-center gap-2 px-6 py-2.5 md:px-8 md:py-3 bg-white text-stone-950 font-jua border-[3px] border-stone-900 rounded-full shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px] text-sm md:text-base uppercase tracking-widest font-bold cursor-pointer"
                >
                  Add to Cart <ShoppingCart size={18} strokeWidth={3} />
                </button>
              </div>
            </div>
          ))}
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
