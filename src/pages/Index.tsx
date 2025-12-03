import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Server, Cloud, Database, Network, Shield } from "lucide-react";

import projectNetwork from "@/assets/project-network.jpg";
import projectCloud from "@/assets/project-cloud.jpg";
import projectAnalytics from "@/assets/project-analytics.jpg";

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
    image: projectNetwork,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Cloud-Native Application Platform",
    description: "Built a microservices platform using Kubernetes and Docker, serving 1M+ daily active users.",
    tags: ["Kubernetes", "Docker", "AWS", "Go"],
    image: projectCloud,
    githubUrl: "https://github.com",
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Full-stack analytics solution with real-time data processing and interactive visualizations.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    image: projectAnalytics,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

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
            <AnimatedSection direction="left">
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
                <motion.div 
                  className="flex flex-wrap gap-4 pt-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={itemVariants} className="glass-card px-6 py-4 text-center">
                    <div className="text-3xl font-bold text-primary">1+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </motion.div>
                  <motion.div variants={itemVariants} className="glass-card px-6 py-4 text-center">
                    <div className="text-3xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </motion.div>
                  <motion.div variants={itemVariants} className="glass-card px-6 py-4 text-center">
                    <div className="text-3xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Certifications</div>
                  </motion.div>
                </motion.div>
              </div>
            </AnimatedSection>
            
            {/* Tech Stack Visual */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <div className="glass-card p-8">
                  <motion.div 
                    className="grid grid-cols-3 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[Code2, Server, Database, Cloud, Network, Shield].map((Icon, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }}
                        className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group hover:from-primary/20 hover:to-secondary/20 transition-all duration-300"
                      >
                        <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection>
            <SectionHeader 
              title="Core Skills" 
              subtitle="Technologies and tools I work with daily"
            />
          </AnimatedSection>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredSkills.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </motion.div>
          <AnimatedSection delay={0.4}>
            <div className="text-center">
              <Button asChild variant="outline" className="border-glass-border hover:bg-muted/50">
                <Link to="/skills">
                  View All Skills <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader 
              title="Featured Projects" 
              subtitle="A selection of my recent work"
            />
          </AnimatedSection>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.title} variants={itemVariants}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
          <AnimatedSection delay={0.4}>
            <div className="text-center">
              <Button asChild variant="outline" className="border-glass-border hover:bg-muted/50">
                <Link to="/projects">
                  View All Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="glass-card p-12 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                Let's Build Something <span className="text-primary">Amazing</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Have a project in mind? I'm always open to discussing new opportunities 
                and interesting challenges.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold px-8">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Index;
