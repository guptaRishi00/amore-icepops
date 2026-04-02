import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FlavorsHero from "@/components/flavors/FlavorsHero";
import FlavorsGrid from "@/components/flavors/FlavorsGrid";

export default function FlavorsPage() {
  return (
    <div className="w-full min-h-screen bg-[#FAF9F6] flex flex-col font-sans selection:bg-[#406BB5] selection:text-white">


      <main className="flex-grow flex flex-col items-center">
        {/* Dynamic Hero Section */}
        <FlavorsHero />

        {/* Flavors Bento Grid */}
        <FlavorsGrid />
      </main>

      {/* Global Neo-brutalist Footer */}
      <Footer />
    </div>
  );
}
