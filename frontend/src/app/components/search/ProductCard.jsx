"use client";
import { useState } from "react";
/**
 * ProductCard – displays a single product result.
 *
 * Props:
 *   product {object}:
 *     id          {string|number}
 *     name        {string}
 *     image       {string}   – URL or path to the product image
 *     rating      {number}   – e.g. 4.6
 *     reviewCount {string}   – e.g. "12.4K"
 *     price       {number}   – current selling price (INR)
 *     originalPrice {number} – MRP / strikethrough price (INR)
 *     discount    {number}   – percentage discount integer e.g. 14
 *     store       {string}   – "amazon" | "flipkart" | "myntra" | "ajio"
 *     freeDelivery {boolean}
 *     isWishlisted {boolean} – initial wishlist state
 */
// ─── Brand badge config ──────────────────────────────────────────────────────
const STORE_CONFIG = {
  amazon: {
    label: "Amazon",
    bg: "bg-[#FF9900]/10",
    text: "text-[#b86a00]",
    dot: "bg-[#FF9900]",
  },
  flipkart: {
    label: "Flipkart",
    bg: "bg-[#2874F0]/10",
    text: "text-[#2874F0]",
    dot: "bg-[#2874F0]",
  },
  myntra: {
    label: "Myntra",
    bg: "bg-[#FF3F6C]/10",
    text: "text-[#FF3F6C]",
    dot: "bg-[#FF3F6C]",
  },
  ajio: {
    label: "Ajio",
    bg: "bg-[#EC1C24]/10",
    text: "text-[#EC1C24]",
    dot: "bg-[#EC1C24]",
  },
};
// ─── Helpers ─────────────────────────────────────────────────────────────────
const formatINR = (v) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(v);
function StarRating({ rating }) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.25 && rating - full < 0.75;
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = i <= full;
        const half = !filled && i === full + 1 && hasHalf;
        return (
          <svg
            key={i}
            className={`w-3.5 h-3.5 ${filled ? "text-amber-400 fill-amber-400" : half ? "text-amber-400 fill-amber-400/50" : "text-slate-200 fill-slate-200"}`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.95 2.878c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.064 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.285-3.957z" />
          </svg>
        );
      })}
    </div>
  );
}
// ─── Main component ───────────────────────────────────────────────────────────
export default function ProductCard({ product }) {
  const {
    name,
    image,
    rating = 4.5,
    reviewCount = "0",
    price,
    originalPrice,
    discount,
    store = "amazon",
    freeDelivery = false,
    isWishlisted: initialWishlisted = false,
  } = product;
  const [wishlisted, setWishlisted] = useState(initialWishlisted);
  const storeConf = STORE_CONFIG[store] ?? STORE_CONFIG.amazon;
  return (
    <article
      className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-250 overflow-hidden flex flex-col"
      aria-label={name}
    >
      {/* ── Discount badge ── */}
      {discount > 0 && (
        <div className="absolute top-3 left-3 z-10 bg-emerald-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-md leading-5 shadow-sm">
          {discount}%<br />
          <span className="text-[9px] font-semibold tracking-wide">OFF</span>
        </div>
      )}
      {/* ── Wishlist button ── */}
      <button
        onClick={() => setWishlisted((v) => !v)}
        className="absolute top-3 right-3 z-10 w-7 h-7 flex items-center justify-center rounded-full bg-white shadow-sm border border-slate-100 hover:scale-110 transition-transform duration-200"
        aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        aria-pressed={wishlisted}
      >
        <svg
          className={`w-4 h-4 transition-colors duration-200 ${wishlisted ? "fill-red-500 text-red-500" : "fill-transparent text-slate-400 hover:text-red-400"}`}
          stroke="currentColor"
          strokeWidth={1.75}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
      {/* ── Product image ── */}
      <div className="relative w-full aspect-square bg-slate-50 overflow-hidden">
        {/* Plain <img> used intentionally — product images come from many
            unpredictable CDN domains (Apple, Amazon, Flipkart, Myntra, Ajio…)
            so next/image remotePatterns would need constant maintenance.
            All styling is identical to the previous next/image usage. */}
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            // Fallback: hide broken image
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
      {/* ── Card body ── */}
      <div className="flex flex-col gap-2 p-3 flex-1">
        {/* Product name */}
        <h3 className="text-sm font-medium text-slate-800 leading-snug line-clamp-2 min-h-[2.5rem]">
          {name}
        </h3>
        {/* Rating row */}
        <div className="flex items-center gap-1.5">
          <StarRating rating={rating} />
          <span className="text-xs font-semibold text-amber-500">{rating.toFixed(1)}</span>
          <span className="text-xs text-slate-400">({reviewCount})</span>
        </div>
        {/* Price row */}
        <div className="flex items-baseline gap-1.5 flex-wrap">
          <span className="text-base font-bold text-slate-900">
            {formatINR(price)}
          </span>
          {originalPrice && originalPrice > price && (
            <>
              <span className="text-xs text-slate-400 line-through">
                {formatINR(originalPrice)}
              </span>
              <span className="text-xs font-semibold text-emerald-600">
                {discount}% OFF
              </span>
            </>
          )}
        </div>
        {/* Store badge */}
        <div className="flex items-center gap-1.5">
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-full ${storeConf.bg} ${storeConf.text}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${storeConf.dot}`} />
            {storeConf.label}
          </span>
          {/* Free Delivery badge */}
          {freeDelivery && (
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
              {/* Truck icon */}
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                />
              </svg>
              Free Delivery
            </span>
          )}
        </div>
        {/* CTA button */}
        <button
          className="mt-auto w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white text-xs font-semibold rounded-xl transition-all duration-200 shadow-sm shadow-emerald-500/25"
          aria-label={`View and compare ${name}`}
          id={`view-compare-${id}`}
        >
          {/* Bar chart icon */}
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          View &amp; Compare
        </button>
      </div>
    </article>
  );
}