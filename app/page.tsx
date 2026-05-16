import { WebNav } from "@/components/landing/WebNav";
import { Hero } from "@/components/landing/Hero";

export default function Home() {
  return (
    <>
      <WebNav />
      <main className="flex-1">
        <Hero />
      </main>
    </>
  );
}
