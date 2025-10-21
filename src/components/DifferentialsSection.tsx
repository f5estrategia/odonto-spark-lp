import { Briefcase, Megaphone, DollarSign, Wrench, Video } from "lucide-react";
import fernandoMachado from "@/assets/fernando-machado-ceo.png";
import f5LogoWhite from "@/assets/f5-logo-white.png";
import primeLogo from "@/assets/prime-logo.png";

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-24 bg-gradient-to-b from-[hsl(var(--luxury-dark))] to-[hsl(var(--luxury-black))] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-[hsl(var(--text-secondary))] bg-clip-text text-transparent mb-6">
            Não somos uma agência generalista. Somos especialistas no seu mercado.
          </h2>
          <p className="text-lg text-[hsl(var(--text-secondary))] leading-relaxed">
            70% dos nossos clientes são clínicas. Nós não apenas entendemos o seu negócio, nós o vivemos. Fazemos parte do maior ecossistema para odontologia do Brasil, com empresas de consultoria, vendas e até construção de clínicas. Nós sabemos o jogo que você está jogando.
          </p>
        </div>

        {/* Ecosystem Visual */}
        <div className="flex justify-center items-center my-24 relative min-h-[600px]">
          {/* Center Logos */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-4">
            <img src={f5LogoWhite} alt="F5 Estratégia" className="h-12 w-auto drop-shadow-[0_0_20px_hsl(var(--f5-orange)/0.6)]" />
            <div className="h-px w-16 bg-[hsl(var(--f5-orange))]/40" />
            <img src={primeLogo} alt="Prime Franchising Solutions" className="h-12 w-auto drop-shadow-[0_0_20px_hsl(var(--f5-orange)/0.4)]" />
          </div>

          {/* Orbiting Items - Positioned in a circle */}
          <div className="relative w-full max-w-[600px] h-[600px]">
            {/* Item 1 - Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 backdrop-blur-md bg-black/50 border-2 border-[hsl(var(--f5-orange))] rounded-2xl flex flex-col items-center justify-center gap-2 shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_50px_hsl(var(--f5-orange)/0.4)] group animate-float">
              <Briefcase className="w-10 h-10 text-[hsl(var(--f5-orange))] transition-colors" />
              <span className="text-sm text-white font-medium">Consultoria</span>
            </div>

            {/* Item 2 - Right */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-32 h-32 backdrop-blur-md bg-black/50 border-2 border-[hsl(var(--f5-orange))] rounded-2xl flex flex-col items-center justify-center gap-2 shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_50px_hsl(var(--f5-orange)/0.4)] group animate-float" style={{ animationDelay: "1.2s" }}>
              <Megaphone className="w-10 h-10 text-[hsl(var(--f5-orange))] transition-colors" />
              <span className="text-sm text-white font-medium">Marketing</span>
            </div>

            {/* Item 3 - Bottom Right */}
            <div className="absolute bottom-[15%] right-[15%] w-32 h-32 backdrop-blur-md bg-black/50 border-2 border-[hsl(var(--f5-orange))] rounded-2xl flex flex-col items-center justify-center gap-2 shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_50px_hsl(var(--f5-orange)/0.4)] group animate-float" style={{ animationDelay: "2.4s" }}>
              <DollarSign className="w-10 h-10 text-[hsl(var(--f5-orange))] transition-colors" />
              <span className="text-sm text-white font-medium">Vendas</span>
            </div>

            {/* Item 4 - Bottom Left */}
            <div className="absolute bottom-[15%] left-[15%] w-32 h-32 backdrop-blur-md bg-black/50 border-2 border-[hsl(var(--f5-orange))] rounded-2xl flex flex-col items-center justify-center gap-2 shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_50px_hsl(var(--f5-orange)/0.4)] group animate-float" style={{ animationDelay: "3.6s" }}>
              <Wrench className="w-10 h-10 text-[hsl(var(--f5-orange))] transition-colors" />
              <span className="text-sm text-white font-medium text-center">Infraestrutura</span>
            </div>

            {/* Item 5 - Left */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-32 h-32 backdrop-blur-md bg-black/50 border-2 border-[hsl(var(--f5-orange))] rounded-2xl flex flex-col items-center justify-center gap-2 shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_50px_hsl(var(--f5-orange)/0.4)] group animate-float" style={{ animationDelay: "4.8s" }}>
              <Video className="w-10 h-10 text-[hsl(var(--f5-orange))] transition-colors" />
              <span className="text-sm text-white font-medium">Audiovisual</span>
            </div>
          </div>
        </div>

        {/* CEO Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-24 max-w-5xl mx-auto">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={fernandoMachado}
                alt="Fernando Machado - CEO"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--luxury-black))]/60 via-transparent to-transparent" />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-2">Fernando Machado</h3>
            <span className="inline-block text-[hsl(var(--f5-orange))] font-semibold mb-6 uppercase tracking-wide text-sm">
              CEO & Fundador
            </span>
            <p className="text-lg text-[hsl(var(--text-secondary))] leading-relaxed mb-8">
              "Construímos o maior ecossistema de soluções para clínicas do Brasil. Nossa missão é simples: fazer sua clínica vender mais, com previsibilidade e escalabilidade."
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-[hsl(var(--text-secondary))]">
                <div className="w-2 h-2 bg-[hsl(var(--f5-orange))] rounded-full" />
                <span className="font-medium">15+ anos de experiência</span>
              </div>
              <div className="flex items-center gap-3 text-[hsl(var(--text-secondary))]">
                <div className="w-2 h-2 bg-[hsl(var(--f5-orange))] rounded-full" />
                <span className="font-medium">3.000+ clínicas atendidas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
