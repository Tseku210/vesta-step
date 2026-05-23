const nodes = [
  {
    locality: "USA",
    title: "Apply",
    body: "Single application in Driving Buddy.",
  },
  {
    locality: "VESTA → HOME",
    title: "Verify",
    body: "Home-country assets & income.",
  },
  {
    locality: "HOME",
    title: "Issue",
    body: "Partner bank issues the loan.",
  },
  {
    locality: "VESTA → USA",
    title: "Disburse",
    body: "Funds to US dealer or business.",
  },
  {
    locality: "USA → HOME",
    title: "Repay",
    body: "Monthly USD via the app.",
  },
];

export function LendingDiagram() {
  return (
    <ol
      className="relative flex flex-col gap-9 md:flex-row md:items-start md:justify-between md:gap-4"
      aria-label="The journey of one loan — Apply, Verify, Issue, Disburse, Repay"
    >
      <span
        aria-hidden="true"
        className="absolute z-0 bg-[var(--color-rule-strong)] left-[19px] top-5 bottom-5 w-px md:left-[10%] md:right-[10%] md:top-[48px] md:bottom-auto md:h-px md:w-auto"
      >
        <span className="lending-dot" aria-hidden="true" />
      </span>

      {nodes.map((n, i) => (
        <li
          key={n.title}
          className="relative grid grid-cols-[40px_1fr] items-start gap-5 md:flex md:flex-1 md:flex-col md:items-center md:gap-0 md:pt-7 md:text-center"
        >
          <span
            className="z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-rule-strong)] bg-[var(--color-bg)] font-mono text-[11px] tracking-[0.06em] text-[var(--color-fg-70)] md:h-10 md:w-10"
            aria-hidden="true"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="md:flex md:flex-col md:items-center md:mt-4">
            <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-fg-40)] md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:whitespace-nowrap">
              {n.locality}
            </span>
            <h3 className="mt-1 text-[16px] font-medium tracking-[-0.005em] text-white md:mt-0 md:text-[17px]">
              {n.title}
            </h3>
            <p className="mt-1 max-w-[36ch] text-[13px] leading-[1.5] text-[var(--color-fg-55)] md:mt-1 md:max-w-[18ch] md:text-[12px]">
              {n.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
