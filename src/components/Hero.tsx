import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ResumeViewer from "@/components/ResumeViewer";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 scanlines">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg" />
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Terminal Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-border bg-card mb-8"
        >
          <Terminal className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-mono">system_status: <span className="text-accent">ONLINE</span></span>
          <span className="terminal-cursor" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif mb-6 tracking-wider"
        >
          <span className="text-muted-foreground">&gt; </span>
          <span className="neon-text animate-terminal-glow">Nipuna Mahaliyana</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-2 mb-8 font-mono"
        >
          <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-3">
            <span className="text-muted-foreground">[</span>
            <h2 className="text-base sm:text-xl md:text-2xl text-foreground text-center">
              <span className="text-primary">Software_Engineer</span>
              <span className="mx-1 sm:mx-3 text-muted-foreground">|</span>
              <span className="text-accent">Network_Specialist</span>
            </h2>
            <span className="text-muted-foreground">]</span>
          </div>
          <span className="text-primary text-sm sm:text-base">Love to Connect with 0.0.0.0</span>
        </motion.div>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-mono"
        >
          <span className="text-primary">$</span> Crafting elegant solutions to complex problems. Passionate about building 
          scalable applications and designing robust network infrastructures.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/80 text-primary-foreground font-mono px-8 rounded-none border-2 border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
            <Link to="/projects">./view_projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-2 border-border hover:border-primary hover:text-primary font-mono rounded-none">
            <Link to="/contact">./contact_me</Link>
          </Button>
        </motion.div>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-12"
        >
          <ResumeViewer />
        </motion.div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { href: "https://github.com", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:your@email.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="p-3 border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
              aria-label={label}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-primary animate-pulse-slow" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
