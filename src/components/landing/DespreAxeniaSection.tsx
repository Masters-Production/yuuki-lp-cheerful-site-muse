import { Quote } from "lucide-react";

const DespreAxeniaSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-card">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className-="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Cine este Axenia Bot?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo Placeholder */}
          <div className="order-2 md:order-1">
            {/* PLACEHOLDER: Înlocuiește src cu calea către poza Axeniei */}
            <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center border-2 border-dashed border-border overflow-hidden">
              {/* Uncomment and replace path when you have the image:
              <img 
                src="/path/to/axenia-photo.jpg" 
                alt="Axenia Bot - Trainer și Coach" 
                className="w-full h-full object-cover"
              />
              */}
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👩‍💼</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Placeholder pentru poza Axeniei
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  (Înlocuiește în DespreAxeniaSection.tsx)
                </p>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="order-1 md:order-2">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Trainer
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Coach
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Consultant
                </span>
              </div>

              <p className="text-foreground text-lg leading-relaxed">
                Axenia Bot este un profesionist cu peste <strong>15 ani de experiență</strong> în 
                dezvoltare personală și organizațională, specializată în transformarea liderilor 
                și echipelor pentru era digitală.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                A lucrat cu sute de companii și mii de profesioniști, ajutându-i să navigheze 
                cu succes prin perioade de criză și schimbare. Metodele sale combină cele mai 
                noi cercetări în neuroștiință cu practici dovedite de leadership și productivitate.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Este cunoscută pentru abordarea ei practică și pentru rezultatele măsurabile 
                pe care le obțin participanții la programele sale.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 bg-background rounded-xl p-6 border border-border relative">
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 left-4" />
              <blockquote className="pl-8 text-foreground italic text-lg">
                "Criza nu este un obstacol, ci un catalizator pentru transformare. 
                Cei care învață să se adapteze nu doar supraviețuiesc — ei prosperă."
              </blockquote>
              <p className="text-primary font-medium mt-4 pl-8">— Axenia Bot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DespreAxeniaSection;
