const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="font-display text-xl font-bold">
              <span className="text-foreground">Onyxx</span>
              <span className="text-gold-gradient italic ml-1">Cakes & Pastries</span>
            </a>
            <p className="text-muted-foreground text-sm font-light mt-1">
              Green Park Hotel, Kubwa — Open 24 Hours
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground font-light">
            <a href="tel:+2347032485531" className="hover:text-gold transition-colors">
              0703 248 5531
            </a>
            <span className="text-border">|</span>
            <a
              href="https://wa.me/2347032485531"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-xs font-light">
            © {new Date().getFullYear()} Onyxx Cakes & Pastries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
