import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const VisitUs = () => {
  return (
    <section id="location" className="bg-primary py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Google Maps */}
          <div className="order-1 animate-fade-in">
            <iframe
              title="Febe Coffee Location Map"
              width="100%"
              height="350"
              className="lg:h-[500px] rounded-xl shadow-elegant"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=13955%20Yale%20Ave%20Unit%20A%2C%20Irvine%2C%20CA%2092620&output=embed"
            />
          </div>

          {/* Right Column - Content */}
          <div className="order-2 lg:pl-12 text-center lg:text-left animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-background mb-6">
              Come Visit Us
            </h2>
            
            <p className="text-background/90 text-lg lg:text-xl font-light leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Experience the warmth of family hospitality and taste the difference quality makes
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="accent"
                size="lg"
                className="uppercase tracking-widest font-medium hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="/menu">View Our Menu</a>
              </Button>
              
              <Button
                size="lg"
                className="uppercase tracking-widest font-medium bg-coral text-background hover:bg-coral/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                asChild
              >
                <a 
                  href="https://maps.google.com/?q=13955+Yale+Ave+Unit+A+Irvine+CA+92620"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get directions to Febe Coffee"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
