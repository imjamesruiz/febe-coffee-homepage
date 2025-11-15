import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import QuickInfo from "@/components/QuickInfo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <QuickInfo />
      </main>
    </div>
  );
};

export default Index;
