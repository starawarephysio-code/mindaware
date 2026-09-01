import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Method from "@/components/sections/Method";
import Service from "@/components/sections/Service";
import Pricing from "@/components/sections/Pricing";
import FaqPreview from "@/components/sections/FaqPreview";
import Origins from "@/components/sections/Origins";
import Team from "@/components/sections/Team";
import Voices from "@/components/sections/Voices";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Method />
        <Service />
        <Pricing />
        <FaqPreview />
        <Origins />
        <Team />
        <Voices />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
