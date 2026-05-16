import { WebNav } from "@/components/landing/WebNav";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Demo } from "@/components/landing/Demo";
import { Features } from "@/components/landing/Features";
import { Tech } from "@/components/landing/Tech";
import { Pricing } from "@/components/landing/Pricing";
import { Team } from "@/components/landing/Team";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <WebNav />
      <main className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <Demo />
        <Features />
        <Tech />
        <Pricing />
        <Team />
        <Footer />
      </main>
    </>
  );
}
