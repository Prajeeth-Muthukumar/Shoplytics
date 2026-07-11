import { ChevronRight } from "lucide-react";

export default function SectionHeader({
  title,
  subtitle,
  showAll = false,
}) {
  return (
    <div className="mb-6 flex items-end justify-between">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-[#0F172A]">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-sm text-[#64748B]">{subtitle}</p>
        )}
      </div>

      {showAll && (
        <button
          type="button"
          className="group flex items-center gap-1 text-sm font-medium text-[#10B981] transition-colors hover:text-[#059669]"
        >
          View all

          <ChevronRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </button>
      )}
    </div>
  );
}