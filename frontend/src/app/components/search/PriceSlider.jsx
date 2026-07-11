"use client";
import { useState, useCallback } from "react";
import FilterSection from "./FilterSection";
/**
 * PriceSlider – dual-handle range slider for price filtering.
 *
 * Props:
 *   min        {number}   – absolute minimum value (default 0)
 *   max        {number}   – absolute maximum value (default 200000)
 *   onChange   {function} – called with ({ min, max }) whenever handles move
 */
export default function PriceSlider({ min = 0, max = 200000, onChange }) {
  const [values, setValues] = useState({ low: min, high: max });
  const formatPrice = (v) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(v);
  const handleLow = useCallback(
    (e) => {
      const low = Math.min(Number(e.target.value), values.high - 1000);
      const next = { ...values, low };
      setValues(next);
      onChange?.(next);
    },
    [values, onChange]
  );
  const handleHigh = useCallback(
    (e) => {
      const high = Math.max(Number(e.target.value), values.low + 1000);
      const next = { ...values, high };
      setValues(next);
      onChange?.(next);
    },
    [values, onChange]
  );
  // Percentage positions for the filled track
  const lowPct = ((values.low - min) / (max - min)) * 100;
  const highPct = ((values.high - min) / (max - min)) * 100;
  return (
    <FilterSection title="Price Range">
      {/* Selected range labels */}
      <div className="flex justify-between text-xs font-semibold mb-3">
        <span className="text-emerald-600">{formatPrice(values.low)}</span>
        <span className="text-emerald-600">{formatPrice(values.high)}</span>
      </div>
      {/* Slider track */}
      <div className="relative h-5 flex items-center">
        {/* Background track */}
        <div className="absolute w-full h-1.5 bg-slate-200 rounded-full" />
        {/* Active range highlight */}
        <div
          className="absolute h-1.5 bg-emerald-500 rounded-full"
          style={{ left: `${lowPct}%`, right: `${100 - highPct}%` }}
        />
        {/* Low handle */}
        <input
          type="range"
          min={min}
          max={max}
          step={1000}
          value={values.low}
          onChange={handleLow}
          className="price-slider-thumb absolute w-full appearance-none bg-transparent cursor-pointer"
          aria-label="Minimum price"
        />
        {/* High handle */}
        <input
          type="range"
          min={min}
          max={max}
          step={1000}
          value={values.high}
          onChange={handleHigh}
          className="price-slider-thumb absolute w-full appearance-none bg-transparent cursor-pointer"
          aria-label="Maximum price"
        />
      </div>
      {/* Min / Max labels */}
      <div className="flex justify-between text-[11px] text-slate-400 mt-2">
        <span>{formatPrice(min)}</span>
        <span>{formatPrice(max)}</span>
      </div>
      {/* Tailwind v4-compatible thumb styles injected via <style> */}
      <style>{`
        .price-slider-thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #10b981;
          border: 2px solid #ffffff;
          box-shadow: 0 1px 4px rgba(16,185,129,0.5);
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .price-slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 2px 8px rgba(16,185,129,0.6);
        }
        .price-slider-thumb::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #10b981;
          border: 2px solid #ffffff;
          box-shadow: 0 1px 4px rgba(16,185,129,0.5);
          cursor: pointer;
        }
      `}</style>
    </FilterSection>
  );
}
