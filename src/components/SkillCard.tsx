import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
  level: number;
  category: string;
  className?: string;
  style?: React.CSSProperties;
}

const SkillCard = ({ name, icon: Icon, level, category, className, style }: SkillCardProps) => {
  return (
    <div className={cn("glass-card-hover p-6 group", className)} style={style}>
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <span className="text-xs font-mono text-muted-foreground px-2 py-1 rounded-full bg-muted/50">
          {category}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold text-foreground mb-3">{name}</h3>
      
      {/* Skill Level Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">Proficiency</span>
          <span className="text-primary font-mono">{level}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
