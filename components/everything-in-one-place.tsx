import { LendingDiagram } from "@/components/lending-diagram";

const points = [
  {
    title: "No US credit score required",
    body: "Home-country assets and verified income qualify the applicant. We work with partner institutions in your country to issue and service the loan.",
  },
  {
    title: "Auto & commercial financing",
    body: "Finance your first vehicle, a limousine fleet, or a commercial trucking operation — all through a single application inside Driving Buddy.",
  },
  {
    title: "Integrated, not bolted-on",
    body: "Apply, track, and manage your cross-border loan directly inside the app — no separate process, no third-party hand-off.",
  },
];

export function EverythingInOnePlace() {
  return (
    <section
      id="lending"
      className="border-b border-[var(--color-rule)] py-16 md:py-30"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-14">
        <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-fg-55)] md:mb-6 md:text-[11px]">
          Cross-border lending
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="text-[clamp(30px,7vw,56px)] font-medium leading-[1.04] tracking-[-0.035em] text-white">
              Borrow from home.
              <br />
              <span className="text-[var(--color-fg-40)]">
                Build in America.
              </span>
            </h2>
            <p className="mt-6 max-w-[38ch] text-[15px] leading-[1.6] text-[var(--color-fg-55)] md:mt-8 md:text-[16px]">
              Through Driving Buddy, new residents access auto and business
              loans from financial institutions in their home country —
              bypassing the US credit score requirement entirely.
            </p>
          </div>

          <ul className="flex flex-col">
            {points.map((p, i) => (
              <li
                key={p.title}
                className={`py-6 ${
                  i === 0
                    ? "border-t border-[var(--color-rule-strong)]"
                    : "border-t border-[var(--color-rule)]"
                } ${i === points.length - 1 ? "border-b border-[var(--color-rule)]" : ""}`}
              >
                <div className="mb-2.5 text-[19px] font-medium tracking-[-0.01em] text-white">
                  {p.title}
                </div>
                <div className="text-[14px] leading-[1.6] text-[var(--color-fg-55)]">
                  {p.body}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 md:mt-18">
          <LendingDiagram />
        </div>
      </div>
    </section>
  );
}
