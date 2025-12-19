import { Button } from "@/components/ui/button";
import { X, ArrowRight } from "lucide-react";
import { CTA_LINK } from "@/lib/constants";

const problems = [
  { title: "Simți că lumea se schimbă prea repede și te temi că vei rămâne în urmă", description: "Tehnologie nouă, AI, automatizare — totul merge atât de rapid încât nu mai știi ce să înveți mai întâi. Te trezești că ce știai acum 2 ani nu mai e suficient." },
  { title: "Muncești enorm, dar te învârți în cerc, fără progres real", description: "Faci cursuri, citești cărți, te dezvolți, dar când analizezi, ești tot în același loc. Aceleași rezultate. Același nivel. Același venit." },
  { title: "Ai potențial, dar te blochează fie frica, fie îndoiala și indecizia", description: "Știi că poți mai mult. Dar când vine oportunitatea, te blochezi. Nu știi să vinzi, să comunici, să ceri ce meriți. Și rămâi la același nivel în timp ce alții avansează." },
  { title: "Vrei să progresezi profesional și financiar, dar cu stabilitate interioară", description: "Nu vrei doar succes. Vrei să crești în venit și în carieră, dar să ai siguranță, putere și certitudine" },
  { title: "Nu vrei doar să supraviețuiești în 2026, vrei să CREȘTI", description: "Știi că vine schimbarea. Dar nu vrei să te ascunzi sau să reziști cumva acestor schimbări. Vrei să fii pe val, cu abilități reale care te fac de neînlocuit." }
];

const ProblematizareSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 bg-card overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-destructive/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 leading-tight">Te regăsești în vreuna dintre <span className="text-primary">aceste situații?</span></h2>
        <div className="space-y-6">
          {problems.map((problem, index) => (
            <div key={index} className="group relative bg-background rounded-2xl p-6 md:p-8 border border-border/50 hover:border-destructive/30 transition-all duration-300 hover:shadow-xl hover:shadow-destructive/5">
              <div className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                  <X className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl font-bold text-foreground mb-8">Dacă te-ai regăsit în măcar 2 din aceste situații, <span className="text-primary">atunci acest webinar este pentru tine.</span></p>
          <Button asChild size="lg" className="group px-10 py-7 text-xl font-bold rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
            <a href={CTA_LINK}>Înscrie-te GRATUIT<ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblematizareSection;
