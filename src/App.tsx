import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Achievements from "./components/Achievements";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <TechStack />
        <Achievements />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
