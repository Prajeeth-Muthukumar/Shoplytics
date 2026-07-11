"use client";
import { useState } from "react";
import FilterSection from "./FilterSection";
/**
 * DeliveryFilter – single "Free Delivery" checkbox filter.
 *
 * Props:
 *   onChange {function} – called with boolean (true = free delivery selected)
 */
export default function DeliveryFilter({ onChange }) {
  const [checked, setChecked] = useState(false);
  const toggle = () => {
    const next = !checked;
    setChecked(next);
    onChange?.(next);
  };
  return (
    <FilterSection title="Delivery">
      <label
        className="flex items-center gap-2.5 cursor-pointer group"
        htmlFor="delivery-free"
      >
        {/* Custom checkbox */}
        <div className="relative flex-shrink-0">
          <input
            id="delivery-free"
            type="checkbox"
            checked={checked}
            onChange={toggle}
            className="sr-only"
          />
          <div
            className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all duration-200 ${
              checked
                ? "bg-emerald-500 border-emerald-500"
                : "border-slate-300 group-hover:border-emerald-400"
            }`}
          >
            {checked && (
              <svg
                className="w-2.5 h-2.5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
        </div>
        {/* Truck icon */}
        <svg
          className="w-4 h-4 text-emerald-500 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
          />
        </svg>
        <span className="flex-1 text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
          Free Delivery
        </span>
        <span className="text-xs text-slate-400">(210)</span>
      </label>
    </FilterSection>
  );
}
