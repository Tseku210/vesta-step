import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section id="contact" className="px-6 mb-20">
      <div className="mx-auto flex max-w-300 items-center md:items-end justify-between flex-col md:flex-row gap-10 md:gap-0">
        <div>
          <h2 className="mb-4 text-5xl font-semibold tracking-tighter text-white md:text-7xl">
            Ready to reach out?
          </h2>
          <p className="max-w-md text-base text-white/60">
            Speed matters! We&apos;ll be right there with you through it all.
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <Button size="lg" className="text-black">
            Contact us
          </Button>
          <Button size="lg" variant="secondary">
            App download
          </Button>
        </div>
      </div>
    </section>
  );
}
