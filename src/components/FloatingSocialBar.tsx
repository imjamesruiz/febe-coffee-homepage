import { Instagram } from "lucide-react";
import tiktokIcon from "@/assets/tiktok-icon.png";
import yelpIcon from "@/assets/yelp-icon.png";

const FloatingSocialBar = () => {
  return (
    <div className="fixed right-4 lg:right-6 top-1/2 -translate-y-1/2 z-50 bg-white rounded-3xl shadow-elegant p-3 lg:p-3 flex flex-col gap-3 lg:gap-4">
      {/* Instagram */}
      <a
        href="https://www.instagram.com/febe.coffee?igsh=MzRlODBiNWFlZA%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit us on Instagram"
        className="text-primary hover:text-coral transition-all duration-300 hover:scale-110"
      >
        <Instagram className="w-6 h-6 lg:w-7 lg:h-7" />
      </a>

      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@febe.coffee?_t=ZP-8wJ2F95s8iM&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on TikTok"
        className="transition-all duration-300 hover:scale-110"
      >
        <img 
          src={tiktokIcon} 
          alt="TikTok" 
          className="w-6 h-6 lg:w-7 lg:h-7"
          style={{ filter: 'brightness(0) saturate(100%) invert(34%) sepia(29%) saturate(1049%) hue-rotate(327deg) brightness(92%) contrast(85%)' }}
        />
      </a>

      {/* Yelp */}
      <a
        href="https://www.yelp.com/biz/febe-coffee-irvine-3"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Read our Yelp reviews"
        className="transition-all duration-300 hover:scale-110"
      >
        <img 
          src={yelpIcon} 
          alt="Yelp" 
          className="w-6 h-6 lg:w-7 lg:h-7"
          style={{ filter: 'brightness(0) saturate(100%) invert(34%) sepia(29%) saturate(1049%) hue-rotate(327deg) brightness(92%) contrast(85%)' }}
        />
      </a>
    </div>
  );
};

export default FloatingSocialBar;
