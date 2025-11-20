import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import GlobalFootprint from "@/components/GlobalFootprint";
import Navigation from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-contact-gradient-start via-white to-contact-gradient-end">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/dotted-pattern.png')] opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-contact-accent via-purple-600 to-contact-accent bg-clip-text text-transparent">
              Let's Connect
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              We love meeting new people and helping them bring their ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info - Takes 2 columns */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
            
            {/* Contact Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Global Footprint Section */}
      <GlobalFootprint />
    </div>
  );
};

export default Contact;
