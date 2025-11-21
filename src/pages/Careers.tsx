import Navigation from "@/components/Navigation";
import BenefitCard from "@/components/BenefitCard";
import PhotoGallery from "@/components/PhotoGallery";
import JobListings from "@/components/JobListings";
import { Users, Shield, GraduationCap, TrendingUp } from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      icon: Users,
      title: "Team work",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry.",
    },
    {
      icon: Shield,
      title: "Secured Future",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry.",
    },
    {
      icon: GraduationCap,
      title: "Learning Opportunity",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry.",
    },
    {
      icon: TrendingUp,
      title: "Upgrade Skills",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4 text-sm font-semibold text-muted-foreground tracking-wider">
            BENEFITS
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Why you Should Join Our Awesome Team
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Sisara Corporation, we believe in innovation, collaboration, and growth. Our
                team is dedicated to creating cutting-edge software solutions that shape the
                future of businesses worldwide. If you are passionate about technology, eager to
                take on challenges, and ready to make an impact, we want to hear from you!
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} {...benefit} />
              ))}
            </div>
          </div>

          {/* Photo Gallery with Social Links */}
          <PhotoGallery />

          {/* Career Openings */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <div className="text-sm font-semibold text-muted-foreground tracking-wider mb-4">
                BE A PART OF SOMETHING EXTRAORDINARY!
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Career Openings
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                At Sisara, we foster a dynamic, inclusive, and forward-thinking workplace.
                Whether you're collaborating on innovative projects or engaging in team-building
                activities, you'll be part of a community that values excellence and creativity.
              </p>
            </div>
            <JobListings />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
