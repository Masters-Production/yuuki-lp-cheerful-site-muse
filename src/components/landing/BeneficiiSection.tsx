import { Button } from "@/components/ui/button";
import { Lightbulb, AlertTriangle, Award, Target, Map, BookOpen, ArrowRight, Sparkles } from "lucide-react";
import { getCTALink } from "@/lib/constants";

const benefits = [
  { icon: Lightbulb, title: "De ce unii muncesc enorm și tot nu avansează", description: "Iluzia progresului: ce abilități NU funcționează și de ce îți consumă timpul fără rezultate.", color: "from-amber-500/20 to-orange-500/20" },
  { icon: AlertTriangle, title: "Ce se întâmplă în 2026 cu cei nepregătiți", description: "Realitatea crudă: cum vor arăta următoarele 12 luni pentru cei care nu-ți dezvoltă abilitățile necesare", color: "from-red-500/20 to-rose-500/20" },
  { icon: Award, title: "Cele 12 skill-uri esențiale validate de World Economic Forum", description: "Nu ghiceli sau trend-uri — abilități bazate pe cel mai amplu studiu global despre ce contează în 2026 și următorii 10-20 de ani.", color: "from-primary/20 to-emerald-500/20" },
  { icon: Target, title: "Care abilități contează și care nu mai sunt relevante în realitatea de azi și viitorul apropiat", description: "Skill-uri la modă care îți consumă timpul vs. skill-uri fundamentale care produc rezultate reale — diferența e uriașă", color: "from-blue-500/20 to-cyan-500/20" },
  { icon: Map, title: "Cum să obții și să ai dezvoltate toate cele 12 cele mai puternice Soft skills în 2026", description: "Plan clar, pas cu pas: cum să le integrezi în doar 12 luni fără să te copleșești.", color: "from-violet-500/20 to-purple-500/20" },
  { icon: BookOpen, title: "Povești reale", description: "Vezi exact cum arată succesul cu aceste abilități vs. eșecul fără — scenarii concrete din viața ta profesională și personală.", color: "from-pink-500/20 to-rose-500/20" }
];

const BeneficiiSection = () => {
  return (
    <section className="relative py-28 md:py-36 px-4 md:px-8 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Ce vei învăța
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Ce vei descoperi
            <br />
            <span className="text-primary">în acest webinar:</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Informații practice, validate științific, care îți vor schimba perspectiva asupra dezvoltării profesionale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative bg-card rounded-3xl p-8 md:p-10 border-2 border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full">
                {/* Number badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-black text-lg shadow-lg">
                  {index + 1}
                </div>
                
                {/* Top accent line */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-black text-foreground mb-4 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl"></div>
            <Button
              asChild
              size="lg"
              className="relative group px-8 py-5 md:px-12 md:py-8 text-lg md:text-xl font-black rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              <a href={getCTALink()}>
                Înscrie-te GRATUIT
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiiSection;
