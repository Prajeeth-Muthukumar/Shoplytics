"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import FilterSidebar from "../components/search/FilterSidebar";
import SortDropdown from "../components/search/SortDropdown";
import ProductGrid from "../components/search/ProductGrid";
// ─── Sample product data ──────────────────────────────────────────────────────
// Replace this with real API data when integrating the backend.
const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: "Apple iPhone 16 (128GB) - Ultramarine",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone16-digitalmat-gallery-1-202409?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1723670519063",
    rating: 4.6,
    reviewCount: "12.4K",
    price: 68999,
    originalPrice: 79900,
    discount: 14,
    store: "amazon",
    freeDelivery: true,
  },
  {
    id: 2,
    name: "Apple iPhone 15 (128GB) - Pink",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15-digitalmat-gallery-2-202309?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1693952384277",
    rating: 4.5,
    reviewCount: "9.8K",
    price: 59999,
    originalPrice: 69000,
    discount: 13,
    store: "flipkart",
    freeDelivery: true,
  },
  {
    id: 3,
    name: "Apple iPhone 14 (128GB) - Starlight",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone14-digitalmat-gallery-1-202209?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1660803972190",
    rating: 4.4,
    reviewCount: "7.2K",
    price: 49999,
    originalPrice: 55900,
    discount: 10,
    store: "amazon",
    freeDelivery: true,
  },
  {
    id: 4,
    name: "Apple iPhone 13 (128GB) - Midnight",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone13-digitalmat-gallery-2-202207?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1657223925761",
    rating: 4.4,
    reviewCount: "6.1K",
    price: 38999,
    originalPrice: 42500,
    discount: 8,
    store: "myntra",
    freeDelivery: true,
  },
  {
    id: 5,
    name: "Apple iPhone 15 Plus (128GB) - Green",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15plus-digitalmat-gallery-3-202309?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1693952384543",
    rating: 4.6,
    reviewCount: "4.3K",
    price: 69999,
    originalPrice: 79900,
    discount: 12,
    store: "ajio",
    freeDelivery: true,
  },
  {
    id: 6,
    name: "Apple iPhone 16 Plus (128GB) - Blue",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone16plus-digitalmat-gallery-1-202409?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1723670519063",
    rating: 4.7,
    reviewCount: "3.7K",
    price: 79999,
    originalPrice: 94900,
    discount: 15,
    store: "amazon",
    freeDelivery: true,
  },
  {
    id: 7,
    name: "Apple iPhone 14 Plus (128GB) - Black",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone14plus-digitalmat-gallery-1-202209?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1662565935803",
    rating: 4.5,
    reviewCount: "2.8K",
    price: 56999,
    originalPrice: 63900,
    discount: 11,
    store: "flipkart",
    freeDelivery: true,
  },
  {
    id: 8,
    name: "Apple iPhone 13 mini (128GB) - Blue",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone13mini-digitalmat-gallery-2-202207?wid=800&hei=800&fmt=jpeg&qlt=90&.v=1657223925761",
    rating: 4.3,
    reviewCount: "2.1K",
    price: 33999,
    originalPrice: 37400,
    discount: 9,
    store: "amazon",
    freeDelivery: true,
  },
];
// ─── Search page ──────────────────────────────────────────────────────────────
export default function SearchPage() {
  const searchParams = useSearchParams();
  // Read the search term directly from the URL (?q=)
  const query = searchParams.get("q") ?? "";

  const [sortKey, setSortKey] = useState("price_asc");
  const [filters, setFilters] = useState({});
  // Placeholder filter merge – replace with real filtering logic
  const handleFilter = (partial) => {
    setFilters((prev) => ({ ...prev, ...partial }));
  };
  const handleClearAll = () => {
    setFilters({});
  };
  // Placeholder sort – replace with real sorted data from backend/state
  const sortedProducts = [...SAMPLE_PRODUCTS].sort((a, b) => {
    if (sortKey === "price_asc") return a.price - b.price;
    if (sortKey === "price_desc") return b.price - a.price;
    if (sortKey === "discount_desc") return b.discount - a.discount;
    return b.id - a.id; // newest
  });
  // query is now derived from URL — passed down to ProductGrid and breadcrumb
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/*
        NOTE: The Navbar (which includes the search bar) is rendered in the
        root layout.jsx. Do NOT add another search bar here.
      */}
      {/* ── Breadcrumb ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-1">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-xs text-slate-400">
            <li>
              <a href="/" className="hover:text-emerald-600 transition-colors">Home</a>
            </li>
            <li aria-hidden="true">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li>
              <a href="/search" className="hover:text-emerald-600 transition-colors">Search</a>
            </li>
            <li aria-hidden="true">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li className="text-slate-600 font-medium">&quot;{query}&quot;</li>
          </ol>
        </nav>
      </div>
      {/* ── Page body ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex gap-6 items-start">
          {/* ── Sticky sidebar ── */}
          <div className="hidden lg:block sticky top-24 self-start">
            <FilterSidebar onClearAll={handleClearAll} onFilter={handleFilter} />
          </div>
          {/* ── Main content ── */}
          <div className="flex-1 min-w-0 flex flex-col gap-4">
            {/* Sort bar */}
            <div className="flex items-center justify-between bg-white rounded-2xl border border-slate-100 shadow-sm px-5 py-3">
              <p className="text-sm text-slate-500">
                <span className="font-semibold text-slate-800">{sortedProducts.length}</span>{" "}
                results for{" "}
                <span className="font-semibold text-emerald-600">&quot;{query}&quot;</span>
              </p>
              <SortDropdown value={sortKey} onChange={setSortKey} />
            </div>
            {/* Product grid */}
            <ProductGrid query={query} products={sortedProducts} />
            {/* ── Pagination placeholder ── */}
            <nav
              aria-label="Pagination"
              className="flex items-center justify-center gap-1.5 mt-4"
            >
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`w-9 h-9 rounded-xl text-sm font-medium transition-all duration-200 ${
                    page === 1
                      ? "bg-emerald-500 text-white shadow-sm shadow-emerald-500/30"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-emerald-300 hover:text-emerald-600"
                  }`}
                  aria-label={`Page ${page}`}
                  aria-current={page === 1 ? "page" : undefined}
                >
                  {page}
                </button>
              ))}
              <span className="w-9 h-9 flex items-center justify-center text-slate-400 text-sm">
                ...
              </span>
              <button className="w-9 h-9 rounded-xl text-sm font-medium bg-white text-slate-600 border border-slate-200 hover:border-emerald-300 hover:text-emerald-600 transition-all duration-200">
                12
              </button>
              <button className="flex items-center gap-1 px-3 h-9 rounded-xl text-sm font-medium bg-white text-slate-600 border border-slate-200 hover:border-emerald-300 hover:text-emerald-600 transition-all duration-200">
                Next
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}
