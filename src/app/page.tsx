import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Engagements from "@/components/sections/Engagements";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Engagements />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
