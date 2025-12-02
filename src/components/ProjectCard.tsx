import { ExternalLink, Github, Folder } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  liveUrl,
  githubUrl,
  featured = false,
  className,
  style,
}: ProjectCardProps) => {
  return (
    <article
      className={cn(
        "glass-card-hover overflow-hidden group",
        featured ? "md:col-span-2" : "",
        className
      )}
      style={style}
    >
      {/* Image Area */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Folder className="w-16 h-16 text-muted-foreground/30" />
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-background/80 backdrop-blur-sm text-foreground hover:text-primary transition-colors"
              aria-label="View source code"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-background/80 backdrop-blur-sm text-foreground hover:text-primary transition-colors"
              aria-label="View live site"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>

        {featured && (
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-secondary text-xs font-semibold text-primary-foreground">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-mono rounded-md bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
