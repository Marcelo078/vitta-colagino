import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingKits } from "@/components/PricingKits";
import { Guarantee } from "@/components/Guarantee";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Schema.org Product structured data for SEO and LLMs
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Vitta Hyaluronic - Colágeno com Ácido Hialurônico",
      "image": [
        "https://lovable.dev/opengraph-image-p98pqg.png"
      ],
      "description": "Colágeno hidrolisado com ácido hialurônico, vitaminas e minerais. 11g de peptídeos de colágeno por porção. Zero açúcar, glúten e lactose. Sabores frutas vermelhas e laranja.",
      "brand": {
        "@type": "Brand",
        "name": "Vitta Hyaluronic"
      },
      "offers": {
        "@type": "AggregateOffer",
        "url": "https://app.monetizze.com.br/r/AVA21485262",
        "priceCurrency": "BRL",
        "lowPrice": "127.00",
        "highPrice": "347.00",
        "offerCount": "5"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "2847"
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <HowItWorks />
      <PricingKits />
      <Guarantee />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
