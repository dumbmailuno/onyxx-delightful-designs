import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Minus, Plus, MessageCircle } from "lucide-react";

interface OrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  item: {
    name: string;
    price: string;
    image: string;
    description: string;
  } | null;
}

const OrderModal = ({ open, onOpenChange, item }: OrderModalProps) => {
  const [quantity, setQuantity] = useState(1);

  if (!item) return null;

const handleOrder = () => {'
  const phoneNumber = "2347032485531"; 
  const message = `Hello Onyxx! I'd like to order:

*${item.name}*
${item.description}
Price: ${item.price}
Quantity: ${quantity}

Please confirm availability. Thank you!`;

  window.open(
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );

  onOpenChange(false);
  setQuantity(1);
};

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border p-0 overflow-hidden rounded-xl">
        <div className="aspect-video overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <DialogHeader className="text-left mb-4">
            <DialogTitle className="font-display text-2xl text-foreground">
              {item.name}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground font-light text-sm">
              {item.description}
            </DialogDescription>
          </DialogHeader>

          <p className="text-gold font-body font-semibold text-lg mb-6">
            {item.price}
          </p>

          {/* Quantity selector */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-muted-foreground text-sm font-body uppercase tracking-wider">
              Quantity
            </span>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-border rounded-lg flex items-center justify-center text-foreground hover:border-gold/40 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-foreground font-display text-xl font-bold w-8 text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-border rounded-lg flex items-center justify-center text-foreground hover:border-gold/40 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <Button
            onClick={handleOrder}
            className="w-full py-6 bg-[#25D366] hover:bg-[#25D366]/90 text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase rounded-lg gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Order via WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
