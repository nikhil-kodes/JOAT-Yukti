import { Hero } from "@/components/hero";
import { ChallengesSection, FactsStrip, PhilosophySection, TitleWarningSection, CTASection, Footer } from "@/components/sections/landing";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-bg-base font-sans relative overflow-x-hidden">
      <Hero />
      <FactsStrip />
      <TitleWarningSection />
      <ChallengesSection />
      <PhilosophySection />
      <CTASection />
      <Footer />
    </main>
  );
}
