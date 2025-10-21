import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroLuxury = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("contato");
    if (formSection) {
      const headerHeight = 100;
      const targetPosition = formSection.offsetTop - headerHeight - 20;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen pt-[180px] pb-24 overflow-hidden">
      {/* Background with stronger gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0e0a] via-[#2d1510] to-[#1a0e0a]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--f5-orange))]/15 via-transparent to-transparent" />
        
        {/* Enhanced floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-[hsl(var(--f5-orange))]/30 blur-[100px] animate-float" style={{ animationDelay: "0s" }} />
          <div className="absolute top-[60%] right-[10%] w-[400px] h-[400px] rounded-full bg-[hsl(var(--f5-orange))]/30 blur-[100px] animate-float" style={{ animationDelay: "5s" }} />
          <div className="absolute bottom-[10%] left-[50%] w-[400px] h-[400px] rounded-full bg-[hsl(var(--f5-orange))]/30 blur-[100px] animate-float" style={{ animationDelay: "10s" }} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Badge - Top Right */}
        <div className="absolute top-8 right-8 md:top-12 md:right-12 animate-fade-in">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <div className="text-3xl md:text-4xl font-extrabold text-white">+3.000</div>
            <div className="text-sm text-[hsl(var(--text-secondary))] whitespace-nowrap">Clínicas Atendidas</div>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-6xl mx-auto">
          {/* Headline - New Layout */}
          <div className="text-center animate-fade-in-up mb-12">
            <h1 className="mb-8">
              <span className="block text-sm md:text-base font-medium text-[hsl(var(--text-secondary))] uppercase tracking-[3px] mb-4">
                O MAIOR ECOSSISTEMA QUE
              </span>
              <span className="block text-5xl md:text-6xl lg:text-8xl font-extrabold text-white mb-2 leading-tight">
                Transforma
              </span>
              <span className="block text-5xl md:text-6xl lg:text-8xl font-extrabold text-white mb-4 leading-tight">
                Investimento
              </span>
              <span className="block text-4xl md:text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-[hsl(var(--f5-orange))] via-orange-500 to-[hsl(var(--f5-orange-dark))] bg-clip-text text-transparent leading-tight" style={{ textShadow: '0 0 40px rgba(255,99,71,0.3)' }}>
                em Pacientes de Alto Valor
              </span>
            </h1>

            <p className="text-base md:text-lg text-[hsl(var(--text-secondary))] max-w-3xl mx-auto mb-12 leading-relaxed">
              Implementamos nosso sistema de aquisição de pacientes para clínicas de odontologia, estética que precisam de uma única coisa: <span className="text-[hsl(var(--f5-orange))] font-semibold">vender mais</span>.
            </p>
          </div>

          {/* CTA Button - Before Image */}
          <div className="text-center mb-12">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] hover:shadow-[0_8px_30px_hsl(var(--f5-orange)/0.5)] transition-all duration-300 hover:-translate-y-1 text-base md:text-lg font-bold uppercase tracking-wider px-8 py-6"
            >
              FALAR COM UM CONSULTOR
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Image with Floating Metrics */}
          <div className="relative max-w-4xl mx-auto mb-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://f5-odonto-v1.web.app/assets/images/fer.site.teste.3.png" 
                alt="Fernando Machado - CEO" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm md:text-base font-medium">Fernando Machado - CEO</p>
              </div>
            </div>

            {/* Floating Metrics - Desktop */}
            <div className="hidden lg:block">
              {/* Metric - ROI */}
              <div className="absolute top-[20%] right-[-100px] animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="backdrop-blur-md bg-white/15 border border-white/25 rounded-2xl p-5 min-w-[160px] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                  <div className="text-4xl font-extrabold text-white">90x</div>
                  <div className="text-sm text-[hsl(var(--text-secondary))]">ROI Recorde</div>
                </div>
              </div>

              {/* Metric - Especialização */}
              <div className="absolute bottom-[15%] left-[-90px] animate-float" style={{ animationDelay: "3s" }}>
                <div className="backdrop-blur-md bg-white/15 border border-white/25 rounded-2xl p-5 min-w-[160px] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                  <div className="text-4xl font-extrabold text-white">70%</div>
                  <div className="text-sm text-[hsl(var(--text-secondary))]">Especialização em Saúde</div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Grid - Mobile/Tablet */}
          <div className="lg:hidden mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="backdrop-blur-md bg-white/15 border border-white/25 rounded-2xl p-4 text-center">
              <div className="text-3xl font-extrabold text-white">90x</div>
              <div className="text-xs text-[hsl(var(--text-secondary))] mt-1">ROI Recorde</div>
            </div>
            <div className="backdrop-blur-md bg-white/15 border border-white/25 rounded-2xl p-4 text-center">
              <div className="text-3xl font-extrabold text-white">70%</div>
              <div className="text-xs text-[hsl(var(--text-secondary))] mt-1">Especialização em Saúde</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLuxury;
