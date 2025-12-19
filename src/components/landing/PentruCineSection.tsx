import { Check, X } from "lucide-react";

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
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Este acest webinar pentru tine?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vrem să ne asigurăm că vei obține maximum de valoare din această experiență.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* For Who */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">DA, este pentru tine dacă:</h3>
            </div>
            <ul className="space-y-4">
              {pentruCine.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For */}
          <div className="bg-muted/50 border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-muted-foreground/20 rounded-full flex items-center justify-center">
                <X className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground">NU este pentru tine dacă:</h3>
            </div>
            <ul className="space-y-4">
              {nuEstePentru.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PentruCineSection;
