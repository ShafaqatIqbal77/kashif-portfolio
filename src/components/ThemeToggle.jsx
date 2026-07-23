import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Dark and Light Mode"
      className="p-2.5 rounded-full transition-all duration-300 bg-slate-200/80 dark:bg-navy-800 text-slate-700 dark:text-gold-400 hover:bg-slate-300 dark:hover:bg-navy-700 border border-slate-300/50 dark:border-white/10 shadow-sm"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 animate-pulse-slow text-gold-400" />
      ) : (
        <Moon className="w-5 h-5 text-navy-900" />
      )}
    </button>
  );
}
