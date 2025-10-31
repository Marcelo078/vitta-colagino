export const Benefits = () => {
  const benefits = [
    {
      icon: "✨",
      title: "Levanta e Firma a Pele",
      description: "11g de peptídeos de colágeno hidrolisado por porção para firmar e tonificar sua pele de dentro para fora."
    },
    {
      icon: "💧",
      title: "Hidratação Profunda",
      description: "Ácido hialurônico que retém até 1000x seu peso em água, mantendo sua pele hidratada o dia todo."
    },
    {
      icon: "🌟",
      title: "Reduz Linhas e Rugas",
      description: "Ação anti-idade comprovada que suaviza linhas de expressão e previne o envelhecimento precoce."
    },
    {
      icon: "💪",
      title: "Fortalece Cabelo e Unhas",
      description: "Rico em vitaminas B6, C, E, Zinco e Biotina para cabelos fortes e unhas resistentes."
    },
    {
      icon: "🎯",
      title: "Zero Açúcar, Glúten e Lactose",
      description: "Fórmula clean e saudável, sem açúcares adicionados, glúten ou lactose. Perfeito para todos."
    },
    {
      icon: "🍓",
      title: "Sabor Delicioso",
      description: "Sabores incríveis de Frutas Vermelhas e Laranja. Tão gostoso que você vai querer tomar todos os dias!"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Descubra Porque o <span className="text-primary">Vitta Hyaluronic</span> Funciona Tão Bem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fórmula cientificamente desenvolvida com ingredientes premium para resultados visíveis em semanas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
