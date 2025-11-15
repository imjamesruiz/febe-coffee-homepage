import { Button } from "@/components/ui/button";
import cafeInterior from "@/assets/about-cafe-interior.jpg";

const AboutSnippet = () => {
  const stats = [
    { number: "2025", label: "Opened" },
    { number: "100%", label: "Organic Matcha" },
    { number: "14+", label: "Einspanner Flavors" },
  ];

  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-elegant">
              <img
                src={cafeInterior}
                alt="Febe Coffee interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <p className="text-coral text-xs font-semibold uppercase tracking-[0.15em] mb-3">
              ABOUT US
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary mb-6">
              Family-Owned, Asian-Inspired
            </h2>

            <p className="text-foreground text-base lg:text-lg leading-relaxed mb-4">
              Febe Coffee is a Korean family-owned café specializing in Asian-inspired drinks made with premium ingredients. From our signature einspanners to ceremonial-grade matcha, every drink is crafted with care.
            </p>

            <p className="text-foreground text-base lg:text-lg leading-relaxed mb-8">
              We source AIYA and Mizuba ceremonial matcha and partner with local Irvine roaster Stereoscope for our coffee beans. Visit us for a taste of authentic Asian café culture.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="font-display text-4xl lg:text-5xl font-semibold text-coral mb-1">
                    {stat.number}
                  </span>
                  <span className="text-primary text-xs uppercase font-medium tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              variant="outline"
              size="lg"
              className="uppercase tracking-widest font-medium border-2 border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300"
            >
              Learn Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;
