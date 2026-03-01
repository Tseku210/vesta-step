import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Vesta Step" width={20} height={20} />
          <span className="text-sm font-medium text-zinc-400">Vesta Step</span>
        </div>
        <p className="text-sm text-zinc-600">
          &copy; {new Date().getFullYear()} Vesta Step. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
