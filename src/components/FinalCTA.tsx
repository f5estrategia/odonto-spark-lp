import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import fernandoMachado from "@/assets/fernando-machado-ceo.png";

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    clinica: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Recebemos seu contato!",
      description: "Nossa equipe entrará em contato em até 2 horas úteis.",
    });

    setFormData({ nome: "", email: "", telefone: "", clinica: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="py-24 bg-[hsl(var(--luxury-black))]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Info + CEO Image */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Pronto para transformar seu marketing no seu maior vendedor?
            </h2>
            <p className="text-lg text-[hsl(var(--text-secondary))] mb-8 leading-relaxed">
              Agende uma sessão de diagnóstico gratuita. Você vai sair com um plano de ação claro para sua clínica, mesmo que decida não trabalhar conosco.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Análise completa da sua presença digital",
                "Mapeamento de oportunidades de crescimento",
                "Plano de ação personalizado para sua clínica",
                "Sem compromisso - 100% gratuito",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[hsl(var(--f5-orange))] flex-shrink-0 mt-0.5" />
                  <span className="text-[hsl(var(--text-secondary))]">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Fernando Machado Image */}
            <div className="flex items-center gap-4 p-6 bg-gradient-to-br from-[hsl(var(--luxury-dark))] to-[hsl(var(--luxury-black))] border border-white/10 rounded-2xl shadow-xl">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-3 border-[hsl(var(--f5-orange))] flex-shrink-0 shadow-[0_0_30px_hsl(var(--f5-orange)/0.4)]">
                <img
                  src={fernandoMachado}
                  alt="Fernando Machado - CEO"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <p className="text-white font-bold text-xl mb-1">Fernando Machado</p>
                <p className="text-[hsl(var(--f5-orange))] text-sm font-semibold mb-1">CEO & Fundador</p>
                <p className="text-[hsl(var(--text-secondary))] text-xs">F5 Marketing</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-[hsl(var(--luxury-dark))] border border-white/10 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Agende sua Sessão Estratégica</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full bg-[hsl(var(--luxury-gray))] border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:border-[hsl(var(--f5-orange))] transition-colors peer"
                  placeholder=" "
                />
                <label
                  htmlFor="nome"
                  className="absolute left-4 top-4 text-[hsl(var(--text-muted))] transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-[hsl(var(--f5-orange))] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Nome completo
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[hsl(var(--luxury-gray))] border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:border-[hsl(var(--f5-orange))] transition-colors peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-4 text-[hsl(var(--text-muted))] transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-[hsl(var(--f5-orange))] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  E-mail profissional
                </label>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="w-full bg-[hsl(var(--luxury-gray))] border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:border-[hsl(var(--f5-orange))] transition-colors peer"
                  placeholder=" "
                />
                <label
                  htmlFor="telefone"
                  className="absolute left-4 top-4 text-[hsl(var(--text-muted))] transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-[hsl(var(--f5-orange))] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  WhatsApp
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="clinica"
                  name="clinica"
                  value={formData.clinica}
                  onChange={handleChange}
                  required
                  className="w-full bg-[hsl(var(--luxury-gray))] border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white focus:outline-none focus:border-[hsl(var(--f5-orange))] transition-colors peer"
                  placeholder=" "
                />
                <label
                  htmlFor="clinica"
                  className="absolute left-4 top-4 text-[hsl(var(--text-muted))] transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-[hsl(var(--f5-orange))] peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Nome da Clínica
                </label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] hover:shadow-[0_8px_30px_hsl(var(--f5-orange)/0.5)] transition-all duration-300 hover:-translate-y-1 text-lg font-bold uppercase tracking-wider py-7"
              >
                {isSubmitting ? "Enviando..." : "AGENDAR MINHA SESSÃO ESTRATÉGICA"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-xs text-center text-[hsl(var(--text-muted))]">
                Seus dados estão protegidos. Resposta garantida em até 2 horas úteis.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
