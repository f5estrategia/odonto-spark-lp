import { TrendingDown, UserX, PhoneMissed, BarChart3, Users } from "lucide-react";

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
      icon: PhoneMissed,
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
    <section className="py-24 bg-[hsl(var(--luxury-black))] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-[hsl(var(--text-secondary))] bg-clip-text text-transparent mb-6">
            Sua clínica está cheia,<br />mas o faturamento não cresce?
          </h2>
          <p className="text-lg text-[hsl(var(--text-secondary))]">
            Se você se identifica com algum destes desafios, nós podemos ajudar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-[hsl(var(--luxury-dark))] border border-white/8 rounded-3xl p-8 hover:-translate-y-2 hover:bg-[hsl(var(--luxury-dark-soft))] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--f5-orange))]/10 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[hsl(var(--f5-orange))] group-hover:to-[hsl(var(--f5-orange-dark))] group-hover:scale-110 transition-all duration-300">
                  <point.icon className="w-8 h-8 text-[hsl(var(--f5-orange))] group-hover:text-white transition-colors" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{point.title}</h3>
              <p className="text-[hsl(var(--text-secondary))] leading-relaxed">
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
