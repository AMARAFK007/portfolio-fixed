
import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const Index = () => {
  // Ensure dark mode is applied
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <Stats />
        <HowItWorks />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Index;
