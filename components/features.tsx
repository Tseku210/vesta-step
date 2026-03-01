import Image from "next/image";

const features = [
  {
    icon: "/icons/cardinalpoints.svg",
    title: "Made Simple",
    description: "Connects users to essential mobility.",
  },
  {
    icon: "/icons/sparkle.svg",
    title: "Streamlined",
    description: "Income, and compliance services across rideshare.",
  },
  {
    icon: "/icons/truck.svg",
    title: "DrivePro",
    description:
      "Premium transportation, and commercial trucking guiding them from licensing.",
  },
  {
    icon: "/icons/crown.svg",
    title: "Ecosystem",
    description:
      "Higher-earning opportunities through a single, trusted ecosystem.",
  },
];

export function Features() {
  return (
    <section className="px-6">
      <div className="mx-auto grid max-w-300 grid-cols-2 gap-8 md:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title}>
            <div className="mb-3 flex items-center gap-2">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={20}
                height={20}
              />
              <h3 className="font-semibold text-white">{feature.title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-white/40">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
