import Image from "next/image";

const partners = [
  { name: "Visa", image: "/images/visa.png" },
  { name: "Cash App", image: "/images/cashapp.png" },
  { name: "Colo", image: "/images/colo.png" },
  { name: "Payoneer", image: "/images/payoneer.png" },
];

export function Partners() {
  return (
    <section id="partners" className="px-6">
      <div className="mx-auto max-w-300">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold text-white">
            Startup Strategy &amp; Product Partner
          </h2>
          <p className="mx-auto max-w-xl text-2xl font-semibold text-white/50">
            Building scalable systems from idea to production
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-12 items-center justify-center"
            >
              <Image
                src={partner.image}
                alt={partner.name}
                width={120}
                height={40}
                className="size-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
