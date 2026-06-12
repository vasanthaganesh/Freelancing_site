import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Results } from './components/Results';
import { TrustSignals } from './components/TrustSignals';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ShaderAnimation } from './components/ShaderAnimation';

function App() {
  return (
    <div className="min-h-screen bg-transparent text-foreground font-sans selection:bg-brand-blue selection:text-white">
      <ShaderAnimation />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Results />
        <TrustSignals />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
