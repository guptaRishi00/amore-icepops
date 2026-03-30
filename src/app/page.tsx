import FeaturesBanner from "@/components/home/FeaturesBanner";
import HeroSection from "@/components/home/HeroSection";
import PopularFlavors from "@/components/home/PopularFlavors";
import WeOfferMemoriesSection from "@/components/home/WeOfferMemoriesSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <PopularFlavors />
      <WeOfferMemoriesSection />
      <FeaturesBanner />
    </div>
  );
}
