import { Hero } from "@/components/hero/hero";
import { Features } from "@/components/features/features";
import { Pricing } from "@/components/pricing/pricing";
import { FAQ } from "@/components/faq/faq";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
