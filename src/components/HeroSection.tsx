import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm uppercase tracking-wider">
                O MAIOR ECOSSISTEMA QUE
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transforma<br />
                Investimento<br />
                <span className="text-primary">em Pacientes de<br />Alto Valor</span>
              </h1>
            </div>

            <p className="text-lg text-foreground/80 max-w-xl">
              Implementamos nosso sistema de aquisição de pacientes para clínicas de odontologia, estética que precisam de uma única coisa:{" "}
              <span className="text-primary font-semibold">vender mais</span>.
            </p>

            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6">
              FALAR COM UM CONSULTOR
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right column - CEO image with floating stats */}
          <div className="relative">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* CEO Image placeholder - will be replaced with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop" 
                  alt="Fernando Machado - CEO" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>

              {/* Floating stat badges */}
              <div className="absolute top-8 right-0 bg-card/80 backdrop-blur-md border border-border rounded-2xl p-4 shadow-xl">
                <div className="text-3xl font-bold text-primary">+3.000</div>
                <div className="text-sm text-muted-foreground">Clínicas Atendidas</div>
              </div>

              <div className="absolute top-1/2 right-0 transform translate-x-8 bg-card/80 backdrop-blur-md border border-border rounded-2xl p-4 shadow-xl">
                <div className="text-3xl font-bold text-primary">90x</div>
                <div className="text-sm text-muted-foreground">ROI Recorde</div>
              </div>

              <div className="absolute bottom-24 right-0 bg-card/80 backdrop-blur-md border border-border rounded-2xl p-4 shadow-xl">
                <div className="text-3xl font-bold text-primary">70%</div>
                <div className="text-sm text-muted-foreground">Especialização em Saúde</div>
              </div>

              {/* CEO name label */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-foreground/90 font-medium">Fernando Machado - CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
