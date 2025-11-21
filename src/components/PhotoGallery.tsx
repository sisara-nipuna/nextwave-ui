import office1 from "@/assets/office-1.jpg";
import office2 from "@/assets/office-2.jpg";
import office3 from "@/assets/office-3.jpg";
import office4 from "@/assets/office-4.png";
import brandDots from "@/assets/brand-dots.png";
import brandWave from "@/assets/brand-wave.png";
import { Facebook, Youtube, Twitter, Instagram, Linkedin } from "lucide-react";

const PhotoGallery = () => {
  const socialLinks = [
    { icon: Facebook, label: "Facebook", url: "#" },
    { icon: Youtube, label: "Youtube", url: "#" },
    { icon: Twitter, label: "Twitter", url: "#" },
    { icon: Instagram, label: "Instagram", url: "#" },
    { icon: Linkedin, label: "LinkedIn", url: "#" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      {/* Column 1 - Two stacked images */}
      <div className="space-y-4">
        <div className="aspect-[4/3] overflow-hidden rounded-lg">
          <img src={office1} alt="Office workspace" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-lg">
          <img src={office2} alt="Team collaboration" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Column 2 - Large image and small brand */}
      <div className="space-y-4">
        <div className="aspect-[4/5] overflow-hidden rounded-lg">
          <img src={office3} alt="Modern office view" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square bg-black rounded-lg overflow-hidden flex items-center justify-center">
          <img src={brandDots} alt="Brand pattern" className="w-2/3 h-2/3 object-contain" />
        </div>
      </div>

      {/* Column 3 - Tall image */}
      <div>
        <div className="aspect-[3/7] overflow-hidden rounded-lg">
          <img src={office4} alt="Building architecture" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Column 4 - Brand and social */}
      <div className="space-y-4">
        <div className="aspect-square bg-black rounded-lg overflow-hidden flex items-center justify-center">
          <img src={brandWave} alt="Brand logo" className="w-2/3 h-2/3 object-contain" />
        </div>
        <div className="bg-background border border-border rounded-lg p-6">
          <h3 className="text-xl font-bold mb-3 text-foreground">
            Follow us on social to see what we're up to!
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            We are eager to be in touch with you in the following channels:
          </p>
          <div className="space-y-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <div className="w-7 h-7 bg-foreground rounded-full flex items-center justify-center flex-shrink-0">
                  <link.icon className="w-3.5 h-3.5 text-background" />
                </div>
                <span className="text-sm font-medium">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
