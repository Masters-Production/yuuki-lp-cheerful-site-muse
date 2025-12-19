import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { CTA_LINK } from "@/lib/constants";

const beneficii = [
  {
    number: "01",
    title: "Cele 12 skill-uri esențiale pentru 2026",
    description: "Descoperă exact ce competențe îți garantează succesul în noua economie."
  },
  {
    number: "02",
    title: "Cum să te adaptezi rapid la schimbare",
    description: "Strategii dovedite pentru a transforma criza în oportunitate."
  },
  {
    number: "03",
    title: "Secretele productivității sustenabile",
    description: "Învață să obții rezultate mai mari cu mai puțin efort și stres."
  },
  {
    number: "04",
    title: "Leadership în vremuri dificile",
    description: "Cum să inspiri și să motivezi echipa când totul pare incert."
  },
  {
    number: "05",
    title: "Automatizarea inteligentă",
    description: "Cum să folosești tehnologia pentru a-ți multiplica impactul."
  },
  {
    number: "06",
    title: "Planul tău personalizat de acțiune",
    description: "Pleci cu un plan clar și pași concreți pe care îi poți implementa imediat."
  }
];

const BeneficiiSection = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ce vei descoperi în acest webinar <span className="text-primary">GRATUIT</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            90 de minute intensive care îți vor schimba perspectiva și îți vor da instrumentele necesare pentru succes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {beneficii.map((beneficiu, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl font-bold text-primary/30">{beneficiu.number}</span>
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{beneficiu.title}</h3>
              <p className="text-muted-foreground text-sm">{beneficiu.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
              Vreau acces la aceste strategii →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeneficiiSection;
