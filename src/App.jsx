import Header from "./components/Header";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import CodeShowcase from "./components/CodeShowcase";
import SystemMetrics from "./components/SystemMetrics";
import TechSpecGrid from "./components/TechSpecGrid";
import PricingCard from "./components/PricingCard";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-[#090d16] text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <BentoGrid />
        <CodeShowcase />
        <SystemMetrics />
        <TechSpecGrid />
        <PricingCard />
      </main>
    </div>
  );
}

export default App;
