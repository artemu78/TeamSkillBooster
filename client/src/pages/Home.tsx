import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProgressTracker from "@/components/ProgressTracker";
import ModulesSection from "@/components/ModulesSection";
import PersonalityQuiz from "@/components/PersonalityQuiz";
import ReflectionSection from "@/components/ReflectionSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <ProgressTracker />
        <ModulesSection />
        <PersonalityQuiz />
        <ReflectionSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Home;
