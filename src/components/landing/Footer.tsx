import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 md:px-8 bg-foreground text-background overflow-hidden">
      {/* Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground to-foreground/95" />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center space-y-4">
          {/* Logo/Brand */}
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <span className="font-bold text-xl">Axenia Bot</span>
          </div>
          
          {/* Copyright */}
          <p className="text-sm opacity-80">
            © {currentYear} Axenia Bot. Toate drepturile rezervate.
          </p>
          
          {/* Subtext */}
          <p className="text-xs opacity-60 flex items-center justify-center gap-1">
            Creat cu <Heart className="w-3 h-3 fill-current text-primary" /> pentru transformarea ta profesională
          </p>
          
          {/* Disclaimer */}
          <p className="text-xs opacity-40 max-w-md mx-auto pt-4">
            Acest webinar este oferit gratuit în scop educațional. Rezultatele pot varia în funcție de aplicarea informațiilor primite.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
