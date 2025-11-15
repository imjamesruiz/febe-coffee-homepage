import { Instagram, Music, Star } from "lucide-react";

const FloatingSocialBar = () => {
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

  return (
    <div className="fixed right-4 lg:right-6 top-1/2 -translate-y-1/2 z-50 bg-white rounded-3xl shadow-elegant p-3 lg:p-3 flex flex-col gap-3 lg:gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="text-primary hover:text-coral transition-all duration-300 hover:scale-110"
        >
          <social.icon className="w-6 h-6 lg:w-7 lg:h-7" />
        </a>
      ))}
    </div>
  );
};

export default FloatingSocialBar;
