import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ModulesSection from "@/components/ModulesSection";
import PersonalityQuiz from "@/components/PersonalityQuiz";
import ReflectionSection from "@/components/ReflectionSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex-grow bg-gradient-to-b from-gray-50 to-white">
        <Hero />
        {/* ProgressTracker component removed from here since it's now part of the header */}
        <div className="wave-divider"></div>
        <ModulesSection />
        <div className="divider-dots"></div>
        <PersonalityQuiz />
        <div className="divider-dots"></div>
        <ReflectionSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Home;
