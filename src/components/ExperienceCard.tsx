import { Briefcase, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  isLeft?: boolean;
}

const ExperienceCard = ({
  title,
  company,
  location,
  period,
  description,
  technologies,
  isLeft = false,
}: ExperienceCardProps) => {
  return (
    <div className={cn("relative flex items-center", isLeft ? "md:flex-row-reverse" : "")}>
      {/* Timeline dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary z-10 hidden md:block" />
      
      {/* Card */}
      <div className={cn(
        "w-full md:w-[calc(50%-2rem)] glass-card-hover p-6",
        isLeft ? "md:mr-auto md:ml-8" : "md:ml-auto md:mr-8"
      )}>
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
            <Briefcase className="w-5 h-5 text-primary" />
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <Calendar className="w-4 h-4" />
            {period}
          </div>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
        <p className="text-primary font-medium mb-1">{company}</p>
        <p className="text-sm text-muted-foreground mb-4">{location}</p>

        <ul className="space-y-2 mb-4">
          {description.map((item, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-primary mt-1">▹</span>
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-mono rounded-md bg-muted text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
