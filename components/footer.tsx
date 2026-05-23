export function Footer() {
  return (
    <footer className="border-t border-[var(--color-rule)] py-7">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-3 px-6 md:flex-row md:items-center md:justify-between md:px-14">
        <div className="font-mono text-[11px] tracking-[0.04em] text-[var(--color-fg-40)]">
          <b className="font-medium text-[var(--color-fg-70)]">
            Vesta Step, Inc.
          </b>{" "}
          &nbsp; Delaware · United States · 2026
        </div>
        <div className="font-mono text-[11px] tracking-[0.04em] text-[var(--color-fg-40)]">
          © MMXXVI
        </div>
      </div>
    </footer>
  );
}
