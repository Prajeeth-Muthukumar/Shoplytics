"use client";

import ContinueComparing from "./homeComponents/ContinueComparing";
import RecommendedForYou from "./homeComponents/RecommendedForYou";
import PriceDropsToday from "./homeComponents/PriceDropsToday";
import FeaturedCollections from "./homeComponents/FeaturedCollections";
import PopularBrands from "./homeComponents/PopularBrands";
import BenefitsStrip from "./homeComponents/BenefitsStrip";

export default function HomeBody() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <ContinueComparing />
      <RecommendedForYou />
      <PriceDropsToday />
      <FeaturedCollections />
      <PopularBrands />
      <BenefitsStrip />
    </main>
  );
}