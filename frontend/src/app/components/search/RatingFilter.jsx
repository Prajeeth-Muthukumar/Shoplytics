"use client";
import { useState } from "react";
import FilterSection from "./FilterSection";
/**
 * RatingFilter – checkboxes for customer star rating thresholds.
 *
 * Props:
 *   onChange {function} – called with selected rating keys array
 */
const RATING_OPTIONS = [
  { id: "r4", label: "4★ & above", count: 120 },
  { id: "r3", label: "3★ & above", count: 248 },
];
// Inline star icon
function StarIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.95 2.878c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.064 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.285-3.957z" />
    </svg>
  );
}
export default function RatingFilter({ onChange }) {
  const [selected, setSelected] = useState([]);
  const toggle = (id) => {
    const next = selected.includes(id)
      ? selected.filter((s) => s !== id)
      : [...selected, id];
    setSelected(next);
    onChange?.(next);
  };
  return (
    <FilterSection title="Customer Rating">
      <ul className="space-y-2.5">
        {RATING_OPTIONS.map(({ id, label, count }) => (
          <li key={id}>
            <label
              className="flex items-center gap-2.5 cursor-pointer group"
              htmlFor={id}
            >
              {/* Custom checkbox */}
              <div className="relative flex-shrink-0">
                <input
                  id={id}
                  type="checkbox"
                  checked={selected.includes(id)}
                  onChange={() => toggle(id)}
                  className="sr-only peer"
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
              {/* Label with stars */}
              <div className="flex items-center gap-1.5 flex-1">
                <div className="flex items-center gap-0.5">
                  {[...Array(label.startsWith("4") ? 4 : 3)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">
                  {label}
                </span>
              </div>
              <span className="text-xs text-slate-400">({count})</span>
            </label>
          </li>
        ))}
      </ul>
    </FilterSection>
  );
}
