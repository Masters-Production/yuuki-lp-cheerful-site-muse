import { Button } from "@/components/ui/button";
import { Gift, Sparkles, ArrowRight, Star, Zap, TrendingUp, Clock } from "lucide-react";
import { getCTALink, WEBINAR_DATE } from "@/lib/constants";
const HeroSection = () => {
  return <section className="relative min-h-screen flex flex-col justify-center py-20 px-4 md:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-32 right-20 w-4 h-4 bg-primary/40 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-48 left-20 w-3 h-3 bg-primary/50 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-40 right-40 w-5 h-5 bg-primary/30 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-60 left-32 w-4 h-4 bg-primary/40 rounded-full animate-bounce"></div>
        
        {/* Decorative icons floating */}
        <Star className="absolute top-40 right-32 w-6 h-6 text-primary/20 animate-pulse" />
        <Zap className="absolute bottom-48 left-24 w-8 h-8 text-primary/15 animate-pulse delay-500" />
        <TrendingUp className="absolute top-60 left-40 w-7 h-7 text-primary/20 animate-pulse delay-300" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Badge with glow effect */}
        <div className="relative inline-block mb-10">
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl"></div>
          <div className="relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm md:text-base font-bold shadow-2xl shadow-primary/40">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span>Webinar LIVE GRATUIT</span>
            <span className="w-1.5 h-1.5 bg-primary-foreground/60 rounded-full"></span>
            <span>{WEBINAR_DATE}</span>
          </div>
        </div>

        {/* Main headline with dramatic styling */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight font-sans">
          <span className="block bg-gradient-to-br from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent drop-shadow-sm">Cum crești în criză:</span>
          <span className="block text-foreground mt-2">
            12 Skill-uri care te vor
          </span>
          <span className="block">
            <span className="relative inline-block">
              <span className="text-foreground">salva în </span>
              <span className="relative text-primary">
                2026
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-primary/40" />
                </svg>
              </span>
            </span>
          </span>
        </h1>

        {/* Subheadline with emphasis */}
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
          Descoperă abilitățile esențiale care îți cresc relevanța, adaptabilitatea și reziliența în 2026 — 
          <span className="text-foreground font-semibold"> când alții vor cădea, tu vei crește.</span>
        </p>

        {/* Urgency message with icon */}
        <div className="inline-flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl px-6 py-4 mb-12">
          <span className="text-2xl">‼️</span>
          <p className="text-lg md:text-xl text-foreground font-bold">
            Acesta poate fi pasul tău înainte de cea mai mare schimbare din ultimii 20 de ani.
          </p>
        </div>

        {/* CTA Button with enhanced effects */}
        <div className="mb-16">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-primary/40 rounded-full blur-2xl animate-pulse"></div>
            <Button asChild size="lg" className="relative group px-12 py-8 text-xl md:text-2xl font-black rounded-full shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all duration-500 hover:scale-110">
              <a href={getCTALink()}>
                Înscrie-te GRATUIT
                <ArrowRight className="ml-3 w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            Locurile sunt limitate • Durată: 2 ore
          </p>
        </div>

        {/* Bonus Box with premium styling */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-3xl blur-2xl animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-card via-card to-card/90 backdrop-blur-xl border-2 border-primary/40 rounded-3xl p-10 shadow-2xl">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                <Gift className="w-5 h-5" />
                BONUS EXCLUSIV
              </div>
            </div>
            <div className="mt-4 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img 
                  src="/assets/mockup_bonus_yuuki.png" 
                  alt="Planul Tău de Start 2026 - Workbook Bonus" 
                  className="w-48 md:w-56 h-auto drop-shadow-2xl"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-black text-primary mb-3">BONUS la înscriere</h3>
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  <span className="font-bold">Adevărul despre 2026:</span> Mini-evaluare de 10 minute care îți arată exact unde ești și ce vine
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-bounce">
          <div className="w-10 h-16 border-2 border-primary/40 rounded-full mx-auto flex items-start justify-center p-3">
            <div className="w-2 h-4 bg-primary rounded-full animate-pulse"></div>
          </div>
          <p className="text-sm text-muted-foreground mt-3">Derulează pentru mai multe</p>
        </div>
      </div>
    </section>;
};
export default HeroSection;