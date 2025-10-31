import produtoGif from "@/assets/produto-principal.gif";

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Com Apenas <span className="text-primary">1 Scoop ao Dia</span>, Conquiste uma Pele Mais Jovem
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              O colágeno com ácido hialurônico Vitta Hyaluronic é a solução científica que seu corpo precisa para manter a juventude da pele de dentro para fora.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Absorção Rápida</h3>
                  <p className="text-muted-foreground">
                    O colágeno hidrolisado tem moléculas pequenas que são rapidamente absorvidas pelo organismo, chegando onde você mais precisa.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Hidratação Profunda</h3>
                  <p className="text-muted-foreground">
                    O ácido hialurônico retém água nas células da pele, proporcionando hidratação intensa e duradoura que você pode sentir.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Renovação Celular</h3>
                  <p className="text-muted-foreground">
                    Estimula a produção natural de colágeno do seu corpo, promovendo regeneração celular e firmeza da pele.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Resultados Visíveis</h3>
                  <p className="text-muted-foreground">
                    Em 30 dias você notará pele mais firme, hidratada, com menos linhas e com aquele brilho saudável de juventude.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
            <img 
              src={produtoGif}
              alt="Modo de uso do colágeno com ácido hialurônico Vitta Hyaluronic sabor frutas vermelhas"
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
