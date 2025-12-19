import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, Zap, TrendingUp, Shield } from "lucide-react";
import { CTA_LINK, WEBINAR_DATE } from "@/lib/constants";

const CTAFinalSection = () => {
  return (
    <section className="relative py-28 md:py-36 px-4 md:px-8 bg-primary text-primary-foreground overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-foreground/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-foreground/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-foreground/5 rounded-full blur-3xl"></div>
        
        {/* Floating elements */}
        <Zap className="absolute top-20 right-20 w-12 h-12 text-primary-foreground/10 animate-pulse" />
        <TrendingUp className="absolute bottom-32 left-20 w-16 h-16 text-primary-foreground/10 animate-pulse delay-500" />
        <Shield className="absolute top-40 left-32 w-10 h-10 text-primary-foreground/10 animate-pulse delay-300" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Warning badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-base font-bold mb-10 border border-primary-foreground/20">
          <AlertTriangle className="w-5 h-5" />
          <span>Piața muncii se resetează în 2026</span>
        </div>

        {/* Stats message */}
        <p className="text-xl md:text-2xl lg:text-3xl opacity-90 mb-10 leading-relaxed max-w-4xl mx-auto">
          <span className="font-black text-2xl md:text-3xl lg:text-4xl">40%</span> din taskuri vor fi automatizate în 2026 (World Economic Forum). 
          <br className="hidden md:block" />
          Crește <span className="font-black underline decoration-4 underline-offset-4">URGENT</span> nevoia de soft skills. 
          <br />
          Abilitățile care te-au adus aici <span className="font-black">NU</span> te vor duce mai departe.
        </p>

        {/* Date highlight */}
        <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-primary-foreground/20 max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl lg:text-4xl font-black">
            Pe <span className="underline decoration-4 underline-offset-8">{WEBINAR_DATE}</span> afli cele 12 skill-uri care te fac de neînlocuit în 2026.
          </p>
        </div>

        {/* Final message */}
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-14 leading-tight">
          Devină persoana care
          <br />
          face față{" "}
          <span className="relative inline-block">
            <span className="relative z-10">oricăror vremuri.</span>
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
              <path d="M2 10C75 2 225 2 298 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-primary-foreground/40"/>
            </svg>
          </span>
        </h2>

        {/* CTA Button */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-background/30 rounded-full blur-2xl animate-pulse"></div>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="relative group px-14 py-10 text-2xl md:text-3xl font-black rounded-full shadow-2xl hover:scale-110 transition-all duration-500"
          >
            <a href={CTA_LINK}>
              Rezervă-mi locul GRATUIT
              <ArrowRight className="ml-3 w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </Button>
        </div>

        <p className="text-primary-foreground/70 mt-8 text-lg">
          100% gratuit • Fără obligații • Locuri limitate
        </p>
      </div>
    </section>
  );
};

export default CTAFinalSection;
