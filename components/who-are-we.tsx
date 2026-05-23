import Image from "next/image";

const founders = [
  {
    key: "1",
    init: "U — 01",
    name: ["Uchral", "Chuluunbaatar"],
    role: "Co-Founder",
    bio: "Transportation operations, community services & compliance management.",
    image: "/images/uchka.png",
  },
  {
    key: "2",
    init: "L — 02",
    name: ["Lkhamjav", "Davaajav"],
    role: "Co-Founder",
    bio: "Customer service, translation & business development.",
    image: "/images/lkhamaa.png",
  },
  {
    key: "3",
    init: "O — 03",
    name: ["Odmaa", "Munkhgerel"],
    role: "Project Manager",
    bio: "Product strategy, roadmap & operations coordination.",
    image: "/images/odmaa.png",
  },
];

export function WhoAreWe() {
  return (
    <section
      id="team"
      className="border-b border-[var(--color-rule)] py-16 md:py-30"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-14">
        <div className="mb-5 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-fg-55)] md:mb-6 md:text-[11px]">
          The team
        </div>
        <h2 className="mb-3 max-w-[14ch] text-[clamp(32px,7vw,64px)] font-medium leading-[1.04] tracking-[-0.035em] text-white md:leading-[1.02]">
          Women-founded.
          <br />
          Community-driven.
        </h2>
        <p className="mb-10 max-w-[50ch] text-[15px] leading-[1.6] text-[var(--color-fg-55)] md:mb-14 md:text-[16px] md:leading-[1.55]">
          Built by full-time mothers who have managed translation, compliance,
          and operations for family-run transportation businesses in the United
          States.
        </p>

        <div className="founders-grid border-y border-[var(--color-rule-strong)]">
          {founders.flatMap((f, i) => [
            <div
              key={`p${f.key}`}
              style={{
                gridArea: `p${i + 1}`,
                backgroundImage:
                  "linear-gradient(180deg, #131418 0%, #0C0D0F 100%)",
              }}
              className={`flex aspect-[4/5] items-end justify-center overflow-hidden px-4 pt-6 md:px-6 md:pt-8 ${
                i > 0
                  ? "border-t border-[var(--color-rule)] md:border-t-0 md:border-l md:border-white/[0.06]"
                  : ""
              }`}
            >
              <Image
                src={f.image}
                alt={`${f.name[0]} ${f.name[1]}`}
                width={480}
                height={600}
                className="block h-auto w-[92%] object-contain object-bottom grayscale contrast-[1.05]"
              />
            </div>,
            <div
              key={`m${f.key}`}
              style={{ gridArea: `m${i + 1}` }}
              className={`border-t border-[var(--color-rule)] px-5 py-6 md:p-7 md:pb-8 ${
                i > 0 ? "md:border-l md:border-[var(--color-rule)]" : ""
              }`}
            >
              <div className="mb-3 font-mono text-[11px] tracking-[0.06em] text-[var(--color-fg-40)] md:mb-4.5">
                {f.init}
              </div>
              <div className="text-[20px] font-medium leading-[1.2] tracking-[-0.015em] text-white md:text-[22px] md:leading-[1.15]">
                {f.name[0]}
                <br />
                {f.name[1]}
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--color-fg-55)] md:text-[11px]">
                {f.role}
              </div>
              <div className="mt-4 max-w-[34ch] text-[13px] leading-[1.6] text-[var(--color-fg-55)] md:text-[13.5px]">
                {f.bio}
              </div>
            </div>,
          ])}
        </div>
      </div>
    </section>
  );
}
