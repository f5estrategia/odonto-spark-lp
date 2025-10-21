import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">F5</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#metodologia" className="text-foreground/80 hover:text-foreground transition-colors">
              A Metodologia
            </a>
            <a href="#resultados" className="text-foreground/80 hover:text-foreground transition-colors">
              Resultados
            </a>
            <a href="#diferenciais" className="text-foreground/80 hover:text-foreground transition-colors">
              Diferenciais
            </a>
            <a href="#contato" className="text-foreground/80 hover:text-foreground transition-colors">
              Contato
            </a>
          </div>

          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            AGENDAR CONSULTORIA
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
