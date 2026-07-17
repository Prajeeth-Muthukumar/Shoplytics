// FILE: src/app/components/homeComponents/BenefitsStrip.jsx
// WHAT IT DOES: Compact bottom strip showing key benefits

import { Store, RefreshCw, Bell, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: <Store size={20} />,
    title: "25+ Stores",
    subtitle: "All trusted retailers",
  },
  {
    icon: <RefreshCw size={20} />,
    title: "Daily Refresh",
    subtitle: "Prices updated at 8 AM",
  },
  {
    icon: <Bell size={20} />,
    title: "Price Alerts",
    subtitle: "Get notified on drops",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Safe & Trusted",
    subtitle: "Verified stores only",
  },
];

export default function BenefitsStrip() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-7xl mx-auto">
      <div className="bg-[#0F172A] rounded-2xl px-6 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-3 group">
              {/* Icon circle */}
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#10B981] flex-shrink-0 group-hover:bg-white/20 transition-colors">
                {b.icon}
              </div>
              {/* Text */}
              <div>
                <p className="text-sm font-bold text-white">{b.title}</p>
                <p className="text-xs text-white/50 mt-0.5">{b.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}