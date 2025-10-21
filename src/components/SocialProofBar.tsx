const SocialProofBar = () => {
  const logos = [
    "Odonto Company",
    "Oral Unique",
    "Odonto Top",
    "Clínica Premium",
    "Rede Sorriso",
  ];

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

        <div className="flex justify-center items-center gap-12 md:gap-16 flex-wrap">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="h-16 flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0"
            >
              <span className="text-xl md:text-2xl font-bold text-white">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default SocialProofBar;
