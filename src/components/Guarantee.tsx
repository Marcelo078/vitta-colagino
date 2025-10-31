import garantiaImage from "@/assets/garantia-30-dias.webp";

export const Guarantee = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-card to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <img 
              src={garantiaImage}
              alt="Garantia de 30 dias ou seu dinheiro de volta - Colágeno com ácido hialurônico Vitta Hyaluronic"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
              💯 100% Garantido
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Garantia Total ou Seu Dinheiro de Volta!
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Acreditamos tanto no poder do Vitta Hyaluronic que oferecemos uma garantia incondicional de 30 dias.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Experimente sem riscos</h3>
                  <p className="text-muted-foreground">
                    Use o produto por 30 dias. Se não gostar por qualquer motivo, devolvemos 100% do seu dinheiro.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Processo simples e rápido</h3>
                  <p className="text-muted-foreground">
                    Basta entrar em contato conosco pelo WhatsApp ou e-mail. Sem burocracia, sem perguntas difíceis.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Reembolso total garantido</h3>
                  <p className="text-muted-foreground">
                    Todo o valor pago será devolvido. É assim que mostramos nossa confiança no produto.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
              <p className="font-medium text-lg">
                O risco é todo nosso. Você só tem a ganhar uma pele mais jovem, firme e radiante!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
