import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";

export default function WeOfferMemoriesSection() {
  return (
    // Scaled down padding
    <section className="w-full bg-white py-16 md:py-20 px-4 md:px-8 lg:mt-20">
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-30">
        <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
          <div className="w-full max-w-sm lg:max-w-md aspect-square lg:aspect-[4/5] bg-stone-100 border-[2px] border-stone-900 rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center relative transition-transform duration-300 hover:-translate-y-2 overflow-hidden">
            <Image
              src="/apple2.png"
              alt="Memories Image"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-start space-y-6 order-1 md:order-2">
          <h2 className="font-caprasimo text-4xl md:text-5xl lg:text-[45px] text-stone-900 uppercase leading-[1.1] tracking-wider max-w-xl">
            We offer
            <span className="inline-block align-middle mx-2 lg:mx-3 -mt-1 lg:-mt-2">
              <Image
                src="/ice-pop2.png"
                alt="Ice Pop"
                width={64}
                height={64}
                className="object-contain w-10 md:w-14 lg:w-16 drop-shadow-sm hover:-rotate-12 transition-transform duration-300"
              />
            </span>
            icepops that evoke memories.
          </h2>

          {/* Scaled down paragraph text */}
          <p className="font-jua text-lg lg:text-xl text-stone-800 leading-relaxed max-w-lg">
            You will have a great time with to our delicious desserts. Delight
            in exquisite ice-cream, from elegant desserts, which reflect
            quality.
          </p>

          {/* Reduced margin and gap for action items */}
          <div className="flex flex-wrap items-center gap-4 lg:gap-6 mt-2 lg:mt-4">
            <Link
              href="/flavors"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-950 font-jua border-2 border-black rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:shadow-none active:translate-x-1 active:translate-y-1 text-sm lg:text-base uppercase tracking-wider"
            >
              View Flavors <ChevronRight size={18} strokeWidth={3} />
            </Link>

            {/* Scaled down link text and icon */}
            <Link href="/shops" className="flex items-center gap-2 group">
              <MapPin size={22} className="text-[#406BB5]" strokeWidth={3} />
              <span className="font-caprasimo text-base lg:text-lg text-stone-900 uppercase tracking-wide group-hover:text-[#406BB5] transition-colors pt-1">
                Find Shops
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
