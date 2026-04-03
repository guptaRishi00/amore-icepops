"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EventsSection() {
  return (
    <section className="relative z-10 w-full bg-[#FAF9F6] py-16 md:py-24 px-5 md:px-8">
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row bg-[#406BB5] border-4 border-stone-900 rounded-[2.5rem] shadow-[8px_8px_0px_0px_rgba(28,25,23,1)] overflow-hidden"
      >

        {/* Left Side: Illustration / Visuals */}
        <div className="md:w-5/12 bg-[#FFB000] border-b-4 md:border-b-0 md:border-r-4 border-stone-900 flex flex-col items-center justify-center relative overflow-hidden group min-h-[300px] md:min-h-full">
          {/* Decorative Pattern */}
          <div
            className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-multiply"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(0, 0, 0, 0.4) 1px, transparent 0)",
              backgroundSize: "16px 16px",
            }}
          />

          {/* Replaced Icon with Image */}
          <div className="absolute inset-0 z-10">
            <Image
              src="/party.png"
              alt="Party Ice Pop Event"
              fill
              className="object-cover drop-shadow-[4px_4px_0px_rgba(28,25,23,1)]"
            />
          </div>

          <div className="absolute top-4 right-4 z-20 bg-white text-stone-900 border-2 border-stone-900 rounded-full px-4 py-1 font-jua text-sm shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] rotate-12">
            Let's Party!
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="md:w-7/12 p-8 md:p-14 relative z-10 flex flex-col justify-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="inline-flex max-w-max items-center gap-2 px-4 py-2 bg-white text-stone-900 border-2 border-stone-900 rounded-full font-jua text-sm md:text-base uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] mb-6"
          >
            Bookings & Catering
          </motion.div>

          <motion.h2
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="font-caprasimo text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight [-webkit-text-stroke:2px_#1c1917] drop-shadow-[4px_4px_0px_rgba(28,25,23,1)] leading-[1.1] mb-6"
          >
            Bring the <br className="hidden sm:block" /> Cool to Your Event.
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            className="font-jua text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-xl drop-shadow-md"
          >
            Whether it's a birthday bash, a corporate gathering, or a sunny outdoor festival, Amore ice pops are the perfect refreshing treat for massive crowds. Book our vibrant pop-carts for your next big celebration!
          </motion.p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "backOut", delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="inline-flex max-w-max items-center gap-2 px-8 py-4 bg-white text-stone-900 font-jua text-base md:text-lg uppercase tracking-widest border-[3px] border-stone-900 rounded-full shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px] font-bold"
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
