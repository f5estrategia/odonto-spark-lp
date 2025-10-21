import Header from "@/components/Header";
import HeroLuxury from "@/components/HeroLuxury";
import SocialProofBar from "@/components/SocialProofBar";
import PainPoints from "@/components/PainPoints";
import Methodology from "@/components/Methodology";
import ToolsSection from "@/components/ToolsSection";
import ResultsSection from "@/components/ResultsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--luxury-black))] text-white relative">
      <Header />
      <HeroLuxury />
      <SocialProofBar />
      <ResultsSection />
      <PainPoints />
      <Methodology />
      <ToolsSection />
      <DifferentialsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
