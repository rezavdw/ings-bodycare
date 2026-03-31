import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SalonImpressie from "@/components/SalonImpressie";
import Behandelingen from "@/components/Behandelingen";
import Producten from "@/components/Producten";
import Medewerkers from "@/components/Medewerkers";
import Aanbieding from "@/components/Aanbieding";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SalonImpressie />
        <Behandelingen />
        <Producten />
        <Medewerkers />
        <Aanbieding />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
