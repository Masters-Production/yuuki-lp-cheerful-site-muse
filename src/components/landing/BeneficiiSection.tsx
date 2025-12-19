import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
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
    <section className="relative py-24 md:py-32 px-4 md:px-8 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 via-transparent to-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Beneficii exclusive
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ce vei descoperi în acest{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                webinar GRATUIT
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 100 2 150 6C200 10 250 8 298 4" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
              </svg>
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            90 de minute intensive care îți vor schimba perspectiva și îți vor da instrumentele necesare pentru succes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {beneficii.map((beneficiu, index) => (
            <div 
              key={index}
              className="group relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              {/* Number Background */}
              <span className="absolute top-6 right-6 text-7xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                {beneficiu.number}
              </span>
              
              {/* Content */}
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-primary/25">
                  <Check className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground text-xl mb-3">{beneficiu.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{beneficiu.description}</p>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            asChild 
            size="lg" 
            className="text-lg px-10 py-7 h-auto rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
          >
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
