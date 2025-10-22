import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { createClient } from '@supabase/supabase-js';
import googlePartnerBadge from "@/assets/google-partner-badge.png";
import metaPartnerBadge from "@/assets/meta-partner-badge.png";
import rdPartnerBadge from "@/assets/rd-partner-badge.png";

// Configure Supabase
const supabase = createClient(
  'https://imotgvapfkebngteuccf.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imltb3RndmFwZmtlYm5ndGV1Y2NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExNjQyMjQsImV4cCI6MjA3NjczNzYyNH0.ys4hd01LxTPzMWWXDmnfTXKp3GxwW6NVcaWnROCxd-0'
);

const formSchema = z.object({
  nome: z.string().trim().min(2, "Nome muito curto").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  telefone: z.string().trim().min(10, "Telefone inválido").max(20, "Telefone muito longo"),
  clinica: z.string().trim().min(2, "Nome da clínica muito curto").max(100, "Nome da clínica muito longo"),
  resultados: z.string().trim().min(10, "Descreva os resultados desejados").max(1000, "Texto muito longo"),
});

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    clinica: "",
    resultados: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const capturarIP = async () => {
    try {
      const res = await fetch('https://api.ipify.org?format=json');
      const data = await res.json();
      return data.ip;
    } catch (e) {
      console.error('Erro ao capturar IP:', e);
      return '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validar dados
      const validatedData = formSchema.parse(formData);

      // Capturar UTMs da URL
      const params = new URLSearchParams(window.location.search);
      
      // Capturar IP do usuário
      const ipUsuario = await capturarIP();

      // Capturar dados do dispositivo/navegador
      const userAgent = navigator.userAgent;
      const dispositivo = /Mobile|Android|iPhone/i.test(userAgent) ? 'Mobile' : 'Desktop';

      // Montar objeto completo
      const dadosLead = {
        // Dados do formulário
        nome: validatedData.nome,
        email: validatedData.email,
        telefone: validatedData.telefone,
        campos_personalizado: { 
          clinica: validatedData.clinica,
          resultados: validatedData.resultados 
        },
        politicas_privacidade: true,
        
        // UTMs
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || '',
        utm_term: params.get('utm_term') || '',
        utm_content: params.get('utm_content') || '',
        utm_adgroup: params.get('utm_adgroup') || '',
        
        // Identificadores
        nome_formulario: 'Formulário F5 Odonto',
        id_formulario: 'form-f5-principal',
        id_pagina: window.location.pathname,
        
        // Origem e navegação
        referral_source: document.referrer || 'Direto',
        url_conversao: window.location.href,
        
        // Dados técnicos
        dispositivo,
        user_agent: userAgent,
        ip_usuario: ipUsuario,
        
        // Timestamp
        data_conversao: new Date().toISOString(),
        received_at: new Date().toISOString(),
      };

      // Enviar para Supabase
      const { data, error } = await supabase
        .from('leads')
        .insert([dadosLead])
        .select();

      if (error) throw error;

      toast({
        title: "Recebemos seu contato!",
        description: "Nossa equipe entrará em contato em até 2 horas úteis.",
      });

      setFormData({ nome: "", email: "", telefone: "", clinica: "", resultados: "" });

      // Disparar evento para GTM/Pixel
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'form_submission',
          formId: 'form-f5-principal',
          email: validatedData.email
        });
      }

    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erro de validação",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        console.error('Erro ao enviar:', error);
        toast({
          title: "Erro ao enviar",
          description: "Tente novamente em alguns instantes.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-[hsl(var(--luxury-black))] relative overflow-hidden">
      {/* Background with gradient - Like Hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0e0a] via-[#2d1510] to-[#1a0e0a]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--f5-orange))]/20 via-transparent to-transparent" />
        
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[30%] left-[15%] w-[400px] h-[400px] rounded-full bg-[hsl(var(--f5-orange))]/30 blur-[110px] animate-float" style={{ animationDelay: "0s" }} />
          <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-[hsl(var(--f5-orange))]/25 blur-[100px] animate-float" style={{ animationDelay: "5s" }} />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Pronto para transformar seu marketing no seu maior vendedor?
          </h2>
          <p className="text-base md:text-lg text-[hsl(var(--text-secondary))] leading-relaxed">
            Agende uma sessão de diagnóstico gratuita. Você vai sair com um plano de ação claro para sua clínica, mesmo que decida não trabalhar conosco.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1fr_480px] gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left - Benefits */}
          <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">O que você vai receber:</h3>
              {[
                "Análise completa da sua presença digital",
                "Mapeamento de oportunidades de crescimento",
                "Plano de ação personalizado para sua clínica",
                "Sem compromisso - 100% gratuito",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-[hsl(var(--luxury-dark))]/50 border border-white/5 rounded-xl p-4 hover:border-[hsl(var(--f5-orange))]/30 transition-all duration-300">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[hsl(var(--f5-orange))] flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-[hsl(var(--text-secondary))]">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Partner Badges */}
            <div className="p-5 md:p-6 bg-gradient-to-br from-[hsl(var(--luxury-dark))] to-[hsl(var(--luxury-black))] border border-white/10 rounded-2xl shadow-xl">
              <p className="text-white font-semibold text-xs md:text-sm mb-4 text-center">Parceiros Oficiais</p>
              <div className="flex items-center justify-center gap-6 md:gap-8 flex-wrap">
                <img
                  src={googlePartnerBadge}
                  alt="Google Partner"
                  className="h-8 md:h-9 w-auto object-contain opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300"
                />
                <img
                  src={metaPartnerBadge}
                  alt="Meta Business Partner"
                  className="h-8 md:h-9 w-auto object-contain opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300"
                />
                <img
                  src={rdPartnerBadge}
                  alt="RD Station Partner"
                  className="h-7 md:h-8 w-auto object-contain opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Right - Form - Aparece primeiro em mobile */}
          <div className="order-1 lg:order-2 bg-gradient-to-br from-[hsl(var(--luxury-dark))] to-[hsl(var(--luxury-black))] border border-white/10 rounded-2xl md:rounded-3xl p-5 md:p-8 shadow-2xl sticky top-24">
            <h3 className="text-lg md:text-xl font-bold text-white mb-5 md:mb-6 text-center">Agende sua Sessão Estratégica</h3>

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

              <div className="relative">
                <Textarea
                  id="resultados"
                  name="resultados"
                  value={formData.resultados}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[180px] bg-[hsl(var(--luxury-gray))] border border-white/10 rounded-lg md:rounded-xl px-3 md:px-4 pt-5 md:pt-6 pb-2 text-sm md:text-base text-white focus:outline-none focus:border-[hsl(var(--f5-orange))] transition-colors peer resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="resultados"
                  className="absolute left-3 md:left-4 top-3 md:top-4 text-xs md:text-sm text-[hsl(var(--text-muted))] transition-all peer-focus:top-1.5 md:peer-focus:top-2 peer-focus:text-[10px] md:peer-focus:text-xs peer-focus:text-[hsl(var(--f5-orange))] peer-[&:not(:placeholder-shown)]:top-1.5 md:peer-[&:not(:placeholder-shown)]:top-2 peer-[&:not(:placeholder-shown)]:text-[10px] md:peer-[&:not(:placeholder-shown)]:text-xs"
                >
                  Quais resultados você deseja alcançar no digital?
                </label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] hover:shadow-[0_8px_30px_hsl(var(--f5-orange)/0.5)] transition-all duration-300 hover:-translate-y-1 text-sm md:text-base font-bold uppercase tracking-wide py-4 md:py-6"
              >
                <span className="block md:inline">{isSubmitting ? "Enviando..." : "AGENDAR SESSÃO"}</span>
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 inline-block" />
              </Button>

              <p className="text-[10px] md:text-xs text-center text-[hsl(var(--text-muted))] leading-relaxed mt-3">
                🔒 Seus dados estão protegidos. Resposta em até 2h úteis.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
