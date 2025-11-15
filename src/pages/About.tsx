import Navigation from "@/components/Navigation";
import { Coffee, Heart, Leaf, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import cafeInterior from "@/assets/about-cafe-interior.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Family First",
      description: "We're a Korean family-owned business that treats every customer like family",
    },
    {
      icon: Leaf,
      title: "Premium Quality",
      description: "Only the finest ceremonial matcha and locally roasted coffee beans",
    },
    {
      icon: Coffee,
      title: "Crafted with Care",
      description: "Every drink is handcrafted with attention to detail and passion",
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "We're proud to serve the Irvine and UCI community",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-coral text-xs font-semibold uppercase tracking-[0.15em] mb-3 animate-fade-in">
              ABOUT US
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium text-primary mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Family-Owned,
              <br />
              Asian-Inspired
            </h1>
            <p className="text-foreground text-lg lg:text-xl leading-relaxed animate-fade-in" style={{ animationDelay: "200ms" }}>
              Febe Coffee is a Korean family-owned café in Irvine, California, specializing in Asian-inspired drinks that celebrate tradition and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Image */}
            <div className="order-2 lg:order-1 animate-fade-in">
              <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-elegant">
                <img
                  src={cafeInterior}
                  alt="Inside Febe Coffee"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h2 className="font-display text-4xl sm:text-5xl font-medium text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-foreground text-base lg:text-lg leading-relaxed">
                <p>
                  Febe Coffee was born from a passion for sharing the rich café culture of Korea with the Irvine community. Our family dreamed of creating a space where traditional Asian flavors meet modern café artistry.
                </p>
                <p>
                  We opened our doors in 2025 with a simple mission: to serve exceptional drinks made with the finest ingredients. From our signature einspanners topped with fluffy sweet cream to our ceremonial-grade matcha lattes, every drink tells a story of craftsmanship and care.
                </p>
                <p>
                  What makes us special is our commitment to authenticity and quality. We source only AIYA and Mizuba ceremonial matcha—the highest grade available—and partner with Stereoscope, a local Irvine coffee roaster, for our espresso beans.
                </p>
                <p>
                  Located just 15 minutes from UCI, we've become a gathering place for students, families, and coffee lovers who appreciate drinks made with heart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-primary mb-4">
              What We Believe
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our values guide everything we do, from sourcing ingredients to serving each customer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-medium text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-medium text-primary mb-8">
            Premium Ingredients
          </h2>
          <div className="space-y-6 text-foreground text-lg leading-relaxed">
            <p>
              <strong className="text-primary font-semibold">Ceremonial Matcha:</strong> We exclusively use AIYA and Mizuba ceremonial-grade matcha—the highest quality matcha available. This premium Japanese green tea powder is stone-ground, vibrant green, and rich in antioxidants.
            </p>
            <p>
              <strong className="text-primary font-semibold">Local Coffee:</strong> Our espresso comes from Stereoscope, an Irvine-based roaster known for their carefully sourced, small-batch beans. We rotate single-origin offerings to showcase different flavor profiles.
            </p>
            <p>
              <strong className="text-primary font-semibold">House-Made Creams:</strong> Our signature sweet creams are made fresh in-house daily. From strawberry to biscoff to black sesame, each flavor is crafted to perfectly complement our drinks.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "2025", label: "Opened" },
              { number: "100%", label: "Organic Matcha" },
              { number: "14+", label: "Einspanner Flavors" },
              { number: "15min", label: "From UCI" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="font-display text-5xl lg:text-6xl font-semibold text-coral mb-2">
                  {stat.number}
                </div>
                <div className="text-primary text-sm uppercase font-medium tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-medium mb-6">
            Come Visit Us
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Experience the warmth of family hospitality and taste the difference quality makes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-background text-primary hover:bg-background/90 uppercase tracking-wider font-medium"
            >
              <a href="/menu">View Our Menu</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-background text-primary-foreground hover:bg-background/10 uppercase tracking-wider font-medium"
            >
              <a href="/#location">Get Directions</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
