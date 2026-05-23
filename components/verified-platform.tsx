const subStats = [
  {
    num: "1 / 5",
    body: "US residents speaking a language other than English at home — and rising every year.",
    source: "US Census ACS",
  },
  {
    num: "430",
    body: "Distinct languages spoken across the United States.",
    source: "US Census Bureau",
  },
  {
    num: "9M+",
    body: "New Americans added in the last decade alone.",
    source: "ACS 2013–2024",
  },
];

export function VerifiedPlatform() {
  return (
    <section className="border-b border-[var(--color-rule)] pb-20 md:pb-30">
      <div className="mx-auto max-w-[1200px] px-6 pt-12 md:px-14 md:pt-14">
        <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-fg-55)] md:mb-6 md:text-[11px]">
          The opportunity
        </div>
        <h2 className="mb-10 max-w-[18ch] text-[clamp(32px,7vw,64px)] font-medium leading-[1.04] tracking-[-0.035em] text-white md:mb-14 md:leading-[1.02]">
          A market of tens of millions{" "}
          <span className="text-[var(--color-fg-40)]">largely unserved.</span>
        </h2>

        <div className="grid max-w-[920px] grid-cols-1 gap-x-14 gap-y-5 md:grid-cols-2 md:gap-y-4">
          <p className="text-[16px] leading-[1.6] tracking-[-0.005em] text-[var(--color-fg-70)] md:text-[17px] md:leading-[1.55]">
            Nearly 1 in 5 US residents speaks a language other than English at
            home. For new arrivals, navigating vehicle ownership, licensing,
            insurance, legal, and financial services in a new country is
            overwhelming. No platform addresses the full picture for their
            community.
          </p>
          <p className="text-[16px] leading-[1.6] tracking-[-0.005em] text-[var(--color-fg-70)] md:text-[17px] md:leading-[1.55]">
            We start with the Mongolian-speaking community and expand to every
            community building their future in America — replicating the same
            trusted ecosystem in each language, one country at a time.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 border-t border-[var(--color-rule-strong)] md:mt-20 md:grid-cols-3">
          {subStats.map((s, i) => (
            <div
              key={s.num}
              className={`py-7 md:py-8 ${
                i < 2
                  ? "border-b border-[var(--color-rule)] md:border-b-0 md:border-r md:border-[var(--color-rule)]"
                  : ""
              } ${i === 0 ? "md:pr-6" : i === 1 ? "md:px-6" : "md:pl-6"}`}
            >
              <div className="text-[clamp(48px,12vw,64px)] font-normal leading-none tracking-[-0.04em] text-white tabular-nums">
                {s.num}
              </div>
              <div className="mt-4 text-[14px] leading-[1.5] text-[var(--color-fg-55)]">
                {s.body}
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
