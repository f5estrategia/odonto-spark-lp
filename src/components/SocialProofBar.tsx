import clinicaPremium from "@/assets/clinica-premium.png";
import odontoCompany from "@/assets/odonto-company.png";
import odontoTop from "@/assets/odonto-top.png";
import oralUnique from "@/assets/oral-unique.png";
import redeSorriso from "@/assets/rede-sorriso.png";

const SocialProofBar = () => {
  return (
    <section className="relative py-16 bg-black border-t border-b border-white/8 overflow-hidden">
      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-10 animate-[shimmer_3s_infinite]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(var(--f5-orange))] to-transparent" style={{ animation: "shimmer 3s infinite" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-center text-[hsl(var(--text-secondary))] text-lg md:text-xl font-medium tracking-wide mb-12">
          A confiança das maiores redes e clínicas do Brasil
        </h2>

        <div className="flex justify-center items-center gap-12 md:gap-16 lg:gap-20 flex-wrap">
          <img src={odontoCompany} alt="Odonto Company" className="h-12 md:h-14 lg:h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0" />
          <img src={oralUnique} alt="Oral Unique" className="h-12 md:h-14 lg:h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0" />
          <img src={odontoTop} alt="Odonto Top" className="h-12 md:h-14 lg:h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0" />
          <img src={clinicaPremium} alt="Clínica Premium" className="h-12 md:h-14 lg:h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0" />
          <img src={redeSorriso} alt="Rede Sorriso" className="h-12 md:h-14 lg:h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0" />
        </div>
      </div>

    </section>
  );
};

export default SocialProofBar;
