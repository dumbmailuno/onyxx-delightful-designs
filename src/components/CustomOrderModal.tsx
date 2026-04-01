import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, Check } from "lucide-react";

interface CustomOrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const recommendations = [
  { label: "Birthday Cake", emoji: "🎂" },
  { label: "Wedding Cake", emoji: "💒" },
  { label: "Anniversary Cake", emoji: "💕" },
  { label: "Baby Shower Cake", emoji: "👶" },
  { label: "Corporate Event Cake", emoji: "🏢" },
  { label: "Cupcakes (Dozen)", emoji: "🧁" },
  { label: "Pastry Platter", emoji: "🥐" },
  { label: "Graduation Cake", emoji: "🎓" },
];

const CustomOrderModal = ({ open, onOpenChange }: CustomOrderModalProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (label: string) => {
    setSelected((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  const handleOrder = () => {
    const items = selected.length > 0 ? selected.join(", ") : "Custom order";
    const message = `Hello Onyxx! I'd like to place a custom order:\n\n📋 *Items:* ${items}\n\nPlease share available options and pricing. Thank you!`;
    window.open(
      `https://api.whatsapp.com/message/5L6YIR7MJBVWM1?text=${encodeURIComponent(message)}`,
      "_blank"
    );
    onOpenChange(false);
    setSelected([]);
  };

  const handleFreestyle = () => {
    window.open("https://api.whatsapp.com/message/5L6YIR7MJBVWM1", "_blank");
    onOpenChange(false);
    setSelected([]);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-card border-border rounded-xl">
        <DialogHeader className="text-left">
          <DialogTitle className="font-display text-2xl text-foreground">
            Custom Order
          </DialogTitle>
          <DialogDescription className="text-muted-foreground font-light text-sm">
            Pick what you need or go freestyle and tell us your vision.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-3 my-4">
          {recommendations.map((rec) => {
            const isSelected = selected.includes(rec.label);
            return (
              <button
                key={rec.label}
                onClick={() => toggle(rec.label)}
                className={`flex items-center gap-2 p-3 border rounded-lg text-left text-sm font-body transition-all ${
                  isSelected
                    ? "border-gold bg-gold/10 text-foreground"
                    : "border-border text-muted-foreground hover:border-gold/30"
                }`}
              >
                <span className="text-lg">{rec.emoji}</span>
                <span className="flex-1">{rec.label}</span>
                {isSelected && <Check className="w-4 h-4 text-gold" />}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-3">
          <Button
            onClick={handleOrder}
            disabled={selected.length === 0}
            className="w-full py-5 bg-gold-gradient hover:opacity-90 text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase rounded-lg gap-2 disabled:opacity-40"
          >
            <MessageCircle className="w-5 h-5" />
            Send Selection ({selected.length})
          </Button>
          <Button
            onClick={handleFreestyle}
            variant="outline"
            className="w-full py-5 border-gold/30 text-gold hover:bg-gold/10 font-body font-medium text-sm tracking-wider uppercase rounded-lg"
          >
            I have something else in mind →
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CustomOrderModal;
