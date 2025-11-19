import { Mail, Phone, Globe, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const ContactInfo = () => {
  const contactDetails = [
    { icon: Mail, text: "info@sisara.lk", href: "mailto:info@sisara.lk" },
    { icon: Phone, text: "+94 11 2745745", href: "tel:+94112745745" },
    { icon: Globe, text: "www.sisara.com", href: "https://www.sisara.com" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="space-y-4">
        {contactDetails.map((detail, index) => {
          const Icon = detail.icon;
          return (
            <a
              key={index}
              href={detail.href}
              className="flex items-center gap-4 p-4 rounded-full bg-muted/50 hover:bg-muted transition-colors w-fit"
            >
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <Icon className="w-5 h-5 text-muted-foreground" />
              </div>
              <span className="text-foreground">{detail.text}</span>
            </a>
          );
        })}
      </div>

      {/* Social Links */}
      <div className="flex gap-4 pt-4">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="w-10 h-10 flex items-center justify-center text-foreground hover:text-primary transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
