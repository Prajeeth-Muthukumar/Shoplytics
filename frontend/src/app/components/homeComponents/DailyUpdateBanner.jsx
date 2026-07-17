// FILE: src/app/components/homeComponents/DailyUpdateBanner.jsx
// WHAT IT DOES: Shows a compact update banner with price comparison preview

import { RefreshCw, TrendingDown, Clock } from "lucide-react";

// Sample store price preview data
const storePrices = [
  { store: "Amazon", price: "₹1,64,900", best: false },
  { store: "Flipkart", price: "₹1,59,999", best: true },
  { store: "Croma", price: "₹1,66,500", best: false },
];

export default function DailyUpdateBanner() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-8 pb-2 max-w-7xl mx-auto">
      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm px-6 py-5 flex flex-col lg:flex-row lg:items-center gap-6 justify-between">

        {/* ── Left: Text content ── */}
        <div className="flex flex-col gap-2">
          {/* Badge */}
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs font-bold text-[#10B981] bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
              <RefreshCw size={11} />
              Updated daily
            </span>
            <span className="flex items-center gap-1 text-xs text-[#64748B]">
              <Clock size={11} />
              8:00 AM today
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-xl sm:text-2xl font-bold text-[#0F172A] leading-snug">
            Top products worth comparing today
          </h1>

          {/* Subtitle */}
          <p className="text-sm text-[#64748B] max-w-md">
            Prices are refreshed every morning across 25+ trusted stores.
            Always see the lowest price, guaranteed.
          </p>
        </div>

        {/* ── Right: Price comparison preview ── */}
        <div className="flex flex-col gap-2 min-w-[220px]">
          <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
            Example — iPhone 17 Pro Max
          </p>
          {storePrices.map((item) => (
            <div
              key={item.store}
              className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-all ${
                item.best
                  ? "bg-emerald-50 border border-emerald-200"
                  : "bg-[#F8FAFC] border border-slate-100"
              }`}
            >
              <span
                className={`font-medium ${
                  item.best ? "text-[#0F172A]" : "text-[#64748B]"
                }`}
              >
                {item.store}
              </span>
              <div className="flex items-center gap-1.5">
                <span
                  className={`font-bold ${
                    item.best ? "text-[#10B981]" : "text-[#0F172A]"
                  }`}
                >
                  {item.price}
                </span>
                {item.best && (
                  <span className="flex items-center gap-0.5 text-[9px] font-bold text-white bg-[#10B981] px-1.5 py-0.5 rounded-full">
                    <TrendingDown size={8} />
                    BEST
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}