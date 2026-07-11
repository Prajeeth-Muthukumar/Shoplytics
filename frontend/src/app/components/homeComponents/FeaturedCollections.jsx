import SectionHeader from "./SectionHeader";

const collections = [
  {
    id: 1,
    title: "Student Essentials",
    count: "48 Products",
    emoji: "🎓",
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-700",
  },
  {
    id: 2,
    title: "Flagship Phones",
    count: "32 Products",
    emoji: "📱",
    bg: "bg-purple-50",
    border: "border-purple-100",
    text: "text-purple-700",
  },
  {
    id: 3,
    title: "Laptops Under ₹70K",
    count: "21 Products",
    emoji: "💻",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-700",
  },
  {
    id: 4,
    title: "Gaming Zone",
    count: "56 Products",
    emoji: "🎮",
    bg: "bg-red-50",
    border: "border-red-100",
    text: "text-red-700",
  },
  {
    id: 5,
    title: "Home Office Setup",
    count: "38 Products",
    emoji: "🖥️",
    bg: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-700",
  },
  {
    id: 6,
    title: "Travel Tech",
    count: "27 Products",
    emoji: "✈️",
    bg: "bg-sky-50",
    border: "border-sky-100",
    text: "text-sky-700",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionHeader
        title="Featured Collections"
        subtitle="Curated picks for every need"
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {collections.map((collection) => (
          <article
            key={collection.id}
            className={`${collection.bg} ${collection.border} flex cursor-pointer flex-col items-center gap-2 rounded-2xl border p-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md`}
          >
            <span className="text-3xl">{collection.emoji}</span>

            <p
              className={`${collection.text} text-sm font-bold leading-snug`}
            >
              {collection.title}
            </p>

            <p className="text-xs text-slate-500">
              {collection.count}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}