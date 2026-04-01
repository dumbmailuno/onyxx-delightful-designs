import { useState } from "react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

import cakeChocolate from "@/assets/cake-chocolate.jpg";
import cakeRedvelvet from "@/assets/cake-redvelvet.jpg";
import cakeWedding from "@/assets/cake-wedding.jpg";
import cakeBirthday from "@/assets/cake-birthday.jpg";
import cakeCustom from "@/assets/cake-custom.jpg";
import pastriesAssorted from "@/assets/pastries-assorted.jpg";
import pastriesMacarons from "@/assets/pastries-macarons.jpg";
import pastriesCinnamonrolls from "@/assets/pastries-cinnamonrolls.jpg";

const categories = ["All", "Cakes", "Pastries", "Custom Orders"] as const;
type Category = (typeof categories)[number];

const menuItems = [
  {
    image: cakeChocolate,
    name: "Dark Chocolate Ganache",
    description: "Rich Belgian chocolate layers with silky ganache drip and chocolate shavings",
    price: "₦18,000 – ₦45,000",
    category: "Cakes",
    tag: "Bestseller",
  },
  {
    image: cakeRedvelvet,
    name: "Red Velvet Dream",
    description: "Classic red velvet sponge with cream cheese frosting, topped with fresh berries",
    price: "₦15,000 – ₦40,000",
    category: "Cakes",
  },
  {
    image: cakeWedding,
    name: "Elegant Wedding Cake",
    description: "Multi-tier buttercream masterpiece, customized for your special day",
    price: "₦80,000 – ₦350,000",
    category: "Custom Orders",
    tag: "Premium",
  },
  {
    image: cakeBirthday,
    name: "Floral Birthday Cake",
    description: "Vibrant buttercream flowers on vanilla sponge — a celebration in every bite",
    price: "₦20,000 – ₦55,000",
    category: "Cakes",
  },
  {
    image: cakeCustom,
    name: "Bespoke Fondant Design",
    description: "Custom sculpted fondant cakes with intricate patterns for luxury events",
    price: "₦50,000 – ₦200,000",
    category: "Custom Orders",
    tag: "Luxury",
  },
  {
    image: pastriesAssorted,
    name: "Butter Croissants",
    description: "Flaky, golden French-style croissants, freshly baked daily",
    price: "₦1,500 each",
    category: "Pastries",
  },
  {
    image: pastriesMacarons,
    name: "French Macarons",
    description: "Delicate almond meringue shells with assorted premium fillings",
    price: "₦800 each / ₦8,000 box of 12",
    category: "Pastries",
    tag: "Popular",
  },
  {
    image: pastriesCinnamonrolls,
    name: "Cinnamon Rolls",
    description: "Warm, gooey cinnamon swirls with cream cheese glaze",
    price: "₦2,000 each",
    category: "Pastries",
  },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = activeCategory === "All"
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">
            Our Collection
          </p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
            Crafted with <span className="text-gold-gradient italic">Passion</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold-gradient mx-auto mb-6" />
          <p className="text-muted-foreground max-w-lg mx-auto font-light">
            Every creation tells a story. Explore our signature cakes and artisan pastries, 
            each made from the finest ingredients.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 text-sm font-body tracking-wider uppercase transition-all duration-300 rounded-none ${
                activeCategory === cat
                  ? "bg-gold-gradient text-primary-foreground font-semibold"
                  : "border border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <MenuItem key={item.name} {...item} index={i} />
          ))}
        </div>

        {/* Custom order CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block border border-gold/20 p-8 sm:p-12 shimmer">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-2">
              Can't find what you need?
            </p>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">
              Custom Orders Welcome
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-6 font-light text-sm">
              From corporate events to intimate celebrations — tell us your vision 
              and we'll bring it to life.
            </p>
            <a
              href="https://wa.me/2347032485531?text=Hello%20Onyxx!%20I'd%20like%20to%20place%20a%20custom%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-gold-gradient text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase hover:opacity-90 transition-opacity"
            >
              Request Custom Order
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
