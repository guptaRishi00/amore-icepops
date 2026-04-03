import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";

export default function WeOfferMemoriesSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-5 md:px-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch justify-center gap-10 lg:gap-12">

        {/* Image side - increased width */}
        <div className="w-full lg:w-[55%] flex order-2 lg:order-1">
          <div className="w-full h-full min-h-[400px] lg:min-h-0 relative bg-stone-100 border-4 border-stone-900 rounded-[2.5rem] shadow-[6px_6px_0px_0px_rgba(28,25,23,1)] transition-transform duration-300 hover:-translate-y-2 overflow-hidden">
            <Image
              src="/apple2.png"
              alt="Memories Image"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text side - matching height via items-stretch and flex */}
        <div className="w-full lg:w-[45%] flex flex-col items-start justify-center p-8 md:p-12 lg:p-14 order-1 lg:order-2">

          <div className="space-y-6 lg:space-y-8">
            <h2 className="font-caprasimo text-4xl md:text-5xl lg:text-6xl text-stone-900 uppercase leading-[1.1] tracking-wider max-w-xl">
              We offer
              <span className="inline-block align-middle mx-2 lg:mx-3 -mt-1 lg:-mt-2">
                <Image
                  src="/ice-pop2.png"
                  alt="Ice Pop"
                  width={72}
                  height={72}
                  className="object-contain w-12 md:w-16 lg:w-[72px] drop-shadow-[2px_2px_0px_rgba(28,25,23,1)] hover:-rotate-12 transition-transform duration-300"
                />
              </span>
              icepops that evoke memories.
            </h2>

            <p className="font-jua text-lg lg:text-xl text-stone-800 leading-relaxed max-w-lg">
              You will have a great time with our delicious desserts. Delight
              in exquisite ice-cream, from elegant desserts, which reflect
              quality.
            </p>

            <div className="flex flex-wrap items-center gap-4 lg:gap-6 pt-4">
              <Link
                href="/order"
                className="inline-flex items-center gap-2 px-8 py-4 bg-whitetext-stone-900 font-jua border-[3px] border-stone-900 rounded-full shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px] text-base lg:text-lg uppercase tracking-wider"
              >
                Order Now <ChevronRight size={20} strokeWidth={3} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
