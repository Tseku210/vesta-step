const advisors = [
  {
    name: "Nickolas Montano",
    background: "International Investigator, JP Morgan",
  },
  {
    name: "Manduul Enkhee",
    background: "Software Engineer At Meta",
  },
  {
    name: "Nomuunbilegt Batmunkh",
    background: "Marketing Advisor, Publics Group",
  },
];

export function Advisors() {
  return (
    <section id="advisors" className="px-6">
      <div className="mx-auto max-w-300">
        <h2 className="mb-12 text-5xl font-semibold tracking-tighter text-white md:text-6xl lg:text-7xl">
          Advisors
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {advisors.map((advisor) => (
            <div
              key={advisor.name}
              className="self-center bg-[#141516] border rounded-3xl px-7 py-12"
            >
              <p className="text-lg font-semibold text-white">{advisor.name}</p>
              <p className="mt-2 text-base text-white/50">
                {advisor.background}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
