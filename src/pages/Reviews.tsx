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
              <div className="bg-white rounded-xl shadow-elegant p-8 animate-fade-in flex flex-col items-center justify-center text-center min-h-[500px]">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <h2 className="font-display text-3xl font-medium text-primary mb-4">
                  Google Reviews
                </h2>
                <p className="text-foreground/70 mb-8 max-w-md">
                  See what our customers are saying about us on Google
                </p>
                <a
                  href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-primary text-background rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-medium text-lg mb-4"
                >
                  View Google Reviews
                </a>
                <a
                  href="https://search.google.com/local/writereview?placeid=YOUR_GOOGLE_PLACE_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors underline"
                >
                  Leave a Review
                </a>
              </div>

              {/* Right Column - Yelp Reviews */}
              <div className="bg-white rounded-xl shadow-elegant p-8 animate-fade-in flex flex-col items-center justify-center text-center min-h-[500px]" style={{ animationDelay: "200ms" }}>
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 13.5l-1.5-1.5-1.5 1.5-.5-2-2-.5 1.5-1.5-1.5-1.5 2-.5.5-2 1.5 1.5 1.5-1.5.5 2 2 .5-1.5 1.5 1.5 1.5-2 .5-.5 2z"/>
                  </svg>
                </div>
                <h2 className="font-display text-3xl font-medium text-primary mb-4">
                  Yelp Reviews
                </h2>
                <p className="text-foreground/70 mb-8 max-w-md">
                  Read reviews and experiences from our Yelp community
                </p>
                <a
                  href="https://www.yelp.com/biz/febe-coffee-irvine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-primary text-background rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 font-medium text-lg mb-4"
                >
                  View Yelp Reviews
                </a>
                <a
                  href="https://www.yelp.com/writeareview/biz/febe-coffee-irvine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors underline"
                >
                  Leave a Review
                </a>
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
