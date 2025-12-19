import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { CTA_LINK } from "@/lib/constants";

const painPoints = [
  {
    title: "Te simți copleșit de schimbările din piață",
    description: "Economia fluctuează, concurența crește, iar tu nu știi cum să te adaptezi suficient de rapid."
  },
  {
    title: "Ai impresia că muncești mult, dar rezultatele nu vin",
    description: "Ești ocupat constant, dar productivitatea și profitabilitatea nu reflectă efortul depus."
  },
  {
    title: "Te temi că vei rămâne în urmă",
    description: "Tehnologia avansează rapid, iar tu simți că nu ai timpul sau resursele să ții pasul."
  },
  {
    title: "Nu știi pe ce să te concentrezi",
    description: "Ai prea multe priorități și nu ești sigur care dintre ele va aduce cel mai mare impact."
  },
  {
    title: "Echipa ta nu performează la potențialul maxim",
    description: "Simți că lipsește ceva în comunicare, motivație sau leadership care să facă diferența."
  }
];

const ProblematizareSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 bg-card overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-destructive/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-medium mb-6 animate-fade-in">
            ✗ Provocări comune
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Te recunoști în{" "}
            <span className="bg-gradient-to-r from-destructive to-destructive/70 bg-clip-text text-transparent">
              aceste situații?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Dacă da, nu ești singur. Acestea sunt provocările cu care se confruntă mii de profesioniști și antreprenori.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="group relative bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-destructive/30 hover:shadow-xl hover:shadow-destructive/5 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex gap-5">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-destructive/20 to-destructive/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <X className="w-6 h-6 text-destructive" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-destructive transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transition Message */}
        <div className="text-center">
          <div className="relative inline-block mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 blur-2xl" />
            <div className="relative bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 max-w-3xl">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                <strong className="text-primary">Dacă te-ai regăsit în măcar 2 din situațiile de mai sus</strong>, 
                acest webinar îți va oferi soluțiile practice de care ai nevoie pentru a schimba direcția.
              </p>
            </div>
          </div>

          <Button 
            asChild 
            size="lg" 
            className="text-lg px-10 py-7 h-auto rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
          >
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
              Vreau să învăț soluțiile →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblematizareSection;
