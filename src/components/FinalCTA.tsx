import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import googlePartnerBadge from "@/assets/google-partner-badge.png";
import metaPartnerBadge from "@/assets/meta-partner-badge.png";
import rdPartnerBadge from "@/assets/rd-partner-badge.png";

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
    <section id="contato" className="py-16 md:py-24 bg-[hsl(var(--luxury-black))]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 md:gap-12 items-center mt-8 md:mt-24 max-w-5xl mx-auto">
          {/* Left - Info + CEO Image - Ordem invertida em mobile */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Pronto para transformar seu marketing no seu maior vendedor?
            </h2>
            <p className="text-base md:text-lg text-[hsl(var(--text-secondary))] mb-6 md:mb-8 leading-relaxed">
              Agende uma sessão de diagnóstico gratuita. Você vai sair com um plano de ação claro para sua clínica, mesmo que decida não trabalhar conosco.
            </p>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {[
                "Análise completa da sua presença digital",
                "Mapeamento de oportunidades de crescimento",
                "Plano de ação personalizado para sua clínica",
                "Sem compromisso - 100% gratuito",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[hsl(var(--f5-orange))] flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-[hsl(var(--text-secondary))]">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Partner Badges */}
            <div className="p-3 md:p-6 bg-gradient-to-br from-[hsl(var(--luxury-dark))] to-[hsl(var(--luxury-black))] border border-white/10 rounded-xl md:rounded-2xl shadow-xl">
              <p className="text-white font-semibold text-[10px] md:text-sm mb-2 md:mb-4 text-center">Parceiros Oficiais</p>
              <div className="flex items-center justify-center gap-3 md:gap-6 flex-wrap">
                <img
                  src={googlePartnerBadge}
                  alt="Google Partner"
                  className="h-8 md:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
                <img
                  src={metaPartnerBadge}
                  alt="Meta Business Partner"
                  className="h-8 md:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
                <img
                  src={rdPartnerBadge}
                  alt="RD Station Partner"
                  className="h-6 md:h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>

          {/* Right - Form - Aparece primeiro em mobile */}
          <div className="order-1 md:order-2 bg-[hsl(var(--luxury-dark))] border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-2xl">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-5 md:mb-6">Agende sua Sessão Estratégica</h3>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full bg-[hsl(var(--luxury-gray))] border border-white/10 rounded-lg md:rounded-xl px-3 md:px-4 pt-5 md:pt-6 pb-2 text-sm md:text-base text-white focus:outline-none focus:border-[hsl(var(--f5-orange))] transition-colors peer"
                  placeholder=" "
                />
                <label
                  htmlFor="nome"
                  className="absolute left-3 md:left-4 top-3 md:top-4 text-xs md:text-sm text-[hsl(var(--text-muted))] transition-all peer-focus:top-1.5 md:peer-focus:top-2 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-[hsl(var(--f5-orange))] peer-[&:not(:placeholder-shown)]:top-1.5 md:peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-[10px] md:peer-[&:not(:placeholder-shown)]:text-xs"
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
                  className="w-full bg-[hsl(var(--luxury-gray))] border border-white/10 rounded-lg md:rounded-xl px-3 md:px-4 pt-5 md:pt-6 pb-2 text-sm md:text-base text-white focus:outline-none focus:border-[hsl(var(--f5-orange))] transition-colors peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 md:left-4 top-3 md:top-4 text-xs md:text-sm text-[hsl(var(--text-muted))] transition-all peer-focus:top-1.5 md:peer-focus:top-2 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-[hsl(var(--f5-orange))] peer-[&:not(:placeholder-shown)]:top-1.5 md:peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-[10px] md:peer-[&:not(:placeholder-shown)]:text-xs"
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
                  className="w-full bg-[hsl(var(--luxury-gray))] border border-white/10 rounded-lg md:rounded-xl px-3 md:px-4 pt-5 md:pt-6 pb-2 text-sm md:text-base text-white focus:outline-none focus:border-[hsl(var(--f5-orange))] transition-colors peer"
                  placeholder=" "
                />
                <label
                  htmlFor="telefone"
                  className="absolute left-3 md:left-4 top-3 md:top-4 text-xs md:text-sm text-[hsl(var(--text-muted))] transition-all peer-focus:top-1.5 md:peer-focus:top-2 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-[hsl(var(--f5-orange))] peer-[&:not(:placeholder-shown)]:top-1.5 md:peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-[10px] md:peer-[&:not(:placeholder-shown)]:text-xs"
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
                  className="w-full bg-[hsl(var(--luxury-gray))] border border-white/10 rounded-lg md:rounded-xl px-3 md:px-4 pt-5 md:pt-6 pb-2 text-sm md:text-base text-white focus:outline-none focus:border-[hsl(var(--f5-orange))] transition-colors peer"
                  placeholder=" "
                />
                <label
                  htmlFor="clinica"
                  className="absolute left-3 md:left-4 top-3 md:top-4 text-xs md:text-sm text-[hsl(var(--text-muted))] transition-all peer-focus:top-1.5 md:peer-focus:top-2 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-[hsl(var(--f5-orange))] peer-[&:not(:placeholder-shown)]:top-1.5 md:peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-[10px] md:peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Nome da Clínica
                </label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] hover:shadow-[0_8px_30px_hsl(var(--f5-orange)/0.5)] transition-all duration-300 hover:-translate-y-1 text-sm md:text-lg font-bold uppercase tracking-wide md:tracking-wider py-4 md:py-7"
              >
                <span className="block md:inline">{isSubmitting ? "Enviando..." : "AGENDAR SESSÃO ESTRATÉGICA"}</span>
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 inline-block" />
              </Button>

              <p className="text-[10px] md:text-xs text-center text-[hsl(var(--text-muted))] leading-relaxed">
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
