import { Target, Award, Rocket, Users, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Methodology = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("contato");
    if (formSection) {
      const headerHeight = 100;
      const targetPosition = formSection.offsetTop - headerHeight - 20;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  const steps = [
    {
      number: "01",
      icon: Target,
      title: "Diagnóstico e Perfil de Paciente Ideal",
      description: "Mapeamos seus procedimentos mais lucrativos e identificamos o perfil exato de paciente que sua clínica precisa atrair.",
    },
    {
      number: "02",
      icon: Award,
      title: "Construção de Autoridade Digital",
      description: "Posicionamos sua clínica como a referência absoluta na sua cidade através de conteúdo estratégico e presença digital dominante.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Motor de Aquisição de Pacientes",
      description: "Criamos campanhas de performance multicanal para atrair pacientes de alto valor que realmente precisam dos seus serviços.",
    },
    {
      number: "04",
      icon: Users,
      title: "Otimização da Conversão",
      description: "Treinamos sua equipe com scripts comprovados para transformar cada lead em agendamento confirmado.",
    },
    {
      number: "05",
      icon: BarChart,
      title: "Dashboard de Performance",
      description: "Você acompanha o ROI de cada real investido em tempo real, com métricas claras e acionáveis.",
    },
  ];

  return (
    <section id="sistema" className="py-24 bg-gradient-to-b from-[hsl(var(--luxury-black))] to-[hsl(var(--luxury-dark))] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-[hsl(var(--text-secondary))] bg-clip-text text-transparent mb-6">
            Chega de achismo. Nosso Sistema é a Previsibilidade que sua Clínica Precisa
          </h2>
          <p className="text-lg text-[hsl(var(--text-secondary))] leading-relaxed">
            Aplicamos uma metodologia validada em mais de 3.000 clínicas para criar um motor de crescimento previsível para o seu negócio.
          </p>
        </div>

        {/* System Flow */}
        <div className="max-w-4xl mx-auto space-y-8 relative mb-16">
          {/* Vertical Line */}
          <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--f5-orange))] to-transparent opacity-30" />

          {steps.map((step, index) => (
            <div key={index} className="grid grid-cols-[80px_1fr] gap-6 items-start relative">
              {/* Number */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] flex items-center justify-center text-white font-extrabold text-2xl shadow-[0_10px_30px_hsl(var(--f5-orange)/0.4)] relative z-10">
                {step.number}
              </div>

              {/* Content */}
              <div className="bg-[hsl(var(--luxury-dark))] border border-white/8 rounded-2xl p-6 hover:translate-x-2 hover:bg-[hsl(var(--luxury-dark-soft))] hover:border-[hsl(var(--f5-orange))] hover:shadow-[0_10px_30px_hsl(var(--f5-orange)/0.2)] transition-all duration-300 group relative">
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-[hsl(var(--text-secondary))] leading-relaxed">
                  {step.description}
                </p>
                
                {/* Icon */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-[hsl(var(--f5-orange))]/10 rounded-xl flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-[hsl(var(--f5-orange))]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={scrollToForm}
            size="lg"
            variant="outline"
            className="border-2 border-[hsl(var(--f5-orange))] text-white hover:bg-[hsl(var(--f5-orange))] hover:shadow-[0_8px_30px_hsl(var(--f5-orange)/0.4)] transition-all duration-300 hover:-translate-y-1 text-lg font-bold uppercase tracking-wider px-8 py-7"
          >
            QUERO ENTENDER O SISTEMA F5
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
