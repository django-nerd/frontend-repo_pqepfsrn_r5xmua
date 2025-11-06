import HeroLLMBio from './components/HeroLLMBio';
import CoreShowcase from './components/CoreShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-['Inter','Manrope',system-ui,sans-serif]">
      {/* Hero: DNA morph to attention graph vibe using Spline background */}
      <HeroLLMBio />

      {/* Core content: About, Skills, Education, Work, Projects + Research */}
      <CoreShowcase />

      {/* Contact + socials */}
      <Footer />
    </div>
  );
}

export default App;
