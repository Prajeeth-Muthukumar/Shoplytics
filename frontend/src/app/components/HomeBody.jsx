// FILE: HomeBody.jsx
// USAGE: Import and place <HomeBody /> below your <Navbar /> in your page file.

"use client";

import {
  ArrowRight,
  Star,
  Plus,
  Zap,
  ShieldCheck,
  Bell,
  Store,
  Globe,
  ChevronRight,
} from "lucide-react";

// ─── SAMPLE DATA ─────────────────────────────────────────────────────────────

const comparedProducts = [
  { id: 1, name: "iPhone 15 Pro Max", price: "₹1,29,900", emoji: "📱" },
  { id: 2, name: "Samsung Galaxy S24 Ultra", price: "₹1,24,999", emoji: "📲" },
  { id: 3, name: "Sony WH-1000XM5", price: "₹26,990", emoji: "🎧" },
];

const recommendedProducts = [
  { id: 1, name: "MacBook Air M3", price: "₹1,14,900", badge: "New", emoji: "💻", rating: 4.8 },
  { id: 2, name: "OnePlus 12", price: "₹64,999", badge: "Price Dropped", emoji: "📱", rating: 4.6 },
  { id: 3, name: "boAt Rockerz 558", price: "₹1,499", badge: null, emoji: "🎧", rating: 4.3 },
  { id: 4, name: "Dell XPS 15", price: "₹1,59,990", badge: "New", emoji: "💻", rating: 4.7 },
  { id: 5, name: "Samsung Galaxy Tab S9", price: "₹72,999", badge: "Price Dropped", emoji: "📟", rating: 4.5 },
];

const priceDrops = [
  { id: 1, name: "Apple AirPods Pro 2", oldPrice: "₹26,900", newPrice: "₹19,900", saved: "₹7,000", discount: "26%", emoji: "🎧" },
  { id: 2, name: "HP Envy x360 13", oldPrice: "₹89,999", newPrice: "₹72,990", saved: "₹17,009", discount: "19%", emoji: "💻" },
  { id: 3, name: "Nothing Phone 2a", oldPrice: "₹19,999", newPrice: "₹15,499", saved: "₹4,500", discount: "23%", emoji: "📱" },
  { id: 4, name: 'Sony 65" 4K OLED TV', oldPrice: "₹1,99,990", newPrice: "₹1,54,900", saved: "₹45,090", discount: "23%", emoji: "📺" },
];

const collections = [
  { id: 1, title: "Student Essentials", count: "48 Products", emoji: "🎓", bg: "bg-blue-50", border: "border-blue-100", text: "text-blue-700" },
  { id: 2, title: "Flagship Phones", count: "32 Products", emoji: "📱", bg: "bg-purple-50", border: "border-purple-100", text: "text-purple-700" },
  { id: 3, title: "Laptops Under ₹70K", count: "21 Products", emoji: "💻", bg: "bg-emerald-50", border: "border-emerald-100", text: "text-emerald-700" },
  { id: 4, title: "Gaming Zone", count: "56 Products", emoji: "🎮", bg: "bg-red-50", border: "border-red-100", text: "text-red-700" },
  { id: 5, title: "Home Office Setup", count: "38 Products", emoji: "🖥️", bg: "bg-amber-50", border: "border-amber-100", text: "text-amber-700" },
  { id: 6, title: "Travel Tech", count: "27 Products", emoji: "✈️", bg: "bg-sky-50", border: "border-sky-100", text: "text-sky-700" },
];

const comparisons = [
  { id: 1, product1: "iPhone 16", product2: "Galaxy S24", emoji1: "📱", emoji2: "📲" },
  { id: 2, product1: "MacBook Air M3", product2: "HP Envy x360", emoji1: "💻", emoji2: "💻" },
  { id: 3, product1: "Sony WH-1000XM5", product2: "AirPods Max", emoji1: "🎧", emoji2: "🎧" },
  { id: 4, product1: "Galaxy Watch 6", product2: "boAt Smartwatch", emoji1: "⌚", emoji2: "⌚" },
];

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

const newArrivals = [
  { id: 1, name: "iPhone 16 Pro", price: "From ₹1,19,900", emoji: "📱" },
  { id: 2, name: "Galaxy Z Fold 6", price: "From ₹1,64,999", emoji: "📂" },
  { id: 3, name: "ASUS ROG Phone 8", price: "From ₹74,999", emoji: "🎮" },
  { id: 4, name: "iPad Air M2", price: "From ₹59,900", emoji: "📟" },
  { id: 5, name: "Nothing Ear 2", price: "From ₹8,999", emoji: "🎧" },
  { id: 6, name: "Pixel 9 Pro", price: "From ₹1,06,999", emoji: "📱" },
];

