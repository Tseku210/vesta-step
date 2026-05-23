import Image from "next/image";

type Partner = {
  name: string;
  image: string;
};

const partners: Partner[] = [
  { name: "Visa", image: "/images/visa.png" },
  { name: "Cash App", image: "/images/cashapp.png" },
  { name: "Payoneer", image: "/images/payoneer.png" },
  { name: "Colo", image: "/images/colo.png" },
  { name: "Blue Anchor", image: "/images/blue-anchor-white.png" },
];

export function Partners() {
  return (
    <section
      id="partners"
      className="border-b border-[var(--color-rule)] bg-[var(--color-bg-elev)] py-14 md:py-20"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-14">
        <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-fg-55)] md:text-[11px]">
          Trusted partners
        </div>

        <div className="mt-8 grid grid-cols-2 items-center gap-y-7 gap-x-6 py-8 sm:grid-cols-3 md:mt-10 md:py-10 lg:grid-cols-5">
          {partners.map((p) => (
            <div
              key={p.name}
              title={p.name}
              className="flex h-8 items-center justify-center"
            >
              <Image
                src={p.image}
                alt={p.name}
                width={140}
                height={32}
                className="h-8 w-auto max-w-[140px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
