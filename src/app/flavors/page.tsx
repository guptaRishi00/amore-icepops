import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FlavorsHero from "@/components/flavors/FlavorsHero";
import FlavorsGrid from "@/components/flavors/FlavorsGrid";
import LocationsSection from "@/components/flavors/LocationsSection";
import BestSellerSection from "@/components/home/BestSellerSection";
import VideoSection from "@/components/home/VideoSection";

export default function FlavorsPage() {
  return (
    <div className="w-full min-h-screen bg-[#FAF9F6] flex flex-col font-sans selection:bg-[#406BB5] selection:text-white">


      <main className="grow flex flex-col items-center">
        {/* Dynamic Hero Section */}
        <FlavorsHero />

        {/* Flavors Bento Grid */}
        <FlavorsGrid />

        {/* Locations and Experiences Section */}
        <LocationsSection />

        {/* Best Seller Section */}
        <BestSellerSection />
        <VideoSection />
      </main>

      {/* Global Neo-brutalist Footer */}
      <Footer />
    </div>
  );
}
