import { Facebook, Youtube, Twitter, Instagram, Linkedin } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    { icon: Facebook, label: "Facebook", url: "#" },
    { icon: Youtube, label: "Youtube", url: "#" },
    { icon: Twitter, label: "Twitter", url: "#" },
    { icon: Instagram, label: "Instagram", url: "#" },
    { icon: Linkedin, label: "LinkedIn", url: "#" },
  ];

  return (
    <div className="bg-background border border-border rounded-lg p-8 mb-16">
      <h3 className="text-2xl font-bold mb-4 text-foreground">
        Follow us on social to see what we're up to!
      </h3>
      <p className="text-muted-foreground mb-6">
        We are eager to be in touch with you in the following channels:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.url}
            className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
          >
            <div className="w-8 h-8 bg-foreground rounded-full flex items-center justify-center">
              <link.icon className="w-4 h-4 text-background" />
            </div>
            <span className="font-medium">{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
