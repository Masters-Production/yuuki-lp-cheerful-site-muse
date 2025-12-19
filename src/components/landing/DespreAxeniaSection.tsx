import { Quote, Star, Award, Users, Heart } from "lucide-react";

const DespreAxeniaSection = () => {
  return (
    <section className="relative py-28 md:py-36 px-4 md:px-8 bg-gradient-to-b from-card via-card to-background overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Users className="w-4 h-4" />
            Despre speaker
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Cine te va ghida
            <br />
            <span className="text-primary">în acest webinar</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo placeholder with premium styling */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-[40px] blur-3xl"></div>
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-primary/20 rounded-[48px]"></div>
              
              <div className="relative aspect-[3/4] bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-[40px] flex items-center justify-center border-4 border-primary/20 overflow-hidden shadow-2xl">
                <div className="text-center p-8">
                  <div className="w-40 h-40 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl border-4 border-primary/20">
                    <span className="text-7xl">👩‍💼</span>
                  </div>
                  <p className="text-muted-foreground text-sm bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full">
                    Adaugă poza Axeniei aici
                  </p>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-card border-2 border-primary/30 rounded-2xl p-4 shadow-xl">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card border-2 border-primary/30 rounded-2xl p-4 shadow-xl">
                <Heart className="w-8 h-8 text-primary" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-4xl md:text-5xl font-black text-foreground mb-3">
              Axenia Bot
            </h3>
            <p className="text-primary font-bold text-xl mb-8">
              Fondatoarea Yuuki Academy
            </p>
            
            {/* Credentials */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4 bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-border/50 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <span className="text-foreground text-lg font-medium">Coach, autor, psihoterapeut în formare CBT</span>
              </div>
              <div className="flex items-center gap-4 bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-border/50 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <span className="text-foreground text-lg font-medium">Trainer în Dezvoltare Personală și Profesională</span>
              </div>
            </div>

            <p className="text-muted-foreground text-xl mb-10 leading-relaxed">
              Am susținut <span className="text-foreground font-bold">sute de femei</span> să treacă în claritate, încredere și rezultate concrete.
            </p>

            {/* Quote with premium styling */}
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl blur-xl"></div>
              <div className="relative bg-card border-2 border-primary/20 rounded-3xl p-8 shadow-xl">
                <Quote className="w-12 h-12 text-primary/30 absolute -top-4 -left-4" />
                <p className="text-foreground text-lg italic leading-relaxed pl-4">
                  "Nu cred în dezvoltare personală care te face să te simți bine dar nu îți schimbă viața ori terapie de dragul terapiei. Cred în abilități practice care produc rezultate concrete și vizibile — mai mulți bani, relații sănătoase, stare de bine, încredere, siguranță. <span className="font-bold text-primary">Asta vei primi pe 25 decembrie.</span>"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DespreAxeniaSection;
