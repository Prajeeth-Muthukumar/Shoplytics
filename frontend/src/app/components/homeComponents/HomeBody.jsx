// FILE: src/app/components/homeComponents/HomeBody.jsx
// WHAT IT DOES: Assembles all homepage sections in order

import DailyUpdateBanner from "./DailyUpdateBanner";
import ProductGrid from "./ProductGrid";
import BenefitsStrip from "./BenefitsStrip";

export default function HomeBody() {
  return (
    <main className="bg-[#F8FAFC] min-h-screen">
      {/* 1. Compact update banner under navbar */}
      <DailyUpdateBanner />

      {/* 2. All 15 products in a grid */}
      <ProductGrid />

      {/* 3. Trust/benefits strip */}
      <BenefitsStrip />
    </main>
  );
}