import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-muted-foreground font-mono">Available for opportunities</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="text-foreground">Hi, I'm </span>
          <span className="neon-text">Nipuna Mahaliyana</span>
        </h1>

        {/* Subtitle with typing effect style */}
        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-mono">
            {"<"}
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            <span className="text-primary">Software Engineer</span>
            <span className="text-muted-foreground"> & </span>
            <span className="text-secondary">Network Specialist</span>
          </h2>
          <span className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-mono">
            {"/>"}
          </span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Crafting elegant solutions to complex problems. Passionate about building 
          scalable applications and designing robust network infrastructures.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold px-8">
            <Link to="/projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-glass-border hover:bg-muted/50">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass-card-hover text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl glass-card-hover text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:your@email.com"
            className="p-3 rounded-xl glass-card-hover text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
