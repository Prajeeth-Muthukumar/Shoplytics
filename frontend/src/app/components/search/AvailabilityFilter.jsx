"use client";
import { useState } from "react";
import FilterSection from "./FilterSection";
/**
 * AvailabilityFilter – single "In Stock" checkbox filter.
 *
 * Props:
 *   onChange {function} – called with boolean (true = in-stock selected)
 */
export default function AvailabilityFilter({ onChange }) {
  const [checked, setChecked] = useState(false);
  const toggle = () => {
    const next = !checked;
    setChecked(next);
    onChange?.(next);
  };
  return (
    <FilterSection title="Availability">
      <label
        className="flex items-center gap-2.5 cursor-pointer group"
        htmlFor="availability-instock"
      >
        {/* Custom checkbox */}
        <div className="relative flex-shrink-0">
          <input
            id="availability-instock"
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
        {/* Stock dot indicator */}
        <span className="flex-shrink-0 w-2 h-2 rounded-full bg-emerald-500" />
        <span className="flex-1 text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
          In Stock
        </span>
        <span className="text-xs text-slate-400">(234)</span>
      </label>
    </FilterSection>
  );
}
