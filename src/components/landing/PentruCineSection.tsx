import { Check, X, UserCheck, UserX } from "lucide-react";
const forYou = ["Vrei să crești profesional și financiar în 2026", "Ai potențial dar nu știi ce să înveți și unde să investești pentru rezultate reale", "Te-ai săturat de dezvoltare personală și spirituală fără progres real și schimbări dorite în viața ta", "Nu vrei să fii în surprindere de schimbări și criză.", "Ești gata să investești timp și efort în dezvoltarea ta"];
const notForYou = ["Cauți soluții rapide și magice. Nu există așa ceva fără consecințe și mai grave ulterior", "Ești ok cu locul în care ești și problemele care le ai", "Vrei doar inspirație fără implementare. Aici vorbim despre acțiune și rezultate.", "Dacă nu simți nevoia să crești profesional, financiar, personal", "Dacă nu poți fi în live la webinar pe 25 decembrie, mai bine nu te înscrii."];
const PentruCineSection = () => {
  return <section className="relative py-28 md:py-36 px-4 md:px-8 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-destructive/5 rounded-full blur-3xl -translate-y-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Este acest webinar
            <br />
            <span className="text-primary">pentru tine?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* For You */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-card rounded-[40px] p-10 md:p-12 border-2 border-primary/30 h-full shadow-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
              {/* Header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center shadow-lg">
                  <UserCheck className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <span className="text-primary font-bold text-lg"></span>
                  <h3 className="text-2xl md:text-3xl font-black text-foreground">ESTE PENTRU TINE DACĂ:</h3>
                </div>
              </div>
              
              <ul className="space-y-5">
                {forYou.map((item, index) => <li key={index} className="flex gap-4 group/item">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mt-0.5 group-hover/item:bg-primary/30 transition-colors">
                      <Check className="w-5 h-5 text-primary" strokeWidth={3} />
                    </div>
                    <span className="text-foreground text-lg leading-relaxed">{item}</span>
                  </li>)}
              </ul>
            </div>
          </div>

          {/* Not For You */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-destructive/20 to-destructive/5 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-card rounded-[40px] p-10 md:p-12 border-2 border-destructive/30 h-full shadow-xl hover:shadow-2xl hover:shadow-destructive/10 transition-all duration-500">
              {/* Header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-destructive/30 to-destructive/10 rounded-2xl flex items-center justify-center shadow-lg">
                  <UserX className="w-8 h-8 text-destructive" />
                </div>
                <div>
                  <span className="text-destructive font-bold text-lg"></span>
                  <h3 className="text-2xl md:text-3xl font-black text-foreground">
                    NU ESTE PENTRU TINE DACĂ:
                  </h3>
                </div>
              </div>
              
              <ul className="space-y-5">
                {notForYou.map((item, index) => <li key={index} className="flex gap-4 group/item">
                    <div className="flex-shrink-0 w-8 h-8 bg-destructive/20 rounded-full flex items-center justify-center mt-0.5 group-hover/item:bg-destructive/30 transition-colors">
                      <X className="w-5 h-5 text-destructive" strokeWidth={3} />
                    </div>
                    <span className="text-foreground text-lg leading-relaxed">{item}</span>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PentruCineSection;