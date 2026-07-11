import { ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const priceDrops = [
  {
    id: 1,
    name: "Apple AirPods Pro 2",
    oldPrice: "₹26,900",
    newPrice: "₹19,900",
    saved: "₹7,000",
    discount: "26%",
    emoji: "🎧",
  },
  {
    id: 2,
    name: "HP Envy x360 13",
    oldPrice: "₹89,999",
    newPrice: "₹72,990",
    saved: "₹17,009",
    discount: "19%",
    emoji: "💻",
  },
  {
    id: 3,
    name: "Nothing Phone 2a",
    oldPrice: "₹19,999",
    newPrice: "₹15,499",
    saved: "₹4,500",
    discount: "23%",
    emoji: "📱",
  },
  {
    id: 4,
    name: 'Sony 65" 4K OLED TV',
    oldPrice: "₹1,99,990",
    newPrice: "₹1,54,900",
    saved: "₹45,090",
    discount: "23%",
    emoji: "📺",
  },
];

export default function PriceDropsToday() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeader
        title="Price Drops Today"
        subtitle="Prices updated in real-time across all stores"
        showAll
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {priceDrops.map((item) => (
          <article
            key={item.id}
            className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between bg-gradient-to-r from-emerald-500 to-emerald-400 px-4 py-1.5">
              <span className="text-xs font-bold tracking-wide text-white">
                💸 PRICE DROP
              </span>

              <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-extrabold text-white">
                -{item.discount}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-3 p-4">
              <div className="flex h-28 w-full items-center justify-center rounded-xl bg-[#F8FAFC] text-5xl">
                {item.emoji}
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold leading-snug text-[#0F172A]">
                  {item.name}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="text-lg font-bold text-[#0F172A]">
                    {item.newPrice}
                  </span>

                  <span className="text-sm text-slate-400 line-through">
                    {item.oldPrice}
                  </span>
                </div>

                <p className="mt-1 text-xs font-semibold text-[#10B981]">
                  You save {item.saved}
                </p>
              </div>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#0F172A] py-2.5 text-xs font-semibold text-white transition-colors duration-150 hover:bg-[#1E293B]"
              >
                Compare Prices
                <ArrowRight size={13} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}