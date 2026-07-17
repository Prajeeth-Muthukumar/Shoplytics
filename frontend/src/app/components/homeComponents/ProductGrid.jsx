// FILE: src/app/components/homeComponents/ProductGrid.jsx
// WHAT IT DOES: Imports product data and lays out all 15 ProductCard components

import ProductCard from "./ProductCard";
import products from "./products";

export default function ProductGrid() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">

      {/* ── Section header ── */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight">
            Top 15 Products
          </h2>
          <p className="text-sm text-[#64748B] mt-1">
            Prices updated every morning • Last updated today at 8:00 AM
          </p>
        </div>
        <span className="text-xs font-semibold text-[#10B981] bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full self-start sm:self-auto">
          ↻ Updated daily
        </span>
      </div>

      {/* ── Product grid ──
          Mobile:  2 columns
          Tablet:  3 columns
          Desktop: 5 columns
      ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}