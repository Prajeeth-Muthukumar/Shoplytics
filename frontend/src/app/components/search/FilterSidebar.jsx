"use client";
import PriceSlider from "./PriceSlider";
import RatingFilter from "./RatingFilter";
import StoreFilter from "./StoreFilter";
import DiscountFilter from "./DiscountFilter";
import DeliveryFilter from "./DeliveryFilter";
import AvailabilityFilter from "./AvailabilityFilter";
/**
 * FilterSidebar – the sticky left column that composes all filter sections.
 *
 * Props:
 *   onClearAll  {function} – triggered when user clicks "Clear All Filters"
 *   onFilter    {function} – called with a merged { key: value } filters object
 *                            whenever any sub-filter changes
 */
export default function FilterSidebar({ onClearAll, onFilter }) {
  return (
    <aside
      className="w-[280px] flex-shrink-0 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
      aria-label="Product filters"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          {/* Sliders icon */}
          <svg
            className="w-4 h-4 text-emerald-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4h18M3 12h12M3 20h6M17 12a3 3 0 100-6 3 3 0 000 6zM21 20a3 3 0 10-6 0 3 3 0 006 0z"
            />
          </svg>
          <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
            Filters
          </h2>
        </div>
        {/* Quick clear link */}
        <button
          onClick={onClearAll}
          className="text-xs text-slate-400 hover:text-emerald-600 font-medium transition-colors duration-200"
          aria-label="Clear all filters"
        >
          Clear
        </button>
      </div>
      {/* Filter sections scroll area */}
      <div className="px-5 overflow-y-auto max-h-[calc(100vh-220px)]">
        <PriceSlider onChange={(v) => onFilter?.({ price: v })} />
        <RatingFilter onChange={(v) => onFilter?.({ rating: v })} />
        <StoreFilter onChange={(v) => onFilter?.({ stores: v })} />
        <DiscountFilter onChange={(v) => onFilter?.({ discount: v })} />
        <DeliveryFilter onChange={(v) => onFilter?.({ freeDelivery: v })} />
        <AvailabilityFilter onChange={(v) => onFilter?.({ inStock: v })} />
      </div>
      {/* Clear All Filters button */}
      <div className="px-5 py-4 border-t border-slate-100">
        <button
          onClick={onClearAll}
          className="flex w-full items-center justify-center gap-2 py-2.5 px-4 rounded-xl border-2 border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 active:scale-[0.98] transition-all duration-200"
          aria-label="Clear all active filters"
        >
          {/* Trash icon */}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Clear All Filters
        </button>
      </div>
    </aside>
  );
}
