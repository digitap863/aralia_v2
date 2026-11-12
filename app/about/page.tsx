import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import AboutFeatures from "@/components/about/AboutFeatures";
import OurMaterials from "@/components/common/OurMaterials";

export const metadata: Metadata = {
  title: "About Us | Aralia - Premium Korean Comfort Innerwear",
  description:
    "Comfort, Confidence and Everyday Ease for Every Woman. Discover the story, refined fabrics, and Korean craftsmanship of Aralia.",
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-[#faf8f6]">
      <AboutHero />
      <OurStory />
      <MissionVision />
      <AboutFeatures />
      <OurMaterials />
    </main>
  );
}
