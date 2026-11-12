import type { Metadata } from "next";
import AboutFeatures from "@/components/about/AboutFeatures";
import OurMaterials from "@/components/common/OurMaterials";
import CollectionsHero from "@/components/collection/CollectionHero";
import CollectionGrid from "@/components/collection/CollectionGrid";

export const metadata: Metadata = {
  title: "Collections | Aralia - Premium Korean Comfort Innerwear",
  description:
    "Explore our curated Korean comfort innerwear collections — Everyday Essentials, Active Series, Lace Collections, and more.",
};

export default function CollectionsPage() {
  return (
    <main className="w-full min-h-screen bg-[#faf8f6]">
      <CollectionsHero />
      <CollectionGrid />
      <AboutFeatures />
      <OurMaterials />
    </main>
  );
}
