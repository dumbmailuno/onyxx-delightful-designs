import { motion } from "framer-motion";
import heroCake from "@/assets/hero-cake.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCake}
          alt="Luxurious chocolate cake with gold leaf"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold-gradient opacity-60" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4"
          >
            Kubwa's Finest Bakery
          </motion.p>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold leading-[0.9] mb-6">
            <span className="text-foreground">Onyxx</span>
            <br />
            <span className="text-gold-gradient italic">Cakes &</span>
            <br />
            <span className="text-foreground">Pastries</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-muted-foreground text-lg max-w-md mb-8 font-light"
          >
            Handcrafted indulgence for every occasion. From bespoke wedding cakes 
            to artisan pastries — taste the extraordinary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#menu"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-gradient text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase rounded-none hover:opacity-90 transition-opacity"
            >
              Explore Menu
            </a>
            <a
              href="https://wa.me/2347032485531"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-gold/40 text-gold font-body font-medium text-sm tracking-wider uppercase rounded-none hover:bg-gold/10 transition-colors"
            >
              Order on WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Open 24 Hours badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-20 right-6 lg:right-12 hidden md:flex flex-col items-center"
        >
          <div className="w-24 h-24 rounded-full border border-gold/30 flex items-center justify-center">
            <div className="text-center">
              <p className="text-gold text-xs font-body tracking-widest uppercase">Open</p>
              <p className="text-foreground text-xl font-display font-bold">24</p>
              <p className="text-gold text-xs font-body tracking-widest uppercase">Hours</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
