import { Badge } from "@/components/ui/badge";
import dottedPattern from "@/assets/dotted-pattern.png";

interface ServiceCardProps {
  title: string;
  description: string;
  badges: Array<{ text: string; color: "blue" | "teal" | "orange" | "red" }>;
  backgroundColor: string;
  imageContent?: React.ReactNode;
  imagePosition?: "left" | "right";
}

const ServiceCard = ({
  title,
  description,
  badges,
  backgroundColor,
  imageContent,
  imagePosition = "left",
}: ServiceCardProps) => {
  return (
    <article
      className={`relative overflow-hidden rounded-[2rem] p-8 md:p-12 ${backgroundColor} min-h-[400px] flex flex-col md:flex-row items-center gap-8`}
    >
      {imagePosition === "left" && (
        <div className="flex-shrink-0 w-full md:w-[45%] relative">
          {imageContent || (
            <div className="relative w-full h-[250px] flex items-center justify-center">
              <img
                src={dottedPattern}
                alt=""
                className="absolute inset-0 w-full h-full object-contain opacity-60"
              />
            </div>
          )}
        </div>
      )}

      <div className={`flex-1 ${imagePosition === "right" ? "md:pr-8" : ""}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          {title}
        </h2>
        <p className="text-foreground/80 mb-6 leading-relaxed text-base md:text-lg">
          {description}
        </p>
        <div className="flex flex-wrap gap-3">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              className={`px-4 py-2 rounded-lg font-medium text-white ${
                badge.color === "blue"
                  ? "bg-badge-blue"
                  : badge.color === "teal"
                  ? "bg-badge-teal"
                  : badge.color === "orange"
                  ? "bg-badge-orange"
                  : "bg-badge-red"
              }`}
            >
              {badge.text}
            </Badge>
          ))}
        </div>
      </div>

      {imagePosition === "right" && (
        <div className="flex-shrink-0 w-full md:w-[45%] relative">
          {imageContent || (
            <div className="relative w-full h-[250px] flex items-center justify-center">
              <img
                src={dottedPattern}
                alt=""
                className="absolute inset-0 w-full h-full object-contain opacity-60"
              />
            </div>
          )}
        </div>
      )}
    </article>
  );
};

export default ServiceCard;
