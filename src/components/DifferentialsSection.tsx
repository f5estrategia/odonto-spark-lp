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
        <div className="flex justify-center items-center my-24 relative min-h-[500px]">
          {/* Center Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-full flex flex-col items-center justify-center shadow-[0_20px_50px_hsl(var(--f5-orange)/0.6)] z-10">
            <div className="flex flex-col items-center gap-2">
              <img src={f5LogoWhite} alt="F5 Estratégia" className="h-8 w-auto" />
              <div className="h-px w-12 bg-white/30" />
              <img src={primeLogo} alt="Prime Franchising Solutions" className="h-6 w-auto" />
            </div>
            <span className="text-xs font-bold text-white uppercase tracking-wider mt-3">Estratégia</span>
          </div>

          {/* Orbiting Items */}
          <div className="relative w-full max-w-[500px] h-[500px]">
            {/* Item 1 - Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-28 backdrop-blur-md bg-black/50 border-2 border-[hsl(var(--f5-orange))] rounded-2xl flex flex-col items-center justify-center gap-2 shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_50px_hsl(var(--f5-orange)/0.4)] group animate-float">
              <Briefcase className="w-8 h-8 text-[hsl(var(--f5-orange))] transition-colors" />
              <span className="text-xs text-white font-medium">Consultoria</span>
            </div>

            {/* Item 2 - Top Right */}
            <div className="absolute top-[30%] right-0 w-28 h-28 backdrop-blur-md bg-black/50 border-2 border-[hsl(var(--f5-orange))] rounded-2xl flex flex-col items-center justify-center gap-2 shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_50px_hsl(var(--f5-orange)/0.4)] group animate-float" style={{ animationDelay: "1s" }}>
              <Megaphone className="w-8 h-8 text-[hsl(var(--f5-orange))] transition-colors" />
              <span className="text-xs text-white font-medium">Marketing</span>
            </div>

            {/* Item 3 - Bottom Right */}
            <div className="absolute bottom-[30%] right-0 w-28 h-28 backdrop-blur-md bg-black/50 border-2 border-[hsl(var(--f5-orange))] rounded-2xl flex flex-col items-center justify-center gap-2 shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_50px_hsl(var(--f5-orange)/0.4)] group animate-float" style={{ animationDelay: "2s" }}>
              <DollarSign className="w-8 h-8 text-[hsl(var(--f5-orange))] transition-colors" />
              <span className="text-xs text-white font-medium">Vendas</span>
            </div>

            {/* Item 4 - Bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-28 h-28 backdrop-blur-md bg-black/50 border-2 border-[hsl(var(--f5-orange))] rounded-2xl flex flex-col items-center justify-center gap-2 shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_50px_hsl(var(--f5-orange)/0.4)] group animate-float" style={{ animationDelay: "3s" }}>
              <Wrench className="w-8 h-8 text-[hsl(var(--f5-orange))] transition-colors" />
              <span className="text-xs text-white font-medium text-center">Infraestrutura</span>
            </div>

            {/* Item 5 - Bottom Left */}
            <div className="absolute bottom-[30%] left-0 w-28 h-28 backdrop-blur-md bg-black/50 border-2 border-[hsl(var(--f5-orange))] rounded-2xl flex flex-col items-center justify-center gap-2 shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_50px_hsl(var(--f5-orange)/0.4)] group animate-float" style={{ animationDelay: "4s" }}>
              <Video className="w-8 h-8 text-[hsl(var(--f5-orange))] transition-colors" />
              <span className="text-xs text-white font-medium">Audiovisual</span>
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
