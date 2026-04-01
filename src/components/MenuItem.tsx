import { motion } from "framer-motion";

interface MenuItemProps {
  image: string;
  name: string;
  description: string;
  price: string;
  tag?: string;
  index: number;
  onClick?: () => void;
}

const MenuItem = ({ image, name, description, price, tag, index, onClick }: MenuItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden bg-card rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          width={640}
          height={640}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {tag && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-gold-gradient text-primary-foreground text-xs font-body font-semibold tracking-wider uppercase rounded-md">
            {tag}
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-gold transition-colors">
            {name}
          </h3>
          <span className="text-gold font-body font-semibold text-sm whitespace-nowrap">{price}</span>
        </div>
        <p className="text-muted-foreground text-sm font-light leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default MenuItem;
