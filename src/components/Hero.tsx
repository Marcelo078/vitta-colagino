import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image-2.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary">
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              🇧🇷 O Colágeno Mais Amado do Brasil
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Colágeno com Ácido Hialurônico
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90">
              Sabor e juventude que você vai amar! Pele firme, hidratada e radiante em apenas 30 dias.
            </p>
            
            <div className="flex flex-wrap gap-4 text-sm lg:text-base">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-green-300">✓</span>
                <span>11g de Colágeno por Porção</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-green-300">✓</span>
                <span>Zero Açúcar</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-green-300">✓</span>
                <span>Zero Glúten</span>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform"
              onClick={() => document.getElementById('kits')?.scrollIntoView({ behavior: 'smooth' })}
            >
              👉 Ver Ofertas Especiais
            </Button>
            
            <p className="text-sm text-white/80">
              🚚 Frete Grátis para Todo o Brasil | 💳 Parcelamento em até 12x
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-30 animate-pulse" />
            <img 
              src={heroImage} 
              alt="Mulher feliz segurando colágeno com ácido hialurônico Vitta Hyaluronic e um copo de suco de frutas vermelhas"
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
