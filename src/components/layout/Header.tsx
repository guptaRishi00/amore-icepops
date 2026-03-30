import {
  ShoppingBag,
  Search,
  ChevronDown,
  ChevronRight,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full top-0 z-50 flex flex-col bg-white">
      <div className="px-3 pt-3 md:px-5">
        <div className="w-full bg-[#406BB5] text-stone-100 py-2.5 px-6 md:px-10 flex items-center justify-between text-[10px] sm:text-[11px] font-extrabold tracking-[0.15em] uppercase rounded-md">
          <div className="hidden md:flex items-center gap-2">
            <Truck size={14} strokeWidth={2.5} />
            <span>Free Shipping</span>
          </div>

          <div className="text-center w-full md:w-auto text-[#e6dcd3]">
            Free shipping on orders over $50!
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Truck size={14} strokeWidth={2.5} />
            <span>Free Shipping</span>
          </div>
        </div>
      </div>

      <header className="w-full py-5 px-6 lg:px-20 flex items-center justify-between mt-1">
        <div className="flex items-center gap-12 lg:gap-24">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={180}
              height={60}
              loading="eager"
              className="object-contain w-32 md:w-40"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-7 lg:gap-9 font-caprasimo text-stone-900 text-[15px] tracking-wide pt-1">
            <Link
              href="/shop"
              className="hover:text-[#406BB5] transition-colors"
            >
              Shop
            </Link>

            <Link
              href="/flavors"
              className="flex items-center gap-1 hover:text-[#406BB5] transition-colors group"
            >
              Flavors
            </Link>

            <Link
              href="/story"
              className="hover:text-[#406BB5] transition-colors"
            >
              Story
            </Link>

            <Link
              href="/about"
              className="hover:text-[#406BB5] transition-colors"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="hover:text-[#406BB5] transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-5 lg:gap-7 shrink-0 pt-1">
          <button
            aria-label="Cart"
            className="relative text-stone-900 hover:text-[#406BB5] cursor-pointer transition-colors"
          >
            <ShoppingBag size={20} strokeWidth={2.5} />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#406BB5] rounded-full border-2 border-white"></span>
          </button>

          <Link
            href="/order"
            className="hidden sm:flex items-center gap-1 px-5 py-2 bg-white text-stone-900 font-jua text-[13px] uppercase tracking-widest border-2 border-stone-900 rounded-full shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] hover:shadow-[1px_1px_0px_0px_rgba(28,25,23,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all active:shadow-none active:translate-x-0.75 active:translate-y-0.75"
          >
            Order Now <ChevronRight size={16} strokeWidth={3} />
          </Link>
        </div>
      </header>
    </div>
  );
}
