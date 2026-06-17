import Navbar from "./components/Navbar";
import SeoHead from "./components/SeoHead";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Achievements from "./components/Achievements";
import SeoContent from "./components/SeoContent";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="overflow-x-clip">
      <SeoHead />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <TechStack />
        <Achievements />
        <SeoContent />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
