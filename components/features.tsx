import { StatCounter } from "@/components/stat-counter";

const stats = [
  {
    value: 68,
    suffix: "M+",
    decimals: 0,
    label: "People in the US speaking a language other than English at home",
    source: "US Census · ACS 2024",
  },
  {
    value: 50.2,
    suffix: "M",
    decimals: 1,
    label: "Foreign-born residents who chose America as their home",
    source: "US Census · ACS 2024",
  },
  {
    value: 29.6,
    suffix: "M",
    decimals: 1,
    label: "Underserved by existing financial & mobility platforms",
    source: "Migration Policy Inst. 2024",
  },
  {
    value: 23.5,
    suffix: "M",
    decimals: 1,
    label: "Navigating America without the right tools to participate",
    source: "Migration Policy Inst. 2024",
  },
];

export function Features() {
  return (
    <section id="market" className="bg-[var(--color-bg-elev)] py-8">
      <div className="mx-auto max-w-[1200px] px-6 md:px-14">
        <div className="pb-6">
          <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--color-fg-55)]">
            Market — addressable today
          </div>
        </div>
        <div className="grid grid-cols-1 border-t border-b border-[var(--color-rule)] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-7 md:py-8 ${
                i > 0
                  ? "border-t border-[var(--color-rule)] sm:border-t-0"
                  : ""
              } ${
                i > 0 ? "lg:border-l lg:border-[var(--color-rule)] lg:pl-6" : ""
              } ${
                i % 2 === 1
                  ? "sm:border-l sm:border-[var(--color-rule)] sm:pl-6"
                  : ""
              } ${i >= 2 ? "sm:border-t sm:border-[var(--color-rule)] lg:border-t-0" : ""}`}
            >
              <div className="mb-3 font-sans text-[clamp(40px,11vw,56px)] font-normal leading-none tracking-[-0.04em] text-white tabular-nums md:mb-4">
                <StatCounter
                  value={s.value}
                  suffix={s.suffix}
                  decimals={s.decimals}
                />
              </div>
              <div className="max-w-[26ch] text-[13px] leading-[1.45] text-[var(--color-fg-55)]">
                {s.label}
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.04em] text-[var(--color-fg-25)]">
                {s.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
