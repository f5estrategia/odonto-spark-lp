import { Target, Megaphone, Rocket, Users2, BarChart4 } from "lucide-react";

const Methodology = () => {
  const steps = [
    {
      number: "01",
      icon: Target,
      title: "Diagnóstico e Perfil de Paciente Ideal",
      description: "Mapeamos seus procedimentos mais lucrativos e identificamos o perfil exato de paciente que sua clínica precisa atrair.",
    },
    {
      number: "02",
      icon: Megaphone,
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
      icon: Users2,
      title: "Otimização da Conversão",
      description: "Treinamos sua equipe com scripts comprovados para transformar cada lead em agendamento confirmado.",
    },
    {
      number: "05",
      icon: BarChart4,
      title: "Dashboard de Performance",
      description: "Você acompanha o ROI de cada real investido em tempo real, com métricas claras e acionáveis.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30" id="metodologia">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Chega de achismo. Nosso Sistema é a<br />
            Previsibilidade que sua Clínica Precisa
          </h2>
          <p className="text-lg text-muted-foreground">
            Aplicamos uma metodologia validada em mais de 3.000 clínicas para criar um motor de crescimento previsível para o seu negócio.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className="flex gap-6 items-start">
                {/* Number circle with vertical line */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-24 bg-primary/30 mt-2" />
                  )}
                </div>

                {/* Content card */}
                <div className="flex-1 bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-xl font-bold">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
