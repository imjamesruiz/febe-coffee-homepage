import { Clock, MapPin, Coffee } from "lucide-react";

const QuickInfo = () => {
  const infoItems = [
    {
      icon: Clock,
      title: "Hours",
      description: "Mon-Sun • 8AM-8PM",
    },
    {
      icon: MapPin,
      title: "Location",
      description: "Irvine, CA • 15 min from UCI",
    },
    {
      icon: Coffee,
      title: "Specialty",
      description: "Ceremonial Matcha • Einspanners",
    },
  ];

  return (
    <section className="bg-secondary py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {infoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-accent/20 flex items-center justify-center group hover:bg-accent transition-all duration-300">
                  <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary group-hover:text-accent-foreground transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-base lg:text-lg text-foreground/80 font-medium">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickInfo;
