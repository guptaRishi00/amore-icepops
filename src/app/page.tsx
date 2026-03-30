import BestSellerSection from "@/components/home/BestSellerSection";
import FeaturesBanner from "@/components/home/FeaturesBanner";
import HeroSection from "@/components/home/HeroSection";
import PopularFlavors from "@/components/home/PopularFlavors";
import ServicesSection from "@/components/home/ServicesSection";
import VideoSection from "@/components/home/VideoSection";
import WeOfferMemoriesSection from "@/components/home/WeOfferMemoriesSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <PopularFlavors />
      <WeOfferMemoriesSection />
      <FeaturesBanner />
      <ServicesSection />
      <BestSellerSection />
      <VideoSection />
      <Footer />
    </div>
  );
}
