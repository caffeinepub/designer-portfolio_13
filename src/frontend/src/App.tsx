import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { Portfolio } from "./components/Portfolio";
import { Resume } from "./components/Resume";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-border" />
        </div>
        <About />
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-border" />
        </div>
        <Portfolio />
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-border" />
        </div>
        <Resume />
        <div className="max-w-6xl mx-auto px-6">
          <div className="h-px bg-border" />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
