import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            Não Está Acostumada a Comprar pela Internet?
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
            Entendemos sua preocupação! Por isso, oferecemos todas as garantias de segurança e satisfação.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="text-xl font-bold mb-2">Ambiente 100% Seguro</h3>
              <p className="text-white/80">
                Seus dados são criptografados e protegidos. Utilizamos as mesmas tecnologias de segurança dos bancos.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-3">💳</div>
              <h3 className="text-xl font-bold mb-2">Múltiplas Formas de Pagamento</h3>
              <p className="text-white/80">
                Cartão de crédito, PIX, boleto. Parcele em até 12x sem juros e aproveite.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="text-xl font-bold mb-2">Frete Grátis Brasil Todo</h3>
              <p className="text-white/80">
                Entregamos em qualquer lugar do Brasil, sem custo adicional de frete para você.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="text-xl font-bold mb-2">Garantia de 30 Dias</h3>
              <p className="text-white/80">
                Não gostou? Devolvemos seu dinheiro sem perguntas. Simples assim.
              </p>
            </div>
          </div>
          
          <div className="pt-8">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-8 rounded-full shadow-2xl hover:scale-105 transition-transform"
              onClick={() => document.getElementById('kits')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Quero Garantir Meu Kit Agora! 🎁
            </Button>
            
            <p className="text-sm text-white/80 mt-4">
              ⚡ Oferta por tempo limitado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
