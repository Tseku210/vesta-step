import Image from "next/image";
import { Plus } from "lucide-react";

const cards = [
  {
    image: "/images/car-1.png",
    text: "Essential needs to start driving for new arrivals",
  },
  {
    image: "/images/car-2.png",
    text: "Turn key to limo business and upgrade your income",
  },
  {
    image: "/images/truck.png",
    text: "Long-term financial independence and asset building.",
  },
];

export function LicenseToDrive() {
  return (
    <section id="products" className="px-6 ">
      <div className="mx-auto max-w-300">
        <div className="grid md:grid-cols-2 items-center">
          <h2 className="mb-4 text-5xl font-semibold text-white md:text-6xl lg:text-7xl leading-tight tracking-tighter">
            Your license to <br />
            Drive
          </h2>
          <p className="mb-12 max-w-md text-base text-white/70 leading-relaxed">
            All transportation-related services for foreign people in the United
            States, in their native language, from a single platform. A smart
            opportunity to enhance daily needs and business income.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.text}
              className="group flex flex-col overflow-hidden rounded-4xl bg-[#141516] even:bg-[#191A1B]"
            >
              <div className="h-64 overflow-hidden pl-2">
                <Image
                  src={card.image}
                  alt={card.text}
                  width={1000}
                  height={800}
                  className="h-full w-full object-left object-cover"
                />
              </div>
              <div className="flex items-end justify-between gap-4 p-6 pt-0 flex-1">
                <p className="text-2xl font-medium leading-snug tracking-tight text-white">
                  {card.text}
                </p>
                <button className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-white/40 hover:text-white">
                  <Plus className="size-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
