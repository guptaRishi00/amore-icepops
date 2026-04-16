"use client";

import { useCartStore } from "@/store/useCartStore";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight, CheckCircle2 } from "lucide-react";
import Footer from "@/components/layout/Footer";

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart } = useCartStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const cartTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    if (totalQuantity < 5) {
      alert("Minimum order is 5 pops. Please add more items to your cart.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: formData,
          items: items,
          total: cartTotal,
        }),
      });

      if (!response.ok) throw new Error("Checkout failed");

      // Clear cart and show success
      clearCart();
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error(error);
      alert("There was an issue processing your order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
        <div className="flex-grow flex items-center justify-center py-12 md:py-20 px-4">
          <div className="max-w-xl w-full bg-white border-[3px] md:border-[4px] border-stone-900 rounded-2xl md:rounded-[2rem] p-6 md:p-10 text-center shadow-[6px_6px_0px_0px_rgba(64,107,181,1)] md:shadow-[10px_10px_0px_0px_rgba(64,107,181,1)]">
            <div className="flex justify-center mb-4 md:mb-6 text-[#406BB5]">
              <CheckCircle2 size={56} className="md:w-20 md:h-20" strokeWidth={2} />
            </div>
            <h1 className="font-caprasimo text-2xl md:text-4xl text-stone-900 mb-3 md:mb-4 uppercase">Order Confirmed!</h1>
            <p className="font-jua text-stone-600 text-sm md:text-lg mb-6 md:mb-8">
              Thank you for your order, {formData.name}. We've received it and will start preparing your delicious fruit pops shortly!
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-[#406BB5] text-white font-caprasimo text-base md:text-xl uppercase border-2 md:border-[3px] border-stone-900 rounded-xl md:rounded-[1.5rem] shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] md:shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 md:px-8 py-8 md:py-20">
        
        <h1 className="font-caprasimo text-2xl md:text-5xl text-stone-900 uppercase tracking-wide mb-6 md:mb-10 drop-shadow-[2px_2px_0px_rgba(64,107,181,0.2)]">
          Your Cart
        </h1>

        {items.length === 0 ? (
          <div className="bg-white border-[3px] md:border-[4px] border-stone-900 rounded-2xl md:rounded-[2rem] p-8 md:p-12 text-center shadow-[5px_5px_0px_0px_rgba(28,25,23,1)] md:shadow-[8px_8px_0px_0px_rgba(28,25,23,1)]">
            <h2 className="font-jua text-lg md:text-2xl text-stone-500 mb-4 md:mb-6 uppercase tracking-widest">Cart is Empty</h2>
            <Link
              href="/flavors"
              className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-[#FFB000] text-stone-900 font-caprasimo text-base md:text-xl uppercase border-2 md:border-[3px] border-stone-900 rounded-xl shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] md:shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              Shop Flavors <ArrowRight size={18} className="md:w-5 md:h-5" strokeWidth={3} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
            
            {/* Cart Items List */}
            <div className="lg:col-span-2 flex flex-col gap-4 md:gap-6">
              {items.map((item) => (
                <div key={item.id} className="flex flex-row items-center gap-3 md:gap-6 bg-white border-2 md:border-[3px] border-stone-900 rounded-xl md:rounded-2xl p-3 md:p-6 shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] md:shadow-[4px_4px_0px_0px_rgba(28,25,23,1)]">
                  {/* Image */}
                  <div className="w-16 h-16 md:w-32 md:h-32 bg-stone-100 rounded-lg md:rounded-xl border-2 md:border-[3px] border-stone-900 relative overflow-hidden shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover p-1 md:p-2" />
                  </div>
                  
                  {/* Info */}
                  <div className="flex-grow flex flex-col gap-1 md:gap-2 min-w-0">
                    <h3 className="font-caprasimo text-sm md:text-2xl text-stone-900 uppercase truncate">{item.name}</h3>
                    <p className="font-jua text-[#406BB5] text-xs md:text-xl">₹{item.price} each</p>
                    
                    <div className="flex items-center gap-2 md:gap-4 mt-1 md:mt-2">
                      <div className="flex items-center bg-stone-100 border-2 md:border-[3px] border-stone-900 rounded-full overflow-hidden">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 md:p-2 hover:bg-stone-200 transition-colors">
                          <Minus size={14} className="md:w-[18px] md:h-[18px]" strokeWidth={3} />
                        </button>
                        <span className="font-jua text-sm md:text-lg min-w-[1.5rem] md:min-w-[2rem] text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 md:p-2 hover:bg-stone-200 transition-colors">
                          <Plus size={14} className="md:w-[18px] md:h-[18px]" strokeWidth={3} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 md:p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors border-2 border-transparent hover:border-red-200"
                        title="Remove Item"
                      >
                        <Trash2 size={16} className="md:w-6 md:h-6" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Line Total */}
                  <div className="text-right shrink-0 pl-1">
                    <p className="font-caprasimo text-base md:text-2xl text-stone-900">₹{item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Checkout Form */}
            <div className="lg:col-span-1">
              <div className="bg-white border-[3px] md:border-[4px] border-stone-900 rounded-2xl md:rounded-[2rem] p-5 md:p-8 shadow-[5px_5px_0px_0px_rgba(64,107,181,1)] md:shadow-[8px_8px_0px_0px_rgba(64,107,181,1)] lg:sticky lg:top-24">
                <h3 className="font-caprasimo text-xl md:text-2xl text-stone-900 uppercase mb-4 md:mb-6 pb-3 md:pb-4 border-b-2 md:border-b-[3px] border-stone-200">Order Summary</h3>
                
                <div className="flex justify-between items-center mb-4 md:mb-6 font-jua text-stone-600 text-base md:text-lg">
                  <span>Subtotal ({totalQuantity} pops)</span>
                  <span className="text-stone-900 font-bold">₹{cartTotal}</span>
                </div>
                
                <div className="flex justify-between items-center mb-6 md:mb-8 font-caprasimo text-xl md:text-2xl text-[#406BB5] pt-3 md:pt-4 border-t-2 md:border-t-[3px] border-stone-200">
                  <span>Total</span>
                  <span>₹{cartTotal}</span>
                </div>

                {totalQuantity < 5 && (
                  <div className="mb-4 px-3 py-2 bg-amber-50 border-2 border-amber-400 rounded-xl">
                    <p className="font-jua text-amber-700 text-xs md:text-sm text-center">
                      Minimum order is 5 pops. Add {5 - totalQuantity} more!
                    </p>
                  </div>
                )}

                <form onSubmit={handleCheckout} className="flex flex-col gap-4 md:gap-5">
                  <div className="flex flex-col gap-1.5 md:gap-2">
                    <label className="font-jua text-stone-600 text-xs md:text-sm uppercase">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-stone-50 border-2 md:border-[3px] border-stone-900 rounded-lg md:rounded-xl px-3 py-2.5 md:px-4 md:py-3 font-jua text-sm md:text-base focus:ring-4 focus:ring-[#406BB5]/30 focus:border-[#406BB5] outline-none" 
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 md:gap-2">
                    <label className="font-jua text-stone-600 text-xs md:text-sm uppercase">Email</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-stone-50 border-2 md:border-[3px] border-stone-900 rounded-lg md:rounded-xl px-3 py-2.5 md:px-4 md:py-3 font-jua text-sm md:text-base focus:ring-4 focus:ring-[#406BB5]/30 focus:border-[#406BB5] outline-none" 
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 md:gap-2">
                    <label className="font-jua text-stone-600 text-xs md:text-sm uppercase">Delivery Address</label>
                    <textarea 
                      required 
                      rows={3}
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      className="bg-stone-50 border-2 md:border-[3px] border-stone-900 rounded-lg md:rounded-xl px-3 py-2.5 md:px-4 md:py-3 font-jua text-sm md:text-base focus:ring-4 focus:ring-[#406BB5]/30 focus:border-[#406BB5] outline-none resize-none" 
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting || totalQuantity < 5}
                    className="mt-2 md:mt-4 w-full flex justify-center items-center gap-2 bg-[#406BB5] text-white font-caprasimo text-base md:text-xl uppercase py-3 md:py-4 border-2 md:border-[3px] border-stone-900 rounded-xl shadow-[3px_3px_0px_0px_rgba(28,25,23,1)] md:shadow-[4px_4px_0px_0px_rgba(28,25,23,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(28,25,23,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all disabled:opacity-70"
                  >
                    {isSubmitting ? "Processing..." : "Place Order"}
                  </button>
                </form>
              </div>
            </div>

          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
