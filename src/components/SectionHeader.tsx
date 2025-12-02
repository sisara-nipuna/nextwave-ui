interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeader = ({ title, subtitle, align = "center" }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="neon-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
