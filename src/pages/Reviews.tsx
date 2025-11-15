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
                <div className="relative w-full flex flex-col items-center justify-center p-8 bg-accent/30 rounded-lg" style={{ minHeight: "600px" }}>
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-md">
                    <svg className="w-12 h-12 text-[#d32323]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 13.5l-1.5-1.5-1.5 1.5-.5-2-2-.5 1.5-1.5-1.5-1.5 2-.5.5-2 1.5 1.5 1.5-1.5.5 2 2 .5-1.5 1.5 1.5 1.5-2 .5-.5 2z"/>
                    </svg>
                  </div>
                  
                  <h3 className="font-display text-2xl font-medium text-primary mb-3">
                    See What Our Customers Say
                  </h3>
                  
                  <p className="text-foreground/70 text-center mb-8 max-w-md text-lg">
                    Read authentic reviews from our Yelp community and discover why people love Febe Coffee
                  </p>
                  
                  <div className="flex flex-col gap-4 w-full max-w-sm">
                    <a
                      href="https://www.yelp.com/biz/febe-coffee-irvine-3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#d32323] text-white rounded-lg hover:bg-[#b91c1c] transition-all duration-300 hover:scale-105 font-medium text-lg shadow-lg"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 13.5l-1.5-1.5-1.5 1.5-.5-2-2-.5 1.5-1.5-1.5-1.5 2-.5.5-2 1.5 1.5 1.5-1.5.5 2 2 .5-1.5 1.5 1.5 1.5-2 .5-.5 2z"/>
                      </svg>
                      View All Yelp Reviews
                    </a>
                    
                    <a
                      href="https://www.yelp.com/writeareview/biz/febe-coffee-irvine-3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#d32323] border-2 border-[#d32323] rounded-lg hover:bg-[#d32323] hover:text-white transition-all duration-300 font-medium text-lg"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Write a Review
                    </a>
                  </div>
                  
                  <p className="text-foreground/50 text-sm mt-6 text-center italic">
                    Yelp doesn't support embedded reviews, but we'd love to hear from you!
                  </p>
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
