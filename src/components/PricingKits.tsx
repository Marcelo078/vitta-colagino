import { Button } from "@/components/ui/button";
import kit1 from "@/assets/kit-1-mes.webp";
import kit2 from "@/assets/kit-2-meses.webp";
import kit3 from "@/assets/kit-3-meses.webp";
import kit4 from "@/assets/kit-4-meses.webp";
import kit6 from "@/assets/kit-6-meses.webp";

export const PricingKits = () => {
  const kits = [
    {
      title: "1 Colágeno",
      subtitle: "Kit para 1 Mês",
      image: kit1,
      installment: "12,75",
      total: "127,00",
      link: "https://app.monetizze.com.br/r/AVA21485262?u=c&pl=YL213986",
      popular: false
    },
    {
      title: "2 Colágenos",
      subtitle: "Kit para 2 Meses",
      image: kit2,
      installment: "16,77",
      total: "167,00",
      link: "https://app.monetizze.com.br/r/AVA21485262?u=c&pl=XG166296",
      popular: false
    },
    {
      title: "3 Colágenos",
      subtitle: "Kit para 3 Meses",
      image: kit3,
      installment: "19,78",
      total: "197,00",
      link: "https://app.monetizze.com.br/r/AVA21485262?u=c&pl=LK160499",
      popular: true
    },
    {
      title: "4 Colágenos",
      subtitle: "Kit para 4 Meses",
      image: kit4,
      installment: "24,80",
      total: "247,00",
      link: "https://app.monetizze.com.br/r/AVA21485262?u=c&pl=KF160493",
      popular: false
    },
    {
      title: "6 Colágenos",
      subtitle: "Kit para 6 Meses",
      image: kit6,
      installment: "34,84",
      total: "347,00",
      link: "https://app.monetizze.com.br/r/AVA21485262?u=c&pl=JP339842",
      popular: false
    }
  ];

  return (
    <section id="kits" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Escolha Seu <span className="text-primary">Melhor Kit</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-2">
            Quanto mais você compra, mais você economiza! Aproveite nossas ofertas exclusivas.
          </p>
          <p className="text-sm text-muted-foreground">
            🚚 Frete Grátis para Todo o Brasil
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {kits.map((kit, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                kit.popular ? 'ring-4 ring-primary scale-105' : ''
              }`}
            >
              {kit.popular && (
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  🔥 Mais Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">{kit.title}</h3>
                <p className="text-primary font-medium mb-4">{kit.subtitle}</p>
                
                <img 
                  src={kit.image} 
                  alt={`${kit.title} - Colágeno com ácido hialurônico Vitta Hyaluronic`}
                  className="w-full h-auto mb-6 rounded-xl"
                />
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-muted-foreground">POR APENAS 12X</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm">R$</span>
                    <span className="text-5xl font-bold text-primary">{kit.installment}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ou R$ {kit.total} à vista
                  </p>
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white text-lg py-6 rounded-full shadow-lg hover:scale-105 transition-transform"
                  onClick={() => window.open(kit.link, '_blank')}
                >
                  Comprar Agora
                </Button>
                
                <p className="text-center text-xs text-muted-foreground mt-4">
                  💳 Parcele sem juros no cartão
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
