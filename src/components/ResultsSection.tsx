import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

const ResultsSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("contato");
    if (formSection) {
      const headerHeight = 100;
      const targetPosition = formSection.offsetTop - headerHeight - 20;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="resultados" className="py-24 bg-[hsl(var(--luxury-black))] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Você Quer Promessas ou Quer Provas?
          </h2>
          <p className="text-lg md:text-xl text-[hsl(var(--text-secondary))] max-w-3xl mx-auto">
            Veja os números reais de clínicas que escolheram resultados ao invés de discursos.
          </p>
        </div>

        {/* Results Grid - TIER 1 CASES */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* #1 - VIVA ODONTOLOGIA */}
          <div className="md:col-span-2 bg-gradient-to-br from-[hsl(var(--luxury-dark))] to-[hsl(var(--f5-orange))]/5 border border-[hsl(var(--f5-orange))] rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <div className="relative h-64 bg-[hsl(var(--luxury-gray))] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=400&fit=crop"
                alt="Viva Odontologia"
                className="w-full h-full object-cover opacity-70 hover:scale-110 hover:opacity-90 transition-all duration-500"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                🏆 Case Âncora
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">VIVA ODONTOLOGIA</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <span className="block text-xs text-[hsl(var(--text-muted))] uppercase tracking-wide mb-2">Investimento</span>
                  <span className="block text-lg font-bold text-white">R$ 124.294</span>
                </div>

                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <span className="block text-xs text-[hsl(var(--text-muted))] uppercase tracking-wide mb-2">Faturamento</span>
                  <span className="block text-lg font-bold text-[hsl(var(--f5-orange))]">R$ 3,8 MI</span>
                </div>

                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <span className="block text-xs text-[hsl(var(--text-muted))] uppercase tracking-wide mb-2">ROAS</span>
                  <span className="block text-lg font-bold text-[hsl(var(--f5-orange))]">27,11x</span>
                </div>

                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <span className="block text-xs text-[hsl(var(--text-muted))] uppercase tracking-wide mb-2">Período</span>
                  <span className="block text-lg font-bold text-white">10 meses</span>
                </div>
              </div>

              <p className="text-[hsl(var(--text-secondary))] text-lg leading-relaxed">
                De R$124 mil investidos para <strong className="text-white">R$3,8 MILHÕES</strong> em vendas. Sistema completo de vendas multiplicou resultado em 27x.
              </p>
            </div>
          </div>

          {/* #2 - ORAL UNIC NATAL */}
          <div className="bg-gradient-to-br from-[hsl(var(--luxury-dark))] to-[hsl(var(--f5-orange))]/5 border border-[hsl(var(--f5-orange))] rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <div className="relative h-48 bg-[hsl(var(--luxury-gray))] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop"
                alt="Oral Unic Natal"
                className="w-full h-full object-cover opacity-70 hover:scale-110 hover:opacity-90 transition-all duration-500"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                🏆
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">ORAL UNIC NATAL</h3>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <span className="block text-xs text-[hsl(var(--text-muted))] uppercase mb-1">Investimento</span>
                  <span className="block text-sm font-bold text-white">R$ 42.000</span>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <span className="block text-xs text-[hsl(var(--text-muted))] uppercase mb-1">Faturamento</span>
                  <span className="block text-sm font-bold text-[hsl(var(--f5-orange))]">R$ 800.000+</span>
                </div>
              </div>

              <p className="text-[hsl(var(--text-secondary))] mb-2 leading-relaxed">
                R$42 mil se transformaram em <strong className="text-white">R$800 mil</strong>. Crescimento previsível mês após mês durante 1 ano.
              </p>
              <div className="text-xs text-[hsl(var(--text-muted))]">Período: 12 meses</div>
            </div>
          </div>

          {/* #3 - ORAL UNIC IBIRAMA */}
          <div className="bg-gradient-to-br from-[hsl(var(--luxury-dark))] to-[hsl(var(--f5-orange))]/5 border border-[hsl(var(--f5-orange))] rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <div className="relative h-48 bg-[hsl(var(--luxury-gray))] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop"
                alt="Oral Unic Ibirama"
                className="w-full h-full object-cover opacity-70 hover:scale-110 hover:opacity-90 transition-all duration-500"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                🏆
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">ORAL UNIC IBIRAMA</h3>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <span className="block text-xs text-[hsl(var(--text-muted))] uppercase mb-1">ROAS</span>
                  <span className="block text-lg font-bold text-[hsl(var(--f5-orange))]">64,65x</span>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <span className="block text-xs text-[hsl(var(--text-muted))] uppercase mb-1">Vendas</span>
                  <span className="block text-sm font-bold text-white">52 em 1 mês</span>
                </div>
              </div>

              <p className="text-[hsl(var(--text-secondary))] mb-2 leading-relaxed">
                <strong className="text-white">52 vendas em 30 dias</strong>. De R$5.386 para R$352 mil. O sistema que transforma leads em fechamentos.
              </p>
              <div className="text-xs text-[hsl(var(--text-muted))]">Ticket médio: R$6.774</div>
            </div>
          </div>
        </div>

        {/* TIER 2 - CASES DE APOIO */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* #4 - ODONTO EXCELLENCE CAMPECHE */}
          <div className="bg-[hsl(var(--luxury-dark))] border border-white/8 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="p-6">
              <h4 className="text-lg font-bold text-white mb-3">ODONTO EXCELLENCE CAMPECHE</h4>
              
              <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-xl mb-4">
                <span className="text-sm font-semibold text-white uppercase tracking-[2px]">ROI</span>
                <span className="text-2xl font-extrabold text-white">150x</span>
              </div>

              <p className="text-[hsl(var(--text-secondary))] text-sm mb-3 leading-relaxed">
                R$240 viraram <strong className="text-white">R$36 mil em 10 dias</strong>. ROI de 150x em harmonização facial.
              </p>
            </div>
          </div>

          {/* #5 - ORAL UNIC BLUMENAU */}
          <div className="bg-[hsl(var(--luxury-dark))] border border-white/8 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="p-6">
              <h4 className="text-lg font-bold text-white mb-3">ORAL UNIC BLUMENAU</h4>
              
              <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-xl mb-4">
                <span className="text-sm font-semibold text-white uppercase tracking-[2px]">ROAS</span>
                <span className="text-2xl font-extrabold text-white">30,25x</span>
              </div>

              <p className="text-[hsl(var(--text-secondary))] text-sm mb-3 leading-relaxed">
                R$11 mil investidos. <strong className="text-white">R$345 mil faturados</strong>. Sistema CHAVI em implantes de alto ticket.
              </p>
            </div>
          </div>

          {/* #6 - ORAL UNIC GUARATINGUETÁ */}
          <div className="bg-[hsl(var(--luxury-dark))] border border-white/8 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="p-6">
              <h4 className="text-lg font-bold text-white mb-3">ORAL UNIC GUARATINGUETÁ</h4>
              
              <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-xl mb-4">
                <span className="text-sm font-semibold text-white uppercase tracking-[2px]">ROAS</span>
                <span className="text-2xl font-extrabold text-white">25,42x</span>
              </div>

              <p className="text-[hsl(var(--text-secondary))] text-sm mb-3 leading-relaxed">
                <strong className="text-white">1.214 leads qualificados</strong> geraram R$313 mil em 30 dias. Tráfego que converte.
              </p>
            </div>
          </div>

          {/* #7 - CENTRO DO SORRISO ARAPONGAS */}
          <div className="bg-[hsl(var(--luxury-dark))] border border-white/8 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="p-6">
              <h4 className="text-lg font-bold text-white mb-3">CENTRO DO SORRISO ARAPONGAS</h4>
              
              <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-xl mb-4">
                <span className="text-sm font-semibold text-white uppercase tracking-[2px]">ROAS</span>
                <span className="text-2xl font-extrabold text-white">39x</span>
              </div>

              <p className="text-[hsl(var(--text-secondary))] text-sm mb-3 leading-relaxed">
                <strong className="text-white">R$48 mil em vendas em 10 dias</strong>. Campanha relâmpago para plantão odontológico.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Ouça de quem já transformou sua clínica
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Testimonial 1 */}
            <div className="bg-[hsl(var(--luxury-dark))] border border-white/8 rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="relative h-48 bg-[hsl(var(--luxury-gray))] overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop"
                  alt="Dr. Fernando Carvalhaes"
                  className="w-full h-full object-cover opacity-80"
                />
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_5px_20px_hsl(var(--f5-orange)/0.4)]">
                  <PlayCircle className="w-8 h-8 text-white" />
                </button>
              </div>

              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-1">Dr. Fernando Carvalhaes</h4>
                <p className="text-sm text-[hsl(var(--f5-orange))] mb-4">Cofundador - Oral Unic Odontologia</p>
                <blockquote className="text-[hsl(var(--text-secondary))] italic border-l-2 border-[hsl(var(--f5-orange))] pl-4">
                  "O Google Ads é um recurso inestimável para impulsionar as vendas. A F5 transformou nossa clínica em referência regional."
                </blockquote>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[hsl(var(--luxury-dark))] border border-white/8 rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="relative h-48 bg-[hsl(var(--luxury-gray))] overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&h=400&fit=crop"
                  alt="Dra. Maria Silva"
                  className="w-full h-full object-cover opacity-80"
                />
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_5px_20px_hsl(var(--f5-orange)/0.4)]">
                  <PlayCircle className="w-8 h-8 text-white" />
                </button>
              </div>

              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-1">Dra. Maria Silva</h4>
                <p className="text-sm text-[hsl(var(--f5-orange))] mb-4">CEO - Clínica Estética Premium</p>
                <blockquote className="text-[hsl(var(--text-secondary))] italic border-l-2 border-[hsl(var(--f5-orange))] pl-4">
                  "Em 6 meses, triplicamos o número de procedimentos de alto valor. O sistema F5 realmente funciona."
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] hover:shadow-[0_8px_30px_hsl(var(--f5-orange)/0.5)] transition-all duration-300 hover:-translate-y-1 text-lg font-bold uppercase tracking-wider px-8 py-7"
          >
            QUERO RESULTADOS COMO ESTES
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;