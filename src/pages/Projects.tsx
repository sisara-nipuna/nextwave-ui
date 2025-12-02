import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { cn } from "@/lib/utils";

const categories = ["All", "Web Development", "Network", "Cloud", "Mobile"];

const projects = [
  {
    title: "Enterprise Network Infrastructure",
    description: "Designed and implemented a scalable network architecture for a Fortune 500 company, improving throughput by 300% and reducing downtime to near zero.",
    tags: ["Cisco", "VLAN", "BGP", "Security", "Load Balancing"],
    category: "Network",
    featured: true,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Cloud-Native Application Platform",
    description: "Built a microservices platform using Kubernetes and Docker, serving 1M+ daily active users with 99.99% uptime.",
    tags: ["Kubernetes", "Docker", "AWS", "Go", "Terraform"],
    category: "Cloud",
    featured: true,
    githubUrl: "https://github.com",
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Full-stack analytics solution with real-time data processing and interactive visualizations for business intelligence.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket", "D3.js"],
    category: "Web Development",
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
          <SectionHeader
            title="My Projects"
            subtitle="A collection of projects I've worked on, ranging from web applications to network infrastructure"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                    : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/50"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