const benefits = [
  { icon: <Store size={18} />, text: "Compare across 25+ stores" },
  { icon: <Zap size={18} />, text: "Real-time price tracking" },
  { icon: <Bell size={18} />, text: "Price-drop alerts" },
  { icon: <ShieldCheck size={18} />, text: "Trusted retailers only" },
  { icon: <Globe size={18} />, text: "Secure browsing" },
];

// ─── SECTION HEADER ───────────────────────────────────────────────────────────
// ✅ Plain JSX — no TypeScript types here

function SectionHeader({ title, subtitle, showAll }) {
  return (
    <div className="flex items-end justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold text-[#0F172A] tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-[#64748B] mt-1">{subtitle}</p>
        )}
      </div>
      {showAll && (
        <button className="flex items-center gap-1 text-sm font-medium text-[#10B981] hover:text-[#059669] transition-colors group">
          View all
          <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      )}
    </div>
  );
}

// ─── SECTION 1: CONTINUE COMPARING ───────────────────────────────────────────

function ContinueComparing() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
      <SectionHeader
        title="Continue Comparing"
        subtitle="Pick up where you left off"
        showAll={false}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {comparedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center text-center gap-3"
          >
            <div className="w-20 h-20 rounded-xl bg-slate-100 flex items-center justify-center text-4xl">
              {product.emoji}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-[#0F172A] leading-snug">
                {product.name}
              </p>
              <p className="text-xs text-[#64748B] mt-0.5">From {product.price}</p>
            </div>
            <button className="w-full text-xs font-medium text-[#10B981] border border-[#10B981] rounded-lg px-3 py-1.5 hover:bg-[#10B981] hover:text-white transition-all duration-150">
              Continue Comparison
            </button>
          </div>
        ))}

        {/* Start New Card */}
        <div className="border-2 border-dashed border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-3 hover:border-[#10B981] hover:bg-emerald-50 transition-all duration-200 cursor-pointer group min-h-[180px]">
          <div className="w-12 h-12 rounded-full bg-slate-100 group-hover:bg-emerald-100 flex items-center justify-center transition-colors">
            <Plus size={22} className="text-slate-400 group-hover:text-[#10B981]" />
          </div>
          <p className="text-sm font-semibold text-slate-400 group-hover:text-[#0F172A] transition-colors">
            Start a New Comparison
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 2: RECOMMENDED FOR YOU ──────────────────────────────────────────

