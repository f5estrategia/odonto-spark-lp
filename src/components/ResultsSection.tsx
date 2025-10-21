import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const ResultsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollToForm = () => {
    const formSection = document.getElementById("contato");
    if (formSection) {
      const headerHeight = 100;
      const targetPosition = formSection.offsetTop - headerHeight - 20;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Load VTurb SDK script
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {/* #4 - ORAL UNIC NATAL */}
          <div className="group bg-[hsl(var(--luxury-dark))] border border-white/5 rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:border-white/10">
            <div className="p-6 space-y-5">
              <h4 className="text-base font-bold text-white tracking-tight">ORAL UNIC NATAL</h4>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-2xl blur-sm opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-2xl p-4 border border-[hsl(var(--f5-orange))]/20">
                  <div className="text-[10px] font-bold text-white/80 uppercase tracking-[3px] mb-1">Vendas</div>
                  <div className="text-3xl font-black text-white">R$ 800k+</div>
                </div>
              </div>

              <p className="text-[hsl(var(--text-secondary))] text-sm leading-relaxed">
                R$42 mil se transformaram em <span className="text-white font-semibold">R$800 mil</span>. Crescimento previsível mês após mês.
              </p>
              <div className="text-xs text-[hsl(var(--text-muted))] pt-2 border-t border-white/5">Período: 12 meses</div>
            </div>
          </div>

          {/* #5 - ORAL UNIC IBIRAMA */}
          <div className="group bg-[hsl(var(--luxury-dark))] border border-white/5 rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:border-white/10">
            <div className="p-6 space-y-5">
              <h4 className="text-base font-bold text-white tracking-tight">ORAL UNIC IBIRAMA</h4>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-2xl blur-sm opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-2xl p-4 border border-[hsl(var(--f5-orange))]/20">
                  <div className="text-[10px] font-bold text-white/80 uppercase tracking-[3px] mb-1">ROAS</div>
                  <div className="text-3xl font-black text-white">64,65x</div>
                </div>
              </div>

              <p className="text-[hsl(var(--text-secondary))] text-sm leading-relaxed">
                <span className="text-white font-semibold">52 vendas em 30 dias</span>. R$352 mil faturados. Ticket médio de R$6.774.
              </p>
            </div>
          </div>

          {/* #6 - ORAL UNIC PRESIDENTE PRUDENTE */}
          <div className="group bg-[hsl(var(--luxury-dark))] border border-white/5 rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:border-white/10">
            <div className="p-6 space-y-5">
              <h4 className="text-base font-bold text-white tracking-tight">ORAL UNIC PRES. PRUDENTE</h4>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-2xl blur-sm opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-2xl p-4 border border-[hsl(var(--f5-orange))]/20">
                  <div className="text-[10px] font-bold text-white/80 uppercase tracking-[3px] mb-1">ROAS</div>
                  <div className="text-3xl font-black text-white">28x</div>
                </div>
              </div>

              <p className="text-[hsl(var(--text-secondary))] text-sm leading-relaxed">
                <span className="text-white font-semibold">R$93.100 efetivados</span> em apenas 18 dias. Velocidade e conversão.
              </p>
            </div>
          </div>

          {/* #7 - INNOVARE SORRISOS */}
          <div className="group bg-[hsl(var(--luxury-dark))] border border-white/5 rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:border-white/10">
            <div className="p-6 space-y-5">
              <h4 className="text-base font-bold text-white tracking-tight">INNOVARE SORRISOS</h4>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-2xl blur-sm opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-2xl p-4 border border-[hsl(var(--f5-orange))]/20">
                  <div className="text-[10px] font-bold text-white/80 uppercase tracking-[3px] mb-1">Vendas</div>
                  <div className="text-3xl font-black text-white">R$ 105k</div>
                </div>
              </div>

              <p className="text-[hsl(var(--text-secondary))] text-sm leading-relaxed">
                Mais de <span className="text-white font-semibold">R$105 mil em vendas</span> em 30 dias. Crescimento acelerado.
              </p>
            </div>
          </div>

          {/* #8 - CLINIC DENTE */}
          <div className="group bg-[hsl(var(--luxury-dark))] border border-white/5 rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:border-white/10">
            <div className="p-6 space-y-5">
              <h4 className="text-base font-bold text-white tracking-tight">CLINIC DENTE</h4>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-2xl blur-sm opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-2xl p-4 border border-[hsl(var(--f5-orange))]/20">
                  <div className="text-[10px] font-bold text-white/80 uppercase tracking-[3px] mb-1">Vendas</div>
                  <div className="text-3xl font-black text-white">R$ 103k</div>
                </div>
              </div>

              <p className="text-[hsl(var(--text-secondary))] text-sm leading-relaxed">
                <span className="text-white font-semibold">R$103.160 em vendas</span> com tráfego pago em apenas 1 mês.
              </p>
            </div>
          </div>

          {/* #9 - SERIDÓ MED */}
          <div className="group bg-[hsl(var(--luxury-dark))] border border-white/5 rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:border-white/10">
            <div className="p-6 space-y-5">
              <h4 className="text-base font-bold text-white tracking-tight">SERIDÓ MED</h4>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-2xl blur-sm opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-2xl p-4 border border-[hsl(var(--f5-orange))]/20">
                  <div className="text-[10px] font-bold text-white/80 uppercase tracking-[3px] mb-1">Receita</div>
                  <div className="text-3xl font-black text-white">R$ 100k</div>
                </div>
              </div>

              <p className="text-[hsl(var(--text-secondary))] text-sm leading-relaxed">
                <span className="text-white font-semibold">R$100 mil em receita</span> com investimento de apenas R$3.256 em 1 mês.
              </p>
            </div>
          </div>

          {/* #10 - ODONTO EXCELLENCE */}
          <div className="group bg-[hsl(var(--luxury-dark))] border border-white/5 rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:border-white/10">
            <div className="p-6 space-y-5">
              <h4 className="text-base font-bold text-white tracking-tight">ODONTO EXCELLENCE</h4>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-2xl blur-sm opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-2xl p-4 border border-[hsl(var(--f5-orange))]/20">
                  <div className="text-[10px] font-bold text-white/80 uppercase tracking-[3px] mb-1">CPL</div>
                  <div className="text-3xl font-black text-white">R$ 24</div>
                </div>
              </div>

              <p className="text-[hsl(var(--text-secondary))] text-sm leading-relaxed">
                CPL reduzido de <span className="text-white font-semibold">R$150 para R$24</span> em menos de 30 dias.
              </p>
            </div>
          </div>

          {/* #11 - ORAL UNIC SERTÃOZINHO */}
          <div className="group bg-[hsl(var(--luxury-dark))] border border-white/5 rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:border-white/10">
            <div className="p-6 space-y-5">
              <h4 className="text-base font-bold text-white tracking-tight">ORAL UNIC SERTÃOZINHO</h4>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-2xl blur-sm opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-2xl p-4 border border-[hsl(var(--f5-orange))]/20">
                  <div className="text-[10px] font-bold text-white/80 uppercase tracking-[3px] mb-1">CPL</div>
                  <div className="text-3xl font-black text-white">R$ 5,54</div>
                </div>
              </div>

              <p className="text-[hsl(var(--text-secondary))] text-sm leading-relaxed">
                CPL reduzido de <span className="text-white font-semibold">R$65 para R$5,54</span> em menos de 24h.
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

          {/* Carousel Container */}
          <div className="relative max-w-5xl mx-auto px-4">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">
                {/* Video 1 */}
                <div className="flex-[0_0_calc(33.333%-12px)] min-w-0">
                  <div id="ifr_68f7e3478ea58bfe7173c5b5_wrapper" className="w-full">
                    <div style={{ position: 'relative', padding: '177.77777777777777% 0 0 0' }} id="ifr_68f7e3478ea58bfe7173c5b5_aspect">
                      <iframe 
                        frameBorder="0" 
                        allowFullScreen 
                        src="about:blank" 
                        id="ifr_68f7e3478ea58bfe7173c5b5" 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                        referrerPolicy="origin" 
                        onLoad={(e) => {
                          const iframe = e.target as HTMLIFrameElement;
                          if (iframe.src === 'about:blank') {
                            iframe.src = `https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/68f7e3478ea58bfe7173c5b5/v4/embed.html${location.search || '?'}&vl=${encodeURIComponent(location.href)}`;
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Video 2 */}
                <div className="flex-[0_0_calc(33.333%-12px)] min-w-0">
                  <div id="ifr_68f7dee38ea58bfe7173c072_wrapper" className="w-full">
                    <div style={{ position: 'relative', padding: '177.77777777777777% 0 0 0' }} id="ifr_68f7dee38ea58bfe7173c072_aspect">
                      <iframe 
                        frameBorder="0" 
                        allowFullScreen 
                        src="about:blank" 
                        id="ifr_68f7dee38ea58bfe7173c072" 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                        referrerPolicy="origin" 
                        onLoad={(e) => {
                          const iframe = e.target as HTMLIFrameElement;
                          if (iframe.src === 'about:blank') {
                            iframe.src = `https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/68f7dee38ea58bfe7173c072/v4/embed.html${location.search || '?'}&vl=${encodeURIComponent(location.href)}`;
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Video 3 */}
                <div className="flex-[0_0_calc(33.333%-12px)] min-w-0">
                  <div id="ifr_68f7d9cbc9a120c812a9e6a7_wrapper" className="w-full">
                    <div style={{ position: 'relative', padding: '177.77777777777777% 0 0 0' }} id="ifr_68f7d9cbc9a120c812a9e6a7_aspect">
                      <iframe 
                        frameBorder="0" 
                        allowFullScreen 
                        src="about:blank" 
                        id="ifr_68f7d9cbc9a120c812a9e6a7" 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                        referrerPolicy="origin" 
                        onLoad={(e) => {
                          const iframe = e.target as HTMLIFrameElement;
                          if (iframe.src === 'about:blank') {
                            iframe.src = `https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/68f7d9cbc9a120c812a9e6a7/v4/embed.html${location.search || '?'}&vl=${encodeURIComponent(location.href)}`;
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Video 4 */}
                <div className="flex-[0_0_calc(33.333%-12px)] min-w-0">
                  <div id="ifr_68f7d9ef21b0a6afaf4cc36c_wrapper" className="w-full">
                    <div style={{ position: 'relative', padding: '177.77777777777777% 0 0 0' }} id="ifr_68f7d9ef21b0a6afaf4cc36c_aspect">
                      <iframe 
                        frameBorder="0" 
                        allowFullScreen 
                        src="about:blank" 
                        id="ifr_68f7d9ef21b0a6afaf4cc36c" 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                        referrerPolicy="origin" 
                        onLoad={(e) => {
                          const iframe = e.target as HTMLIFrameElement;
                          if (iframe.src === 'about:blank') {
                            iframe.src = `https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/68f7d9ef21b0a6afaf4cc36c/v4/embed.html${location.search || '?'}&vl=${encodeURIComponent(location.href)}`;
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Video 5 */}
                <div className="flex-[0_0_calc(33.333%-12px)] min-w-0">
                  <div id="ifr_68f7df118ea58bfe7173c0b0_wrapper" className="w-full">
                    <div style={{ position: 'relative', padding: '177.77777777777777% 0 0 0' }} id="ifr_68f7df118ea58bfe7173c0b0_aspect">
                      <iframe 
                        frameBorder="0" 
                        allowFullScreen 
                        src="about:blank" 
                        id="ifr_68f7df118ea58bfe7173c0b0" 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                        referrerPolicy="origin" 
                        onLoad={(e) => {
                          const iframe = e.target as HTMLIFrameElement;
                          if (iframe.src === 'about:blank') {
                            iframe.src = `https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/68f7df118ea58bfe7173c0b0/v4/embed.html${location.search || '?'}&vl=${encodeURIComponent(location.href)}`;
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Video 6 */}
                <div className="flex-[0_0_calc(33.333%-12px)] min-w-0">
                  <div id="ifr_68f7ebffa1ac75e611ca004b_wrapper" className="w-full">
                    <div style={{ position: 'relative', padding: '56.25% 0 0 0' }} id="ifr_68f7ebffa1ac75e611ca004b_aspect">
                      <iframe 
                        frameBorder="0" 
                        allowFullScreen 
                        src="about:blank" 
                        id="ifr_68f7ebffa1ac75e611ca004b" 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                        referrerPolicy="origin" 
                        onLoad={(e) => {
                          const iframe = e.target as HTMLIFrameElement;
                          if (iframe.src === 'about:blank') {
                            iframe.src = `https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/68f7ebffa1ac75e611ca004b/v4/embed.html${location.search || '?'}&vl=${encodeURIComponent(location.href)}`;
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-[hsl(var(--f5-orange))] hover:bg-[hsl(var(--f5-orange-dark))] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-[hsl(var(--f5-orange))] hover:bg-[hsl(var(--f5-orange-dark))] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
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