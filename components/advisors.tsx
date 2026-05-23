const advisors = [
  {
    init: "N.M",
    name: "Nickolas Montano",
    creds: "CFE · CECFE · CFS · CII · CIP",
    aff: "Principal, Montano & Associates International Investigations",
  },
  {
    init: "M.E",
    name: "Manduul Enkhee",
    creds: "Technology advisor",
    aff: "Software Engineer at Meta",
  },
  {
    init: "N.B",
    name: "Nomuunbilegt Batmunkh",
    creds: "Marketing advisor",
    aff: "Publicis Group",
  },
  {
    init: "M.G",
    name: "Misheel Ganbat",
    creds: "Technology advisor",
    aff: "Technology Consulting Manager at EY",
  },
];

export function Advisors() {
  return (
    <section
      id="advisors"
      className="border-b border-[var(--color-rule)] py-14 md:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-14">
        <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-fg-55)] md:mb-6 md:text-[11px]">
          Advisors
        </div>
        <h2 className="mb-10 max-w-[14ch] text-[clamp(32px,7vw,64px)] font-medium leading-[1.04] tracking-[-0.035em] text-white md:mb-14 md:leading-[1.02]">
          Guided by experience.
        </h2>

        <ul className="grid grid-cols-1 border-t border-[var(--color-rule-strong)] md:grid-cols-2">
          {advisors.map((a, i) => (
            <li
              key={a.name}
              className={`grid grid-cols-[28px_1fr] gap-4 border-b border-[var(--color-rule)] py-5 md:grid-cols-[32px_1fr] md:gap-5 md:py-6 ${
                i % 2 === 0
                  ? "pr-0 md:border-r md:border-[var(--color-rule)] md:pr-8"
                  : "md:pl-8"
              }`}
            >
              <div className="font-mono text-[10px] tracking-[0.06em] text-[var(--color-fg-40)] md:text-[11px]">
                {a.init}
              </div>
              <div>
                <div className="text-[16px] font-medium tracking-[-0.01em] text-white md:text-[18px]">
                  {a.name}
                </div>
                <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.06em] text-[var(--color-fg-55)] md:mt-2 md:text-[10.5px]">
                  {a.creds}
                </div>
                <div className="mt-1.5 text-[13px] leading-[1.55] text-[var(--color-fg-55)] md:mt-2 md:text-[13.5px] md:leading-[1.5]">
                  {a.aff}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
