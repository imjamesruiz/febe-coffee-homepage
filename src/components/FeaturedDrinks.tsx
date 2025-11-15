import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import strawberryMatcha from "@/assets/drink-strawberry-matcha.jpg";
import bananaMatcha from "@/assets/drink-banana-matcha.jpg";
import lotusEinspanner from "@/assets/drink-lotus-einspanner.jpg";
import blackSesame from "@/assets/drink-black-sesame.jpg";
import seaSaltNutty from "@/assets/drink-sea-salt-nutty.jpg";
import matchaEinspanner from "@/assets/drink-matcha-einspanner.jpg";

const FeaturedDrinks = () => {
  const drinks = [
    {
      name: "Strawberry Matcha",
      description: "Matcha, milk, house-made strawberry puree, strawberry cream",
      price: "$7",
      image: strawberryMatcha,
      favorite: true,
    },
    {
      name: "Banana Pudding Matcha",
      description: "Matcha, milk, banana cream",
      price: "$7",
      image: bananaMatcha,
      favorite: true,
    },
    {
      name: "Lotus Einspanner",
      description: "Espresso, milk, brown sugar, biscoff, biscoff cream",
      price: "$7",
      image: lotusEinspanner,
      favorite: true,
    },
    {
      name: "Black Sesame Hojicha",
      description: "Hojicha, milk, black sesame cream",
      price: "$7",
      image: blackSesame,
      favorite: true,
    },
    {
      name: "Sea Salt Nutty",
      description: "Espresso, milk, condensed milk, hazelnut, peanut cream",
      price: "$7",
      image: seaSaltNutty,
      favorite: true,
    },
    {
      name: "Matcha Einspanner",
      description: "Matcha, milk, sweet cream",
      price: "$7",
      image: matchaEinspanner,
      favorite: true,
    },
  ];

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-coral text-xs font-semibold uppercase tracking-[0.15em] mb-3">
            OUR SIGNATURES
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary mb-4">
            Einspanner Specialties
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg font-light max-w-2xl mx-auto">
            Handcrafted drinks topped with signature sweet cream
          </p>
        </div>

        {/* Drinks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {drinks.map((drink, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {drink.favorite && (
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-soft">
                    <Heart className="w-5 h-5 text-coral fill-coral" />
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-medium text-primary mb-2">
                  {drink.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {drink.description}
                </p>
                <p className="text-accent text-lg font-semibold">{drink.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            variant="accent"
            size="lg"
            className="uppercase tracking-widest font-medium hover:scale-105 transition-transform duration-300"
            asChild
          >
            <a href="/menu">
              View Full Menu
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDrinks;
