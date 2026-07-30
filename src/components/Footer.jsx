import React from 'react';
import { ArrowUp, Briefcase, UserCheck, ShieldCheck, MapPin, Mail, Phone, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      
      {/* Background Decorative Mesh */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top CTA Row */}
        <div className="p-8 rounded-3xl bg-navy-900 border border-white/10 shadow-2xl mb-16 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
              MK Global Recruitment Agency
            </span>
            <h3 className="text-2xl font-extrabold text-white mt-1">
              Ready to Hire Pakistani Talent or Find Jobs Overseas?
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              Office 308, 3rd Floor, Bhadana Arcade, Executive Block, Faisal Hills
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-sm shadow-md flex items-center gap-2 transition-all hover:scale-105"
            >
              <Briefcase className="w-4 h-4" />
              <span>For Employers</span>
            </a>
            <a
              href="#services"
              className="px-6 py-3 rounded-xl bg-tealAccent-500 hover:bg-tealAccent-400 text-white font-bold text-sm shadow-md flex items-center gap-2 transition-all hover:scale-105"
            >
              <UserCheck className="w-4 h-4" />
              <span>For Candidates</span>
            </a>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-500 to-amber-600 flex items-center justify-center text-navy-950 font-black text-lg">
                MK
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                MK GLOBAL RECRUITMENT
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Connecting skilled Pakistani manpower and professionals with premier employers across Saudi Arabia, UAE, Qatar, Germany, UK & Europe under the leadership of CEO Muhammad Kashif.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 w-fit">
              <ShieldCheck className="w-4 h-4" /> Government License Approved
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">About CEO</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Recruitment Services</a></li>
              <li><a href="#regions" className="hover:text-gold-400 transition-colors">Regions We Serve</a></li>
              <li><a href="#timeline" className="hover:text-gold-400 transition-colors">Career Journey</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Key Corridors */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Recruitment Corridors
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>🇸🇦 Saudi Arabia (KSA)</li>
              <li>🇦🇪 United Arab Emirates (UAE)</li>
              <li>🇶🇦 Qatar & Oman</li>
              <li>🇩🇪 Germany & UK</li>
              <li>🇷🇴 Romania & EU Nations</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Headquarters
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Office 308, 3rd Floor, Bhadana Arcade, Executive Block, Faisal Hills</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-tealAccent-400 shrink-0" />
                <span className="text-slate-200">Kashifkhannn123@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-slate-200">03130919597</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Back To Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} MK Global Recruitment Agency. All Rights Reserved. CEO: Muhammad Kashif.</p>
            <p className="text-gold-500/80 font-medium tracking-wide text-[10px] uppercase">
              Designed & Developed by Shafaqat Iqbal
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-900 border border-white/10 text-slate-300 hover:text-gold-400 hover:border-gold-500/40 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
