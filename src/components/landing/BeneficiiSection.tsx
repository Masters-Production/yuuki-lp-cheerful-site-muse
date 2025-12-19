import { Button } from "@/components/ui/button";
import { Lightbulb, AlertTriangle, Award, Target, Map, BookOpen, ArrowRight } from "lucide-react";
import { CTA_LINK } from "@/lib/constants";

const benefits = [
  { icon: Lightbulb, title: "De ce unii muncesc enorm și tot nu avansează", description: "Iluzia progresului: ce abilități NU funcționează și de ce îți consumă timpul fără rezultate." },
  { icon: AlertTriangle, title: "Ce se întâmplă în 2026 cu cei nepregătiți", description: "Realitatea crudă: cum vor arăta următoarele 12 luni pentru cei care nu-ți dezvoltă abilitățile necesare" },
  { icon: Award, title: "Cele 12 skill-uri esențiale validate de World Economic Forum", description: "Nu ghiceli sau trend-uri — abilități bazate pe cel mai amplu studiu global despre ce contează în 2026 și următorii 10-20 de ani." },
  { icon: Target, title: "Care abilități contează și care nu mai sunt relevante în realitatea de azi și viitorul apropiat", description: "Skill-uri la modă care îți consumă timpul vs. skill-uri fundamentale care produc rezultate reale — diferența e uriașă" },
  { icon: Map, title: "Cum să obții și să ai dezvoltate toate cele 12 cele mai puternice Soft skills în 2026", description: "Plan clar, pas cu pas: cum să le integrezi în doar 12 luni fără să te copleșești." },
  { icon: BookOpen, title: "Povești reale", description: "Vezi exact cum arată succesul cu aceste abilități vs. eșecul fără — scenarii concrete din viața ta profesională și personală." }
];

const BeneficiiSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-6 leading-tight">Ce vei descoperi <span className="text-primary">în acest webinar:</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button asChild size="lg" className="group px-10 py-7 text-xl font-bold rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
            <a href={CTA_LINK}>Înscrie-te GRATUIT<ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BeneficiiSection;
