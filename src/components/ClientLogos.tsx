const ClientLogos = () => {
  const logos = [
    { name: "Odonto Company", color: "text-teal-400" },
    { name: "Oral Unic", color: "text-cyan-400" },
    { name: "Odontotop", color: "text-yellow-400" },
    { name: "Oral Sin", color: "text-white" },
    { name: "Sorrifácil", color: "text-cyan-400" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-foreground/80 text-lg mb-12">
          A confiança das maiores redes e clínicas do Brasil
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="h-16 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
            >
              <span className={`text-2xl font-bold ${logo.color}`}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        {/* Duplicate for infinite scroll effect */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-50">
          {logos.map((logo, index) => (
            <div 
              key={`duplicate-${index}`}
              className="h-16 flex items-center justify-center"
            >
              <span className={`text-2xl font-bold ${logo.color}`}>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
