import { Plus } from "lucide-react";
import SectionHeader from "./SectionHeader";

const comparedProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: "₹1,29,900",
    emoji: "📱",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: "₹1,24,999",
    emoji: "📲",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    price: "₹26,990",
    emoji: "🎧",
  },
];

export default function ContinueComparing() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeader
        title="Continue Comparing"
        subtitle="Pick up where you left off"
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {comparedProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-slate-100 text-4xl">
              {product.emoji}
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold leading-snug text-[#0F172A]">
                {product.name}
              </p>

              <p className="mt-0.5 text-xs text-[#64748B]">
                From {product.price}
              </p>
            </div>

            <button
              type="button"
              className="w-full rounded-lg border border-[#10B981] px-3 py-1.5 text-xs font-medium text-[#10B981] transition-all duration-150 hover:bg-[#10B981] hover:text-white"
            >
              Continue Comparison
            </button>
          </div>
        ))}

        <button
          type="button"
          className="group flex min-h-[180px] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-slate-200 p-4 text-center transition-all duration-200 hover:border-[#10B981] hover:bg-emerald-50"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 transition-colors group-hover:bg-emerald-100">
            <Plus
              size={22}
              className="text-slate-400 group-hover:text-[#10B981]"
            />
          </span>

          <span className="text-sm font-semibold text-slate-400 transition-colors group-hover:text-[#0F172A]">
            Start a New Comparison
          </span>
        </button>
      </div>
    </section>
  );
}