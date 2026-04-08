import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutTeam from "@/components/about/AboutTeam";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About Us | Amore Fruit Pops",
  description: "Learn more about the team, our mission, and the passion behind Amore Fruit Pops.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutMission />
      <div className="flex flex-col items-center w-full">
        <AboutTeam />
      </div>
      <Footer />
    </div>
  );
}
