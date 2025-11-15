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
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0!2d-117.78447!3d33.65987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM5JzM1LjUiTiAxMTfCsDQ3JzA0LjEiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="600"
                    style={{ border: 0, borderRadius: "8px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Febe Coffee Google Map and Reviews"
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
                <div className="relative w-full bg-gray-50 rounded-lg flex items-center justify-center p-8" style={{ minHeight: "600px" }}>
                  <div className="text-center max-w-md">
                    <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 13.5l-1.5-1.5-1.5 1.5-.5-2-2-.5 1.5-1.5-1.5-1.5 2-.5.5-2 1.5 1.5 1.5-1.5.5 2 2 .5-1.5 1.5 1.5 1.5-2 .5-.5 2z"/>
                    </svg>
                    <p className="text-foreground/70 mb-6">
                      Yelp doesn't support iframe embeds. Click below to view our Yelp reviews directly.
                    </p>
                    <a
                      href="https://www.yelp.com/biz/febe-coffee-irvine"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-primary text-background rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-medium"
                    >
                      View on Yelp
                    </a>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <a
                    href="https://www.yelp.com/writeareview/biz/febe-coffee-irvine"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors underline"
                  >
                    Leave a Yelp Review
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
