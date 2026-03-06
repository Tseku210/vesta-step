import Image from "next/image";

const team = [
  { name: "Ch. Uchral", role: "Founder", image: "/images/uchka.png" },
  { name: "D. Lkhamjav", role: "Founder", image: "/images/lkhamaa.png" },
  { name: "M. Odmaa", role: "Project Manager", image: "/images/odmaa.png" },
];

export function WhoAreWe() {
  return (
    <section id="who-are-we" className="px-6">
      <div className="mx-auto max-w-300">
        <div className="mb-16 grid md:grid-cols-2 items-start gap-12">
          <h2 className="text-5xl font-semibold tracking-tighter text-white md:text-6xl lg:text-7xl">
            Who are we?
          </h2>
          <p className="text-base leading-relaxed text-white/60">
            As full-time mothers supporting family-run trucking, limousine, and
            ride share businesses, we manage translations, customer service, and
            compliance. Rooted in Rotary friendship and community service, we
            created this women-founded company to simplify mobility, income, and
            compliance for small countries’ residents in the U.S.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-4xl border border-white/10 bg-background"
            >
              <div className="aspect-4/5 relative bg-linear-to-t from-[#535353] to-[#08090A]">
                <Image
                  src={member.image}
                  alt={member.name ?? ""}
                  fill
                  className="h-full w-full object-contain object-bottom"
                />
              </div>
              {member.name && (
                <div className="p-6">
                  <p className="text-base">{member.role}</p>
                  <p className="text-base">{member.name}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
