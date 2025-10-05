import Hero from "@/components/Hero";
import SplineAnimation from "@/components/SplineAnimation";
import ProblemSolution from "@/components/ProblemSolution";
import Impact from "@/components/Impact";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProblemSolution />
      <Impact />
      <Features />
      <UseCases />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
