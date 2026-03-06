import Image from "next/image";

export function Hero() {
  return (
    <section className="relative max-w-300 mx-auto overflow-hidden px-6 mt-20 h-[calc(100dvh-65px-80px)] min-h-150">
      <div className="flex flex-col">
        <div className="space-y-6">
          <h1 className="text-5xl font-semibold leading-tight tracking-tighter text-white md:text-6xl lg:text-7xl">
            We handle your driver&apos;s license, <br />
            financing, and insurance
          </h1>
          <p className="max-w-lg text-lg tracking-tight">
            Let’s get your US driver’s license, and access to all your
            essentials to start driving for a living.
          </p>
        </div>

        <div className="absolute bottom-0 w-full flex justify-center -z-10">
          <Image
            src="/images/mockup-phones.png"
            alt="Vesta Step app mockup"
            width={1200}
            height={600}
            unoptimized
            className="md:max-w-4xl max-w-xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
