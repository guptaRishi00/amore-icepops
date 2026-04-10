import BestSellerSection from "@/components/home/BestSellerSection";
import EventsSection from "@/components/home/EventsSection";
import FeaturesBanner from "@/components/home/FeaturesBanner";
import HeroSection from "@/components/home/HeroSection";
import PopularFlavors from "@/components/home/PopularFlavors";
import ServicesSection from "@/components/home/ServicesSection";
import VideoSection from "@/components/home/VideoSection";
import WeOfferMemoriesSection from "@/components/home/WeOfferMemoriesSection";
import AboutFruitPopsSection from "@/components/home/AboutFruitPopsSection";
import Footer from "@/components/layout/Footer";
import LocationsSection from "@/components/flavors/LocationsSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutFruitPopsSection />
      {/* <WeOfferMemoriesSection /> */}
      <FeaturesBanner />
      <PopularFlavors />
      <ServicesSection />
      <BestSellerSection />
      <EventsSection />
      <VideoSection />
      <LocationsSection />
      <Footer />
    </div>
  );
}
