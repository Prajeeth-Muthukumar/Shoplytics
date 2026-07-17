// FILE: src/app/components/homeComponents/ProductCard.jsx
// WHAT IT DOES: Renders one product card. Receives product data as a prop.

"use client";

import { Heart, ShoppingBag, RefreshCw } from "lucide-react";
import { useState } from "react";

// Helper: converts 164900 → "₹1,64,900"
function formatPrice(amount) {
  return "₹" + amount.toLocaleString("en-IN");
}

export default function ProductCard({ product }) {
  // State for wishlist heart toggle
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col overflow-hidden group relative">

      {/* ── Rank badge ── */}
      <div className="absolute top-3 left-3 z-10 w-6 h-6 rounded-full bg-[#0F172A] flex items-center justify-center">
        <span className="text-[10px] font-bold text-white">
          {product.rank}
        </span>
      </div>

      {/* ── Wishlist button ── */}
      <button
        onClick={() => setWishlisted(!wishlisted)}
        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-red-50 transition-colors"
        aria-label="Add to wishlist"
      >
        <Heart
          size={15}
          className={wishlisted ? "fill-red-500 text-red-500" : "text-slate-300"}
        />
      </button>

      {/* ── Discount badge ── */}
      {product.discount > 0 && (
        <div className="absolute top-3 left-10 z-10">
          <span className="text-[9px] font-bold bg-[#10B981] text-white px-1.5 py-0.5 rounded-full">
            -{product.discount}%
          </span>
        </div>
      )}

      {/* ── Product image ── */}
      <div className="w-full h-36 bg-[#F8FAFC] flex items-center justify-center overflow-hidden px-4 pt-6 pb-2">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            // If image not found, show emoji fallback
            e.target.style.display = "none";
            e.target.parentNode.insertAdjacentHTML(
              "beforeend",
              `<span class="text-5xl select-none">${product.emoji}</span>`
            );
          }}
        />
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 gap-2 p-3">

        {/* Category chip */}
        <span className="text-[9px] font-semibold text-[#64748B] uppercase tracking-widest">
          {product.category}
        </span>

        {/* Product name */}
        <p className="text-sm font-bold text-[#0F172A] leading-snug line-clamp-2">
          {product.name}
        </p>

        {/* Price row */}
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-base font-extrabold text-[#0F172A]">
            {formatPrice(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-xs text-slate-400 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>

        {/* Savings */}
        {product.oldPrice && (
          <p className="text-xs font-semibold text-[#10B981]">
            Save {formatPrice(product.oldPrice - product.price)}
          </p>
        )}

        {/* Best price store */}
        <div className="flex items-center gap-1 mt-auto">
          <ShoppingBag size={11} className="text-[#64748B] flex-shrink-0" />
          <span className="text-[11px] text-[#64748B]">
            Best on{" "}
            <span className="font-semibold text-[#0F172A]">{product.store}</span>
          </span>
        </div>

        {/* Updated label */}
        <div className="flex items-center gap-1">
          <RefreshCw size={10} className="text-[#10B981]" />
          <span className="text-[10px] text-[#64748B]">Updated today</span>
        </div>

        {/* Compare button */}
        <button className="mt-1 w-full bg-[#0F172A] hover:bg-[#10B981] text-white text-xs font-semibold py-2.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-1.5">
          Compare Prices
        </button>
      </div>
    </div>
  );
}