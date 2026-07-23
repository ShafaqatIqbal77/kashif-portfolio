import React, { useState, useEffect } from 'react';
import { Menu, X, Briefcase, UserCheck } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About CEO', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Regions & Industries', href: '#regions' },
    { name: 'Milestones', href: '#timeline' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-lg border-b border-slate-200 dark:border-white/10 py-3'
          : 'glass-nav lg:bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-500 via-gold-400 to-navy-900 flex items-center justify-center text-navy-950 font-black text-lg shadow-md group-hover:scale-105 transition-transform border border-gold-400">
              MK
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-navy-950 dark:text-white leading-none">
                MK GLOBAL
              </span>
              <span className="text-[11px] font-bold tracking-widest text-gold-700 dark:text-gold-400 uppercase mt-0.5">
                Recruitment Agency
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-bold transition-all relative ${
                    isActive
                      ? 'text-gold-700 dark:text-gold-400 font-extrabold bg-gold-500/10'
                      : 'text-slate-900 dark:text-slate-200 hover:text-gold-600 dark:hover:text-gold-300 hover:bg-slate-200/60 dark:hover:bg-navy-800/80'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 text-navy-950 font-black text-sm shadow-md hover:shadow-glow-gold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4" />
              <span>Hire Talent</span>
            </a>
          </div>

          {/* Mobile Toggle Buttons */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2.5 rounded-lg bg-slate-200 dark:bg-navy-800 text-slate-900 dark:text-slate-100 hover:bg-slate-300 dark:hover:bg-navy-700 border border-slate-300 dark:border-white/10"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-b border-slate-300 dark:border-white/10 px-4 pt-3 pb-6 mt-3 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-bold text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-navy-800 hover:text-gold-600 dark:hover:text-gold-400"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-200 dark:border-navy-700 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-gold-500 text-navy-950 font-black shadow-md flex items-center justify-center gap-2"
              >
                <Briefcase className="w-4 h-4" />
                <span>Hire Talent</span>
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl border-2 border-gold-500 text-slate-900 dark:text-white font-bold hover:bg-gold-500/10 flex items-center justify-center gap-2"
              >
                <UserCheck className="w-4 h-4 text-gold-600 dark:text-gold-400" />
                <span>Find Jobs</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
