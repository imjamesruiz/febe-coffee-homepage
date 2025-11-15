import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingSocialBar from "@/components/FloatingSocialBar";

const Reviews = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingSocialBar />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="bg-accent py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-primary mb-6">
              Thank you so much for your support
            </h1>
            <p className="text-2xl sm:text-3xl text-primary/90 font-light mb-4">
              We appreciate you!
            </p>
            <p className="text-xl sm:text-2xl text-primary/80 font-light">
              Check out what people are saying about us!
            </p>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 sm:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              
              {/* Left Column - Google Reviews */}
              <div className="bg-white rounded-xl shadow-elegant p-6 animate-fade-in">
                <h2 className="font-display text-3xl font-medium text-primary mb-6 text-center">
                  Google Reviews
                </h2>
                <div className="relative w-full" style={{ minHeight: "600px" }}>
                  {/* Elfsight Google Reviews Widget */}
                  <div 
                    className="elfsight-app-8fe70488-5ef3-4f8c-96d6-a1424cf981da"
                    data-elfsight-app-lazy
                    style={{ minHeight: "600px" }}
                  />
                </div>
                <div className="mt-6 text-center">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Febe+Coffee+13955+Yale+Ave+Irvine+CA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-primary text-background rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-medium"
                  >
                    View All Google Reviews
                  </a>
                </div>
              </div>

              {/* Right Column - Yelp Reviews */}
              <div className="bg-white rounded-xl shadow-elegant p-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <h2 className="font-display text-3xl font-medium text-primary mb-6 text-center">
                  Yelp Reviews
                </h2>
                <div className="relative w-full" style={{ minHeight: "600px" }}>
                  <iframe
                    src="https://www.yelp.com/biz/febe-coffee-irvine-3"
                    width="100%"
                    height="600"
                    style={{ border: 0, borderRadius: "8px" }}
                    allowFullScreen
                    loading="lazy"
                    title="Febe Coffee Yelp Reviews"
                  />
                </div>
                <div className="mt-6 text-center">
                  <a
                    href="https://www.yelp.com/biz/febe-coffee-irvine-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-primary text-background rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-medium"
                  >
                    View All Yelp Reviews
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Reviews;
