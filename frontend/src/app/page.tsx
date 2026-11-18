import { AlurLaporan } from "@/components/landing/AlurLaporan";
import { Cta } from "@/components/landing/Cta";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/Navbar";
import { ReportsAndCategories } from "@/components/landing/ReportsAndCategories";
import { Statistics } from "@/components/landing/Statistics";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AlurLaporan />
        <Statistics />
        <ReportsAndCategories />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
