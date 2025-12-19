import { Check, X, Target } from "lucide-react";

const pentruCine = [
  "Antreprenori care vor să-și dezvolte afacerea în ciuda incertitudinii economice",
  "Manageri și lideri care vor să-și inspire echipele în vremuri dificile",
  "Profesioniști care simt că au nevoie de skill-uri noi pentru a rămâne relevanți",
  "Oricine vrea să transforme criza într-o oportunitate de creștere",
  "Cei care sunt dispuși să investească 90 de minute pentru a-și schimba viitorul"
];

const nuEstePentru = [
  "Cei care caută soluții magice fără efort",
  "Persoanele care nu sunt dispuse să facă schimbări",
  "Cei care cred că știu deja totul",
  "Oamenii care preferă să se plângă în loc să acționeze"
];

const PentruCineSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-destructive/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            Află dacă e pentru tine
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Este acest webinar{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              pentru tine?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Vrem să ne asigurăm că vei obține maximum de valoare din această experiență.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Who */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-10 h-full hover:border-primary/40 transition-colors">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25">
                  <Check className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">DA, este pentru tine dacă:</h3>
              </div>
              <ul className="space-y-5">
                {pentruCine.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group/item">
                    <div className="shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-0.5 group-hover/item:bg-primary/30 transition-colors">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Not For */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 rounded-3xl blur-xl opacity-50" />
            <div className="relative bg-gradient-to-br from-muted/80 to-muted/40 border border-border rounded-3xl p-10 h-full hover:border-muted-foreground/20 transition-colors">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-muted-foreground/20 rounded-2xl flex items-center justify-center">
                  <X className="w-7 h-7 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">NU este pentru tine dacă:</h3>
              </div>
              <ul className="space-y-5">
                {nuEstePentru.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group/item">
                    <div className="shrink-0 w-6 h-6 bg-muted-foreground/10 rounded-full flex items-center justify-center mt-0.5">
                      <X className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <span className="text-muted-foreground text-lg leading-relaxed">{item}</span>
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
