import { Check, X } from "lucide-react";

const forYou = [
  "Vrei să crești profesional și financiar în 2026",
  "Ai potențial dar nu știi ce să înveți și unde să investești pentru rezultate reale",
  "Te-ai săturat de dezvoltare personală și spirituală fără progres real și schimbări dorite în viața ta",
  "Nu vrei să fii în surprindere de schimbări și criză.",
  "Ești gata să investești timp și efort în dezvoltarea ta"
];

const notForYou = [
  "Cauți soluții rapide și magice. Nu există așa ceva fără consecințe și mai grave ulterior",
  "Ești ok cu locul în care ești și problemele care le ai",
  "Vrei doar inspirație fără implementare. Aici vorbim despre acțiune și rezultate.",
  "Dacă nu simți nevoia să crești profesional, financiar, personal",
  "Dacă nu poți fi în live la webinar pe 25 decembrie, mai bine nu te înscrii."
];

const PentruCineSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-destructive/5 rounded-full blur-3xl -translate-y-1/2"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 md:p-10 border-2 border-primary/20 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center"><Check className="w-6 h-6 text-primary" /></div>
                <h3 className="text-2xl md:text-3xl font-black text-foreground">ACEST WEBINAR ESTE PENTRU TINE DACĂ:</h3>
              </div>
              <ul className="space-y-4">
                {forYou.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5"><Check className="w-4 h-4 text-primary" /></div>
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 md:p-10 border-2 border-destructive/20 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center"><X className="w-6 h-6 text-destructive" /></div>
                <h3 className="text-2xl md:text-3xl font-black text-foreground">ACEST WEBINAR NU ESTE PENTRU TINE DACĂ:</h3>
              </div>
              <ul className="space-y-4">
                {notForYou.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-destructive/20 rounded-full flex items-center justify-center mt-0.5"><X className="w-4 h-4 text-destructive" /></div>
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PentruCineSection;
