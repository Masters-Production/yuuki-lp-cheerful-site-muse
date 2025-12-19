const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 md:px-8 bg-foreground text-background">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm opacity-80">
          © {currentYear} Axenia Bot. Toate drepturile rezervate.
        </p>
        <p className="text-xs opacity-60 mt-2">
          Acest webinar este oferit gratuit în scop educațional.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
