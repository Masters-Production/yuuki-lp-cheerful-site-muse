import { Button } from "@/components/ui/button";
import { Gift, Clock, Users, Sparkles, ArrowRight } from "lucide-react";
import { CTA_LINK, WEBINAR_DATE, WEBINAR_TIME, WEBINAR_DURATION } from "@/lib/constants";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center py-20 px-4 md:px-8 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orb */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Decorative shapes */}
        <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-primary/10 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-20 w-12 h-12 bg-primary/5 rounded-lg rotate-45" />
        <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-primary/10 rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-16 h-16 border border-primary/10 rounded-full" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-lg animate-fade-in">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-foreground"></span>
          </span>
          <span>LIVE GRATUIT</span>
          <span className="w-1 h-1 bg-primary-foreground/50 rounded-full"></span>
          <span>{WEBINAR_DATE}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] mb-8 tracking-tight">
          <span className="block mb-2">Cum crești în criză:</span>
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">
              12 Skill-uri
            </span>
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20" viewBox="0 0 200 8" preserveAspectRatio="none">
              <path d="M0 7 Q50 0, 100 7 T200 7" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span>
          <span className="block mt-2">care te vor salva în 2026</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed font-light">
          Descoperă strategiile dovedite pentru a-ți dezvolta afacerea și cariera, 
          <span className="text-foreground font-medium"> chiar și în cele mai dificile vremuri economice.</span>
        </p>

        {/* Details Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-card border border-border px-5 py-3 rounded-full shadow-sm">
            <Clock className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">{WEBINAR_TIME}</span>
            <span className="text-muted-foreground text-sm">(ora României)</span>
          </div>
          <div className="flex items-center gap-2 bg-card border border-border px-5 py-3 rounded-full shadow-sm">
            <Users className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">{WEBINAR_DURATION}</span>
            <span className="text-muted-foreground text-sm">interactive</span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-12">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 text-destructive text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>⚡ Locurile sunt limitate — înscrie-te acum!</span>
          </div>

          {/* Main CTA Button */}
          <div className="flex flex-col items-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="group text-lg md:text-xl px-10 py-7 h-auto shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 rounded-2xl font-semibold"
            >
              <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                Rezervă-ți locul GRATUIT
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">
              🔒 100% gratuit • Fără obligații
            </p>
          </div>
        </div>

        {/* Bonus Box */}
        <div className="relative bg-gradient-to-br from-card to-card/80 border-2 border-primary/20 rounded-3xl p-8 md:p-10 max-w-2xl mx-auto shadow-xl overflow-hidden">
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full" />
          
          <div className="relative flex flex-col md:flex-row items-start gap-6">
            <div className="bg-gradient-to-br from-primary to-primary/80 p-4 rounded-2xl shrink-0 shadow-lg">
              <Gift className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Bonus exclusiv
                </span>
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">
                Mini-evaluare personalizată
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Toți participanții primesc acces la un <strong className="text-foreground">instrument exclusiv</strong> care 
                îți arată exact ce skill-uri ai nevoie să dezvolți prioritar pentru a rămâne relevant în 2026.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
