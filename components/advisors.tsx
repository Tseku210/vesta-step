const advisors = [
  {
    name: "Nomuunbilegt Batmunkh",
    background: "Director of Operations of Mongolian office of Publicis Groupe",
  },
  {
    name: "Manduul Enkhee",
    background: "Software Engineer at Meta",
  },
  {
    name: "Misheel Ganbat",
    background: "Technology Consulting Manager at EY",
  },
];

export function Advisors() {
  return (
    <section id="advisors" className="px-6 py-24">
      <div className="mx-auto max-w-300">
        <h2 className="mb-12 text-5xl font-semibold tracking-tighter text-white md:text-7xl">
          Advisors
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {advisors.map((advisor) => (
            <div key={advisor.name} className="self-center">
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
