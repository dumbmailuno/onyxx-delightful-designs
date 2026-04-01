import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      {/* Subtle gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gold-gradient opacity-30" />

      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
            Find Us
          </p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
            Visit <span className="text-gold-gradient italic">Onyxx</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold-gradient mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info cards */}
          <div className="space-y-6">
            {[
              {
                icon: MapPin,
                title: "Location",
                lines: [
                  "Green Park Hotel",
                  "2/2 Emotan St, Kubwa",
                  "901101, Federal Capital Territory",
                ],
              },
              {
                icon: Clock,
                title: "Hours",
                lines: ["Open 24 Hours", "Every day of the week"],
              },
              {
                icon: Phone,
                title: "Phone",
                lines: ["0703 248 5531"],
                href: "tel:+2347032485531",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="flex gap-5 p-6 border border-border rounded-lg hover:border-gold/30 transition-colors group"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-gold/30 rounded-lg group-hover:bg-gold/10 transition-colors shrink-0">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                  {item.lines.map((line) =>
                    item.href ? (
                      <a
                        key={line}
                        href={item.href}
                        className="block text-muted-foreground font-light text-sm hover:text-gold transition-colors"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-muted-foreground font-light text-sm">
                        {line}
                      </p>
                    )
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map & WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            {/* OpenStreetMap embed */}
            <div className="w-full aspect-[4/3] bg-secondary mb-6 overflow-hidden rounded-lg">
              <iframe
                title="Onyxx Cakes Location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=7.18%2C9.13%2C7.22%2C9.17&layer=mapnik&marker=9.15%2C7.20"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                className="opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://api.whatsapp.com/message/5L6YIR7MJBVWM1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-8 py-5 bg-[#25D366] text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase hover:opacity-90 transition-opacity rounded-full"
            >
              <MessageCircle className="w-5 h-5" />
              Order via WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
