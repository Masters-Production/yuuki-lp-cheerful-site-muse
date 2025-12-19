import { Quote, Star } from "lucide-react";

const DespreAxeniaSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 bg-card overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Floating Stars */}
      <div className="absolute top-20 right-[15%] opacity-20">
        <Star className="w-8 h-8 text-primary fill-primary" />
      </div>
      <div className="absolute bottom-32 left-[10%] opacity-10">
        <Star className="w-12 h-12 text-primary fill-primary" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            ✦ Despre trainer
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Cine este{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Axenia Bot?
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-3xl blur-2xl scale-95" />
              
              {/* Photo Container */}
              <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-3xl flex items-center justify-center border border-border overflow-hidden">
                {/* Uncomment and replace path when you have the image:
                <img 
                  src="/path/to/axenia-photo.jpg" 
                  alt="Axenia Bot - Trainer și Coach" 
                  className="w-full h-full object-cover"
                />
                */}
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-6xl">👩‍💼</span>
                  </div>
                  <p className="text-muted-foreground">
                    Placeholder pentru poza Axeniei
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-2">
                    (Înlocuiește în DespreAxeniaSection.tsx)
                  </p>
                </div>
              </div>

              {/* Decorative Badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-2xl shadow-lg shadow-primary/25">
                <span className="font-bold">15+ ani experiență</span>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="order-1 lg:order-2 space-y-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {["Trainer", "Coach", "Consultant"].map((tag) => (
                <span 
                  key={tag}
                  className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-foreground text-xl leading-relaxed">
              Axenia Bot este un profesionist cu peste <strong className="text-primary">15 ani de experiență</strong> în 
              dezvoltare personală și organizațională, specializată în transformarea liderilor 
              și echipelor pentru era digitală.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              A lucrat cu sute de companii și mii de profesioniști, ajutându-i să navigheze 
              cu succes prin perioade de criză și schimbare. Metodele sale combină cele mai 
              noi cercetări în neuroștiință cu practici dovedite de leadership și productivitate.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Este cunoscută pentru abordarea ei practică și pentru rezultatele măsurabile 
              pe care le obțin participanții la programele sale.
            </p>

            {/* Quote */}
            <div className="relative mt-10">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl blur-xl" />
              <div className="relative bg-gradient-to-br from-background to-background/80 rounded-2xl p-8 border border-primary/20">
                <Quote className="w-12 h-12 text-primary/20 absolute top-6 left-6" />
                <blockquote className="relative pl-12 text-foreground text-xl italic leading-relaxed">
                  "Criza nu este un obstacol, ci un catalizator pentru transformare. 
                  Cei care învață să se adapteze nu doar supraviețuiesc — ei prosperă."
                </blockquote>
                <p className="text-primary font-bold mt-6 pl-12 text-lg">— Axenia Bot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DespreAxeniaSection;
