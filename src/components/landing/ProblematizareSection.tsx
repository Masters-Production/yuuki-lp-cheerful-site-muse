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
    <section className="py-20 px-4 md:px-8 bg-card">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Te recunoști în aceste situații?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dacă da, nu ești singur. Acestea sunt provocările cu care se confruntă mii de profesioniști și antreprenori.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-xl p-6 flex gap-4 hover:shadow-md transition-shadow"
            >
              <div className="shrink-0">
                <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                  <X className="w-5 h-5 text-destructive" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-muted-foreground text-sm">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Transition Message */}
        <div className="text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8 inline-block max-w-2xl">
            <p className="text-lg text-foreground">
              <strong>Dacă te-ai regăsit în măcar 2 din situațiile de mai sus</strong>, acest webinar 
              îți va oferi soluțiile practice de care ai nevoie pentru a schimba direcția.
            </p>
          </div>

          <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
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
