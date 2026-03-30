import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";

export default function WeOfferMemoriesSection() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-10">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-20">
        {/* --- Left Column: Image Area --- */}
        <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
          {/* Added overflow-hidden to clip the image to the rounded corners */}
          <div className="w-full max-w-md aspect-square lg:aspect-[4/5] bg-stone-100 border-[3px] border-stone-900 rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center relative transition-transform duration-300 hover:-translate-y-2 overflow-hidden">
            <Image
              src="/apple.png"
              alt="Memories Image"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* --- Right Column: Text Area --- */}
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-8 order-1 md:order-2">
          <h2 className="font-caprasimo text-5xl md:text-6xl lg:text-[60px] text-stone-900 uppercase leading-[1.1] tracking-wider max-w-2xl">
            We offer
            <span className="inline-block align-middle mx-3 lg:mx-4 -mt-2 lg:-mt-4">
              <Image
                src="/ice-pop2.png"
                alt="Ice Pop"
                width={80}
                height={80}
                className="object-contain w-12 md:w-16 lg:w-20 drop-shadow-md hover:-rotate-12 transition-transform duration-300"
              />
            </span>
            icepops that evoke memories.
          </h2>

          <p className="font-jua text-xl lg:text-2xl text-stone-800 leading-relaxed max-w-xl">
            You will have a great time with to our delicious desserts. Delight
            in exquisite ice-cream, from elegant desserts, which reflect
            quality.
          </p>

          <div className="flex flex-wrap items-center gap-6 lg:gap-8 mt-4 lg:mt-8">
            <Link
              href="/flavors"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-stone-950 font-jua border-[3px] border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:shadow-none active:translate-x-1 active:translate-y-1 text-base lg:text-lg uppercase tracking-wider"
            >
              View Flavors <ChevronRight size={20} strokeWidth={3} />
            </Link>

            <Link href="/shops" className="flex items-center gap-3 group">
              <MapPin size={26} className="text-[#406BB5]" strokeWidth={3} />
              <span className="font-caprasimo text-lg lg:text-xl text-stone-900 uppercase tracking-wide group-hover:text-[#406BB5] transition-colors pt-1">
                Find Shops
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
