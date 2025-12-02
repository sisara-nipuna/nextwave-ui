import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Server, Cloud, Database, Network, Shield } from "lucide-react";

const featuredSkills = [
  { name: "Java/Springboot", icon: Server, level: 90, category: "Backend" },
  { name: "React / Next.js", icon: Code2, level: 95, category: "Frontend" },
  { name: "Cloud Architecture", icon: Cloud, level: 85, category: "DevOps" },
  { name: "Network Design", icon: Network, level: 88, category: "Infrastructure" },
];

const featuredProjects = [
  {
    title: "Enterprise Network Infrastructure",
    description: "Designed and implemented a scalable network architecture for a Fortune 500 company, improving throughput by 300%.",
    tags: ["Cisco", "VLAN", "BGP", "Security"],
    featured: true,
  },
  {
    title: "Cloud-Native Application Platform",
    description: "Built a microservices platform using Kubernetes and Docker, serving 1M+ daily active users.",
    tags: ["Kubernetes", "Docker", "AWS", "Go"],
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Full-stack analytics solution with real-time data processing and interactive visualizations.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionHeader title="About Me" align="left" />
              <p className="text-muted-foreground text-lg leading-relaxed">
                With over 1 years of experience in software engineering and network architecture, 
                I specialize in building robust, scalable solutions that bridge the gap between 
                application development and infrastructure design.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My expertise spans from crafting elegant frontend experiences to designing 
                enterprise-grade network topologies. I'm passionate about clean code, 
                system reliability, and continuous learning.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="glass-card px-6 py-4 text-center">
                  <div className="text-3xl font-bold text-primary">1+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="glass-card px-6 py-4 text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="glass-card px-6 py-4 text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
              </div>
            </div>
            
            {/* Tech Stack Visual */}
            <div className="relative">
              <div className="glass-card p-8">
                <div className="grid grid-cols-3 gap-4">
                  {[Code2, Server, Database, Cloud, Network, Shield].map((Icon, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group hover:from-primary/20 hover:to-secondary/20 transition-all duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader 
            title="Core Skills" 
            subtitle="Technologies and tools I work with daily"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                {...skill}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" className="border-glass-border hover:bg-muted/50">
              <Link to="/skills">
                View All Skills <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Featured Projects" 
            subtitle="A selection of my recent work"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline" className="border-glass-border hover:bg-muted/50">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Build Something <span className="neon-text">Amazing</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Have a project in mind? I'm always open to discussing new opportunities 
                and interesting challenges.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold px-8">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
