import { Mail, Phone, Globe, MapPin } from "lucide-react";

const ContactInfo = () => {
  const contactDetails = [
    { 
      icon: Mail, 
      label: "Email",
      text: "info@sisara.lk", 
      href: "mailto:info@sisara.lk",
      color: "from-blue-500 to-purple-600"
    },
    { 
      icon: Phone, 
      label: "Phone",
      text: "+94 11 2745745", 
      href: "tel:+94112745745",
      color: "from-green-500 to-teal-600"
    },
    { 
      icon: Globe, 
      label: "Website",
      text: "www.sisara.com", 
      href: "https://www.sisara.com",
      color: "from-orange-500 to-red-600"
    },
    { 
      icon: MapPin, 
      label: "Location",
      text: "Sri Lanka", 
      href: "#",
      color: "from-pink-500 to-purple-600"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-contact-accent to-purple-600 rounded-3xl p-8 md:p-10 text-white shadow-2xl shadow-contact-accent/30">
        <h2 className="text-3xl font-bold mb-3">Get in Touch</h2>
        <p className="text-white/90 text-lg mb-8">
          We're here to help and answer any question you might have
        </p>
        
        <div className="space-y-6">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <a
                key={index}
                href={detail.href}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group border border-white/20"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${detail.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white/70 mb-1">{detail.label}</p>
                  <p className="text-white font-semibold text-lg break-words">{detail.text}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <div className="bg-contact-card rounded-3xl p-8 shadow-xl border border-contact-accent/10">
        <h3 className="text-xl font-bold mb-4 text-foreground">Office Hours</h3>
        <div className="space-y-3 text-muted-foreground">
          <div className="flex justify-between">
            <span>Monday - Friday</span>
            <span className="font-semibold text-foreground">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday</span>
            <span className="font-semibold text-foreground">10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday</span>
            <span className="font-semibold text-destructive">Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
