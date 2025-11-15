import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import QuickInfo from "@/components/QuickInfo";
import FeaturedDrinks from "@/components/FeaturedDrinks";
import AboutSnippet from "@/components/AboutSnippet";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <QuickInfo />
        <FeaturedDrinks />
        <AboutSnippet />
      </main>
    </div>
  );
};

export default Index;
