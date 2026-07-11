"use client";
import { useState } from "react";
/**
 * SortDropdown – a custom-styled dropdown for product sort order.
 *
 * Props:
 *   value    {string}   – currently selected sort key
 *   onChange {function} – called with the new sort key string
 */
const SORT_OPTIONS = [
  { value: "price_asc", label: "Lowest Price" },
  { value: "price_desc", label: "Highest Price" },
  { value: "discount_desc", label: "Highest Discount" },
  { value: "newest", label: "Newest" },
];
export default function SortDropdown({ value = "price_asc", onChange }) {
  const [open, setOpen] = useState(false);
  const selected = SORT_OPTIONS.find((o) => o.value === value) ?? SORT_OPTIONS[0];
  const choose = (val) => {
    setOpen(false);
    onChange?.(val);
  };
  return (
    <div className="relative inline-block text-left" id="sort-dropdown">
      <div className="flex items-center gap-2">
        <span className="text-sm text-slate-500 whitespace-nowrap">Sort by:</span>
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 pl-3 pr-2.5 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-800 hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 shadow-sm transition-all duration-200 whitespace-nowrap"
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          {selected.label}
          <svg
            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      {/* Dropdown panel */}
      {open && (
        <>
          {/* Backdrop to close on outside click */}
          <div
            className="fixed inset-0 z-10"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          <ul
            role="listbox"
            className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg z-20 py-1.5 overflow-hidden"
            aria-label="Sort options"
          >
            {SORT_OPTIONS.map((opt) => (
              <li
                key={opt.value}
                role="option"
                aria-selected={opt.value === value}
                onClick={() => choose(opt.value)}
                className={`flex items-center justify-between px-4 py-2.5 text-sm cursor-pointer transition-colors duration-150 ${
                  opt.value === value
                    ? "bg-emerald-50 text-emerald-700 font-semibold"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {opt.label}
                {opt.value === value && (
                  <svg
                    className="w-4 h-4 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
