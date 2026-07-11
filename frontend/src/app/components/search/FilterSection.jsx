"use client";
import { useState } from "react";
/**
 * FilterSection – a collapsible accordion wrapper for each filter group.
 * @param {string} title   – e.g. "Price Range"
 * @param {React.ReactNode} children
 * @param {boolean} defaultOpen – whether the section starts expanded
 */
export default function FilterSection({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-slate-100 py-4">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left focus:outline-none group"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors duration-200">
          {title}
        </span>
        {/* Chevron icon */}
        <svg
          className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
