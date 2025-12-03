import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";
import { cn } from "@/lib/utils";

import projectNetwork from "@/assets/project-network.jpg";
import projectCloud from "@/assets/project-cloud.jpg";
import projectAnalytics from "@/assets/project-analytics.jpg";

const categories = ["All", "Web Development", "Network", "Cloud", "Mobile"];

const projects = [
  {
    title: "Enterprise Network Infrastructure",
    description: "Designed and implemented a scalable network architecture for a Fortune 500 company, improving throughput by 300% and reducing downtime to near zero.",
    tags: ["Cisco", "VLAN", "BGP", "Security", "Load Balancing"],
    category: "Network",
    featured: true,
    image: projectNetwork,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Cloud-Native Application Platform",
    description: "Built a microservices platform using Kubernetes and Docker, serving 1M+ daily active users with 99.99% uptime.",
    tags: ["Kubernetes", "Docker", "AWS", "Go", "Terraform"],
    category: "Cloud",
    featured: true,
    image: projectCloud,
    githubUrl: "https://github.com",
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Full-stack analytics solution with real-time data processing and interactive visualizations for business intelligence.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket", "D3.js"],
    category: "Web Development",
    image: projectAnalytics,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Network Monitoring System",
    description: "Comprehensive network monitoring tool with alerting, traffic analysis, and performance metrics visualization.",
    tags: ["Python", "Prometheus", "Grafana", "SNMP", "InfluxDB"],
    category: "Network",
    githubUrl: "https://github.com",
  },
  {
    title: "E-commerce Platform",
    description: "Scalable e-commerce solution with payment processing, inventory management, and real-time order tracking.",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Redis", "TypeScript"],
    category: "Web Development",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking application with workout plans, progress tracking, and social features.",
    tags: ["React Native", "Firebase", "Node.js", "MongoDB"],
    category: "Mobile",
    githubUrl: "https://github.com",
  },
  {
    title: "SD-WAN Implementation",
    description: "Deployed software-defined WAN solution across 50+ branch offices, reducing network costs by 40%.",
    tags: ["SD-WAN", "VPN", "QoS", "Network Automation"],
    category: "Network",
  },
  {
    title: "CI/CD Pipeline Framework",
    description: "Automated deployment pipeline with testing, security scanning, and multi-environment deployments.",
    tags: ["Jenkins", "GitHub Actions", "Docker", "SonarQube"],
    category: "Cloud",
    githubUrl: "https://github.com",
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

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              title="My Projects"
              subtitle="A collection of projects I've worked on, ranging from web applications to network infrastructure"
            />
          </AnimatedSection>

          {/* Category Filter */}
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                    activeCategory === category
                      ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                      : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/50"
                  )}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </AnimatedSection>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory}
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.title} variants={itemVariants} layout>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <AnimatedSection>
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  No projects found in this category.
                </p>
              </div>
            </AnimatedSection>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
