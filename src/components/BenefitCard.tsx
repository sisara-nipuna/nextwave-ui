import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => {
  return (
    <div className="bg-muted rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-foreground" />
      </div>
      <h3 className="text-lg font-bold mb-2 text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;
