import { Globe } from "@/components/globe";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[var(--color-rule)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-40 md:opacity-100"
        style={{
          maskImage:
            "linear-gradient(180deg, #000 0%, #000 70%, rgba(0,0,0,0.5) 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, #000 0%, #000 70%, rgba(0,0,0,0.5) 100%)",
        }}
      >
        <Globe className="absolute top-1/2 -translate-y-1/2 -right-[60%] block w-[140vw] max-w-none md:-right-[380px] md:w-[880px] md:h-[880px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-24 pb-28 md:px-14 md:pt-30 md:pb-35">
        <div className="mb-8 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-fg-55)] md:mb-10 md:text-[11px]">
          Mobility &amp; financial infrastructure for new Americans
        </div>
        <h1 className="max-w-[14ch] text-[clamp(44px,9vw,124px)] font-medium leading-[0.96] tracking-[-0.04em] text-white md:leading-[0.94] md:tracking-[-0.045em]">
          Borderless
          <br />
          driving <span className="text-[var(--color-fg-40)]">buddy.</span>
        </h1>
        <p className="mt-8 max-w-[640px] text-[17px] leading-[1.55] tracking-[-0.005em] text-[var(--color-fg-70)] md:mt-10 md:text-[20px] md:leading-[1.5]">
          Vesta Step is the operating system for new residents in the United
          States — connecting{" "}
          <b className="font-medium text-white">
            licensing, vehicles, insurance, legal, accounting, and cross-border
            lending
          </b>{" "}
          in one platform, in their language.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3 md:mt-14">
          <a
            href="#ecosystem"
            className="inline-flex h-11 items-center gap-2.5 border border-white bg-white px-5.5 text-sm font-medium tracking-[-0.005em] text-[var(--color-bg)] transition-colors hover:bg-white/90"
          >
            Explore the platform
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
            href="#contact"
            className="inline-flex h-11 items-center gap-2.5 border border-[var(--color-rule-strong)] bg-transparent px-5.5 text-sm font-medium tracking-[-0.005em] text-white transition-colors hover:border-white/30 hover:bg-white/5"
          >
            Partner with us
          </a>
        </div>
      </div>
    </section>
  );
}
