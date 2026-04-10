"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactForm() {
  const ref = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy submit
    alert("Thanks for your message! This is a demo form.");
  };

  return (
    <section ref={ref} className="w-full px-4 md:px-8 pb-16 md:pb-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Left Column: Form */}
        <div className="reveal reveal-left order-2 lg:order-1 flex flex-col gap-8 bg-white border-[4px] border-stone-900 rounded-[2rem] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(64,107,181,1)]">
          <h2 className="font-caprasimo text-3xl md:text-4xl text-stone-900 uppercase">
            Send a Message
          </h2>
          
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-jua text-stone-600 uppercase tracking-wide text-sm">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full bg-stone-50 border-[3px] border-stone-900 rounded-[1rem] px-5 py-4 font-jua text-stone-900 focus:outline-none focus:ring-4 focus:ring-[#406BB5]/30 focus:border-[#406BB5] transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-jua text-stone-600 uppercase tracking-wide text-sm">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full bg-stone-50 border-[3px] border-stone-900 rounded-[1rem] px-5 py-4 font-jua text-stone-900 focus:outline-none focus:ring-4 focus:ring-[#406BB5]/30 focus:border-[#406BB5] transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-jua text-stone-600 uppercase tracking-wide text-sm">
                Message
              </label>
              <textarea 
                id="message" 
                required
                rows={5}
                className="w-full bg-stone-50 border-[3px] border-stone-900 rounded-[1rem] px-5 py-4 font-jua text-stone-900 focus:outline-none focus:ring-4 focus:ring-[#406BB5]/30 focus:border-[#406BB5] transition-all resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="mt-2 w-full bg-[#406BB5] text-white font-caprasimo text-xl uppercase py-5 border-[3px] border-stone-900 rounded-xl shadow-[5px_5px_0px_0px_rgba(28,25,23,1)] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] hover:translate-x-1 hover:translate-y-1 transition-all active:shadow-none active:translate-x-1.5 active:translate-y-1.5"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Column: Info */}
        <div className="reveal reveal-right order-1 lg:order-2 flex flex-col gap-10 lg:pl-8 justify-center">
          
          <div className="flex flex-col gap-4">
            <h2 className="font-caprasimo text-3xl md:text-4xl text-stone-900 uppercase">
              Get In Touch
            </h2>
            <p className="font-jua text-stone-600 text-lg leading-relaxed">
              We try to respond to all inquiries within 24 hours. For immediate assistance with ongoing orders, please call us directly.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 shrink-0 bg-[#FFB000] border-[3px] border-stone-900 rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]">
                <MapPin size={24} className="text-stone-900" />
              </div>
              <div className="flex flex-col gap-1 pt-1">
                <h4 className="font-caprasimo text-xl text-stone-900 uppercase">Visit Us</h4>
                <p className="font-jua text-stone-600">123 Sunnyside Avenue<br/>Citrus City, FL 33012</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <a href="tel:+15551234567" className="w-14 h-14 shrink-0 bg-sky-300 border-[3px] border-stone-900 rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:scale-105 transition-transform">
                <Phone size={24} className="text-stone-900" />
              </a>
              <div className="flex flex-col gap-1 pt-1">
                <h4 className="font-caprasimo text-xl text-stone-900 uppercase">Call Us</h4>
                <p className="font-jua text-stone-600"><a href="tel:+15551234567" className="hover:text-[#406BB5] transition-colors underline">(555) 123-4567</a><br/>Mon-Fri, 9am - 5pm</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <a href="mailto:hello@amorefruitpops.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 shrink-0 bg-rose-300 border-[3px] border-stone-900 rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:scale-105 transition-transform">
                <Mail size={24} className="text-stone-900" />
              </a>
              <div className="flex flex-col gap-1 pt-1">
                <h4 className="font-caprasimo text-xl text-stone-900 uppercase">Email Us</h4>
                <p className="font-jua text-stone-600"><a href="mailto:hello@amorefruitpops.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#406BB5] transition-colors underline">hello@amorefruitpops.com</a></p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
