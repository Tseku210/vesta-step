import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { VerifiedPlatform } from "@/components/verified-platform";
import { EverythingInOnePlace } from "@/components/everything-in-one-place";
import { LicenseToDrive } from "@/components/license-to-drive";
import { WhoAreWe } from "@/components/who-are-we";
import { Advisors } from "@/components/advisors";
import { Partners } from "@/components/partners";
import { CallToAction } from "@/components/call-to-action";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <VerifiedPlatform />
        <EverythingInOnePlace />
        <LicenseToDrive />
        <WhoAreWe />
        <Advisors />
        <Partners />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
