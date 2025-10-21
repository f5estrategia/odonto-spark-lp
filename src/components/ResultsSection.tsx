import { Button } from "@/components/ui/button";
import { ArrowRight, Store, PlayCircle } from "lucide-react";

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
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-[hsl(var(--text-secondary))] bg-clip-text text-transparent mb-4">
            Não acredite em nós. Acredite nos resultados.
          </h2>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Featured Case */}
          <div className="md:col-span-2 bg-gradient-to-br from-[hsl(var(--luxury-dark))] to-[hsl(var(--f5-orange))]/5 border border-[hsl(var(--f5-orange))] rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <div className="relative h-64 bg-[hsl(var(--luxury-gray))] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=400&fit=crop"
                alt="Clínica em Santa Catarina"
                className="w-full h-full object-cover opacity-70 hover:scale-110 hover:opacity-90 transition-all duration-500"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                Case de Sucesso
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Clínica em Santa Catarina</h3>

              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <div className="flex-1 text-center p-4 bg-white/5 rounded-xl min-w-[150px]">
                  <span className="block text-xs text-[hsl(var(--text-muted))] uppercase tracking-wide mb-2">Antes</span>
                  <span className="block text-lg text-[hsl(var(--text-secondary))]">R$ 750 em anúncios</span>
                </div>

                <ArrowRight className="text-[hsl(var(--f5-orange))] animate-pulse flex-shrink-0" />

                <div className="flex-1 text-center p-4 bg-white/5 rounded-xl min-w-[150px]">
                  <span className="block text-xs text-[hsl(var(--text-muted))] uppercase tracking-wide mb-2">Depois</span>
                  <span className="block text-xl font-bold text-[hsl(var(--f5-orange))]">R$ 82.000 em faturamento</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 p-4 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-2xl">
                <span className="text-sm font-semibold text-white uppercase tracking-[2px]">ROI</span>
                <span className="text-3xl font-extrabold text-white">109x</span>
              </div>
            </div>
          </div>

          {/* Regular Case */}
          <div className="bg-[hsl(var(--luxury-dark))] border border-white/8 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <div className="relative h-48 bg-[hsl(var(--luxury-gray))] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop"
                alt="Rede de Franquias"
                className="w-full h-full object-cover opacity-70 hover:scale-110 hover:opacity-90 transition-all duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Rede de Franquias</h3>
              <p className="text-[hsl(var(--text-secondary))] mb-4 leading-relaxed">
                Aumento de 20% no faturamento e expansão de 3 para 5 unidades em 18 meses.
              </p>
              <div className="flex items-center gap-2 p-3 bg-[hsl(var(--f5-orange))]/10 rounded-xl text-[hsl(var(--f5-orange))] font-semibold">
                <Store className="w-5 h-5" />
                <span>+2 novas unidades</span>
              </div>
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
