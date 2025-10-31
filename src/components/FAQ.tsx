import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Quanto tempo leva para ver resultados com o colágeno com ácido hialurônico?",
      answer: "A maioria das pessoas nota diferença na hidratação da pele nas primeiras 2 semanas. Resultados mais visíveis em firmeza e redução de linhas aparecem após 30 dias de uso contínuo. Para benefícios completos, recomendamos uso por pelo menos 90 dias."
    },
    {
      question: "Como tomar o Vitta Hyaluronic corretamente?",
      answer: "Misture 1 medida (dosador incluso) em 200ml de água gelada. Tome uma vez ao dia, preferencialmente pela manhã em jejum ou antes de dormir. O sabor é delicioso e dispensa adição de outros ingredientes!"
    },
    {
      question: "O colágeno com ácido hialurônico tem contra-indicações?",
      answer: "O produto é seguro para a maioria das pessoas. É zero açúcar, glúten e lactose. Gestantes, lactantes e pessoas com condições médicas específicas devem consultar um médico antes de usar qualquer suplemento."
    },
    {
      question: "Qual a diferença entre o sabor Frutas Vermelhas e Laranja?",
      answer: "Ambos possuem a mesma fórmula poderosa com 11g de colágeno e ácido hialurônico. A diferença está apenas no sabor! Frutas Vermelhas tem notas de morango, framboesa e açaí. Laranja é refrescante e cítrico. Escolha seu favorito ou varie!"
    },
    {
      question: "Posso combinar o colágeno com outros suplementos?",
      answer: "Sim! O Vitta Hyaluronic pode ser combinado com outros suplementos. Inclusive, ele já contém vitaminas B6, C, E, Zinco e Biotina na fórmula, potencializando ainda mais os resultados."
    },
    {
      question: "O produto realmente funciona ou é só marketing?",
      answer: "O colágeno hidrolisado e o ácido hialurônico são ingredientes com eficácia comprovada por diversos estudos científicos. Nossos clientes relatam melhorias visíveis em pele, cabelo e unhas. Além disso, oferecemos garantia de 30 dias para você testar sem riscos!"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Ainda Está com <span className="text-primary">Dúvidas?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Respondemos as perguntas mais frequentes sobre o colágeno com ácido hialurônico Vitta Hyaluronic
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
