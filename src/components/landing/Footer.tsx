import { Heart, Sparkles, ArrowRight } from "lucide-react";
import { CTA_LINK } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 px-4 md:px-8 bg-gradient-to-b from-card via-background to-card overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Top section with CTA */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
            <Sparkles className="w-4 h-4" />
            Nu rata această oportunitate
          </div>
          
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Fă primul pas spre <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">viitorul tău</span>
          </p>
          
          <Button
            asChild
            size="lg"
            className="px-10 py-6 text-lg font-bold rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-500 shadow-xl shadow-primary/30 transition-all duration-300 hover:scale-105"
          >
            <a href={CTA_LINK} className="flex items-center gap-2">
              Înscrie-te GRATUIT
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
        
        {/* Divider */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border/30"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-background px-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-primary/20">
                <span className="text-primary font-black text-xl">A</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="text-center space-y-6">
          {/* Brand name */}
          <h3 className="text-2xl font-black bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
            Axenia Bot
          </h3>
          
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {currentYear} Axenia Bot. Toate drepturile rezervate.
          </p>
          
          {/* Made with love */}
          <p className="text-muted-foreground/70 text-sm flex items-center justify-center gap-2">
            Creat cu 
            <Heart className="w-4 h-4 fill-primary text-primary animate-pulse" /> 
            pentru transformarea ta profesională
          </p>
          
          {/* Disclaimer */}
          <div className="pt-6">
            <p className="text-muted-foreground/50 text-xs max-w-lg mx-auto leading-relaxed bg-muted/30 rounded-xl px-6 py-4 border border-border/30">
              Acest webinar este oferit gratuit în scop educațional. Rezultatele pot varia în funcție de aplicarea informațiilor primite.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
