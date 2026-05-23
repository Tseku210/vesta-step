export function CallToAction() {
  return (
    <section
      id="contact"
      className="border-b border-[var(--color-rule)] py-20 md:py-35"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-14">
        <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-fg-55)] md:mb-8 md:text-[11px]">
          Ready to connect
        </div>
        <h2 className="max-w-[14ch] text-[clamp(36px,8vw,88px)] font-medium leading-[1] tracking-[-0.04em] text-white md:leading-[0.98]">
          Building the financial infrastructure for new Americans.
        </h2>
        <p className="mt-6 max-w-[50ch] text-[16px] leading-[1.6] text-[var(--color-fg-55)] md:mt-8 md:text-[18px] md:leading-[1.55]">
          We are seeking investors and strategic partners who believe in
          expanding access to US financial and mobility services for the
          communities building their futures here.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3 md:mt-14">
          <a
            href="mailto:hello@vestastep.com"
            className="inline-flex h-11 items-center gap-2.5 border border-white bg-white px-5.5 text-sm font-medium tracking-[-0.005em] text-[var(--color-bg)] transition-colors hover:bg-white/90"
          >
            hello@vestastep.com
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#ecosystem"
            className="inline-flex h-11 items-center gap-2.5 border border-[var(--color-rule-strong)] bg-transparent px-5.5 text-sm font-medium tracking-[-0.005em] text-white transition-colors hover:border-white/30 hover:bg-white/5"
          >
            Read the brief
          </a>
        </div>
      </div>
    </section>
  );
}
