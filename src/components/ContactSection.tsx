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
                className="flex gap-5 p-6 border border-border hover:border-gold/30 transition-colors group"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-gold/30 group-hover:bg-gold/10 transition-colors shrink-0">
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

          {/* WhatsApp CTA & map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            {/* Map embed */}
            <div className="w-full aspect-[4/3] bg-secondary mb-6 overflow-hidden">
              <iframe
                title="Onyxx Cakes Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.5!2d7.2!3d9.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDknMDAuMCJOIDfCsDEyJzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/2347032485531?text=Hello%20Onyxx!%20I'd%20like%20to%20make%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-8 py-5 bg-[#25D366] text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase hover:opacity-90 transition-opacity"
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
