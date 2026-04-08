import type { Metadata } from "next";
import StoryHero from "@/components/story/StoryHero";
import StoryValues from "@/components/story/StoryValues";
import LocationsSection from "@/components/flavors/LocationsSection";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Our Story | Amore Fruit Pops",
  description: "Learn about the journey and passion behind our handcrafted, 100% real fruit pops.",
};

export default function StoryPage() {
  return (
    <div className="min-h-screen">
      <StoryHero />
      <div className="flex flex-col items-center w-full">
        <StoryValues />
      </div>
      <LocationsSection />
      <Footer />
    </div>
  );
}
