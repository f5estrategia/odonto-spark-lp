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
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-left lg:text-left animate-fade-in-up">
            <h1 className="mb-8">
              <span className="block text-sm md:text-base font-medium text-[hsl(var(--text-secondary))] uppercase tracking-[2px] mb-4">
                O MAIOR ECOSSISTEMA QUE
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-br from-white to-[hsl(var(--text-secondary))] bg-clip-text text-transparent mb-2">
                Transforma Investimento
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] bg-clip-text text-transparent">
                em Pacientes de Alto Valor
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[hsl(var(--text-secondary))] max-w-2xl mb-12 leading-relaxed">
              Implementamos nosso sistema de aquisição de pacientes para clínicas de odontologia, estética e transplante capilar que precisam de uma única coisa:{" "}
              <strong className="text-[hsl(var(--f5-orange))] font-bold">vender mais</strong>.
            </p>

            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] hover:shadow-[0_8px_30px_hsl(var(--f5-orange)/0.5)] transition-all duration-300 hover:-translate-y-1 text-lg font-bold uppercase tracking-wider px-8 py-7"
            >
              FALAR COM UM CONSULTOR
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right Column - Image + Metrics */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px] aspect-[4/5]">
              {/* CEO Image */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&h=1000&fit=crop"
                  alt="Fernando Machado - CEO"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--luxury-black))] via-[hsl(var(--luxury-black))]/50 to-transparent" />
                
                {/* Caption */}
                <div className="absolute bottom-36 left-1/2 -translate-x-1/2 text-center z-10 w-full px-4">
                  <p className="text-white font-semibold text-lg">Fernando Machado - CEO</p>
                </div>
              </div>

              {/* Floating Metrics - Desktop */}
              <div className="hidden lg:block absolute inset-0 pointer-events-none">
                {/* Metric 1 */}
                <div className="absolute top-[-5%] left-[-20%] pointer-events-auto animate-float">
                  <div className="backdrop-blur-md bg-white/12 border border-white/18 rounded-2xl p-4 min-w-[180px] shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300">
                    <div className="text-3xl font-extrabold bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent">
                      +3.000
                    </div>
                    <div className="text-sm text-[hsl(var(--text-secondary))]">Clínicas Atendidas</div>
                  </div>
                </div>

                {/* Metric 2 - Featured */}
                <div className="absolute top-[30%] right-[-50%] pointer-events-auto animate-float" style={{ animationDelay: "1.5s" }}>
                  <div className="backdrop-blur-md bg-white/18 border border-white/20 rounded-2xl p-4 min-w-[180px] shadow-[0_24px_80px_rgba(0,0,0,0.5),0_0_44px_hsl(var(--f5-orange)/0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300">
                    <div className="text-3xl font-extrabold bg-gradient-to-br from-[hsl(var(--f5-orange))] to-orange-300 bg-clip-text text-transparent">
                      90x
                    </div>
                    <div className="text-sm text-white">ROI Recorde</div>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="absolute bottom-[-70%] left-[-10%] pointer-events-auto animate-float" style={{ animationDelay: "3s" }}>
                  <div className="backdrop-blur-md bg-white/12 border border-white/18 rounded-2xl p-4 min-w-[180px] shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300">
                    <div className="text-3xl font-extrabold bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent">
                      70%
                    </div>
                    <div className="text-sm text-[hsl(var(--text-secondary))]">Especialização em Saúde</div>
                  </div>
                </div>
              </div>

              {/* Metrics Grid - Mobile/Tablet */}
              <div className="lg:hidden mt-8 grid grid-cols-3 gap-4">
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
        </div>
      </div>
    </section>
  );
};

export default HeroLuxury;
