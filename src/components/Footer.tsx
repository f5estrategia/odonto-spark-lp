const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border py-12" id="contato">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">F5</span>
              </div>
              <span className="font-bold text-lg">Odonto</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transformando investimento em pacientes de alto valor desde 2020.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#metodologia" className="hover:text-primary transition-colors">A Metodologia</a></li>
              <li><a href="#resultados" className="hover:text-primary transition-colors">Resultados</a></li>
              <li><a href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>contato@f5odonto.com.br</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo - SP</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 F5 Odonto. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
