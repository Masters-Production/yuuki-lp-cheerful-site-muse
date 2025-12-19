import { Quote, Star } from "lucide-react";

const DespreAxeniaSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 bg-card overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 leading-tight">Cine te va ghida <span className="text-primary">în acest webinar</span></h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl"></div>
            <div className="relative aspect-[3/4] bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center border-2 border-primary/20 overflow-hidden">
              <div className="text-center p-8">
                <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-6xl">👩‍💼</span>
                </div>
                <p className="text-muted-foreground text-sm">Adaugă poza Axeniei aici</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          </div>
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-foreground mb-2">Axenia Bot</h3>
            <p className="text-primary font-semibold text-lg mb-6">Fondatoarea Yuuki Academy</p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3"><Star className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-foreground">Coach, autor, psihoterapeut în formare CBT</span></div>
              <div className="flex items-center gap-3"><Star className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-foreground">Trainer în Dezvoltare Personală și Profesională</span></div>
            </div>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">Am susținut sute de femei să treacă în claritate, încredere și rezultate concrete.</p>
            <div className="relative bg-background rounded-2xl p-6 border border-border/50">
              <Quote className="w-10 h-10 text-primary/30 absolute -top-3 -left-3" />
              <p className="text-foreground italic leading-relaxed pl-4">"Nu cred în dezvoltare personală care te face să te simți bine dar nu îți schimbă viața ori terapie de dragul terapiei. Cred în abilități practice care produc rezultate concrete și vizibile — mai mulți bani, relații sănătoase, stare de bine, încredere, siguranță. Asta vei primi pe 25 decembrie."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DespreAxeniaSection;
