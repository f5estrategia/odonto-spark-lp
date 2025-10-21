import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import PainPoints from "@/components/PainPoints";
import Methodology from "@/components/Methodology";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <ClientLogos />
      <PainPoints />
      <Methodology />
      <Footer />
    </div>
  );
};

export default Index;
