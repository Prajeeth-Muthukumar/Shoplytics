import {
  Bell,
  Globe,
  ShieldCheck,
  Store,
  Zap,
} from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: Store,
    text: "Compare across 25+ stores",
  },
  {
    id: 2,
    icon: Zap,
    text: "Real-time price tracking",
  },
  {
    id: 3,
    icon: Bell,
    text: "Price-drop alerts",
  },
  {
    id: 4,
    icon: ShieldCheck,
    text: "Trusted retailers only",
  },
  {
    id: 5,
    icon: Globe,
    text: "Secure browsing",
  },
];

export default function BenefitsStrip() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col flex-wrap items-center justify-between gap-6 rounded-2xl bg-[#0F172A] px-6 py-6 sm:flex-row">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div
              key={benefit.id}
              className="flex items-center gap-2.5 text-white/80 transition-colors hover:text-white"
            >
              <Icon
                size={18}
                className="flex-shrink-0 text-[#10B981]"
              />

              <span className="text-sm font-medium">
                {benefit.text}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}