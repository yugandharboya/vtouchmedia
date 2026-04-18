import "./App.css";
import Header from "./components/Header";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import SocialLinksSection from "./components/SocialLinksSection";
import WhyChoose from "./components/WhyChoose";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import ContactFloatButtons from "./components/ContactFloatButtons/index.jsx";

function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <SocialLinksSection />
        <WhyChoose />
        <Contact />
        <CTA />
      </main>

      <Footer />

      <Toast />
      <ContactFloatButtons />
    </div>
  );
}

export default App;
