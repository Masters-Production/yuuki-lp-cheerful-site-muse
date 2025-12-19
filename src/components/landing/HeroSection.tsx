import { Button } from "@/components/ui/button";
import { Gift, Sparkles, ArrowRight } from "lucide-react";
import { CTA_LINK, WEBINAR_DATE } from "@/lib/constants";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center py-20 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm md:text-base font-semibold mb-8 shadow-lg animate-pulse">
          <Sparkles className="w-5 h-5" />
          <span>Webinar LIVE GRATUIT</span>
          <span className="w-1 h-1 bg-primary-foreground/50 rounded-full"></span>
          <span>{WEBINAR_DATE}</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
          <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">Cum crești în criză:</span>
          <br />
          <span className="text-foreground">12 Skill-uri care te vor salva în 2026</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
          Descoperă abilitățile esențiale care îți cresc relevanța, adaptabilitatea și reziliența în 2026 — când alții vor cădea, tu vei crește.
        </p>
        <p className="text-lg md:text-xl text-foreground font-semibold mb-10 max-w-3xl mx-auto">
          ‼️ Acesta poate fi pasul tău înainte de cea mai mare schimbare din ultimii 20 de ani.
        </p>
        <div className="mb-12">
          <Button asChild size="lg" className="group px-10 py-7 text-xl font-bold rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
            <a href={CTA_LINK}>Înscrie-te GRATUIT<ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" /></a>
          </Button>
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl"></div>
          <div className="relative bg-card/80 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Gift className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-primary">BONUS la înscriere</span>
            </div>
            <p className="text-lg md:text-xl text-foreground font-medium">
              Adevărul despre 2026: Mini-evaluare de 10 minute care îți arată exact unde ești și ce vine
            </p>
          </div>
        </div>
        <div className="mt-16 animate-bounce">
          <div className="w-8 h-12 border-2 border-primary/50 rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-2 h-3 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
