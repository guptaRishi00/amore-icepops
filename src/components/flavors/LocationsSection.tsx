import Image from "next/image";
import { MapPin, Clock, Phone, ArrowUpRight } from "lucide-react";

export default function LocationsSection() {
  return (
    <section className="w-full bg-white py-10 md:py-24 px-6 lg:px-20">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-caprasimo text-3xl md:text-5xl text-stone-900 uppercase tracking-tight mb-4">
            Visit Us
          </h2>
          <p className="font-jua text-stone-600 text-base md:text-lg max-w-lg mx-auto">
            Come taste the magic in person at our flagship store
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Store Image */}
          <div className="relative w-full h-[280px] md:h-[420px] bg-stone-100 border-[3px] border-stone-900 rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(28,25,23,1)]">
            <Image
              src="/shop3.png"
              alt="Amore Store"
              fill
              className="object-cover"
            />
          </div>

          {/* Store Info */}
          <div className="flex flex-col gap-6 md:gap-8 justify-center">
            {/* Address Card */}
            <div className="bg-[#FAF9F6] border-[3px] border-stone-900 rounded-2xl p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 bg-[#FFDDE6] border-2 border-stone-900 rounded-full flex items-center justify-center">
                  <MapPin size={18} strokeWidth={3} className="text-stone-900" />
                </div>
                <div>
                  <h3 className="font-caprasimo text-lg md:text-xl text-stone-900 uppercase tracking-wider mb-2">
                    Our Store
                  </h3>
                  <p className="font-jua text-stone-700 text-base md:text-lg leading-relaxed">
                    Dn.no - 13-165, ward no : 13,<br />
                    bolaram industrial area,<br />
                    Hyderabad, Telangana-500118
                  </p>
                </div>
              </div>
            </div>

            {/* Hours & Phone Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {/* Hours */}
              <div className="bg-[#FAF9F6] border-[3px] border-stone-900 rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-[#FFB000] border-2 border-stone-900 rounded-full flex items-center justify-center">
                    <Clock size={18} strokeWidth={3} className="text-stone-900" />
                  </div>
                  <div>
                    <h3 className="font-caprasimo text-base md:text-lg text-stone-900 uppercase tracking-wider mb-1">
                      Hours
                    </h3>
                    <p className="font-jua text-stone-700 text-sm md:text-base leading-relaxed">
                      Mon – Sun<br />
                      11:00 AM – 11:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <a href="tel:+918985867798" className="block bg-[#FAF9F6] border-[3px] border-stone-900 rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:shadow-none active:translate-x-[4px] active:translate-y-[4px]">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-[#406BB5] border-2 border-stone-900 rounded-full flex items-center justify-center">
                    <Phone size={18} strokeWidth={3} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-caprasimo text-base md:text-lg text-stone-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      Call Us <ArrowUpRight size={14} strokeWidth={3} className="text-stone-500" />
                    </h3>
                    <p className="font-jua text-stone-700 text-sm md:text-base leading-relaxed">
                      +91 8985867798
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
