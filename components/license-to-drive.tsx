const steps = [
  {
    n: "01",
    tag: "Step First — Essential mobility",
    name: ["Get on the road,", "start earning."],
    desc: "Everything a new resident needs to start driving in any of the 50 states. Finance your first vehicle using home-country assets — no US credit score required.",
    services: [
      "Driver’s license guidance",
      "Vehicle purchase, lease & sale",
      "Auto insurance",
      "Legal counsel (transportation)",
      "Tax & accounting services",
      "Auto repair network",
    ],
  },
  {
    n: "02",
    tag: "Step Black — Limousine business",
    name: ["Upgrade income.", "Run a limo."],
    desc: "Turnkey infrastructure for residents ready to upgrade into a professional limousine operation, backed by cross-border commercial financing.",
    services: [
      "Company formation & permits",
      "Operating authority & licensing",
      "Commercial vehicle financing",
      "Commercial insurance",
      "Tax & compliance services",
      "Service standards training",
    ],
  },
  {
    n: "03",
    tag: "Step Truck — Long-haul independence",
    name: ["Own a fleet.", "Build wealth."],
    desc: "Full commercial trucking infrastructure — CDL through dispatch — with cross-border business loans to launch and scale operations in the US.",
    services: [
      "CDL licensing support",
      "Trucking company formation",
      "Commercial fleet financing",
      "DOT & compliance management",
      "Cross-border lending access",
      "Dispatch & load-board integration",
    ],
  },
];

export function LicenseToDrive() {
  return (
    <section
      id="ecosystem"
      className="border-b border-[var(--color-rule)] py-16 md:py-30"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-14">
        <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-fg-55)] md:mb-6 md:text-[11px]">
          The ecosystem
        </div>
        <h2 className="mb-5 max-w-[16ch] text-[clamp(32px,7vw,64px)] font-medium leading-[1.04] tracking-[-0.035em] text-white md:mb-6 md:leading-[1.02]">
          From a first license
          <br />
          to a fleet.
        </h2>
        <p className="max-w-[56ch] text-[15px] leading-[1.6] text-[var(--color-fg-55)] md:text-[17px] md:leading-[1.55]">
          A three-stage platform that grows with the user — from personal
          mobility to operating a professional transportation business across
          the United States.
        </p>

        <ol className="relative mt-14 md:mt-20">
          <span
            aria-hidden="true"
            className="absolute left-5 top-7 bottom-7 w-px bg-[var(--color-rule)] md:left-7"
          />
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`relative grid grid-cols-[40px_1fr] gap-5 py-9 md:grid-cols-[56px_1fr] md:gap-12 md:py-12 ${
                i === 0
                  ? "border-t border-[var(--color-rule-strong)]"
                  : "border-t border-[var(--color-rule)]"
              } ${i === steps.length - 1 ? "border-b border-[var(--color-rule)]" : ""}`}
            >
              <div className="z-10 mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-rule-strong)] bg-[var(--color-bg)] font-mono text-[11px] tracking-[0.06em] text-[var(--color-fg-70)] md:h-14 md:w-14 md:text-[12px]">
                {s.n}
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_1fr] md:gap-16">
                <div>
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--color-fg-55)] md:mb-4 md:text-[11px]">
                    {s.tag}
                  </div>
                  <div className="text-[clamp(26px,6vw,44px)] font-medium leading-[1] tracking-[-0.035em] text-white md:leading-[0.98]">
                    {s.name[0]}
                    <br />
                    {s.name[1]}
                  </div>
                  <p className="mt-4 max-w-[38ch] text-[14px] leading-[1.6] text-[var(--color-fg-70)] md:mt-5 md:text-[15px]">
                    {s.desc}
                  </p>
                </div>
                <ul className="columns-1 gap-8 sm:columns-2">
                  {s.services.map((srv) => (
                    <li
                      key={srv}
                      className="break-inside-avoid border-b border-[var(--color-rule)] py-2 text-[13.5px] text-[var(--color-fg-70)] md:text-[14px]"
                    >
                      {srv}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
