import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ExperienceCard from "@/components/ExperienceCard";
import { GraduationCap, Award } from "lucide-react";

const experiences = [
  {
    title: "Backend and Systems Developer",
    company: "Sisara Corporation Pvt Ltd",
    location: "Pannipitiya,Maharagama Sri Lanka",
    period: "2025 January - December",
    description: [
      "Designed and implemented enterprise network infrastructure",
      "Developed backend services and APIs for internal tools",
      "Optimized system performance and scalability",
      "Collaborated with cross-functional teams to deliver solutions",
    ],
    technologies: ["Cisco", "Fortinet FortiGate ", "Springboot", "React JS", "MySQL"],
  },
  {
    title: "Software Engineer Intern",
    company: "Sri Lanka Telecom Mobitel (Pvt) Ltd",
    location: "Colombo, Sri Lanka",
    period: "2024 April - October",
    description: [
      "Built full-stack web applications from scratch",
      "Developed RESTful APIs and GraphQL endpoints",
      "Implemented CI/CD pipelines for automated deployments",
      "Collaborated with cross-functional teams in agile environment",
    ],
    technologies: ["React", ".NET Framework", "MSSQL", "Azure"],
  },
];

const education = [
  {
    degree: "Bachelor of Science Honors in Information Technology",
    school: "University of Jaffna",
    year: "2020-2024",
    focus: "Software Engineering & Advanced Computer Networks",
  }
];

const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="Experience"
            subtitle="My professional journey through software engineering and network architecture"
          />

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={exp.company}
                  {...exp}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>

          {/* Education Section */}
          <section className="mt-24">
            <SectionHeader
              title="Education"
              subtitle="Academic background and formal training"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className="glass-card-hover p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.school}</p>
                      <p className="text-sm text-muted-foreground mt-1">{edu.year}</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Focus: {edu.focus}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Awards Section */}
          <section className="mt-16">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              Awards & Recognition
            </h3>
            <div className="glass-card p-6">
              <ul className="space-y-3">
                {[
                  "Employee of the Year - Tech Giant Corp (2023)",
                  "Best Innovation Award - Global Networks Inc (2021)",
                  "Dean's List - Stanford University (2017-2019)",
                  "Hackathon Winner - TechCrunch Disrupt (2018)",
                ].map((award, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <span className="text-primary">▹</span>
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Experience;
