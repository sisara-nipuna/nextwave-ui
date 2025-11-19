import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import GlobalFootprint from "@/components/GlobalFootprint";
import Navigation from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            We love meeting new people
            <br />
            and helping them.
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Global Footprint Section */}
      <GlobalFootprint />
    </div>
  );
};

export default Contact;
