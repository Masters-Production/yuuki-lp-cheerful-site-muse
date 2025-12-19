import { Button } from "@/components/ui/button";
import { Gift, Clock, Users } from "lucide-react";
import { CTA_LINK, WEBINAR_DATE, WEBINAR_TIME, WEBINAR_DURATION } from "@/lib/constants";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-destructive rounded-full animate-pulse"></span>
          Webinar LIVE GRATUIT | {WEBINAR_DATE}
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
          Cum crești în criză:{" "}
          <span className="text-primary">12 Skill-uri</span> care te vor salva în 2026
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Descoperă strategiile dovedite pentru a-ți dezvolta afacerea și cariera, 
          chiar și în cele mai dificile vremuri economice.
        </p>

        {/* Details */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
          <div className="flex items-center gap-2 text-foreground">
            <Clock className="w-5 h-5 text-primary" />
            <span>{WEBINAR_TIME} (ora României)</span>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <Users className="w-5 h-5 text-primary" />
            <span>Durată: {WEBINAR_DURATION}</span>
          </div>
        </div>

        {/* Urgency Message */}
        <div className="bg-destructive/10 border border-destructive/20 text-destructive rounded-lg px-4 py-3 mb-8 inline-block">
          <p className="font-semibold">⚠️ Locurile sunt limitate! Înscrie-te acum pentru a-ți rezerva locul.</p>
        </div>

        {/* CTA Button */}
        <div className="mb-10">
          <Button asChild size="lg" className="text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all">
            <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
              Rezervă-ți locul GRATUIT →
            </a>
          </Button>
        </div>

        {/* Bonus Box */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 max-w-xl mx-auto shadow-sm">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-full shrink-0">
              <Gift className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-lg text-foreground mb-2">🎁 BONUS pentru participanți</h3>
              <p className="text-muted-foreground">
                Toți participanții primesc acces la <strong className="text-foreground">Mini-evaluare personalizată</strong> — 
                un instrument exclusiv care îți arată exact ce skill-uri ai nevoie să dezvolți prioritar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
