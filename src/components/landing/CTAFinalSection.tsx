import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { CTA_LINK, WEBINAR_DATE } from "@/lib/constants";

const CTAFinalSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-foreground/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full text-sm font-semibold mb-8">
          <AlertTriangle className="w-4 h-4" />
          <span>Piața muncii se resetează în 2026</span>
        </div>
        <p className="text-xl md:text-2xl opacity-90 mb-8 leading-relaxed max-w-3xl mx-auto">
          40% din taskuri vor fi automatizate în 2026 (World Economic Forum). Crește URGENT nevoia de soft skills. Abilitățile care te-au adus aici NU te vor duce mai departe.
        </p>
        <p className="text-2xl md:text-3xl font-bold mb-8">Pe {WEBINAR_DATE} afli cele 12 skill-uri care te fac de neînlocuit în 2026.</p>
        <h2 className="text-3xl md:text-5xl font-black mb-12 leading-tight">Devină persoana care face față <span className="underline decoration-4 underline-offset-8">oricăror vremuri.</span></h2>
        <Button asChild size="lg" variant="secondary" className="group px-12 py-8 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all duration-300">
          <a href={CTA_LINK}>Rezervă-mi locul GRATUIT<ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" /></a>
        </Button>
      </div>
    </section>
  );
};

export default CTAFinalSection;
