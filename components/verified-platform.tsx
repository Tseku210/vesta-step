import Image from "next/image";
import { Button } from "@/components/ui/button";

export function VerifiedPlatform() {
  return (
    <section className="relative overflow-hidden pt-20 bg-linear-to-t from-[#08090A] to-[#141516]">
      <div className="mx-auto max-w-300 px-6 z-10">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-5xl font-semibold tracking-tighter text-white md:text-6xl lg:text-7xl md:leading-20">
              Verified, AI-powered mobility and payments platform
            </h2>
            <p className="md:text-lg max-w-md text-white/60">
              Vesta Step designed for underserved communities living and working
              in the United States.
            </p>
            <Button
              size="lg"
              className="bg-white px-8 text-black hover:bg-zinc-200"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <Image
        src="/images/mockup-close.png"
        alt="App close-up mockup"
        width={1400}
        height={800}
        unoptimized
        className="md:absolute md:w-[60%] object-bottom-right right-0 bottom-0 h-full object-contain"
      />
    </section>
  );
}
