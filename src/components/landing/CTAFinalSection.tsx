import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Gift, Sparkles, ArrowRight } from "lucide-react";
import { CTA_LINK, WEBINAR_DATE, WEBINAR_TIME } from "@/lib/constants";

const stats = [
  { icon: TrendingUp, value: "40%", label: "din joburi vor fi automatizate" },
  { icon: Clock, value: "90 min", label: "care îți pot schimba viitorul" },
  { icon: Gift, value: "100%", label: "gratuit" },
];

const CTAFinalSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 bg-primary text-primary-foreground overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Floating Sparkles */}
      <div className="absolute top-20 right-[15%] opacity-30 animate-pulse">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute bottom-20 left-[10%] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-12 h-12" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary-foreground/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <stat.icon className="w-7 h-7" />
              </div>
              <div className="text-left">
                <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                <p className="text-sm opacity-80">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency Message */}
        <div className="relative inline-block mb-12">
          <div className="absolute inset-0 bg-primary-foreground/20 blur-xl rounded-2xl" />
          <div className="relative bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl px-8 py-6">
            <p className="text-xl md:text-2xl font-medium flex items-center justify-center gap-3 flex-wrap">
              <span className="inline-block animate-pulse">⚠️</span>
              Locurile sunt limitate. Webinarul are loc pe{" "}
              <strong className="underline decoration-2 underline-offset-4">{WEBINAR_DATE}</strong>{" "}
              la ora <strong className="underline decoration-2 underline-offset-4">{WEBINAR_TIME}</strong>.
            </p>
          </div>
        </div>

        {/* Main CTA */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Nu lăsa viitorul la{" "}
          <span className="relative">
            voia întâmplării
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
              <path d="M2 10C50 4 100 2 150 6C200 10 250 8 298 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
            </svg>
          </span>
        </h2>
        <p className="text-xl md:text-2xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Înscrie-te acum și fă primul pas către transformarea ta profesională. 
          Te așteptăm pe {WEBINAR_DATE}!
        </p>

        {/* CTA Button */}
        <Button 
          asChild 
          size="lg" 
          className="group text-xl px-12 py-8 h-auto rounded-full shadow-2xl shadow-primary-foreground/20 hover:shadow-primary-foreground/30 bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all duration-300 hover:scale-105"
        >
          <a href={CTA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
            Rezervă-ți locul GRATUIT acum
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>

        {/* Trust Badge */}
        <p className="mt-8 text-sm opacity-60 flex items-center justify-center gap-2">
          <span>🔒</span>
          Datele tale sunt în siguranță și nu vor fi partajate cu terți
        </p>
      </div>
    </section>
  );
};

export default CTAFinalSection;