function RecommendedForYou() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
      <SectionHeader
        title="Recommended For You"
        subtitle="Based on your recent comparisons"
        showAll={true}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {recommendedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer relative flex flex-col gap-3"
          >
            {product.badge && (
              <span
                className={`absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full z-10 ${
                  product.badge === "New"
                    ? "bg-[#10B981] text-white"
                    : "bg-amber-400 text-white"
                }`}
              >
                {product.badge}
              </span>
            )}
            <div className="w-full aspect-square rounded-xl bg-[#F8FAFC] flex items-center justify-center text-5xl">
              {product.emoji}
            </div>
            <div>
              <p className="text-sm font-semibold text-[#0F172A] leading-snug">
                {product.name}
              </p>
              <div className="flex items-center gap-1 mt-1">
                <Star size={11} className="fill-[#FBBF24] text-[#FBBF24]" />
                <span className="text-xs text-[#64748B]">{product.rating}</span>
              </div>
              <p className="text-sm font-bold text-[#0F172A] mt-1">
                From {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── SECTION 3: PRICE DROPS TODAY ────────────────────────────────────────────

function PriceDropsToday() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
      <SectionHeader
        title="Price Drops Today"
        subtitle="Prices updated in real-time across all stores"
        showAll={true}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {priceDrops.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col"
          >
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 px-4 py-1.5 flex justify-between items-center">
              <span className="text-xs font-bold text-white tracking-wide">
                💸 PRICE DROP
              </span>
              <span className="text-xs font-extrabold text-white bg-white/20 px-2 py-0.5 rounded-full">
                -{item.discount}
              </span>
            </div>
            <div className="p-4 flex flex-col flex-1 gap-3">
              <div className="w-full h-28 rounded-xl bg-[#F8FAFC] flex items-center justify-center text-5xl">
                {item.emoji}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#0F172A] leading-snug">
                  {item.name}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg font-bold text-[#0F172A]">
                    {item.newPrice}
                  </span>
                  <span className="text-sm text-slate-400 line-through">
                    {item.oldPrice}
                  </span>
                </div>
                <p className="text-xs font-semibold text-[#10B981] mt-1">
                  You save {item.saved}
                </p>
              </div>
              <button className="w-full bg-[#0F172A] hover:bg-[#1e293b] text-white text-xs font-semibold py-2.5 rounded-xl transition-colors duration-150 flex items-center justify-center gap-1.5">
                Compare Prices
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── SECTION 4: FEATURED COLLECTIONS ─────────────────────────────────────────

function FeaturedCollections() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
      <SectionHeader
        title="Featured Collections"
        subtitle="Curated picks for every need"
        showAll={false}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {collections.map((col) => (
          <div
            key={col.id}
            className={`${col.bg} border ${col.border} rounded-2xl p-4 cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center text-center gap-2`}
          >
            <span className="text-3xl">{col.emoji}</span>
            <p className={`text-sm font-bold ${col.text} leading-snug`}>
              {col.title}
            </p>
            <p className="text-xs text-slate-500">{col.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── SECTION 5: MOST COMPARED THIS WEEK ──────────────────────────────────────

function MostComparedThisWeek() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
      <SectionHeader
        title="Most Compared This Week"
        subtitle="See what others are deciding between"
        showAll={true}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {comparisons.map((comp) => (
          <div
            key={comp.id}
            className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col items-center text-center flex-1 gap-1">
                <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] flex items-center justify-center text-2xl">
                  {comp.emoji1}
                </div>
                <p className="text-xs font-semibold text-[#0F172A] leading-tight">
                  {comp.product1}
                </p>
              </div>
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0F172A] flex items-center justify-center">
                <span className="text-[10px] font-extrabold text-white tracking-widest">
                  VS
                </span>
              </div>
              <div className="flex flex-col items-center text-center flex-1 gap-1">
                <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] flex items-center justify-center text-2xl">
                  {comp.emoji2}
                </div>
                <p className="text-xs font-semibold text-[#0F172A] leading-tight">
                  {comp.product2}
                </p>
              </div>
            </div>
            <button className="w-full text-xs font-semibold text-[#10B981] border border-[#10B981] rounded-xl py-2 hover:bg-[#10B981] hover:text-white transition-all duration-150 flex items-center justify-center gap-1">
              Compare Now
              <ArrowRight size={12} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── SECTION 6: POPULAR BRANDS ───────────────────────────────────────────────

function PopularBrands() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
      <SectionHeader
        title="Popular Brands"
        subtitle="Browse by brand you trust"
        showAll={false}
      />
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="bg-white border border-slate-200 rounded-2xl py-4 px-2 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#10B981] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <span className="text-2xl">{brand.emoji}</span>
            <p className="text-xs font-semibold text-[#64748B] group-hover:text-[#0F172A] transition-colors text-center">
              {brand.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── SECTION 7: NEW ARRIVALS ──────────────────────────────────────────────────

function NewArrivals() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
      <SectionHeader
        title="New Arrivals"
        subtitle="Just landed — compare before you buy"
        showAll={true}
      />
      <div className="flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 lg:grid-cols-6 sm:overflow-visible">
        {newArrivals.map((item) => (
          <div
            key={item.id}
            className="min-w-[140px] sm:min-w-0 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col items-center text-center gap-3 cursor-pointer relative flex-shrink-0 sm:flex-shrink"
          >
            <span className="absolute top-2.5 right-2.5 text-[9px] font-extrabold bg-[#10B981] text-white px-2 py-0.5 rounded-full tracking-wide">
              NEW
            </span>
            <div className="w-full aspect-square rounded-xl bg-[#F8FAFC] flex items-center justify-center text-4xl">
              {item.emoji}
            </div>
            <div>
              <p className="text-xs font-semibold text-[#0F172A] leading-snug">
                {item.name}
              </p>
              <p className="text-xs text-[#64748B] mt-0.5">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── SECTION 8: BENEFITS STRIP ───────────────────────────────────────────────

function BenefitsStrip() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
      <div className="bg-[#0F172A] rounded-2xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-6 flex-wrap">
        {benefits.map((b, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors"
          >
            <span className="text-[#10B981] flex-shrink-0">{b.icon}</span>
            <span className="text-sm font-medium">{b.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────

export default function HomeBody() {
  return (
    <main className="bg-[#F8FAFC] min-h-screen">
      <ContinueComparing />
      <RecommendedForYou />
      <PriceDropsToday />
      <FeaturedCollections />
      <MostComparedThisWeek />
      <PopularBrands />
      <NewArrivals />
      <BenefitsStrip />
    </main>
  );
}