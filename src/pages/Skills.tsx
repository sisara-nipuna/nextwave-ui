import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import SkillCard from "@/components/SkillCard";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Network,
  Shield,
  Terminal,
  Globe,
  Cpu,
  Lock,
  Layers,
  GitBranch,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "TypeScript / JavaScript", icon: Code2, level: 95, category: "Language" },
      { name: "Python", icon: Terminal, level: 90, category: "Language" },
      { name: "Go", icon: Terminal, level: 80, category: "Language" },
      { name: "Rust", icon: Cpu, level: 70, category: "Language" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React / Next.js", icon: Code2, level: 95, category: "Frontend" },
      { name: "Vue.js", icon: Code2, level: 85, category: "Frontend" },
      { name: "Tailwind CSS", icon: Layers, level: 90, category: "Frontend" },
      { name: "React Native", icon: Globe, level: 80, category: "Frontend" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js / Express", icon: Server, level: 92, category: "Backend" },
      { name: "GraphQL", icon: Database, level: 85, category: "Backend" },
      { name: "PostgreSQL", icon: Database, level: 88, category: "Backend" },
      { name: "MongoDB", icon: Database, level: 85, category: "Backend" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: Cloud, level: 90, category: "Cloud" },
      { name: "Docker / Kubernetes", icon: Layers, level: 88, category: "DevOps" },
      { name: "CI/CD Pipelines", icon: GitBranch, level: 92, category: "DevOps" },
      { name: "Terraform", icon: Cloud, level: 80, category: "IaC" },
    ],
  },
  {
    title: "Networking",
    skills: [
      { name: "Cisco (CCNA/CCNP)", icon: Network, level: 92, category: "Network" },
      { name: "Network Security", icon: Shield, level: 88, category: "Security" },
      { name: "SD-WAN / VPN", icon: Lock, level: 85, category: "Network" },
      { name: "Load Balancing", icon: Layers, level: 87, category: "Network" },
    ],
  },
  {
    title: "Security",
    skills: [
      { name: "Penetration Testing", icon: Shield, level: 80, category: "Security" },
      { name: "Firewall Management", icon: Lock, level: 88, category: "Security" },
      { name: "Security Auditing", icon: Shield, level: 85, category: "Security" },
      { name: "SSL/TLS", icon: Lock, level: 90, category: "Security" },
    ],
  },
];

const certifications = [
  "AWS Solutions Architect Professional",
  "Cisco CCNP Enterprise",
  "Kubernetes Administrator (CKA)",
  "CompTIA Security+",
  "Google Cloud Professional",
  "HashiCorp Terraform Associate",
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Skills & Expertise"
            subtitle="Technologies and tools I've mastered over years of hands-on experience"
          />

          {/* Skills Grid by Category */}
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <section key={category.title}>
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                      key={skill.name}
                      {...skill}
                      className="animate-fade-in"
                      style={{ animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.05}s` }}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Certifications */}
          <section className="mt-20">
            <SectionHeader
              title="Certifications"
              subtitle="Professional certifications validating my expertise"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert}
                  className="glass-card-hover p-6 flex items-center gap-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Skills;
