import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

const HeroLuxury = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("contato");
    if (formSection) {
      const headerHeight = 100;
      const targetPosition = formSection.offsetTop - headerHeight - 20;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Load VTurb video script
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/68dde6f34641b9b22f3e764d/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-[180px] pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--luxury-black))] via-[hsl(var(--luxury-dark-soft))] to-[hsl(var(--luxury-black))] animate-gradient-shift" />
        
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-[hsl(var(--f5-orange))]/20 blur-[80px] animate-float" style={{ animationDelay: "0s" }} />
          <div className="absolute top-[60%] right-[10%] w-[300px] h-[300px] rounded-full bg-[hsl(var(--f5-orange))]/20 blur-[80px] animate-float" style={{ animationDelay: "5s" }} />
          <div className="absolute bottom-[10%] left-[50%] w-[300px] h-[300px] rounded-full bg-[hsl(var(--f5-orange))]/20 blur-[80px] animate-float" style={{ animationDelay: "10s" }} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Content Container */}
        <div className="max-w-6xl mx-auto">
          {/* Headline & Text - Above Video */}
          <div className="text-center animate-fade-in-up mb-12">
            <h1 className="mb-8">
              <span className="block text-sm md:text-base font-medium text-white uppercase tracking-[2px] mb-4">
                A agência especializada em entregar o que sua clínica mais precisa:
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,99,71,0.5)]">
                VENDER MAIS
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white max-w-4xl mx-auto mb-12 leading-relaxed">
              Transformamos clínicas odontológicas que faturam <strong className="text-white font-bold">R$30-50k/mês</strong> em operações de <strong className="text-[hsl(var(--f5-orange))] font-bold">R$250k+</strong> — com sistema completo de vendas: do lead qualificado até o fechamento de alto ticket.
            </p>
          </div>

          {/* Video Container */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <div 
                dangerouslySetInnerHTML={{
                  __html: '<vturb-smartplayer id="vid-68dde6f34641b9b22f3e764d" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>'
                }}
              />
            </div>

            {/* Floating Metrics - Desktop */}
            <div className="hidden lg:block">
              {/* Metric 1 */}
              <div className="absolute top-[10%] left-[-120px] animate-float">
                <div className="backdrop-blur-md bg-white/12 border border-white/18 rounded-2xl p-4 min-w-[180px] shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300">
                  <div className="text-3xl font-extrabold bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent">
                    +3.000
                  </div>
                  <div className="text-sm text-[hsl(var(--text-secondary))]">Clínicas Atendidas</div>
                </div>
              </div>

              {/* Metric 2 - Featured */}
              <div className="absolute top-[40%] right-[-120px] animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="backdrop-blur-md bg-white/18 border border-white/20 rounded-2xl p-4 min-w-[180px] shadow-[0_24px_80px_rgba(0,0,0,0.5),0_0_44px_hsl(var(--f5-orange)/0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300">
                  <div className="text-3xl font-extrabold bg-gradient-to-br from-[hsl(var(--f5-orange))] to-orange-300 bg-clip-text text-transparent">
                    90x
                  </div>
                  <div className="text-sm text-white">ROI Recorde</div>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="absolute bottom-[10%] left-[-100px] animate-float" style={{ animationDelay: "3s" }}>
                <div className="backdrop-blur-md bg-white/12 border border-white/18 rounded-2xl p-4 min-w-[180px] shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300">
                  <div className="text-3xl font-extrabold bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent">
                    70%
                  </div>
                  <div className="text-sm text-[hsl(var(--text-secondary))]">Especialização em Saúde</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] hover:shadow-[0_8px_30px_hsl(var(--f5-orange)/0.5)] transition-all duration-300 hover:-translate-y-1 text-lg font-bold uppercase tracking-wider px-8 py-7"
            >
              FALAR COM UM CONSULTOR
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Metrics Grid - Mobile/Tablet */}
          <div className="lg:hidden mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="backdrop-blur-md bg-white/12 border border-white/18 rounded-2xl p-4 text-center">
              <div className="text-2xl font-extrabold bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent">
                +3.000
              </div>
              <div className="text-xs text-[hsl(var(--text-secondary))] mt-1">Clínicas Atendidas</div>
            </div>
            <div className="backdrop-blur-md bg-white/18 border border-white/20 rounded-2xl p-4 text-center shadow-[0_0_30px_hsl(var(--f5-orange)/0.3)]">
              <div className="text-2xl font-extrabold bg-gradient-to-br from-[hsl(var(--f5-orange))] to-orange-300 bg-clip-text text-transparent">
                90x
              </div>
              <div className="text-xs text-white mt-1">ROI Recorde</div>
            </div>
            <div className="backdrop-blur-md bg-white/12 border border-white/18 rounded-2xl p-4 text-center">
              <div className="text-2xl font-extrabold bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent">
                70%
              </div>
              <div className="text-xs text-[hsl(var(--text-secondary))] mt-1">Especialização</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLuxury;
