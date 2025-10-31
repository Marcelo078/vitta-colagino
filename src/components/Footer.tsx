export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Vitta Hyaluronic</h3>
            <p className="text-sm text-muted-foreground">
              O colágeno com ácido hialurônico mais amado do Brasil. Beleza e saúde que você merece.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#kits" className="hover:text-primary">Ofertas</a></li>
              <li><a href="https://app.monetizze.com.br/r/AVA21485262" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Página Oficial</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Atendimento</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Seg-Sex: 9h às 18h</li>
              <li>📧 contato@vittahyaluronic.com.br</li>
              <li>📱 WhatsApp</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Garantias</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Frete Grátis Brasil</li>
              <li>✓ 30 Dias de Garantia</li>
              <li>✓ Pagamento Seguro</li>
              <li>✓ Parcelamento 12x</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p className="mb-4">
            © 2025 Vitta Hyaluronic. Todos os direitos reservados.
          </p>
          <p className="text-xs max-w-4xl mx-auto leading-relaxed">
            <strong>Aviso Legal:</strong> Este site é de propriedade de um afiliado independente e não é oficial da Vitta Hyaluronic. 
            Os resultados podem variar de pessoa para pessoa. As informações fornecidas neste site não substituem aconselhamento médico profissional. 
            Consulte seu médico antes de iniciar qualquer programa de suplementação. Este produto não se destina a diagnosticar, tratar, 
            curar ou prevenir qualquer doença. Imagens meramente ilustrativas.
          </p>
        </div>
      </div>
    </footer>
  );
};
