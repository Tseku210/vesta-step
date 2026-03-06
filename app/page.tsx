import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { LicenseToDrive } from "@/components/license-to-drive";
import { EverythingInOnePlace } from "@/components/everything-in-one-place";
import { VerifiedPlatform } from "@/components/verified-platform";
import { Features } from "@/components/features";
import { WhoAreWe } from "@/components/who-are-we";
import { Partners } from "@/components/partners";
import { Advisors } from "@/components/advisors";
import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="space-y-32 md:space-y-60">
        <Hero />
        <LicenseToDrive />
        <EverythingInOnePlace />
        <VerifiedPlatform />
        <Features />
        <WhoAreWe />
        <Partners />
        <Advisors />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
