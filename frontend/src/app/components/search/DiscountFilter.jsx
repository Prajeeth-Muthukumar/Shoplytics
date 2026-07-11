"use client";
import { useState } from "react";
import FilterSection from "./FilterSection";
/**
 * DiscountFilter – checkboxes for minimum discount thresholds.
 *
 * Props:
 *   onChange {function} – called with selected discount-id array
 */
const DISCOUNTS = [
  { id: "d10", label: "10% or more", count: 158 },
  { id: "d20", label: "20% or more", count: 96 },
  { id: "d40", label: "40% or more", count: 52 },
  { id: "d60", label: "60% or more", count: 18 },
];
export default function DiscountFilter({ onChange }) {
  const [selected, setSelected] = useState([]);
  const toggle = (id) => {
    const next = selected.includes(id)
      ? selected.filter((s) => s !== id)
      : [...selected, id];
    setSelected(next);
    onChange?.(next);
  };
  return (
    <FilterSection title="Discount">
      <ul className="space-y-2.5">
        {DISCOUNTS.map(({ id, label, count }) => (
          <li key={id}>
            <label
              className="flex items-center gap-2.5 cursor-pointer group"
              htmlFor={`disc-${id}`}
            >
              {/* Custom checkbox */}
              <div className="relative flex-shrink-0">
                <input
                  id={`disc-${id}`}
                  type="checkbox"
                  checked={selected.includes(id)}
                  onChange={() => toggle(id)}
                  className="sr-only"
                />
                <div
                  className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                    selected.includes(id)
                      ? "bg-emerald-500 border-emerald-500"
                      : "border-slate-300 group-hover:border-emerald-400"
                  }`}
                >
                  {selected.includes(id) && (
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
              {/* Label */}
              <span className="flex-1 text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                {label}
              </span>
              <span className="text-xs text-slate-400">({count})</span>
            </label>
          </li>
        ))}
      </ul>
    </FilterSection>
  );
}
