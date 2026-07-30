import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Regions from './components/Regions';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import CaseStudies from './components/CaseStudies';
import MediaAccreditation from './components/MediaAccreditation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-navy-950 dark:text-slate-100 font-sans selection:bg-gold-500 selection:text-navy-950">
        {/* Sticky Navigation Header */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero />
          <About />
          <Stats />
          <Services />
          <Regions />
          <Timeline />
          <Testimonials />
          <Team />
          <CaseStudies />
          <MediaAccreditation />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating WhatsApp Widget */}
        <WhatsAppWidget />
      </div>
    </ThemeProvider>
  );
}
