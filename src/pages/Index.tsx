import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import QuickInfo from "@/components/QuickInfo";
import FeaturedDrinks from "@/components/FeaturedDrinks";
import AboutSnippet from "@/components/AboutSnippet";
import FloatingSocialBar from "@/components/FloatingSocialBar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <FloatingSocialBar />
      <main>
        <Hero />
        <QuickInfo />
        <FeaturedDrinks />
        <AboutSnippet />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
