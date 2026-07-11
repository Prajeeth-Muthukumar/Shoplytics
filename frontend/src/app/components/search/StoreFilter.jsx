"use client";
import { useState } from "react";
import FilterSection from "./FilterSection";
/**
 * StoreFilter – checkbox list of supported stores with brand-color logos.
 *
 * Props:
 *   onChange {function} – called with selected store-id array
 */
const STORES = [
  {
    id: "amazon",
    label: "Amazon",
    count: 124,
    // Inline SVG placeholder for the Amazon "a" logo mark
    logo: (
      <span className="flex items-center justify-center w-5 h-5 rounded-sm bg-[#FF9900] text-white font-bold text-[10px] leading-none">
        a
      </span>
    ),
  },
  {
    id: "flipkart",
    label: "Flipkart",
    count: 98,
    logo: (
      <span className="flex items-center justify-center w-5 h-5 rounded-sm bg-[#2874F0] text-white font-bold text-[10px] leading-none">
        F
      </span>
    ),
  },
  {
    id: "myntra",
    label: "Myntra",
    count: 41,
    logo: (
      <span className="flex items-center justify-center w-5 h-5 rounded-sm bg-[#FF3F6C] text-white font-bold text-[10px] leading-none">
        M
      </span>
    ),
  },
  {
    id: "ajio",
    label: "Ajio",
    count: 17,
    logo: (
      <span className="flex items-center justify-center w-5 h-5 rounded-sm bg-[#EC1C24] text-white font-bold text-[10px] leading-none">
        A
      </span>
    ),
  },
];
export default function StoreFilter({ onChange }) {
  const [selected, setSelected] = useState([]);
  const toggle = (id) => {
    const next = selected.includes(id)
      ? selected.filter((s) => s !== id)
      : [...selected, id];
    setSelected(next);
    onChange?.(next);
  };
  return (
    <FilterSection title="Store">
      <ul className="space-y-2.5">
        {STORES.map(({ id, label, count, logo }) => (
          <li key={id}>
            <label
              className="flex items-center gap-2.5 cursor-pointer group"
              htmlFor={`store-${id}`}
            >
              {/* Custom checkbox */}
              <div className="relative flex-shrink-0">
                <input
                  id={`store-${id}`}
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
              {/* Store logo badge */}
              {logo}
              {/* Store name */}
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