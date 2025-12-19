import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Gift } from "lucide-react";
import { CTA_LINK, WEBINAR_DATE, WEBINAR_TIME } from "@/lib/constants";

const CTAFinalSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-8 h-8" />
            <div className="text-left">
              <p className="text-3xl font-bold">40%</p>
              <p className="text-sm opacity-80">din joburi vor fi automatizate</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8" />
            <div className="text-left">
              <p className="text-3xl font-bold">90 min</p>
              <p className="text-sm opacity-80">care îți pot schimba viitorul</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Gift className="w-8 h-8" />
            <div className="text-left">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm opacity-80">gratuit</p>
            </div>
          </div>
        </div>

        {/* Urgency Message */}
        <div className="bg-primary-foreground/10 rounded-xl p-6 mb-8 inline-block">
          <p className="text-lg font-medium">
            ⚠️ Locurile sunt limitate. Webinarul are loc pe <strong>{WEBINAR_DATE}</strong> la ora <strong>{WEBINAR_TIME}</strong>.
          </p>
        </div>

        {/* Main CTA */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Nu lăsa viitorul la voia întâmplării
        </h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Înscrie-te acum și fă primul pas către transformarea ta profesională. 
          Te așteptăm pe {WEBINAR_DATE}!
        </p>

        {/* CTA Button */}
        <Button 
          asChild 
          size="lg" 
          variant="secondary"
          className="text-lg px-10 py-7 h-auto shadow-lg hover:shadow-xl transition-all bg-primary-foreground text-primary hover:bg-primary-foreground/90"
        >
          <a href={CTA_LINK} target="_blank" rel="noopener noreferrer">
            Rezervă-ți locul GRATUIT acum →
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTAFinalSection;
