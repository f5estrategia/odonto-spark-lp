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

          {/* #2 - ORAL UNIC VILA MARIANA */}
          <div className="bg-gradient-to-br from-[hsl(var(--luxury-dark))] to-[hsl(var(--f5-orange))]/5 border border-[hsl(var(--f5-orange))] rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <div className="relative h-48 bg-[hsl(var(--luxury-gray))] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop"
                alt="Oral Unic Vila Mariana"
                className="w-full h-full object-cover opacity-70 hover:scale-110 hover:opacity-90 transition-all duration-500"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                🏆
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">ORAL UNIC VILA MARIANA</h3>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <span className="block text-xs text-[hsl(var(--text-muted))] uppercase mb-1">Vendas</span>
                  <span className="block text-sm font-bold text-[hsl(var(--f5-orange))]">R$ 2 MI+</span>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <span className="block text-xs text-[hsl(var(--text-muted))] uppercase mb-1">Período</span>
                  <span className="block text-sm font-bold text-white">14 meses</span>
                </div>
              </div>

              <p className="text-[hsl(var(--text-secondary))] mb-2 leading-relaxed">
                Mais de <strong className="text-white">R$2 milhões em vendas</strong> em 14 meses. Crescimento consistente e escalável.
              </p>
              <div className="text-xs text-[hsl(var(--text-muted))]">Ticket médio: R$12.500 | Comparecimento: 80%</div>
            </div>
          </div>

          {/* #3 - ORAL UNIC JOÃO PESSOA */}
          <div className="bg-gradient-to-br from-[hsl(var(--luxury-dark))] to-[hsl(var(--f5-orange))]/5 border border-[hsl(var(--f5-orange))] rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <div className="relative h-48 bg-[hsl(var(--luxury-gray))] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop"
                alt="Oral Unic João Pessoa"
                className="w-full h-full object-cover opacity-70 hover:scale-110 hover:opacity-90 transition-all duration-500"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                🏆
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">ORAL UNIC JOÃO PESSOA</h3>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <span className="block text-xs text-[hsl(var(--text-muted))] uppercase mb-1">Vendas</span>
                  <span className="block text-sm font-bold text-[hsl(var(--f5-orange))]">R$ 820 mil</span>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <span className="block text-xs text-[hsl(var(--text-muted))] uppercase mb-1">ROAS</span>
                  <span className="block text-lg font-bold text-[hsl(var(--f5-orange))]">27x</span>
                </div>
              </div>

              <p className="text-[hsl(var(--text-secondary))] mb-2 leading-relaxed">
                <strong className="text-white">R$820 mil efetivados</strong> com ROAS de 27x. Taxa de conversão de 43% com CPL de apenas R$18,34.
              </p>
              <div className="text-xs text-[hsl(var(--text-muted))]">Período: 8 meses</div>
            </div>
          </div>
        </div>

        {/* TIER 2 - CASES DE APOIO */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* #4 - ORAL UNIC NATAL */}
          <div className="bg-[hsl(var(--luxury-dark))] border border-white/8 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="p-6">
              <h4 className="text-lg font-bold text-white mb-3">ORAL UNIC NATAL</h4>
              
              <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-xl mb-4">
                <span className="text-sm font-semibold text-white uppercase tracking-[2px]">Vendas</span>
                <span className="text-2xl font-extrabold text-white">R$ 800k+</span>
              </div>

              <p className="text-[hsl(var(--text-secondary))] text-sm mb-3 leading-relaxed">
                R$42 mil se transformaram em <strong className="text-white">R$800 mil</strong>. Crescimento previsível mês após mês.
              </p>
              <div className="text-xs text-[hsl(var(--text-muted))]">Período: 12 meses</div>
            </div>
          </div>

          {/* #5 - ORAL UNIC IBIRAMA */}
          <div className="bg-[hsl(var(--luxury-dark))] border border-white/8 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="p-6">
              <h4 className="text-lg font-bold text-white mb-3">ORAL UNIC IBIRAMA</h4>
              
              <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-xl mb-4">
                <span className="text-sm font-semibold text-white uppercase tracking-[2px]">ROAS</span>
                <span className="text-2xl font-extrabold text-white">64,65x</span>
              </div>

              <p className="text-[hsl(var(--text-secondary))] text-sm mb-3 leading-relaxed">
                <strong className="text-white">52 vendas em 30 dias</strong>. R$352 mil faturados. Ticket médio de R$6.774.
              </p>
            </div>
          </div>

          {/* #6 - ORAL UNIC PRESIDENTE PRUDENTE */}
          <div className="bg-[hsl(var(--luxury-dark))] border border-white/8 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="p-6">
              <h4 className="text-lg font-bold text-white mb-3">ORAL UNIC PRES. PRUDENTE</h4>
              
              <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-xl mb-4">
                <span className="text-sm font-semibold text-white uppercase tracking-[2px]">ROAS</span>
                <span className="text-2xl font-extrabold text-white">28x</span>
              </div>

              <p className="text-[hsl(var(--text-secondary))] text-sm mb-3 leading-relaxed">
                <strong className="text-white">R$93.100 efetivados</strong> em apenas 18 dias. Velocidade e conversão.
              </p>
            </div>
          </div>

          {/* #7 - INNOVARE SORRISOS */}
          <div className="bg-[hsl(var(--luxury-dark))] border border-white/8 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="p-6">
              <h4 className="text-lg font-bold text-white mb-3">INNOVARE SORRISOS</h4>
              
              <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-xl mb-4">
                <span className="text-sm font-semibold text-white uppercase tracking-[2px]">Vendas</span>
                <span className="text-2xl font-extrabold text-white">R$ 105k</span>
              </div>

              <p className="text-[hsl(var(--text-secondary))] text-sm mb-3 leading-relaxed">
                Mais de <strong className="text-white">R$105 mil em vendas</strong> em 30 dias. Crescimento acelerado.
              </p>
            </div>
          </div>

          {/* #8 - CLINIC DENTE */}
          <div className="bg-[hsl(var(--luxury-dark))] border border-white/8 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="p-6">
              <h4 className="text-lg font-bold text-white mb-3">CLINIC DENTE</h4>
              
              <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-xl mb-4">
                <span className="text-sm font-semibold text-white uppercase tracking-[2px]">Vendas</span>
                <span className="text-2xl font-extrabold text-white">R$ 103k</span>
              </div>

              <p className="text-[hsl(var(--text-secondary))] text-sm mb-3 leading-relaxed">
                <strong className="text-white">R$103.160 em vendas</strong> com tráfego pago em apenas 1 mês.
              </p>
            </div>
          </div>

          {/* #9 - SERIDÓ MED */}
          <div className="bg-[hsl(var(--luxury-dark))] border border-white/8 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="p-6">
              <h4 className="text-lg font-bold text-white mb-3">SERIDÓ MED</h4>
              
              <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-xl mb-4">
                <span className="text-sm font-semibold text-white uppercase tracking-[2px]">Receita</span>
                <span className="text-2xl font-extrabold text-white">R$ 100k</span>
              </div>

              <p className="text-[hsl(var(--text-secondary))] text-sm mb-3 leading-relaxed">
                <strong className="text-white">R$100 mil em receita</strong> com investimento de apenas R$3.256 em 1 mês.
              </p>
            </div>
          </div>

          {/* #10 - ODONTO EXCELLENCE */}
          <div className="bg-[hsl(var(--luxury-dark))] border border-white/8 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="p-6">
              <h4 className="text-lg font-bold text-white mb-3">ODONTO EXCELLENCE</h4>
              
              <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-xl mb-4">
                <span className="text-sm font-semibold text-white uppercase tracking-[2px]">CPL</span>
                <span className="text-2xl font-extrabold text-white">R$ 24</span>
              </div>

              <p className="text-[hsl(var(--text-secondary))] text-sm mb-3 leading-relaxed">
                CPL reduzido de <strong className="text-white">R$150 para R$24</strong> em menos de 30 dias.
              </p>
            </div>
          </div>

          {/* #11 - ORAL UNIC SERTÃOZINHO */}
          <div className="bg-[hsl(var(--luxury-dark))] border border-white/8 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <div className="p-6">
              <h4 className="text-lg font-bold text-white mb-3">ORAL UNIC SERTÃOZINHO</h4>
              
              <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-xl mb-4">
                <span className="text-sm font-semibold text-white uppercase tracking-[2px]">CPL</span>
                <span className="text-2xl font-extrabold text-white">R$ 5,54</span>
              </div>

              <p className="text-[hsl(var(--text-secondary))] text-sm mb-3 leading-relaxed">
                CPL reduzido de <strong className="text-white">R$65 para R$5,54</strong> em menos de 24h.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Não é Sobre Nós. É Sobre Quem Confia em Nós.
            </h3>
            <p className="text-lg text-[hsl(var(--text-secondary))] max-w-2xl mx-auto">
              Veja o que os donos de clínicas que já transformaram seus resultados têm a dizer
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Testimonial 1 - Vertical Video */}
            <div className="bg-[hsl(var(--luxury-dark))] border border-white/8 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[9/16] bg-[hsl(var(--luxury-gray))] overflow-hidden group">
                <video 
                  className="w-full h-full object-cover"
                  poster="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=700&fit=crop"
                  controls
                >
                  <source src="/videos/depoimento-1.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h4 className="text-base font-bold text-white mb-1">Dr. Fernando Carvalhaes</h4>
                  <p className="text-xs text-[hsl(var(--f5-orange))]">Oral Unic Odontologia</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Vertical Video */}
            <div className="bg-[hsl(var(--luxury-dark))] border border-white/8 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[9/16] bg-[hsl(var(--luxury-gray))] overflow-hidden group">
                <video 
                  className="w-full h-full object-cover"
                  poster="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=700&fit=crop"
                  controls
                >
                  <source src="/videos/depoimento-2.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h4 className="text-base font-bold text-white mb-1">Dra. Ana Paula</h4>
                  <p className="text-xs text-[hsl(var(--f5-orange))]">Clínica Premium</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 - Vertical Video */}
            <div className="bg-[hsl(var(--luxury-dark))] border border-white/8 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[9/16] bg-[hsl(var(--luxury-gray))] overflow-hidden group">
                <video 
                  className="w-full h-full object-cover"
                  poster="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=700&fit=crop"
                  controls
                >
                  <source src="/videos/depoimento-3.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h4 className="text-base font-bold text-white mb-1">Dr. Carlos Santos</h4>
                  <p className="text-xs text-[hsl(var(--f5-orange))]">Viva Odontologia</p>
                </div>
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