import ServiceCard from "@/components/ServiceCard";
import dottedPattern from "@/assets/dotted-pattern.png";

const Index = () => {
  const services = [
    {
      title: "Software Development",
      description:
        "We offer customized software development services to help businesses streamline operations and improve productivity. Our expertise includes:",
      badges: [
        { text: "Call Center Software Solutions", color: "blue" as const },
        { text: "Attendance & Payroll Software", color: "blue" as const },
        { text: "School Management System", color: "blue" as const },
        { text: "Tour Management Software", color: "blue" as const },
        { text: "Library Accounting System", color: "blue" as const },
      ],
      backgroundColor: "bg-service-software",
      imagePosition: "left" as const,
    },
    {
      title: "Web Development",
      description:
        "Build a powerful online presence with our expert web development services. We create:",
      badges: [
        { text: "Business Website Solutions", color: "teal" as const },
        { text: "E-commerce Platforms", color: "teal" as const },
      ],
      backgroundColor: "bg-service-web",
      imagePosition: "right" as const,
    },
    {
      title: "UX & Product Designs",
      description:
        "We craft user-centric designs that blend functionality with beauty, ensuring seamless and intuitive experiences from wireframes to final design.",
      badges: [
        { text: "User Research", color: "orange" as const },
        { text: "UI/UX Kit", color: "orange" as const },
        { text: "Prototyping", color: "orange" as const },
        { text: "Design Systems", color: "orange" as const },
        { text: "Branding", color: "orange" as const },
      ],
      backgroundColor: "bg-service-design",
      imagePosition: "left" as const,
    },
    {
      title: "Web Hosting Solutions",
      description:
        "We specialize in providing web hosting solutions for all types of websites. Irrespective of whether you have a brand new blog, a high traffic website or if you own an e-commerce website.",
      badges: [
        { text: "Domain", color: "red" as const },
        { text: "Database", color: "red" as const },
        { text: "Plan", color: "red" as const },
        { text: "WordPress", color: "red" as const },
        { text: "Database", color: "red" as const },
        { text: "Email", color: "red" as const },
      ],
      backgroundColor: "bg-service-hosting",
      imagePosition: "right" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <main className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Our Key Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At Sisars Corporation, we provide a comprehensive range of software solutions tailored to
            meet your business needs. With over 19 years of experience in the industry, we specialize in
            delivering cutting-edge technology solutions that drive efficiency, growth, and innovation.
          </p>
        </header>

        <section className="space-y-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              badges={service.badges}
              backgroundColor={service.backgroundColor}
              imageContent={
                <div className="relative w-full h-[280px] flex items-center justify-center">
                  <img
                    src={dottedPattern}
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain opacity-50"
                    aria-hidden="true"
                  />
                </div>
              }
              imagePosition={service.imagePosition}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Index;
