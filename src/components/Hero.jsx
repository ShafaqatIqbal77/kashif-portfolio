import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Globe2, Building2, UserCheck, Award, ShieldCheck, Sparkles } from 'lucide-react';
import ceoPhoto from '../assets/ceo-kashif.png';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900 text-white">
      {/* Background Decorative Mesh & Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-10 w-[600px] h-[600px] bg-tealAccent-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* CEO Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-gold-500/40 backdrop-blur-md mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span className="text-xs sm:text-sm font-bold tracking-wide text-gold-400 uppercase">
                Muhammad Kashif — CEO & Visionary Leader
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Connecting Skilled <span className="gold-gradient-text">Pakistani Talent</span> with Global Opportunities
            </h1>

            {/* Tagline / Subtitle */}
            <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed mb-8 max-w-2xl">
              We connect skilled professionals from Pakistan with top employers across the <strong className="text-gold-300 font-extrabold">GCC, Europe, and beyond</strong>. Over <span className="text-tealAccent-400 font-extrabold">1000+ successful placements</span> delivered with integrity and speed.
            </p>

            {/* Key Value Pill Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10 w-full">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Govt Licensed & Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Trade Testing Center</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>GCC & EU Visa Expertise</span>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 text-navy-950 font-black text-base shadow-xl hover:shadow-glow-gold hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
              >
                <Building2 className="w-5 h-5" />
                <span>Hire Talent (For Employers)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white font-bold text-base shadow-md backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
              >
                <UserCheck className="w-5 h-5 text-gold-400" />
                <span>Find Jobs (For Candidates)</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: CEO Official Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glowing Accent */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-gold-500 via-tealAccent-500 to-navy-600 opacity-50 blur-xl animate-pulse-slow" />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl bg-navy-900 border-2 border-white/20 p-5 sm:p-6 backdrop-blur-xl shadow-2xl overflow-hidden">
                
                {/* Official CEO Photo Container */}
                <div className="relative rounded-2xl overflow-hidden mb-5 aspect-[3/4] border-2 border-gold-500/40 shadow-2xl group">
                  <img
                    src={ceoPhoto}
                    alt="Muhammad Kashif - CEO MK Global Recruitment Agency"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />

                  {/* Text Overlay on Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight drop-shadow-md">
                      Muhammad Kashif
                    </h3>
                    <p className="text-gold-400 font-extrabold text-xs sm:text-sm tracking-wide">
                      Chief Executive Officer & Founder
                    </p>
                    <p className="text-[11px] text-slate-300 font-semibold mt-0.5">
                      MK Global Recruitment Agency
                    </p>
                  </div>

                  {/* Top Right Verified Badge */}
                  <div className="absolute top-4 right-4 bg-navy-950/80 text-emerald-400 border border-emerald-500/50 px-3 py-1.5 rounded-full text-xs font-black backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Verified CEO</span>
                  </div>
                </div>

                {/* Floating Metrics Overlay Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gold-500/20 text-gold-400">
                      <Globe2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-base font-black text-white">12+</div>
                      <div className="text-[10px] text-slate-300 font-semibold">Countries Served</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-tealAccent-500/20 text-tealAccent-400">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-base font-black text-white">1000+</div>
                      <div className="text-[10px] text-slate-300 font-semibold">Placements</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
