"use client";
import ProductCard from "./ProductCard";
/**
 * ProductGrid – renders the results header (count + query) and the responsive
 * product card grid.
 *
 * Props:
 *   query    {string}   – the search term, e.g. "iphone"
 *   products {object[]} – array of product objects accepted by <ProductCard>
 *   isLoading {boolean} – when true, renders skeleton placeholders
 */
// ─── Skeleton card ───────────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden animate-pulse">
      <div className="aspect-square bg-slate-100" />
      <div className="p-3 space-y-2.5">
        <div className="h-4 bg-slate-100 rounded w-3/4" />
        <div className="h-3 bg-slate-100 rounded w-1/2" />
        <div className="h-5 bg-slate-100 rounded w-2/5" />
        <div className="h-8 bg-slate-100 rounded-xl mt-2" />
      </div>
    </div>
  );
}
// ─── Main component ───────────────────────────────────────────────────────────
export default function ProductGrid({ query = "iphone", products = [], isLoading = false }) {
  const count = products.length;
  return (
    <section className="flex-1 min-w-0" aria-label="Search results">
      {/* Results header */}
      <div className="mb-4">
        <h1 className="text-xl font-bold text-slate-900">
          Results for{" "}
          <span className="text-emerald-600">&quot;{query}&quot;</span>
        </h1>
        {!isLoading && (
          <p className="text-sm text-slate-500 mt-0.5">
            {count.toLocaleString()} product{count !== 1 ? "s" : ""} found
          </p>
        )}
      </div>
      {/* Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : count === 0 ? (
        /* Empty state */
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <svg
            className="w-16 h-16 text-slate-200 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <h2 className="text-lg font-semibold text-slate-600 mb-1">No products found</h2>
          <p className="text-sm text-slate-400">
            Try adjusting your filters or search for something else.
          </p>
        </div>
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
          aria-label={`${count} products`}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
