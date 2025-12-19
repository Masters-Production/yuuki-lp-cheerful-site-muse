import { Button } from "@/components/ui/button";
import { X, ArrowRight, AlertCircle } from "lucide-react";
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
    <section className="relative py-28 md:py-36 px-4 md:px-8 bg-gradient-to-b from-card via-card to-background overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-destructive/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-destructive/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <AlertCircle className="w-4 h-4" />
            Provocările prezentului
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Te regăsești în vreuna dintre
            <br />
            <span className="text-primary">aceste situații?</span>
          </h2>
        </div>

        <div className="space-y-5">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-3xl p-8 md:p-10 border-2 border-border/50 hover:border-destructive/40 transition-all duration-500 hover:shadow-2xl hover:shadow-destructive/10 hover:-translate-y-1"
            >
              {/* Decorative number */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center text-destructive font-bold text-lg border-2 border-background">
                {index + 1}
              </div>
              
              <div className="flex gap-5 md:gap-8">
                <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-destructive/20 to-destructive/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-destructive/10">
                  <X className="w-7 h-7 md:w-8 md:h-8 text-destructive" strokeWidth={3} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-black text-foreground mb-3 leading-tight group-hover:text-destructive/90 transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 rounded-3xl p-10 md:p-14 border border-primary/20">
            <p className="text-2xl md:text-3xl font-black text-foreground mb-10 leading-relaxed">
              Dacă te-ai regăsit în măcar 2 din aceste situații,
              <br />
              <span className="text-primary">atunci acest webinar este pentru tine.</span>
            </p>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl"></div>
              <Button
                asChild
                size="lg"
                className="relative group px-12 py-8 text-xl font-black rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                <a href={CTA_LINK}>
                  Înscrie-te GRATUIT
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblematizareSection;
