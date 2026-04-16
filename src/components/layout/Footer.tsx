import Link from "next/link";
import Image from "next/image";

// --- CUSTOM SVG ICONS (Scaled up to 24x24) ---
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer() {
  return (
    // Scaled up padding and border width
    <footer className="w-full bg-[#FAF9F6] border-t-[3px] border-stone-900 py-16 md:py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* --- MAIN FOOTER GRID --- */}
        {/* Widened grid gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Left Side: Brand & Socials */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-12">
            <Link href="/" className="inline-block mb-6 cursor-pointer group">
              {/* Scaled up logo */}
              <Image
                src="/logo.png"
                alt="Amore Logo"
                width={200}
                height={80}
                className="object-contain w-48 md:w-56"
              />
            </Link>

            {/* Scaled up text size and margin */}
            <p className="font-jua text-stone-700 text-xl leading-relaxed mb-10 max-w-sm">
              Bringing joy to life in a cup since 2016. Handmade ice cream rolls
              and gelato crafted with love.
            </p>

            {/* Scaled up social icons (size, borders, shadows) */}
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="w-14 h-14 bg-white border-[3px] border-stone-900 rounded-full flex items-center justify-center text-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="#"
                className="w-14 h-14 bg-white border-[3px] border-stone-900 rounded-full flex items-center justify-center text-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
              >
                <FacebookIcon />
              </Link>
              <Link
                href="#"
                className="w-14 h-14 bg-white border-[3px] border-stone-900 rounded-full flex items-center justify-center text-stone-900 shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
              >
                <TwitterIcon />
              </Link>
            </div>
          </div>

          {/* Column 3: Explore Links */}
          <div className="flex flex-col items-start">
            {/* Scaled up heading */}
            <h3 className="font-caprasimo text-2xl lg:text-3xl text-stone-900 uppercase tracking-wider mb-8">
              Explore
            </h3>
            {/* Scaled up list gap and text size */}
            <ul className="flex flex-col gap-5 font-jua text-xl text-stone-700">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#406BB5] hover:pl-2 transition-all duration-300 block"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#406BB5] hover:pl-2 transition-all duration-300 block"
                >
                  All Flavors
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#406BB5] hover:pl-2 transition-all duration-300 block"
                >
                  Food Trucks
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#406BB5] hover:pl-2 transition-all duration-300 block"
                >
                  Catering
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Say Hello Links */}
          <div className="flex flex-col items-start">
            {/* Scaled up heading */}
            <h3 className="font-caprasimo text-2xl lg:text-3xl text-stone-900 uppercase tracking-wider mb-8">
              Say Hello
            </h3>
            {/* Scaled up list gap and text size */}
            <ul className="flex flex-col gap-5 font-jua text-xl text-stone-700">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FF4D8C] hover:pl-2 transition-all duration-300 block"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FF4D8C] hover:pl-2 transition-all duration-300 block"
                >
                  Find Shops
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#FF4D8C] hover:pl-2 transition-all duration-300 block"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* --- BOTTOM DIVIDER & COPYRIGHT --- */}
        {/* Scaled up top margin, border width, and text size */}
        <div className="w-full mt-16 pt-8 border-t-[3px] border-stone-900 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="font-jua text-stone-600 text-lg">
            © {new Date().getFullYear()} Amore icepops All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 font-jua text-stone-600 text-lg">
            <Link href="#" className="hover:text-stone-900 transition-colors">
              Privacy Policy
            </Link>
            <span className="w-2 h-2 bg-stone-900 rounded-full hidden sm:block"></span>
            <Link href="#" className="hover:text-stone-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
