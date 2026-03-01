import Image from "next/image";

const subtitles = [
  "Legally validated collateral assets from your home country",
  "Alternative credit pathway",
  "All payments will be processed through the platform",
  "In the language of your chosen language",
];

const easyIntegration = [
  "Get your Driver's License",
  "Find your car",
  "Weigh your financial options",
  "Insure your car",
  "Start driving",
];

const needMoreHelp = [
  "Establish a Company",
  "Operating Authority & Permits",
  "Filing Taxes & Accounting Services",
  "Legal Services",
  "Training Services",
];

export function EverythingInOnePlace() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-300">
        <h2 className="mb-6 text-5xl font-semibold tracking-tighter text-white md:text-7xl">
          Everything you need in one place
        </h2>
        <div className="mb-12 space-y-1">
          {subtitles.map((line) => (
            <p key={line} className="text-xl text-white">
              {line}
            </p>
          ))}
        </div>

        <div className="border-t border-white/10" />

        <div className="grid grid-cols-2 divide-x divide-white/10">
          <div className="py-10 pr-10">
            <h3 className="mb-5 text-lg font-semibold text-white">
              Easy Integration
            </h3>
            <ul className="list-disc space-y-0 pl-5">
              {easyIntegration.map((item) => (
                <li key={item} className="text-base text-white/60">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="py-10 pl-10">
            <h3 className="mb-5 text-lg font-semibold text-white">
              Need more help?
            </h3>
            <ul className="list-disc space-y-0 pl-5">
              {needMoreHelp.map((item) => (
                <li key={item} className="text-base text-white/60">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 divide-x divide-white/10">
          <div className="pr-10">
            <Image
              src="/images/illu-2.png"
              alt="Car dealership illustration"
              width={600}
              height={400}
              unoptimized
              className="w-full object-contain"
            />
          </div>
          <div className="pl-10">
            <Image
              src="/images/illu-1.png"
              alt="Professional services illustration"
              width={600}
              height={400}
              unoptimized
              className="w-full object-contain"
            />
          </div>
        </div>

        <div className="border-t border-white/10" />
      </div>
    </section>
  );
}
