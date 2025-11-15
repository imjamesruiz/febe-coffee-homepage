import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-matcha-einspanner.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Matcha einspanner with cream topping"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-6 lg:space-y-8">
          {/* Logo/Brand Name */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-background tracking-tight">
            FEBE COFFEE
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-light text-background/95">
            Specializing in Asian-Inspired Drinks
          </p>

          {/* Subtext */}
          <p className="text-base sm:text-lg lg:text-xl text-background/90 font-light max-w-2xl mx-auto">
            Organic Ceremonial Matcha • Local Coffee • Unique Einspanners
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 lg:pt-6">
            <Button
              variant="accent"
              size="lg"
              className="font-semibold text-base lg:text-lg px-8 py-6 hover:scale-105 rounded-lg w-full sm:w-auto"
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Menu
            </Button>
            <Button
              variant="coral"
              size="lg"
              className="font-semibold text-base lg:text-lg px-8 py-6 hover:scale-105 rounded-lg w-full sm:w-auto"
              onClick={() => document.getElementById("location")?.scrollIntoView({ behavior: "smooth" })}
            >
              Visit Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-background rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-background rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
