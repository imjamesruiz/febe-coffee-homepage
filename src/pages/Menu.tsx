import { Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import strawberryMatcha from "@/assets/drink-strawberry-matcha.jpg";
import bananaMatcha from "@/assets/drink-banana-matcha.jpg";
import lotusEinspanner from "@/assets/drink-lotus-einspanner.jpg";
import blackSesame from "@/assets/drink-black-sesame.jpg";
import seaSaltNutty from "@/assets/drink-sea-salt-nutty.jpg";
import matchaEinspanner from "@/assets/drink-matcha-einspanner.jpg";

const Menu = () => {
  const menuCategories = [
    {
      category: "Signature Einspanners",
      description: "Our specialty drinks topped with signature sweet cream",
      items: [
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
        {
          name: "Brown Sugar Einspanner",
          description: "Espresso, milk, brown sugar, sweet cream",
          price: "$6.50",
        },
        {
          name: "Ube Einspanner",
          description: "Espresso, milk, ube, ube cream",
          price: "$7",
        },
        {
          name: "Taro Einspanner",
          description: "Espresso, milk, taro, taro cream",
          price: "$7",
        },
        {
          name: "Earl Grey Einspanner",
          description: "Earl grey tea, milk, lavender, sweet cream",
          price: "$6.50",
        },
      ],
    },
    {
      category: "Matcha Drinks",
      description: "Made with premium AIYA and Mizuba ceremonial matcha",
      items: [
        {
          name: "Classic Matcha Latte",
          description: "Ceremonial matcha with steamed milk",
          price: "$5.50",
        },
        {
          name: "Iced Matcha Latte",
          description: "Ceremonial matcha with cold milk over ice",
          price: "$5.50",
        },
        {
          name: "Matcha Americano",
          description: "Ceremonial matcha with hot water",
          price: "$4.50",
        },
        {
          name: "Dirty Matcha",
          description: "Matcha latte with a shot of espresso",
          price: "$6.50",
        },
      ],
    },
    {
      category: "Coffee Drinks",
      description: "Featuring Stereoscope Coffee roasted locally in Irvine",
      items: [
        {
          name: "Espresso",
          description: "Single or double shot",
          price: "$3 / $4",
        },
        {
          name: "Americano",
          description: "Espresso with hot water",
          price: "$4",
        },
        {
          name: "Latte",
          description: "Espresso with steamed milk",
          price: "$5",
        },
        {
          name: "Cappuccino",
          description: "Espresso with foamed milk",
          price: "$5",
        },
        {
          name: "Flat White",
          description: "Espresso with velvety microfoam",
          price: "$5.50",
        },
        {
          name: "Cortado",
          description: "Equal parts espresso and steamed milk",
          price: "$4.50",
        },
        {
          name: "Cold Brew",
          description: "Smooth, slow-steeped coffee",
          price: "$5",
        },
        {
          name: "Drip Coffee",
          description: "Daily rotating single origin",
          price: "$3.50",
        },
      ],
    },
    {
      category: "Tea & Other",
      description: "Premium teas and specialty beverages",
      items: [
        {
          name: "Hojicha Latte",
          description: "Roasted green tea with steamed milk",
          price: "$5.50",
        },
        {
          name: "Earl Grey Latte",
          description: "Bergamot-infused black tea with milk",
          price: "$5",
        },
        {
          name: "Chai Latte",
          description: "Spiced black tea with steamed milk",
          price: "$5.50",
        },
        {
          name: "Hot Chocolate",
          description: "Rich cocoa with steamed milk",
          price: "$5",
        },
      ],
    },
    {
      category: "Add-Ons & Extras",
      description: "Customize your drink",
      items: [
        {
          name: "Extra Shot",
          description: "Add espresso to any drink",
          price: "+$1",
        },
        {
          name: "Alternative Milk",
          description: "Oat, almond, or soy milk",
          price: "+$0.75",
        },
        {
          name: "Flavor Shot",
          description: "Vanilla, caramel, hazelnut",
          price: "+$0.50",
        },
        {
          name: "Sweet Cream Top",
          description: "Add our signature sweet cream",
          price: "+$1.50",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-coral text-xs font-semibold uppercase tracking-[0.15em] mb-3 animate-fade-in">
            OUR MENU
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium text-primary mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Handcrafted Drinks
          </h1>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
            Every drink is made with premium ingredients and crafted with care by our family
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      {menuCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-16 lg:py-20 ${
            categoryIndex % 2 === 0 ? "bg-background" : "bg-secondary"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
            {/* Category Header */}
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-primary mb-3">
                {category.category}
              </h2>
              <p className="text-muted-foreground text-base lg:text-lg">
                {category.description}
              </p>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`group ${
                    item.image
                      ? "bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
                      : "bg-white/50 rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
                  }`}
                >
                  {item.image ? (
                    <>
                      {/* Image Container */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {item.favorite && (
                          <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-soft">
                            <Heart className="w-5 h-5 text-coral fill-coral" />
                          </div>
                        )}
                      </div>
                      {/* Card Content */}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-display text-xl font-medium text-primary">
                            {item.name}
                          </h3>
                          <p className="text-accent text-lg font-semibold whitespace-nowrap ml-3">
                            {item.price}
                          </p>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Simple Card */}
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-display text-xl font-medium text-primary">
                          {item.name}
                        </h3>
                        <p className="text-accent text-lg font-semibold whitespace-nowrap ml-3">
                          {item.price}
                        </p>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium mb-4">
            Visit Us Today
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Open 7 days a week • 8AM-8PM • 15 minutes from UCI
          </p>
          <a
            href="/#location"
            className="inline-block bg-background text-primary px-8 py-4 rounded-lg font-medium uppercase tracking-wider hover:bg-background/90 transition-all duration-300 hover:scale-105"
          >
            Get Directions
          </a>
        </div>
      </section>
    </div>
  );
};

export default Menu;
