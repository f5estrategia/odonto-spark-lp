import { TrendingDown, UserX, Wrench, BarChart3, Users } from "lucide-react";

const PainPoints = () => {
  const painPoints = [
    {
      icon: TrendingDown,
      title: "Investimento sem retorno claro",
      description: "Marketing que não traz resultados mensuráveis e você não sabe onde está o problema.",
    },
    {
      icon: UserX,
      title: "Leads desqualificados",
      description: "Pacientes que só procuram por preço e não valorizam a qualidade do seu trabalho.",
    },
    {
      icon: Wrench,
      title: "Equipe que não converte",
      description: "Recepção que não sabe transformar contatos em agendamentos efetivos.",
    },
    {
      icon: BarChart3,
      title: "Falta de métricas",
      description: "Decisões baseadas em achismo, sem números reais para guiar o crescimento.",
    },
    {
      icon: Users,
      title: "Concorrência agressiva",
      description: "Competidores cada vez mais fortes na sua região, roubando seus pacientes.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Sua clínica está cheia,<br />
            mas o faturamento não cresce?
          </h2>
          <p className="text-lg text-muted-foreground">
            Se você se identifica com algum destes desafios, nós podemos ajudar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <point.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
