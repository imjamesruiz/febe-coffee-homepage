import { Instagram, Music, Star, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/febe.coffee?igsh=MzRlODBiNWFlZA%3D%3D",
      label: "Visit us on Instagram",
    },
    {
      name: "TikTok",
      icon: Music,
      url: "https://www.tiktok.com/@febe.coffee?_t=ZP-8wJ2F95s8iM&_r=1",
      label: "Follow us on TikTok",
    },
    {
      name: "Yelp",
      icon: Star,
      url: "https://www.yelp.com/biz/febe-coffee-irvine-3",
      label: "Read our Yelp reviews",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-medium mb-4">Febe Coffee</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              A Korean family-owned café specializing in Asian-inspired drinks with premium ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-semibold text-lg mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sans font-semibold text-lg mb-4 uppercase tracking-wider">
              Visit Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>13955 Yale Ave Unit A<br />Irvine, CA 92620</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <Clock className="w-4 h-4 mt-1 shrink-0" />
                <span>Open Daily<br />8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <Mail className="w-4 h-4 mt-1 shrink-0" />
                <a 
                  href="mailto:hello@febecoffee.com" 
                  className="hover:text-primary-foreground transition-colors duration-300"
                >
                  hello@febecoffee.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-sans font-semibold text-lg mb-4 uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-primary-foreground hover:text-accent transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Febe Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
