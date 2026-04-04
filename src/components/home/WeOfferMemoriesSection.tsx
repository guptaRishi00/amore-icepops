"use client";

import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WeOfferMemoriesSection() {
  return (
    <section className="w-full bg-white py-10 md:py-24 px-4 md:px-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12">

        {/* Image side - increased width */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-[55%] flex order-2 lg:order-1"
        >
          <div className="w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-0 relative bg-stone-100 border-4 border-stone-900 rounded-3xl md:rounded-[2.5rem] shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] transition-transform duration-300 hover:-translate-y-2 overflow-hidden">
            <Image
              src="/apple2.png"
              alt="Memories Image"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Text side - matching height via items-stretch and flex */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="w-full lg:w-[45%] flex flex-col items-center md:items-start justify-center p-6 md:p-12 lg:p-14 order-1 lg:order-2 text-center md:text-left"
        >

          <div className="space-y-6 lg:space-y-8">
            <h2 className="font-caprasimo text-2xl md:text-5xl lg:text-6xl text-stone-900 uppercase leading-[1.1] tracking-wider max-w-xl">
              We offer
              <span className="md:hidden"> </span>
              <span className="hidden md:inline-block align-middle mx-2 lg:mx-3 -mt-1 lg:-mt-2">
                <Image
                  src="/ice-pop2.png"
                  alt="Ice Pop"
                  width={72}
                  height={72}
                  className="object-contain w-10 md:w-16 lg:w-[72px] hover:-rotate-12 transition-transform duration-300"
                />
              </span>
              icepops that evoke memories.
            </h2>

            <p className="font-jua text-base md:text-lg lg:text-xl text-stone-800 leading-relaxed max-w-lg">
              You will have a great time with our delicious desserts. Delight
              in exquisite ice-cream, from elegant desserts, which reflect
              quality.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 lg:gap-6 pt-4">
              <Link
                href="/order"
                className="inline-flex items-center gap-2 px-6 py-3.5 md:px-8 md:py-4 bg-white text-stone-900 font-jua border-[3px] border-stone-900 rounded-full shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px] text-base lg:text-lg uppercase tracking-wider"
              >
                Order Now <ChevronRight size={18} strokeWidth={3} />
              </Link>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
