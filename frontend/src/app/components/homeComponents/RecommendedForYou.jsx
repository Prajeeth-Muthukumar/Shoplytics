import { Star } from "lucide-react";
import SectionHeader from "./SectionHeader";

const recommendedProducts = [
  {
    id: 1,
    name: "MacBook Air M3",
    price: "₹1,14,900",
    badge: "New",
    emoji: "💻",
    rating: 4.8,
  },
  {
    id: 2,
    name: "OnePlus 12",
    price: "₹64,999",
    badge: "Price Dropped",
    emoji: "📱",
    rating: 4.6,
  },
  {
    id: 3,
    name: "boAt Rockerz 558",
    price: "₹1,499",
    badge: null,
    emoji: "🎧",
    rating: 4.3,
  },
  {
    id: 4,
    name: "Dell XPS 15",
    price: "₹1,59,990",
    badge: "New",
    emoji: "💻",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Samsung Galaxy Tab S9",
    price: "₹72,999",
    badge: "Price Dropped",
    emoji: "📟",
    rating: 4.5,
  },
];

export default function RecommendedForYou() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeader
        title="Recommended For You"
        subtitle="Based on your recent comparisons"
        showAll
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {recommendedProducts.map((product) => (
          <article
            key={product.id}
            className="relative flex cursor-pointer flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            {product.badge && (
              <span
                className={`absolute left-3 top-3 z-10 rounded-full px-2 py-0.5 text-[10px] font-bold text-white ${
                  product.badge === "New"
                    ? "bg-[#10B981]"
                    : "bg-amber-400"
                }`}
              >
                {product.badge}
              </span>
            )}

            <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-[#F8FAFC] text-5xl">
              {product.emoji}
            </div>

            <div>
              <p className="text-sm font-semibold leading-snug text-[#0F172A]">
                {product.name}
              </p>

              <div className="mt-1 flex items-center gap-1">
                <Star
                  size={11}
                  className="fill-[#FBBF24] text-[#FBBF24]"
                />

                <span className="text-xs text-[#64748B]">
                  {product.rating}
                </span>
              </div>

              <p className="mt-1 text-sm font-bold text-[#0F172A]">
                From {product.price}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}