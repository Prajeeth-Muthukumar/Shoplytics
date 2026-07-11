import SectionHeader from "./SectionHeader";

const brands = [
  { name: "Apple", emoji: "🍎" },
  { name: "Samsung", emoji: "📱" },
  { name: "Sony", emoji: "🎧" },
  { name: "HP", emoji: "💻" },
  { name: "Dell", emoji: "🖥️" },
  { name: "OnePlus", emoji: "📲" },
  { name: "boAt", emoji: "🎵" },
  { name: "Nothing", emoji: "⚪" },
];

export default function PopularBrands() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeader
        title="Popular Brands"
        subtitle="Browse by brand you trust"
      />

      <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
        {brands.map((brand) => (
          <article
            key={brand.name}
            className="group flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-2 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#10B981] hover:shadow-md"
          >
            <span className="text-2xl">{brand.emoji}</span>

            <p className="text-center text-xs font-semibold text-[#64748B] transition-colors group-hover:text-[#0F172A]">
              {brand.name}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}