"use client";

import { Sparkles } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "100%", label: "Real Fruit" },
  { value: "50+", label: "Flavors" },
  { value: "10K+", label: "Happy Customers" },
];

export default function AboutFruitPopsSection() {
  return (
    <section className="relative w-full bg-white py-16 md:py-28 px-4 md:px-8 overflow-hidden">
      {/* Subtle decorative dots in background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1c1917 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-10 lg:gap-16">
        {/* Left: Image */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-[48%] flex"
        >
          <div className="relative w-full min-h-[340px] md:min-h-[460px] lg:min-h-0 bg-stone-100 border-4 border-stone-900 rounded-3xl md:rounded-[2.5rem] shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] overflow-hidden">
            <Image
              src="/about.png"
              alt="About Amore Fruit Pops"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="w-full lg:w-[52%] flex flex-col justify-center gap-6 md:gap-8 text-center lg:text-left items-center lg:items-start py-4 lg:py-8">
          {/* Badge */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFB000] text-stone-900 border-[3px] border-stone-900 rounded-full font-jua text-sm md:text-base uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]"
          >
            <Sparkles size={16} fill="currentColor" strokeWidth={2.5} />
            About Us
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="font-caprasimo text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] text-stone-900 uppercase leading-[1.08] tracking-wider max-w-xl"
          >
            Handcrafted With Love, Made With Real Fruit.
          </motion.h2>

          {/* Description */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="space-y-4 max-w-lg"
          >
            <p className="font-jua text-stone-700 text-base md:text-lg lg:text-xl leading-relaxed">
              Born from a love of authentic, sun-ripened flavors and a desire to
              bring smiles to every face. We set out to redefine what a frozen
              treat could be.
            </p>
            <p className="font-jua text-stone-600 text-base md:text-lg leading-relaxed">
              No artificial colors, no shortcuts — just real, juicy fruit purees
              hand-molded into delightful works of art. Every pop is a labor of
              love, as beautiful as it is delicious.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-5 pt-4"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center px-5 md:px-7 py-4 md:py-5 bg-white border-[3px] border-stone-900 rounded-2xl shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] min-w-[110px]"
              >
                <span className="font-caprasimo text-2xl md:text-3xl text-stone-900 leading-none">
                  {stat.value}
                </span>
                <span className="font-jua text-xs md:text-sm text-stone-500 uppercase tracking-wider mt-1.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
