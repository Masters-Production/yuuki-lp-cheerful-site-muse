import { Heart } from "lucide-react";
import yuukiLogo from "@/assets/yuuki-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 md:px-8 bg-foreground text-background overflow-hidden">
      {/* Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground to-foreground/95" />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center space-y-4">
          {/* Logo/Brand */}
          <div className="inline-flex items-center gap-3 mb-4">
            <img src={yuukiLogo} alt="Yuuki Academy" className="h-10 w-auto" />
            <span className="font-bold text-xl">Yuuki Academy</span>
          </div>
          
          {/* Copyright */}
          <p className="text-sm opacity-80">
            © {currentYear} Yuuki Academy. Toate drepturile rezervate.
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
